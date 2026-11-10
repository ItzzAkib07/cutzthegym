import React from 'react';
import { motion } from 'framer-motion';

export default function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 30,
  className = '',
  threshold = 0.15
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{ duration, delay, ease: [0.25, 1, 0.5, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

