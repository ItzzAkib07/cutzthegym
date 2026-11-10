import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion or already saw in session
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasSeen = sessionStorage.getItem('cutz_preloader_seen');

    if (hasSeen || prefersReducedMotion) {
      setIsDone(true);
      if (onComplete) onComplete();
      return;
    }

    let current = 0;
    const interval = setInterval(() => {
      const isLoaded = document.readyState === 'complete';
      // Fast acceleration, no artificial holding
      const increment = isLoaded ? Math.floor(Math.random() * 15) + 12 : Math.floor(Math.random() * 8) + 6;
      current = Math.min(100, current + increment);
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          sessionStorage.setItem('cutz_preloader_seen', 'true');
          setIsDone(true);
          if (onComplete) onComplete();
        }, 250);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0, 
          y: -15,
          transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
        }}
        className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#080808] text-white px-4 select-none overflow-hidden"
      >
        {/* Background Atmospheric Glow */}
        <div className="absolute w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

        <div className="relative flex flex-col items-center max-w-sm sm:max-w-md w-full">
          {/* Metallic Logo Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative mb-8"
          >
            <div className="relative overflow-hidden p-3">
              <img 
                src="/logo.svg" 
                alt="CUTZ THE GYM" 
                className="w-56 sm:w-72 h-auto object-contain filter drop-shadow-[0_0_25px_rgba(201,160,74,0.3)]"
              />
              {/* Chrome Light Streak Sweep */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] pointer-events-none"
              />
            </div>
          </motion.div>

          {/* Gold Progress Indicator */}
          <div className="w-48 sm:w-56 flex flex-col items-center gap-3.5">
            <div className="relative w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#C9A04A] via-[#E6C36A] to-[#F5DE9C] shadow-[0_0_12px_#E6C36A]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            <div className="flex items-center justify-between w-full text-caption text-silver/80">
              <span className="text-gold font-bold font-mono">{progress}%</span>
              <span className="text-white/40 text-eyebrow">SYSTEM INITIALIZING</span>
            </div>
          </div>

          {/* Staggered Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: progress > 25 ? 1 : 0, y: progress > 25 ? 0 : 10 }}
            transition={{ duration: 0.4 }}
            className="mt-7 text-center"
          >
            <p className="text-heading-md uppercase text-gold font-bold tracking-wider">
              BUILT FOR GREATNESS
            </p>
            <p className="text-caption font-editorial italic text-muted mt-0.5">
              By IFBB Pro Krishna Chauhan
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
