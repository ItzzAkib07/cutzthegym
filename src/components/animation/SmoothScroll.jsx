import React, { createContext, useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const LenisContext = createContext({
  lenis: null,
  scrollTo: () => {},
  stop: () => {},
  start: () => {}
});

export function useLenis() {
  return useContext(LenisContext);
}

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    if (lenisRef.current) return;

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8,
      infinite: false
    });

    lenisRef.current = lenis;

    // Single unified animation loop syncing Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Handle route change: scroll to top immediately & refresh ScrollTrigger
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // Refresh ScrollTrigger after DOM renders new route
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const stop = React.useCallback(() => {
    if (lenisRef.current) lenisRef.current.stop();
    document.body.style.overflow = 'hidden';
  }, []);

  const start = React.useCallback(() => {
    if (lenisRef.current) lenisRef.current.start();
    document.body.style.overflow = '';
  }, []);

  const scrollTo = React.useCallback((target, options) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    } else if (typeof target === 'string') {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (typeof target === 'number') {
      window.scrollTo({ top: target, behavior: 'smooth' });
    }
  }, []);

  const value = React.useMemo(() => ({
    lenis: lenisRef.current,
    scrollTo,
    stop,
    start
  }), [scrollTo, stop, start]);

  return (
    <LenisContext.Provider value={value}>
      {children}
    </LenisContext.Provider>
  );
}
