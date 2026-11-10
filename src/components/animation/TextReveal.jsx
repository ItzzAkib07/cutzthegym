import React from 'react';
import { motion } from 'framer-motion';

export default function TextReveal({
  children,
  type = 'word', // 'word' | 'character' | 'mask'
  delay = 0,
  stagger = 0.04,
  className = '',
  as: Component = 'div'
}) {
  const text = typeof children === 'string' ? children : '';

  // Check reduced motion
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !text) {
    return <Component className={className}>{children}</Component>;
  }

  if (type === 'mask') {
    return (
      <div className={`overflow-hidden inline-block ${className}`}>
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{ y: '0%', opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  if (type === 'character') {
    const characters = text.split('');
    return (
      <Component className={`inline-block ${className}`}>
        {characters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + index * stagger, ease: 'easeOut' }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </Component>
    );
  }

  // Word-by-word reveal (default)
  const words = text.split(' ');
  return (
    <Component className={`inline-flex flex-wrap gap-x-[0.28em] ${className}`}>
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden inline-block">
          <motion.span
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: delay + index * stagger, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}

