import React from 'react';
import { motion } from 'framer-motion';

export default function ImageReveal({
  src,
  alt = '',
  className = '',
  imageClassName = '',
  direction = 'up', // 'up' | 'left' | 'scale'
  delay = 0,
  duration = 0.8
}) {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return (
      <div className={`overflow-hidden relative ${className}`}>
        <img src={src} alt={alt} className={`w-full h-full object-cover ${imageClassName}`} loading="lazy" />
      </div>
    );
  }

  const clipVariants = {
    up: {
      hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
      visible: { clipPath: 'inset(0% 0% 0% 0%)' }
    },
    left: {
      hidden: { clipPath: 'inset(0% 100% 0% 0%)' },
      visible: { clipPath: 'inset(0% 0% 0% 0%)' }
    },
    scale: {
      hidden: { opacity: 0, scale: 1.12 },
      visible: { opacity: 1, scale: 1.0 }
    }
  };

  const selected = clipVariants[direction] || clipVariants.up;

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={selected}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full"
      >
        <motion.img
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1.0 }}
          viewport={{ once: true }}
          transition={{ duration: duration * 1.25, delay, ease: [0.16, 1, 0.3, 1] }}
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${imageClassName}`}
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}

