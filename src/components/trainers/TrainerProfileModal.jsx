import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Instagram, Award, Briefcase, Sparkles, User, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

export default function TrainerProfileModal({ isOpen, onClose, trainer }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !trainer) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-bg-card rounded-2xl border border-gold/40 shadow-2xl overflow-hidden my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-black/70 border border-white/20 text-white hover:text-gold hover:border-gold transition-colors"
            aria-label="Close profile"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
            {/* Left: Large Portrait Box */}
            <div className="md:col-span-5 relative bg-black min-h-[320px] md:min-h-full">
              {trainer.image ? (
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-105"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#141414]">
                  <User className="w-16 h-16 text-gold mb-3" />
                  <span className="text-eyebrow text-gold font-bold">COACH PROFILE</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-bg-card" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className={`px-3 py-1 rounded-full text-eyebrow font-bold border ${
                  trainer.isFounder ? 'bg-gold-gradient text-black border-white/20' : 'bg-black/80 text-gold border-gold/40'
                }`}>
                  {trainer.category}
                </span>
                <h3 className="text-heading-xl text-white mt-2 leading-tight">
                  {trainer.name}
                </h3>
                <p className="text-eyebrow text-gold mt-1 font-semibold">
                  {trainer.designation || trainer.role}
                </p>
              </div>
            </div>

            {/* Right: Detailed Biography & Credentials */}
            <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
              {/* Introduction & Bio */}
              <div>
                <span className="text-eyebrow text-silver/50 block mb-1">
                  PROFESSIONAL BIOGRAPHY
                </span>
                <p className="text-body-md text-silver/90 leading-relaxed">
                  {trainer.bio}
                </p>
              </div>

              {/* Training Philosophy */}
              {trainer.philosophy && (
                <div className="p-4 rounded-xl bg-black/50 border border-gold/20">
                  <span className="text-eyebrow text-gold block mb-1">
                    TRAINING PHILOSOPHY
                  </span>
                  <blockquote className="text-body-sm text-silver/90 italic font-editorial leading-relaxed">
                    "{trainer.philosophy}"
                  </blockquote>
                </div>
              )}

              {/* Experience & Qualifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10">
                <div className="space-y-1">
                  <span className="text-eyebrow text-silver/50 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-gold" />
                    <span>EXPERIENCE:</span>
                  </span>
                  <p className="text-body-sm font-semibold text-white">
                    {trainer.experience || 'Certified Industry Professional'}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-eyebrow text-silver/50 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-gold" />
                    <span>CREDENTIALS:</span>
                  </span>
                  <p className="text-body-sm font-semibold text-white">
                    {trainer.qualifications || 'Certified Master Instructor'}
                  </p>
                </div>
              </div>

              {/* Coaching Specialties */}
              {trainer.signatureFocus && (
                <div className="space-y-2.5 pt-2 border-t border-white/10">
                  <span className="text-eyebrow text-silver/50 block">
                    AREAS OF SPECIALIZATION:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {trainer.signatureFocus.map((focus, i) => (
                      <div key={i} className="flex items-center gap-2 text-body-sm text-silver/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                {trainer.social?.instagram && (
                  <a
                    href={trainer.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-btn text-silver hover:text-gold transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-gold" />
                    <span>FOLLOW ON INSTAGRAM</span>
                  </a>
                )}

                <Button
                  to={`/contact?plan=personal-training&trainer=${trainer.id}`}
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  onClick={onClose}
                >
                  SCHEDULE CONSULTATION
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

