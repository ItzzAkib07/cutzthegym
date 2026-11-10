import React, { useRef, useState } from 'react';

export default function TiltCard({
  children,
  className = '',
  maxTilt = 8,
  glowColor = 'rgba(201, 160, 74, 0.18)'
}) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    // Only apply on fine-pointer desktop devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setRotate({ x: rotateX, y: rotateY });
    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });
  };

  const handleMouseEnter = () => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
      }}
      className={`relative h-full ${className}`}
    >
      {/* Dynamic Cursor-Following Gold Reflection Highlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 z-30"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, ${glowColor}, transparent 70%)`
        }}
      />
      {children}
    </div>
  );
}

