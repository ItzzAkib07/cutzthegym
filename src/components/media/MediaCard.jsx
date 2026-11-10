import React from 'react';
import { Play, Image, Clock, Maximize2 } from 'lucide-react';
import TiltCard from '../animation/TiltCard';

export default function MediaCard({ media, onSelect }) {
  const isVideo = media.type === 'video';

  return (
    <TiltCard className="h-full">
      <div
        onClick={() => onSelect && onSelect(media)}
        className="group relative flex flex-col justify-between h-full min-h-[380px] rounded-2xl overflow-hidden bg-[#111111] border border-white/10 hover:border-gold/60 transition-all duration-500 shadow-2xl hover:shadow-[0_0_35px_rgba(201,160,74,0.25)] hover:-translate-y-2 cursor-pointer select-none"
        data-cursor={isVideo ? 'video' : 'pointer'}
      >
        {/* Thumbnail Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={media.thumbnail}
            alt={media.title}
            className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.1] group-hover:brightness-[0.75] group-hover:scale-108 transition-all duration-700 ease-out"
            loading="lazy"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/50 to-transparent" />
        </div>

        {/* Top Bar: Category Pill & Media Type Badge */}
        <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-gold/40 text-eyebrow text-gold font-bold">
            {media.category}
          </span>

          <div className="flex items-center gap-2">
            {isVideo && media.duration && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-sm border border-white/15 text-[11px] font-mono text-silver font-semibold">
                <Clock className="w-3 h-3 text-gold" />
                <span>{media.duration}</span>
              </span>
            )}
            <span className="p-2 rounded-full bg-black/60 border border-white/15 text-white/70 group-hover:text-gold group-hover:border-gold/40 transition-colors">
              {isVideo ? <Play className="w-3.5 h-3.5 fill-current" /> : <Image className="w-3.5 h-3.5" />}
            </span>
          </div>
        </div>

        {/* Center Hover Play/Expand Indicator */}
        <div className="relative z-10 flex items-center justify-center pointer-events-none py-6">
          <div className="w-14 h-14 rounded-full bg-black/70 border border-gold/40 flex items-center justify-center text-gold group-hover:scale-115 group-hover:bg-gold group-hover:text-black group-hover:border-gold transition-all duration-300 shadow-xl">
            {isVideo ? (
              <Play className="w-6 h-6 fill-current translate-x-0.5" />
            ) : (
              <Maximize2 className="w-5 h-5" />
            )}
          </div>
        </div>

        {/* Bottom Content Area */}
        <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-end space-y-2">
          <h3 className="text-heading-md font-heading uppercase text-white group-hover:text-gold transition-colors duration-300 leading-snug line-clamp-2">
            {media.title}
          </h3>
          <p className="text-body-sm text-silver/80 line-clamp-2 font-sans leading-relaxed">
            {media.description}
          </p>

          <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-caption font-heading tracking-wider uppercase text-silver/60 group-hover:text-white transition-colors">
            <span>{isVideo ? 'WATCH FOOTAGE' : 'VIEW PHOTOGRAPH'}</span>
            <span className="text-gold font-bold">→</span>
          </div>
        </div>

        {/* Gold Border Reveal */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </TiltCard>
  );
}

