import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick WhatsApp Contact" className="hidden lg:block fixed bottom-8 left-8 z-40">
      <a
        href={siteConfig.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Enquiry with Cutz The Gym"
        className="group relative flex items-center justify-center p-3.5 rounded-full bg-[#111111] border border-green-500/50 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_35px_rgba(34,197,94,0.6)] hover:scale-110 hover:border-green-400 transition-all duration-300"
      >
        {/* Pulsing halo */}
        <span className="absolute -inset-1 rounded-full bg-green-500/20 animate-ping pointer-events-none" />

        <MessageCircle className="w-6 h-6 transition-transform group-hover:rotate-12 duration-300" />

        {/* Hover Pill Label */}
        <span className="absolute left-full ml-3 px-3 py-1.5 rounded bg-[#171717] border border-green-500/40 text-white text-xs font-heading tracking-wider uppercase font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-xl">
          Chat With Us
        </span>
      </a>
    </aside>
  );
}

