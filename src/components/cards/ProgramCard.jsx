import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import TiltCard from '../animation/TiltCard';

export default function ProgramCard({ program, index = 0 }) {
  return (
    <TiltCard className="h-full">
      <Link
        to={`/programs/${program.slug}`}
        className="group relative flex flex-col justify-between h-full min-h-[440px] sm:min-h-[480px] rounded-2xl overflow-hidden bg-[#111111] border border-white/10 hover:border-gold/60 transition-all duration-500 shadow-2xl hover:shadow-[0_0_35px_rgba(201,160,74,0.3)] hover:-translate-y-2"
        data-cursor="pointer"
      >
        {/* Background Image with 4:5 Proportions & Cinematic Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={program.heroImage}
            alt={program.title}
            className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.12] group-hover:brightness-[0.62] group-hover:scale-110 transition-all duration-700 ease-out"
            loading="lazy"
          />
          {/* Multi-stage Luxury Gradient Overlay for Extreme Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/60 to-black/25" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/70" />
        </div>

        {/* Top Header: Category Tag & Number */}
        <div className="relative z-10 p-6 sm:p-7 flex items-center justify-between">
          <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-gold/50 text-eyebrow text-gold font-bold shadow-md">
            {program.category}
          </span>
          <span className="font-heading text-2xl sm:text-3xl text-white/30 group-hover:text-gold transition-colors duration-300">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Content Section: Aligned Title, Description, and Bottom CTA */}
        <div className="relative z-10 p-6 sm:p-7 flex flex-col flex-grow justify-end space-y-3.5">
          <div>
            <h3 className="text-heading-lg font-heading text-white group-hover:text-gold transition-colors duration-300 leading-tight">
              {program.title}
            </h3>
            <p className="mt-2 text-body-sm text-silver/80 line-clamp-3 leading-relaxed font-sans">
              {program.shortDescription}
            </p>
          </div>

          {/* Bottom-Aligned CTA with Animated Gold Arrow */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-btn text-gold font-bold group-hover:text-white transition-colors duration-300">
            <span>EXPLORE PROTOCOL</span>
            <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center group-hover:bg-gold group-hover:text-black group-hover:border-gold transition-all duration-300 shadow-md">
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>

        {/* Bottom Gold Border Illumination Line */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </Link>
    </TiltCard>
  );
}
