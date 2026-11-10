import React from 'react';
import { ChevronUp } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export default function BackToTop() {
  const { y } = useScrollPosition();
  const isVisible = y > 500;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-24 sm:bottom-8 right-6 z-40 p-3 rounded-full bg-bg-card/90 border border-gold/40 text-gold hover:text-white hover:bg-gold/20 hover:border-gold shadow-[0_0_15px_rgba(201,160,74,0.2)] transition-all duration-300 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}

