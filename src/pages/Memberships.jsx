import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  X, 
  ShieldAlert, 
  Phone, 
  MessageCircle, 
  ChevronDown, 
  HelpCircle 
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Reveal from '../components/animation/Reveal';
import TextReveal from '../components/animation/TextReveal';
import RevealOnScroll from '../components/animation/RevealOnScroll';
import MembershipCard from '../components/cards/MembershipCard';
import ContactForm from '../components/forms/ContactForm';
import { membershipsData } from '../data/memberships';
import { siteConfig } from '../data/siteConfig';

export default function Memberships() {
  const [selectedPlanForEnquiry, setSelectedPlanForEnquiry] = useState('12 Months Champion Tier');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const membershipFaqs = [
    {
      q: "Can I freeze my membership if I travel or fall ill?",
      a: "Yes. Flexible freeze privileges are provided based on your plan duration (e.g. up to 14 days on Half-Yearly, up to 30 days on Yearly tiers). Formal notice can be submitted at the reception."
    },
    {
      q: "Are the group fitness classes (Zumba, Dance, Yoga) included?",
      a: "Yes, our Quarterly, Half-Yearly, and Yearly membership packages grant full access to our scheduled group fitness studio classes."
    },
    {
      q: "How does the personal training packages work?",
      a: "Personal training packages are custom-tailored into session blocks (12, 24, 36, or 48 sessions) where you receive dedicated 1-on-1 supervision, customized workout routines, and direct nutritional guidance."
    },
    {
      q: "Can I transfer my membership to a friend or family member?",
      a: "Transfers can be reviewed on a case-by-case basis by management at the front desk. Administrative processing fees may apply."
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-bg-primary overflow-x-hidden">
      <SEO
        title="Membership Plans & Pricing — CUTZ THE GYM Pune"
        description="Explore flexible membership tiers and personal training packages at CUTZ THE GYM Lohegaon. Access 10,000 SQFT training space, full air-conditioning, and expert coaching."
      />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-bg-secondary border-b border-gold/20 overflow-hidden text-center">
        <Container>
          <span className="text-eyebrow text-gold font-bold inline-block mb-3">
            TRANSPARENT VALUE • DIRECT DESK ENROLMENT
          </span>
          <h1 className="text-display-xl font-hero uppercase text-white tracking-tight">
            <TextReveal text="MEMBERSHIP PLANS & PACKAGES" stagger={0.03} />
          </h1>
          <p className="mt-4 text-body-lg font-editorial italic text-gold max-w-2xl mx-auto">
            "Invest in yourself. The physical results begin here."
          </p>
        </Container>
      </section>

      {/* Pricing Cards Grid with Equal Heights */}
      <section className="py-20 sm:py-28 bg-bg-primary">
        <Container>
          <RevealOnScroll direction="up">
            <SectionHeading
              eyebrow="MEMBERSHIP TIERS"
              title="CONFIGURABLE PRICING & ACCESS PACKAGES"
              subtitle="FIND THE RIGHT COMMITMENT LEVEL FOR YOUR TIMELINE"
              description="Transparent rates with zero hidden registration fees. Every tier includes access to our 10,000 SQFT climate-controlled arena."
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {membershipsData.packages.map((pkg, idx) => (
              <RevealOnScroll key={pkg.id} direction="up" delay={idx * 0.08} className="h-full">
                <MembershipCard
                  pkg={pkg}
                  onSelectPlan={(p) => {
                    setSelectedPlanForEnquiry(p.name);
                    const el = document.getElementById('enquiry-form-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                />
              </RevealOnScroll>
            ))}
          </div>

          {/* Official Terms Notice */}
          <div className="mt-12 p-5 rounded-2xl bg-[#111111] border border-gold/30 flex items-start gap-3.5 max-w-3xl mx-auto text-body-sm text-[#D1D1D1]">
            <ShieldAlert className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed font-sans">
              <strong className="text-gold font-semibold uppercase font-heading">Notice: </strong> 
              {membershipsData.disclaimer} Final membership activation and payment are handled in person at our front desk reception in Lohegaon, Pune.
            </p>
          </div>
        </Container>
      </section>

      {/* Comprehensive Package Comparison Matrix */}
      <section className="py-20 bg-bg-secondary border-y border-white/5 overflow-x-auto">
        <Container>
          <RevealOnScroll direction="up">
            <SectionHeading
              eyebrow="TIER BREAKDOWN"
              title="PACKAGE COMPARISON MATRIX"
              subtitle="Compare inclusions side by side across all membership tiers."
            />
          </RevealOnScroll>

          <div className="min-w-[700px] bg-bg-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-[#121212] text-xs font-heading tracking-wider uppercase text-gold">
                  <th className="p-4 sm:p-5">Inclusions & Features</th>
                  <th className="p-4 sm:p-5 text-center">1 Month</th>
                  <th className="p-4 sm:p-5 text-center">3 Months</th>
                  <th className="p-4 sm:p-5 text-center">6 Months</th>
                  <th className="p-4 sm:p-5 text-center bg-gold/10 text-white font-bold">12 Months</th>
                  <th className="p-4 sm:p-5 text-center text-gold">1-on-1 PT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs text-[#D1D1D1]">
                {membershipsData.comparisonFeatures.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-white">{row.name}</td>
                    
                    {/* Monthly */}
                    <td className="p-4 sm:p-5 text-center">
                      {typeof row.monthly === 'boolean' ? (
                        row.monthly ? <Check className="w-4 h-4 text-gold mx-auto" /> : <X className="w-4 h-4 text-silver/30 mx-auto" />
                      ) : (
                        <span>{row.monthly}</span>
                      )}
                    </td>

                    {/* Quarterly */}
                    <td className="p-4 sm:p-5 text-center">
                      {typeof row.quarterly === 'boolean' ? (
                        row.quarterly ? <Check className="w-4 h-4 text-gold mx-auto" /> : <X className="w-4 h-4 text-silver/30 mx-auto" />
                      ) : (
                        <span className="text-gold">{row.quarterly}</span>
                      )}
                    </td>

                    {/* Half-Yearly */}
                    <td className="p-4 sm:p-5 text-center">
                      {typeof row.halfYearly === 'boolean' ? (
                        row.halfYearly ? <Check className="w-4 h-4 text-gold mx-auto" /> : <X className="w-4 h-4 text-silver/30 mx-auto" />
                      ) : (
                        <span className="text-gold">{row.halfYearly}</span>
                      )}
                    </td>

                    {/* Yearly (Champion Tier) */}
                    <td className="p-4 sm:p-5 text-center bg-gold/5 font-semibold text-white">
                      {typeof row.yearly === 'boolean' ? (
                        row.yearly ? <Check className="w-4 h-4 text-gold mx-auto" /> : <X className="w-4 h-4 text-silver/30 mx-auto" />
                      ) : (
                        <span className="text-gold font-bold">{row.yearly}</span>
                      )}
                    </td>

                    {/* PT */}
                    <td className="p-4 sm:p-5 text-center font-semibold text-gold">
                      {typeof row.pt === 'boolean' ? (
                        row.pt ? <Check className="w-4 h-4 text-gold mx-auto" /> : <X className="w-4 h-4 text-silver/30 mx-auto" />
                      ) : (
                        <span>{row.pt}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Direct Quick Assistance Row */}
      <section className="py-12 bg-[#0c0c0c] border-b border-white/5">
        <Container className="max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-heading-md font-heading uppercase text-white font-bold">
              PREFER DIRECT CONVERSATION?
            </h3>
            <p className="text-body-sm text-[#B8B8B8] mt-0.5 font-sans">
              Call our front desk or message us on WhatsApp for fast answers.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.contact.phoneCallUrl}
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-bg-card border border-white/20 text-btn text-white hover:text-gold hover:border-gold transition-colors font-sans"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>{siteConfig.contact.formattedPrimaryPhone}</span>
            </a>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-green-600/20 border border-green-500/40 text-btn text-green-400 hover:bg-green-600 hover:text-white transition-colors font-sans"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP DESK</span>
            </a>
          </div>
        </Container>
      </section>

      {/* Membership Specific FAQs */}
      <section className="py-20 bg-bg-primary">
        <Container className="max-w-4xl">
          <RevealOnScroll direction="up">
            <SectionHeading
              eyebrow="MEMBERSHIP GUIDELINES"
              title="FREQUENTLY ASKED PRICING QUESTIONS"
              subtitle="Clear policies on enrolment, payments, and freeze terms."
            />
          </RevealOnScroll>

          <div className="space-y-4">
            {membershipFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-2xl bg-bg-card border border-white/10 overflow-hidden shadow-lg">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between text-heading-md font-heading uppercase text-white hover:text-gold transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-body-sm text-[#D1D1D1] border-t border-white/5 pt-4 leading-relaxed font-sans">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Direct Enquiry Form Section */}
      <section id="enquiry-form-section" className="py-20 bg-bg-secondary border-t border-gold/20">
        <Container className="max-w-3xl">
          <ContactForm initialPlan={selectedPlanForEnquiry} />
        </Container>
      </section>
    </div>
  );
}
