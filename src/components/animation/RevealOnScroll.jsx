import React from 'react';
import { motion } from 'framer-motion';

export default function RevealOnScroll({
  children,
  animation = 'fade-up', // 'fade-up' | 'fade-down' | 'slide-left' | 'slide-right' | 'scale'
  delay = 0,
  duration = 0.6,
  className = '',
  threshold = 0.15
}) {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const animations = {
    'fade-up': { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
    'fade-down': { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } },
    'slide-left': { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
    'slide-right': { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
    'scale': { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } }
  };

  const selected = animations[animation] || animations['fade-up'];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={selected}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

