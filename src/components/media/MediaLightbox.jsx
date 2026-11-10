import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export default function MediaLightbox({ mediaList = [], currentIndex = 0, isOpen, onClose, onNavigate }) {
  const currentItem = mediaList[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && currentIndex < mediaList.length - 1) onNavigate(currentIndex + 1);
      if (e.key === 'ArrowLeft' && currentIndex > 0) onNavigate(currentIndex - 1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, mediaList.length, onClose, onNavigate]);

  if (!currentItem) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex flex-col justify-between p-4 sm:p-6 md:p-8 select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl"
            aria-hidden="true"
          />

          {/* Top Bar */}
          <div className="relative z-10 w-full flex items-center justify-between py-2 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-eyebrow text-gold font-bold">
                {currentItem.category}
              </span>
              <span className="text-caption text-silver/60">
                ({currentIndex + 1} of {mediaList.length})
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close Lightbox"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white hover:border-gold hover:text-gold transition-colors font-heading text-xs tracking-widest uppercase"
            >
              <span>CLOSE</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Center Image with Previous/Next Controls */}
          <div className="relative z-10 flex-grow flex items-center justify-center my-4 overflow-hidden">
            {/* Previous Button */}
            {currentIndex > 0 && (
              <button
                onClick={() => onNavigate(currentIndex - 1)}
                aria-label="Previous photograph"
                className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/70 border border-white/20 text-white hover:text-gold hover:border-gold transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Active Image */}
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[72vh] flex items-center justify-center rounded-xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img
                src={currentItem.fullImage || currentItem.thumbnail}
                alt={currentItem.title}
                className="max-w-full max-h-[72vh] object-contain"
              />
            </motion.div>

            {/* Next Button */}
            {currentIndex < mediaList.length - 1 && (
              <button
                onClick={() => onNavigate(currentIndex + 1)}
                aria-label="Next photograph"
                className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/70 border border-white/20 text-white hover:text-gold hover:border-gold transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Bottom Caption Bar */}
          <div className="relative z-10 w-full max-w-3xl mx-auto text-center py-2 space-y-1">
            <h4 className="text-heading-md font-heading uppercase text-white">
              {currentItem.title}
            </h4>
            <p className="text-body-sm text-silver/80 font-sans">
              {currentItem.description}
            </p>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

