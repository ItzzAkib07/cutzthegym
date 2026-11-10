import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Instagram, Phone, MapPin, Dumbbell } from 'lucide-react';
import { navLinks, secondaryNavLinks } from '../../data/navigation';
import { siteConfig } from '../../data/siteConfig';

export default function MegaMenu({ isOpen, onClose }) {
  const [activePreviewImage, setActivePreviewImage] = useState(
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop'
  );

  const previewMap = {
    '/': 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
    '/about': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    '/facilities': 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    '/programs': 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
    '/trainers': 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1200&auto=format&fit=crop',
    '/gallery': 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200&auto=format&fit=crop',
    '/media': 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop',
    '/videos': 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop',
    '/memberships': 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1200&auto=format&fit=crop',
    '/contact': 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop',
    '/transformations': 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop',
    '/faq': 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-[#080808]/98 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto"
        >
          {/* Top Bar with Close button */}
          <div className="w-full px-6 lg:px-12 py-6 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-gold animate-ping" />
              <span className="font-heading text-xs uppercase tracking-[0.3em] text-gold font-bold">
                EXPERIENCE MATRIX
              </span>
            </div>
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 text-white hover:text-gold hover:border-gold transition-colors font-heading text-xs tracking-widest uppercase group"
            >
              <span>CLOSE</span>
              <X className="w-4 h-4 transition-transform group-hover:rotate-90 duration-300" />
            </button>
          </div>

          {/* Main Grid Content */}
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Mega Navigation Links */}
            <div className="lg:col-span-7 flex flex-col space-y-2">
              {navLinks.map((link, idx) => (
                <div key={link.path} className="overflow-hidden">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.04 + 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={link.path}
                      onClick={onClose}
                      onMouseEnter={() => previewMap[link.path] && setActivePreviewImage(previewMap[link.path])}
                      className="group flex items-baseline justify-between py-2 border-b border-white/5 hover:border-gold/50 transition-colors"
                    >
                      <span className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-white/80 group-hover:text-gold group-hover:translate-x-3 transition-all duration-300">
                        {link.name}
                      </span>
                      <span className="text-xs font-heading tracking-widest text-silver/40 group-hover:text-gold transition-colors flex items-center gap-2">
                        <span>EXPLORE</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </motion.div>
                </div>
              ))}

              {/* Secondary Quick Links */}
              <div className="pt-6 flex flex-wrap gap-6 text-xs font-heading tracking-widest uppercase text-muted">
                {secondaryNavLinks.map((sec) => (
                  <Link
                    key={sec.path}
                    to={sec.path}
                    onClick={onClose}
                    className="hover:text-gold transition-colors"
                  >
                    {sec.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column: Dynamic Cinematic Preview & Quick Info */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              {/* Dynamic Image Preview Container */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-gold/30 shadow-2xl">
                <img
                  src={activePreviewImage}
                  alt="CUTZ Preview"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase font-heading tracking-[0.25em] text-gold font-bold">
                    PUNE'S PREMIER 10,000 SQFT DESTINATION
                  </span>
                  <p className="text-white text-base font-heading font-semibold uppercase mt-0.5">
                    CUTZ THE GYM
                  </p>
                </div>
              </div>

              {/* Location & Quick Contact Card */}
              <div className="p-6 rounded-xl bg-[#111111] border border-white/10 space-y-3">
                <div className="flex items-start gap-3 text-xs text-silver/80">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>{siteConfig.location.fullAddress}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-silver/80">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{siteConfig.contact.formattedPrimaryPhone} | {siteConfig.contact.formattedSecondaryPhone}</span>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={siteConfig.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-heading tracking-widest text-silver hover:text-gold transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-gold" />
                    <span>@cutzthegym</span>
                  </a>
                  <Link
                    to="/memberships"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-heading tracking-widest uppercase font-bold bg-gold-gradient text-black rounded hover:shadow-gold-glow transition-all"
                  >
                    JOIN NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="w-full px-6 lg:px-12 py-4 flex items-center justify-between text-xs text-white/40 border-t border-white/5">
            <span>© {new Date().getFullYear()} CUTZ THE GYM — Led by IFBB Pro Krishna Chauhan</span>
            <span className="font-editorial italic text-gold/70">Train Under a Champion. Transform Like a Champion.</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
