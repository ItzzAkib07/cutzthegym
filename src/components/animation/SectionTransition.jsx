import React from 'react';

export default function SectionTransition({ className = '' }) {
  return (
    <div className={`relative w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent ${className}`}>
      <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rounded-full bg-gold/50 shadow-[0_0_10px_#C9A04A]" />
    </div>
  );
}

