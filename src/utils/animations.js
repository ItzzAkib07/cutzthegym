import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const EASE = {
  power4Out: 'power4.out',
  power3InOut: 'power3.inOut',
  expoOut: 'expo.out',
  luxury: 'cubic-bezier(0.16, 1, 0.3, 1)'
};

/**
 * Splits text into words or characters for lightweight custom staggering without requiring paid plugins.
 */
export function splitTextIntoSpans(text) {
  if (!text) return [];
  return text.split(' ').map((word, i) => ({
    id: `${word}-${i}`,
    text: word
  }));
}

/**
 * Stagger reveal helper for GSAP
 */
export function animateStaggerFadeUp(elements, options = {}) {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 35 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: EASE.power4Out,
      ...options
    }
  );
}

