import React, { useState, useRef, useCallback } from 'react';

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
  className = ''
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      data-cursor="drag"
      className={`relative select-none overflow-hidden rounded-xl aspect-[4/5] sm:aspect-[16/11] bg-black cursor-ew-resize border border-gold/30 shadow-2xl ${className}`}
    >
      {/* After Image (Full Background) */}
      <img
        src={afterImage}
        alt="After Transformation"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        loading="lazy"
      />
      <span className="absolute bottom-4 right-4 z-10 px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-gold/50 text-[10px] font-heading tracking-widest text-gold uppercase font-bold">
        {afterLabel}
      </span>

      {/* Before Image (Clipped Overlay) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before Transformation"
          className="absolute inset-0 w-full h-full object-cover filter brightness-90 max-w-none"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
          loading="lazy"
        />
        <span className="absolute bottom-4 left-4 z-10 px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-heading tracking-widest text-silver uppercase font-bold">
          {beforeLabel}
        </span>
      </div>

      {/* Divider Bar */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold via-white to-gold shadow-[0_0_12px_#E6C36A] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Center Draggable Knob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#111111] border-2 border-gold shadow-[0_0_15px_rgba(201,160,74,0.6)] flex items-center justify-center text-gold">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M8.5 7l-5 5 5 5V7zm7 0v10l5-5-5-5z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

