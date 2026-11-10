import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ isOpen, onClose, images, currentIndex, onNavigate }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
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
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
        onClick={onClose}
      >
        {/* Controls */}
        <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
          <span className="text-xs font-heading tracking-widest text-silver/60">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 text-white hover:text-gold hover:bg-white/20 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex - 1 + images.length) % images.length);
          }}
          className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:text-gold hover:border-gold transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex + 1) % images.length);
          }}
          className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:text-gold hover:border-gold transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Content Container */}
        <div
          className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            key={currentImage.id || currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            src={currentImage.image}
            alt={currentImage.title}
            className="max-h-[75vh] w-auto object-contain rounded-lg border border-gold/30 shadow-[0_0_50px_rgba(0,0,0,0.9)]"
          />

          <div className="mt-4 text-center max-w-xl">
            <span className="text-[10px] font-heading tracking-[0.25em] uppercase text-gold font-bold">
              {currentImage.category}
            </span>
            <h4 className="text-lg font-heading uppercase text-white font-semibold">
              {currentImage.title}
            </h4>
            {currentImage.caption && (
              <p className="text-xs text-silver/70 mt-1">{currentImage.caption}</p>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

