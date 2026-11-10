import React, { useState } from 'react';
import { Instagram, Award, CheckCircle2, User, ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import TiltCard from '../animation/TiltCard';

export default function TrainerCard({ trainer, onViewProfile }) {
  const [imageError, setImageError] = useState(false);

  return (
    <TiltCard className="h-full">
      <div 
        className={`group relative rounded-xl overflow-hidden bg-bg-card border ${
          trainer.isFounder 
            ? 'border-gold/60 shadow-[0_0_35px_rgba(201,160,74,0.25)]' 
            : 'border-white/10 hover:border-gold/50'
        } transition-all duration-500 flex flex-col justify-between h-full hover:shadow-2xl hover:-translate-y-1.5`}
      >
        {/* Portrait Media with Consistent 3/4 Aspect Ratio */}
        <div className="relative aspect-[3/4] overflow-hidden bg-[#111111] flex-shrink-0">
          {!imageError && trainer.image ? (
            <img
              src={trainer.image}
              alt={trainer.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top filter brightness-90 contrast-[1.05] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
              loading="lazy"
            />
          ) : (
            /* Branded Fallback Portrait (Part 8) */
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#181818] to-[#0c0c0c] border-b border-white/5">
              <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-gold mb-3">
                <User className="w-10 h-10" />
              </div>
              <span className="text-eyebrow text-gold font-bold">COACHING ROSTER</span>
              <span className="text-body-sm text-silver/60 mt-1">CUTZ THE GYM</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />

          {/* Top Category / Designation Badge */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full text-eyebrow font-bold backdrop-blur-md border ${
              trainer.isFounder 
                ? 'bg-gold-gradient text-black border-white/20' 
                : 'bg-black/75 text-gold border-gold/30'
            }`}>
              {trainer.title || trainer.designation || 'CERTIFIED COACH'}
            </span>
            {trainer.category && (
              <span className="text-caption px-2.5 py-0.5 rounded bg-black/60 text-silver/80 border border-white/10">
                {trainer.category}
              </span>
            )}
          </div>
        </div>

        {/* Profile Details & Aligned Layout */}
        <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-4">
          <div className="space-y-1.5">
            <span className="text-eyebrow text-gold font-semibold block">
              {trainer.role}
            </span>
            <h3 className="text-heading-lg text-white group-hover:text-gold transition-colors leading-tight">
              {trainer.name}
            </h3>
            {trainer.specialty && (
              <p className="text-caption sm:text-body-sm text-silver/60">
                {trainer.specialty}
              </p>
            )}
          </div>

          <p className="text-body-sm text-silver/80 leading-relaxed line-clamp-3">
            {trainer.bio}
          </p>

          {/* Signature Focuses */}
          {trainer.signatureFocus && trainer.signatureFocus.length > 0 && (
            <div className="pt-2 border-t border-white/10 space-y-1.5">
              <span className="text-eyebrow text-white/50 block">SPECIALTIES:</span>
              {trainer.signatureFocus.slice(0, 2).map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-caption text-silver/90">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  <span className="truncate">{f}</span>
                </div>
              ))}
            </div>
          )}

          {/* Bottom-Aligned Actions: View Profile & Social / Enquire */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto gap-2">
            {onViewProfile ? (
              <button
                type="button"
                onClick={() => onViewProfile(trainer)}
                className="inline-flex items-center gap-1.5 text-btn text-gold hover:text-white transition-colors"
              >
                <span>VIEW PROFILE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              trainer.social?.instagram && (
                <a
                  href={trainer.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-caption text-silver hover:text-gold transition-colors uppercase font-semibold"
                >
                  <Instagram className="w-3.5 h-3.5 text-gold" />
                  <span>@cutzthegym</span>
                </a>
              )
            )}

            <Button 
              to="/contact?plan=personal-training" 
              size="sm" 
              variant={trainer.isFounder ? 'primary' : 'outline'}
            >
              ENQUIRE
            </Button>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
