import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ size = 'md', className = '', showSubtitle = true }) {
  const sizeClasses = {
    sm: 'h-9',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-20'
  };

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-gold/50 rounded-sm transition-transform duration-300 hover:scale-[1.02] ${className}`}
      aria-label="CUTZ THE GYM - Home"
    >
      {/* High-Resolution Vector Brand Emblem & Typography */}
      <div className={`relative flex items-center ${sizeClasses[size] || sizeClasses.md}`}>
        <img 
          src="/logo.svg" 
          alt="CUTZ THE GYM — By IFBB Pro Krishna Chauhan" 
          className="h-full w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover:brightness-110"
        />
      </div>
    </Link>
  );
}

