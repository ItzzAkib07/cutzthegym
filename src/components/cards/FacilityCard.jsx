import React from 'react';
import { Check } from 'lucide-react';
import TiltCard from '../animation/TiltCard';

export default function FacilityCard({ facility }) {
  return (
    <TiltCard className="h-full">
      <div className="group relative rounded-xl overflow-hidden bg-bg-card border border-white/10 hover:border-gold/50 transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(201,160,74,0.2)] h-full flex flex-col justify-between hover:-translate-y-1.5">
        {/* Media Window with Consistent Aspect Ratio */}
        <div className="relative aspect-[16/10] overflow-hidden bg-black flex-shrink-0">
          <img
            src={facility.image}
            alt={facility.title}
            className="w-full h-full object-cover filter brightness-80 contrast-[1.05] group-hover:brightness-95 group-hover:scale-105 transition-all duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" />
          
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-gold/30 text-eyebrow text-gold font-bold">
              {facility.category}
            </span>
          </div>
        </div>

        {/* Content Section with Equal Height Alignment */}
        <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-4">
          <div className="space-y-2.5">
            <h3 className="text-heading-md sm:text-heading-lg text-white group-hover:text-gold transition-colors leading-tight">
              {facility.title}
            </h3>
            <p className="text-body-sm text-silver/80 leading-relaxed line-clamp-3">
              {facility.fullDesc || facility.shortDesc}
            </p>
          </div>

          {/* Feature checklist */}
          {facility.features && (
            <div className="pt-3 border-t border-white/10 space-y-2 mt-auto">
              <span className="text-eyebrow text-white/50 block">SPECIFICATIONS:</span>
              <ul className="space-y-1.5 text-caption sm:text-body-sm text-silver/90">
                {facility.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Bottom Gold Highlight */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </TiltCard>
  );
}
