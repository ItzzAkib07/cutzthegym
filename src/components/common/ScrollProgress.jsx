import React from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export default function ScrollProgress() {
  const { progress } = useScrollPosition();

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[100] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-gold via-gold-highlight to-white shadow-[0_0_10px_rgba(230,195,106,0.8)] transition-all duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

