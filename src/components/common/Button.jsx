import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg' | 'xl'
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  disabled = false,
  ...rest
}) {
  const baseClasses = "relative inline-flex items-center justify-center font-sans text-btn transition-all duration-300 overflow-hidden select-none focus:outline-none focus:ring-2 focus:ring-gold/60 focus:ring-offset-2 focus:ring-offset-[#080808] disabled:opacity-50 disabled:cursor-not-allowed group rounded-sm";

  const sizeClasses = {
    sm: "px-4 py-2.5 text-xs gap-2",
    md: "px-6 py-3.5 text-xs sm:text-sm gap-2.5",
    lg: "px-8 py-4 text-sm sm:text-base gap-3",
    xl: "px-10 py-5 text-base sm:text-lg gap-3.5"
  };

  const variantClasses = {
    primary: "bg-gold-gradient text-black font-extrabold shadow-[0_0_20px_rgba(201,160,74,0.3)] hover:shadow-[0_0_35px_rgba(201,160,74,0.6)] hover:scale-[1.02] active:scale-[0.98] border border-[#F5DE9C]/40",
    secondary: "bg-[#171717] text-white border border-silver/30 hover:border-white shadow-[0_0_15px_rgba(214,214,214,0.1)] hover:shadow-[0_0_25px_rgba(214,214,214,0.3)] hover:scale-[1.02] active:scale-[0.98]",
    outline: "bg-transparent text-gold border border-gold/60 hover:bg-gold/10 hover:border-gold hover:shadow-[0_0_25px_rgba(201,160,74,0.3)] hover:scale-[1.02] active:scale-[0.98]",
    ghost: "bg-transparent text-silver hover:text-white hover:bg-white/5 active:scale-[0.98]"
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  // Interior light streak effect for primary buttons
  const innerShine = (
    <span 
      className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] transition-all duration-700 ease-in-out group-hover:left-[200%] pointer-events-none" 
      aria-hidden="true" 
    />
  );

  const content = (
    <>
      {innerShine}
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5 flex-shrink-0" />}
      <span className="relative z-10">{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses} {...rest}>
      {content}
    </button>
  );
}
