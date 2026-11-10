import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import TiltCard from '../animation/TiltCard';

export default function MembershipCard({ pkg, onSelectPlan }) {
  const isFeatured = pkg.isPopular;

  return (
    <TiltCard className="h-full">
      <div
        className={`relative rounded-xl overflow-hidden flex flex-col justify-between p-6 sm:p-8 transition-all duration-500 h-full ${
          isFeatured
            ? 'bg-gradient-to-b from-[#1c170d] via-[#14120e] to-[#0d0d0d] border-2 border-gold shadow-[0_0_40px_rgba(201,160,74,0.3)] hover:-translate-y-2 z-10'
            : 'bg-bg-card border border-white/10 hover:border-gold/50 shadow-xl hover:-translate-y-1.5'
        }`}
      >
        {/* Featured Badge */}
        {pkg.badge && (
          <div className="absolute top-0 right-0">
            <div className={`px-4 py-1 text-eyebrow font-bold rounded-bl-lg shadow-md ${
              isFeatured ? 'bg-gold-gradient text-black' : 'bg-white/10 text-gold border-b border-l border-gold/30'
            }`}>
              {pkg.badge}
            </div>
          </div>
        )}

        {/* Package Header */}
        <div className="space-y-4">
          <div>
            <span className="text-eyebrow text-gold font-bold block">
              {pkg.tagline}
            </span>
            <h3 className="text-heading-lg text-white mt-1 leading-tight">
              {pkg.name}
            </h3>
            <p className="text-body-sm text-silver/70 mt-1.5 leading-relaxed line-clamp-2">
              {pkg.description}
            </p>
          </div>

          {/* Price Display */}
          <div className="py-4 border-y border-white/10">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-hero text-white tracking-tight">
                {pkg.price}
              </span>
              <span className="text-caption text-silver/60 font-heading tracking-widest uppercase">
                {pkg.period}
              </span>
            </div>
            {pkg.note && (
              <p className="text-caption text-gold/80 italic mt-1 font-editorial">
                {pkg.note}
              </p>
            )}
          </div>

          {/* Feature List (Flex Grow for equal height alignment) */}
          <div className="space-y-2.5 pt-2 flex-grow">
            <span className="text-eyebrow text-silver/50 block">
              WHAT’S INCLUDED:
            </span>
            <ul className="space-y-2 text-body-sm text-silver/90">
              {pkg.features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
              {pkg.notIncluded && pkg.notIncluded.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-silver/40">
                  <X className="w-4 h-4 text-silver/30 flex-shrink-0 mt-0.5" />
                  <span className="line-through">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card Action & Terms (Bottom Aligned) */}
        <div className="pt-6 mt-6 border-t border-white/10 space-y-3">
          {pkg.terms && (
            <p className="text-caption text-silver/50 font-normal">
              Terms: {pkg.terms}
            </p>
          )}
          <Button
            onClick={() => onSelectPlan ? onSelectPlan(pkg) : null}
            to={onSelectPlan ? undefined : `/contact?plan=${pkg.id}`}
            variant={isFeatured ? 'primary' : 'outline'}
            size="md"
            className="w-full"
            icon={ArrowRight}
          >
            {pkg.ctaText || "GET DETAILS"}
          </Button>
        </div>
      </div>
    </TiltCard>
  );
}
