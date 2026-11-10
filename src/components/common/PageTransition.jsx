import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll restoration immediately on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ 
        duration: 0.3, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="w-full relative"
    >
      {/* Subtle Branded Gold Sweep Transition Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.32, ease: 'easeInOut' }}
        className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold via-white to-gold origin-left z-[100] pointer-events-none"
      />
      {children}
    </motion.div>
  );
}
