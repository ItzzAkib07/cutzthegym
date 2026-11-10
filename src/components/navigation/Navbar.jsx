import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, Grid, ArrowRight } from 'lucide-react';
import Logo from '../common/Logo';
import Button from '../common/Button';
import MagneticButton from '../common/MagneticButton';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import { navLinks } from '../../data/navigation';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useLenis } from '../animation/SmoothScroll';

export default function Navbar() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { y } = useScrollPosition();
  const location = useLocation();
  const { stop, start } = useLenis();

  const isScrolled = y > 20;

  // Escape key support to close menus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMegaMenuOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock scroll with Lenis when modal/menu is open
  useEffect(() => {
    if (megaMenuOpen || mobileMenuOpen) {
      stop();
    } else {
      start();
    }
  }, [megaMenuOpen, mobileMenuOpen, stop, start]);

  // Close menus on route change
  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* 
        FULL-WIDTH LUXURY HEADER (Always visible scrolling up & down)
        Transparent at page start; dark blur glass with gold border on scroll.
      */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080808]/95 backdrop-blur-xl border-b border-gold/30 py-3 sm:py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.85)]'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        {/* Full Viewport Width Container */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between">
          {/* Left: Brand Logo */}
          <div className="flex-shrink-0">
            <Logo size="md" />
          </div>

          {/* Center: Main Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 2xl:space-x-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `relative py-1 font-sans text-xs xl:text-[13px] tracking-[0.14em] uppercase font-semibold transition-colors duration-200 group ${
                    isActive ? 'text-gold' : 'text-silver/80 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.name}</span>
                    {/* Animated Golden Underline */}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold to-gold-highlight transform origin-left transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right: Actions (Desktop Matrix + CTA, Mobile Toggle) */}
          <div className="flex items-center space-x-3 xl:space-x-4">
            {/* Mega Menu Toggle (Desktop) */}
            <button
              onClick={() => setMegaMenuOpen(true)}
              aria-label="Open experience mega menu"
              className="hidden lg:flex p-2.5 rounded-full bg-white/5 border border-white/10 text-silver hover:text-gold hover:border-gold/50 transition-all hover:bg-gold/10"
              title="Experience Matrix"
            >
              <Grid className="w-4 h-4" />
            </button>

            {/* Gold CTA (Desktop) */}
            <div className="hidden sm:block">
              <MagneticButton strength={18}>
                <Button to="/memberships" size="sm" variant="primary" icon={ArrowRight}>
                  JOIN NOW
                </Button>
              </MagneticButton>
            </div>

            {/* Mobile Navigation Trigger (< lg) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation"
              className="flex lg:hidden p-2.5 rounded-md bg-[#171717] border border-gold/40 text-gold hover:bg-gold hover:text-black transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlays */}
      <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
