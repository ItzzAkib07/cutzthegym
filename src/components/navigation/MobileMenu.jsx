import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, Phone, MessageSquare, Instagram, MapPin, ArrowRight } from 'lucide-react';
import { navLinks, secondaryNavLinks } from '../../data/navigation';
import { siteConfig } from '../../data/siteConfig';

export default function MobileMenu({ isOpen, onClose }) {
  const [programsExpanded, setProgramsExpanded] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Backdrop Click Outside */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Full-width/Drawer Container */}
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full sm:max-w-md ml-auto bg-[#080808] border-l border-gold/30 flex flex-col justify-between overflow-y-auto px-6 py-6 shadow-2xl z-10"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <NavLink to="/" onClick={onClose} className="inline-block">
                <img src="/logo.svg" alt="CUTZ THE GYM" className="h-10 w-auto object-contain" />
              </NavLink>
              <button
                onClick={onClose}
                className="p-2.5 rounded-full border border-gold/40 text-white hover:text-gold hover:border-gold transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav List */}
            <div className="py-6 flex flex-col space-y-2">
              {navLinks.map((link) => {
                if (link.submenu) {
                  return (
                    <div key={link.path} className="border-b border-white/5 pb-2">
                      <button
                        onClick={() => setProgramsExpanded(!programsExpanded)}
                        className="w-full flex items-center justify-between text-2xl font-display uppercase tracking-tight text-white hover:text-gold transition-colors py-2 text-left"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${programsExpanded ? 'rotate-180 text-gold' : 'text-silver/40'}`} />
                      </button>

                      <AnimatePresence>
                        {programsExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 space-y-2 mt-2 border-l border-gold/30 overflow-hidden"
                          >
                            <NavLink
                              to="/programs"
                              onClick={onClose}
                              className="block text-sm font-heading tracking-wider uppercase text-gold font-semibold py-1"
                            >
                              → All Disciplines Overview
                            </NavLink>
                            {link.submenu.map((sub) => (
                              <NavLink
                                key={sub.path}
                                to={sub.path}
                                onClick={onClose}
                                className={({ isActive }) =>
                                  `block text-sm font-heading tracking-wider uppercase py-1 transition-colors ${
                                    isActive ? 'text-gold font-bold' : 'text-silver/70 hover:text-white'
                                  }`
                                }
                              >
                                {sub.name}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `block text-2xl font-display uppercase tracking-tight py-2.5 border-b border-white/5 transition-colors ${
                        isActive ? 'text-gold font-bold' : 'text-white/90 hover:text-gold'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                );
              })}

              {/* Secondary Navigation Links */}
              <div className="pt-4 flex flex-wrap gap-4 text-xs font-heading tracking-widest uppercase text-muted">
                {secondaryNavLinks.map((sec) => (
                  <NavLink
                    key={sec.path}
                    to={sec.path}
                    onClick={onClose}
                    className="hover:text-gold transition-colors"
                  >
                    {sec.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Bottom Conversion Actions */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={siteConfig.contact.phoneCallUrl}
                  className="flex items-center justify-center gap-2 py-3 bg-[#171717] border border-white/10 rounded-lg text-xs font-heading tracking-wider uppercase text-white font-semibold hover:border-gold/40 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call Us</span>
                </a>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-green-600/20 border border-green-500/40 rounded-lg text-xs font-heading tracking-wider uppercase text-green-400 font-semibold hover:bg-green-600 hover:text-white transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-green-400" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <NavLink
                to="/memberships"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-4 text-center font-heading text-sm font-bold tracking-widest uppercase bg-gold-gradient text-black rounded-lg shadow-gold-glow hover:brightness-110 transition-all"
              >
                <span>JOIN CUTZ THE GYM</span>
                <ArrowRight className="w-4 h-4" />
              </NavLink>

              <div className="text-center text-[11px] text-silver/50 pt-1">
                <p>Lohegaon, Pune • 10,000 SQFT • Led by IFBB Pro Krishna Chauhan</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
