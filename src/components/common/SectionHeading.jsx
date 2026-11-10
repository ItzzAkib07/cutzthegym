import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function SectionHeading({
  eyebrow,
  kicker, // backwards compatibility
  title,
  subtitle,
  description,
  ctaText,
  ctaTo,
  ctaHref,
  align = 'center', // 'left' | 'center' | 'right'
  className = '',
  as: Component = 'h2'
}) {
  const eyebrowText = eyebrow || kicker;

  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  return (
    <div className={`flex flex-col max-w-4xl mb-12 sm:mb-16 ${alignmentClasses[align]} ${className}`}>
      {/* 1. EYEBROW LABEL */}
      {eyebrowText && (
        <div className="inline-flex items-center gap-2 mb-3.5 px-3.5 py-1 bg-gold/10 border border-gold/30 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-eyebrow text-gold font-bold">
            {eyebrowText}
          </span>
        </div>
      )}

      {/* 2. DESCRIPTIVE MAIN HEADING */}
      {title && (
        <Component className="text-heading-xl text-white tracking-wide">
          {title}
        </Component>
      )}

      {/* 3. EDITORIAL EMPHASIS / SUBTITLE */}
      {subtitle && (
        <p className="mt-2 text-base sm:text-xl font-editorial italic text-gold font-light">
          {subtitle}
        </p>
      )}

      {/* 4. SUPPORTING DESCRIPTION */}
      {description && (
        <p className="mt-3.5 text-body-md text-[#D1D1D1] max-w-2xl leading-relaxed font-sans">
          {description}
        </p>
      )}

      {/* 5. OPTIONAL CTA */}
      {ctaText && (ctaTo || ctaHref) && (
        <div className="mt-5">
          {ctaTo ? (
            <Link
              to={ctaTo}
              className="inline-flex items-center gap-2 text-btn text-gold hover:text-white transition-colors group"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-btn text-gold hover:text-white transition-colors group"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
