import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function StickyMobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full z-40 bg-[#080808]/95 backdrop-blur-xl border-t border-gold/30 px-4 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-4px_25px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Quick Call */}
        <a
          href={siteConfig.contact.phoneCallUrl}
          aria-label="Call Cutz The Gym directly"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded bg-[#171717] border border-white/20 text-white hover:text-gold font-heading text-xs font-semibold uppercase tracking-wider transition-colors active:scale-95"
        >
          <Phone className="w-3.5 h-3.5 text-gold" />
          <span>CALL NOW</span>
        </a>

        {/* WhatsApp Fast Connect */}
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Cutz The Gym on WhatsApp"
          className="p-2.5 rounded bg-green-950/40 border border-green-500/40 text-green-400 hover:bg-green-600 hover:text-white transition-colors active:scale-95"
          title="WhatsApp Enquiry"
        >
          <MessageCircle className="w-4 h-4" />
        </a>

        {/* Join Now CTA */}
        <Link
          to="/memberships"
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded bg-gold-gradient text-black font-heading text-xs font-bold uppercase tracking-wider shadow-gold-glow transition-all active:scale-95"
        >
          <span>JOIN NOW</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

