import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Clock, ShieldCheck } from 'lucide-react';

export default function VideoModal({ video, isOpen, onClose }) {
  const videoRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Pause video on close
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  if (!video) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-[#111111] border border-gold/40 rounded-2xl overflow-hidden shadow-2xl z-10"
          >
            {/* Top Bar */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10 bg-black/50">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-eyebrow text-gold font-bold">
                  {video.category}
                </span>
                {video.duration && (
                  <span className="text-[11px] font-mono text-silver/60">
                    • {video.duration}
                  </span>
                )}
              </div>

              <button
                onClick={onClose}
                aria-label="Close video player"
                className="p-2 rounded-full border border-white/20 text-white hover:text-gold hover:border-gold transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                ref={videoRef}
                src={video.videoUrl}
                poster={video.thumbnail}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              >
                Your browser does not support HTML5 video playback.
              </video>
            </div>

            {/* Video Meta Info */}
            <div className="p-6 sm:p-8 bg-[#0d0d0d] space-y-2">
              <h3 className="text-heading-lg font-heading uppercase text-white leading-tight">
                {video.title}
              </h3>
              <p className="text-body-sm text-silver/80 font-sans leading-relaxed">
                {video.description}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

