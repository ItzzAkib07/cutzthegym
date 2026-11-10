import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, MapPin, ArrowUpRight, Dumbbell, ShieldCheck } from 'lucide-react';
import Logo from '../common/Logo';
import Container from '../common/Container';
import { siteConfig } from '../../data/siteConfig';
import { navLinks, secondaryNavLinks, legalLinks } from '../../data/navigation';
import { programsData } from '../../data/programs';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] border-t border-gold/25 pt-20 pb-24 sm:pb-16 text-[#D1D1D1] overflow-hidden">
      {/* Background Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 blur-[140px] pointer-events-none" />

      <Container>
        {/* Top Massive Headline Bar */}
        <div className="pb-16 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-eyebrow text-gold font-bold">
              THE STANDARD OF ELITE FITNESS
            </span>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase tracking-tight text-white mt-1">
              BUILT FOR GREATNESS.
            </h3>
          </div>
          <Link
            to="/memberships"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold-gradient text-black font-heading font-bold text-sm tracking-widest uppercase rounded hover:shadow-gold-glow hover:scale-105 transition-all w-fit"
          >
            <span>CLAIM YOUR MEMBERSHIP</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-Column Grid Content */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <Logo size="lg" />
            <p className="text-body-sm text-[#B8B8B8] font-normal max-w-sm leading-relaxed font-sans">
              CUTZ THE GYM is Pune’s premier 10,000 SQFT bodybuilding and fitness arena led by IFBB Pro Krishna Chauhan. Built for disciplined transformation, high-yield biomechanics, and championship culture.
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-gold/30 text-xs font-heading tracking-widest text-white hover:text-gold hover:border-gold transition-colors"
              >
                <Instagram className="w-4 h-4 text-gold" />
                <span>FOLLOW @CUTZTHEGYM</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-heading uppercase tracking-[0.25em] text-white font-bold">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs font-heading tracking-wider uppercase text-[#D1D1D1]">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-gold hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Programs */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-heading uppercase tracking-[0.25em] text-white font-bold">
              PROGRAMS & DISCIPLINES
            </h4>
            <ul className="space-y-2.5 text-xs font-heading tracking-wider uppercase text-[#D1D1D1]">
              {programsData.slice(0, 6).map((prog) => (
                <li key={prog.slug}>
                  <Link
                    to={`/programs/${prog.slug}`}
                    className="hover:text-gold hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    {prog.title.split('&')[0]}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/programs" className="text-gold font-bold hover:underline inline-block mt-1">
                  VIEW ALL 10 DISCIPLINES →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Facility Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-heading uppercase tracking-[0.25em] text-white font-bold">
              VISIT THE ARENA
            </h4>
            <div className="space-y-3 text-body-sm leading-relaxed text-[#B8B8B8] font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>{siteConfig.location.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>{siteConfig.contact.formattedPrimaryPhone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>{siteConfig.contact.formattedSecondaryPhone}</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={siteConfig.location.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-heading tracking-widest text-gold hover:underline font-bold"
              >
                <span>GET GOOGLE DIRECTIONS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-caption text-[#A3A3A3]">
          <div>
            <p>© {currentYear} CUTZ THE GYM. All rights reserved. Directed by IFBB Pro Krishna Chauhan.</p>
          </div>
          <div className="flex items-center space-x-6">
            {legalLinks.map((item) => (
              <Link key={item.path} to={item.path} className="hover:text-gold transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

