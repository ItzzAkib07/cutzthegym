import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, video }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !video) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-4xl bg-bg-card rounded-xl border border-gold/40 overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111111]">
            <div>
              <span className="text-[10px] font-heading tracking-widest uppercase text-gold font-bold">
                {video.category || 'CUTZ CINEMA'}
              </span>
              <h4 className="text-base font-heading font-semibold uppercase text-white truncate max-w-md">
                {video.title}
              </h4>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full border border-white/20 text-white hover:text-gold hover:border-gold transition-colors"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Player Embed / Responsive 16:9 Frame */}
          <div className="relative aspect-video w-full bg-black">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId || 'dQw4w9WgXcQ'}?autoplay=1&rel=0`}
              title={video.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Bottom Video Description */}
          {video.description && (
            <div className="p-4 bg-[#0d0d0d] text-xs text-silver/70">
              <p>{video.description}</p>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

