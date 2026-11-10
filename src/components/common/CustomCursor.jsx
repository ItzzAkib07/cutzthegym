import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorMode, setCursorMode] = useState('default'); // 'default' | 'pointer' | 'cta' | 'video' | 'drag'
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Detect hover target attributes
      const target = e.target.closest('a, button, [data-cursor]');
      if (!target) {
        setCursorMode('default');
        return;
      }

      const customMode = target.getAttribute('data-cursor');
      if (customMode) {
        setCursorMode(customMode);
      } else if (target.tagName.toLowerCase() === 'button' || target.tagName.toLowerCase() === 'a') {
        setCursorMode('pointer');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const variants = {
    default: {
      width: 10,
      height: 10,
      backgroundColor: '#C9A04A',
      borderColor: 'transparent',
      mixBlendMode: 'normal'
    },
    pointer: {
      width: 36,
      height: 36,
      backgroundColor: 'rgba(201, 160, 74, 0.15)',
      border: '1px solid #E6C36A',
      mixBlendMode: 'normal'
    },
    cta: {
      width: 50,
      height: 50,
      backgroundColor: '#C9A04A',
      border: '2px solid #FFFFFF',
      mixBlendMode: 'difference'
    },
    video: {
      width: 64,
      height: 64,
      backgroundColor: 'rgba(201, 160, 74, 0.9)',
      border: '1px solid #FFFFFF'
    },
    drag: {
      width: 54,
      height: 54,
      backgroundColor: 'rgba(23, 23, 23, 0.9)',
      border: '1px solid #C9A04A'
    }
  };

  return (
    <>
      {/* Outer Ring Follower */}
      <motion.div
        className="fixed top-0 left-0 z-[99999] rounded-full pointer-events-none flex items-center justify-center font-heading text-[10px] tracking-wider text-black font-bold uppercase transition-colors"
        animate={{
          x: mousePosition.x - (variants[cursorMode]?.width || 12) / 2,
          y: mousePosition.y - (variants[cursorMode]?.height || 12) / 2,
          ...variants[cursorMode]
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.5
        }}
      >
        {cursorMode === 'video' && <span className="text-black">PLAY</span>}
        {cursorMode === 'drag' && <span className="text-gold">DRAG</span>}
      </motion.div>

      {/* Center Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[99999] transition-opacity duration-150"
        style={{
          transform: `translate3d(${mousePosition.x - 4}px, ${mousePosition.y - 4}px, 0)`,
          opacity: cursorMode === 'default' ? 1 : 0
        }}
      />
    </>
  );
}

