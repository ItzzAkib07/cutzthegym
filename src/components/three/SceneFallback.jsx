import React from 'react';

export default function SceneFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center relative pointer-events-none">
      <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gold/10 blur-[80px] animate-pulse" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 sm:w-56 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-60 shadow-[0_0_20px_#C9A04A]" />
      </div>
    </div>
  );
}

