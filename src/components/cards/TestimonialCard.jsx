import React from 'react';
import { Star, Quote } from 'lucide-react';
import TiltCard from '../animation/TiltCard';

export default function TestimonialCard({ item }) {
  return (
    <TiltCard className="h-full">
      <div className="relative rounded-xl p-6 sm:p-7 bg-bg-card border border-white/10 hover:border-gold/40 transition-all duration-300 shadow-xl flex flex-col justify-between h-full hover:-translate-y-1">
        <Quote className="w-8 h-8 text-gold/20 absolute top-6 right-6" />

        <div className="space-y-4">
          {/* Star Rating */}
          <div className="flex items-center space-x-1">
            {[...Array(item.rating || 5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#C9A04A] text-gold" />
            ))}
          </div>

          {/* Member Feedback */}
          <p className="text-body-md text-silver/90 italic font-editorial leading-relaxed">
            "{item.quote}"
          </p>
        </div>

        {/* Member Details: Bottom-Aligned */}
        <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3">
          {item.image && (
            <img
              src={item.image}
              alt={item.name}
              className="w-11 h-11 rounded-full object-cover border border-gold/40 flex-shrink-0"
              loading="lazy"
            />
          )}
          <div className="min-w-0">
            <h4 className="text-body-sm font-bold text-white uppercase tracking-wide truncate">
              {item.name}
            </h4>
            <span className="text-caption text-gold/80 block truncate">
              {item.role} {item.tag && `• ${item.tag}`}
            </span>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
