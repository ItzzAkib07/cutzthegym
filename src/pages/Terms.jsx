import React from 'react';
import SEO from '../components/seo/SEO';
import Container from '../components/common/Container';
import TextReveal from '../components/animation/TextReveal';
import { siteConfig } from '../data/siteConfig';

export default function Terms() {
  return (
    <div className="pt-24 pb-20 bg-bg-primary overflow-x-hidden">
      <SEO
        title="Terms & Conditions — CUTZ THE GYM"
        description="General terms and facility usage rules for CUTZ THE GYM Pune."
      />

      <section className="py-20 bg-bg-secondary border-b border-gold/20 text-center">
        <Container>
          <span className="text-eyebrow text-gold font-bold inline-block mb-3">
            FACILITY GUIDELINES
          </span>
          <h1 className="text-display-lg font-hero uppercase text-white tracking-tight">
            <TextReveal text="TERMS & CONDITIONS" stagger={0.03} />
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
              1. Facility Etiquette & Safety
            </h3>
            <p>
              Members agree to uphold safety standards, re-rack weights after completion, wipe down machines using available sanitization stations, and respect fellow athletes. Appropriate athletic footwear and training attire are mandatory across the 10,000 SQFT floor.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-bg-card border border-white/10 space-y-3">
            <h3 className="text-heading-md font-heading uppercase text-white font-bold">
              2. Membership Activations & Freeze Policies
            </h3>
            <p>
              Membership tenures commence on the agreed activation date. Membership freezes are granted according to the rules of the specific tier purchased (Monthly, Quarterly, Half-Yearly, or Yearly) upon timely notice given at the reception.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-bg-card border border-white/10 space-y-3">
            <h3 className="text-heading-md font-heading uppercase text-white font-bold">
              3. Health & Physical Readiness
            </h3>
            <p>
              Members acknowledge that high-intensity exercise, strength training, and group fitness involve physical exertion. Members must disclose relevant preexisting injuries or medical constraints during their initial trainer onboarding.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-bg-card border border-white/10 space-y-3">
            <h3 className="text-heading-md font-heading uppercase text-white font-bold">
              4. Management Discretion
            </h3>
            <p>
              CUTZ THE GYM management reserves the right to modify class schedules, facility hours, or floor equipment layouts for operational maintenance, sanitization, and athletic advancement.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
