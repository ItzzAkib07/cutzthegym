import React from 'react';
import SEO from '../components/seo/SEO';
import Container from '../components/common/Container';
import TextReveal from '../components/animation/TextReveal';
import { siteConfig } from '../data/siteConfig';

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-20 bg-bg-primary overflow-x-hidden">
      <SEO
        title="Privacy Policy — CUTZ THE GYM"
        description="Privacy policy and data handling guidelines for CUTZ THE GYM Pune."
      />

      <section className="py-20 bg-bg-secondary border-b border-gold/20 text-center">
        <Container>
          <span className="text-eyebrow text-gold font-bold inline-block mb-3">
            LEGAL PROTOCOLS
          </span>
          <h1 className="text-display-lg font-hero uppercase text-white tracking-tight">
            <TextReveal text="PRIVACY POLICY" stagger={0.03} />
          </h1>
          <p className="mt-2 text-caption text-silver/60">
            Last Updated: November 2026
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-bg-primary">
        <Container className="max-w-3xl space-y-8 text-body-sm text-silver/80 leading-relaxed font-sans">
          <div className="p-6 rounded-2xl bg-bg-card border border-white/10 space-y-3">
            <h3 className="text-heading-md font-heading uppercase text-white font-bold">
              1. Information Collection
            </h3>
            <p>
              At CUTZ THE GYM, we collect necessary contact information (name, phone number, email address, and workout preferences) solely when submitted voluntarily through our consultation forms or front desk registration.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-bg-card border border-white/10 space-y-3">
            <h3 className="text-heading-md font-heading uppercase text-white font-bold">
              2. Use of Information
            </h3>
            <p>
              Your contact details are used strictly to provide membership consultations, respond to service inquiries, communicate schedule updates, and tailor fitness plans. We do not sell, rent, or distribute personal data to third-party marketing brokers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-bg-card border border-white/10 space-y-3">
            <h3 className="text-heading-md font-heading uppercase text-white font-bold">
              3. Data Protection & Security
            </h3>
            <p>
              We implement industry-standard safeguards to prevent unauthorized access or disclosure of member data. Digital communication regarding memberships is protected under modern secure transmission standards.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-bg-card border border-white/10 space-y-3">
            <h3 className="text-heading-md font-heading uppercase text-white font-bold">
              4. Photography & Member Consent
            </h3>
            <p>
              CUTZ THE GYM values the privacy and comfort of every training member. Transformation photographs or social media features are published exclusively with the explicit written or documented consent of the member.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-bg-card border border-white/10 space-y-3">
            <h3 className="text-heading-md font-heading uppercase text-white font-bold">
              5. Contacting Management
            </h3>
            <p>
              If you have any questions regarding this Privacy Policy or wish to update your records, please contact our management desk at {siteConfig.contact.formattedPrimaryPhone} or visit us at our facility in Lohegaon, Pune.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
