import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Phone, Instagram, MessageCircle, Clock, ArrowUpRight, ShieldCheck, Mail } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import ContactForm from '../components/forms/ContactForm';
import TextReveal from '../components/animation/TextReveal';
import RevealOnScroll from '../components/animation/RevealOnScroll';
import { siteConfig } from '../data/siteConfig';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const initialPlan = searchParams.get('plan') || '';

  return (
    <div className="pt-24 pb-20 bg-bg-primary overflow-x-hidden">
      <SEO
        title="Contact Us & Gym Location — CUTZ THE GYM Pune"
        description="Visit CUTZ THE GYM in Lohegaon, Pune near D.Y. Patil College. Call +91 7028776663 or +91 7276585998. Book your consultation and gym walkthrough."
      />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-bg-secondary border-b border-gold/20 overflow-hidden text-center">
        <Container>
          <span className="text-eyebrow text-gold font-bold inline-block mb-3">
            COMMUNICATION PORTAL
          </span>
          <h1 className="text-display-xl font-hero uppercase text-white tracking-tight">
            <TextReveal text="CONNECT WITH CUTZ THE GYM" stagger={0.03} />
          </h1>
          <p className="mt-4 text-body-lg font-editorial italic text-gold max-w-2xl mx-auto">
            "Direct reception desk assistance, consultation booking, and location directions."
          </p>
        </Container>
      </section>

      {/* Two-Column Contact Section (Part 4) */}
      <section className="py-20 sm:py-28 bg-bg-primary">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT SIDE — CONTACT INFORMATION */}
            <div className="lg:col-span-5 space-y-8">
              <RevealOnScroll direction="left" delay={0.1}>
                <div className="space-y-4">
                  <span className="text-eyebrow text-gold font-bold">
                    GET IN TOUCH
                  </span>
                  <h2 className="text-display-lg font-hero uppercase text-white tracking-tight leading-tight">
                    LET'S START YOUR TRANSFORMATION.
                  </h2>
                  <p className="text-body-md text-silver/80 font-sans leading-relaxed">
                    Have questions about our fitness programs or memberships? Connect with the Cutz The Gym team and take the first step towards your fitness goals.
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="left" delay={0.15}>
                <div className="p-8 rounded-2xl bg-bg-card border border-white/10 space-y-6 shadow-2xl">
                  {/* Address */}
                  <div className="flex items-start gap-4 text-body-sm text-silver/80 font-sans">
                    <div className="p-2.5 rounded-lg bg-gold/10 border border-gold/30 text-gold flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-heading uppercase tracking-widest text-white/50 block">FACILITY LOCATION</span>
                      <p className="font-semibold text-white mt-0.5">{siteConfig.location.addressLine1}</p>
                      <p>{siteConfig.location.addressLine2}</p>
                      <p>{siteConfig.location.city}, {siteConfig.location.state} – {siteConfig.location.pincode}</p>
                    </div>
                  </div>

                  {/* Phone Links */}
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <span className="text-caption text-silver/50 block font-heading uppercase">
                      OFFICIAL DIRECT PHONES:
                    </span>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                      <a
                        href={siteConfig.contact.phoneCallUrl}
                        className="text-body-md font-heading font-semibold text-white hover:text-gold transition-colors"
                      >
                        +91 7028776663
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                      <a
                        href="tel:+917276585998"
                        className="text-body-md font-heading font-semibold text-white hover:text-gold transition-colors"
                      >
                        +91 7276585998
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp Quick Action */}
                  <div className="pt-4 border-t border-white/10">
                    <a
                      href={siteConfig.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-green-600/20 border border-green-500/40 text-green-400 hover:bg-green-600 hover:text-white text-xs font-heading tracking-wider uppercase font-bold transition-all shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>DIRECT WHATSAPP CONVERSATION</span>
                    </a>
                  </div>

                  {/* Instagram */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-body-sm text-silver/60">Follow official feed:</span>
                    <a
                      href={siteConfig.contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-heading tracking-widest text-gold hover:underline uppercase font-bold"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>@cutzthegym</span>
                    </a>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Verified Operating notice */}
              <RevealOnScroll direction="left" delay={0.2}>
                <div className="p-6 rounded-2xl bg-[#111111] border border-gold/30 text-body-sm text-silver/80 space-y-2">
                  <h4 className="font-heading uppercase text-gold font-bold flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>TIMING & WALKTHROUGHS</span>
                  </h4>
                  <p className="leading-relaxed font-sans">{siteConfig.hoursNotice}</p>
                </div>
              </RevealOnScroll>
            </div>

            {/* RIGHT SIDE — ENQUIRY FORM */}
            <div className="lg:col-span-7">
              <RevealOnScroll direction="right" delay={0.2}>
                <ContactForm initialPlan={initialPlan} />
              </RevealOnScroll>
            </div>
          </div>
        </Container>
      </section>

      {/* Full-width Map Embed */}
      <section className="py-16 sm:py-20 bg-bg-secondary border-t border-white/5">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-eyebrow text-gold font-bold">LOHEGAON CAMPUS</span>
              <h3 className="text-heading-lg font-heading uppercase text-white mt-1">
                MAP & DIRECTIONS
              </h3>
            </div>
            <a
              href={siteConfig.location.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold/10 border border-gold/30 text-xs font-heading tracking-widest text-gold hover:bg-gold hover:text-black uppercase font-bold transition-all"
            >
              <span>OPEN IN GOOGLE MAPS</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="aspect-[16/7] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <iframe
              title="CUTZ THE GYM Google Maps"
              src={siteConfig.location.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
