import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Dumbbell, 
  ChevronDown, 
  Target, 
  ShieldCheck, 
  Calendar,
  Sparkles 
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Reveal from '../components/animation/Reveal';
import ProgramCard from '../components/cards/ProgramCard';
import { programsData } from '../data/programs';
import { siteConfig } from '../data/siteConfig';

export default function ProgramDetails() {
  const { slug } = useParams();
  const program = programsData.find((p) => p.slug === slug);
  const [openFaq, setOpenFaq] = useState(null);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  const relatedPrograms = programsData
    .filter((p) => p.slug !== program.slug)
    .slice(0, 3);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-24 pb-20 bg-bg-primary">
      <SEO
        title={`${program.title} — CUTZ THE GYM Pune`}
        description={program.shortDescription}
        ogImage={program.heroImage}
      />

      {/* 1. Unique Cinematic Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-bg-secondary border-b border-gold/25">
        <div className="absolute inset-0 z-0">
          <img
            src={program.heroImage}
            alt={program.title}
            className="w-full h-full object-cover filter brightness-[0.28] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-bg-secondary" />
        </div>

        <Container className="relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-eyebrow text-gold font-bold">
              {program.category}
            </span>
          </div>

          <h1 className="text-display-lg text-white leading-tight">
            {program.title}
          </h1>

          <p className="mt-4 text-body-lg font-editorial italic text-gold max-w-2xl mx-auto">
            "{program.tagline}"
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button to="/memberships" variant="primary" size="lg" icon={ArrowRight}>
              CLAIM MEMBERSHIP
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              ENQUIRE ABOUT THIS PROTOCOL
            </Button>
          </div>
        </Container>
      </section>

      {/* 2. Program Overview & Who Should Consider */}
      <section className="py-20 sm:py-28 bg-bg-primary">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Introduction & Training Approach */}
            <div className="lg:col-span-7 space-y-8">
              <Reveal>
                <div className="space-y-4">
                  <span className="text-eyebrow text-gold font-bold block">
                    METHODOLOGY & SPECIFICATION
                  </span>
                  <h2 className="text-heading-xl text-white">
                    PRECISION BIOMECHANICAL FORMULATION
                  </h2>
                  <p className="text-body-md text-silver/80 leading-relaxed">
                    {program.shortDescription}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="p-6 sm:p-7 rounded-xl bg-bg-card border border-white/10 space-y-3">
                  <h3 className="text-heading-md text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-gold" />
                    <span>WHO SHOULD CONSIDER THIS PROTOCOL</span>
                  </h3>
                  <p className="text-body-sm text-silver/80 leading-relaxed">
                    {program.targetAudience}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="p-6 sm:p-7 rounded-xl bg-bg-card border border-white/10 space-y-3">
                  <h3 className="text-heading-md text-white flex items-center gap-2">
                    <Dumbbell className="w-5 h-5 text-gold" />
                    <span>TRAINING APPROACH & FLOOR EXECUTION</span>
                  </h3>
                  <p className="text-body-sm text-silver/80 leading-relaxed">
                    {program.trainingApproach}
                  </p>
                  {program.equipmentFocus && (
                    <div className="pt-2 text-caption text-silver/60">
                      <span className="text-gold font-semibold uppercase font-heading">Equipment deployed: </span>
                      {program.equipmentFocus}
                    </div>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Right: Key Benefits Card */}
            <div className="lg:col-span-5">
              <Reveal delay={0.2}>
                <div className="p-8 rounded-xl bg-gradient-to-b from-[#191919] to-[#121212] border border-gold/40 shadow-2xl space-y-6">
                  <div>
                    <span className="text-eyebrow text-gold font-bold block">
                      DELIVERABLES
                    </span>
                    <h3 className="text-heading-lg text-white mt-1">
                      KEY PROTOCOL ADVANTAGES
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {program.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-body-sm text-silver/90 leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-white/10">
                    <Button to={`/contact?plan=${program.slug}`} variant="primary" size="md" className="w-full" icon={ArrowRight}>
                      BOOK FREE FLOOR WALKTHROUGH
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Program FAQs (Accordion) */}
      {program.faqs && program.faqs.length > 0 && (
        <section className="py-20 bg-bg-secondary border-t border-white/5">
          <Container className="max-w-4xl">
            <Reveal>
              <SectionHeading
                eyebrow="CLARITY & GUIDANCE"
                title="FREQUENTLY ASKED QUESTIONS"
                subtitle="Common queries regarding this specific training protocol."
              />
            </Reveal>

            <div className="space-y-4">
              {program.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <Reveal key={idx} delay={idx * 0.1}>
                    <div className="rounded-xl bg-bg-card border border-white/10 overflow-hidden transition-colors">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-5 sm:p-6 text-left flex items-center justify-between text-heading-md text-white hover:text-gold transition-colors"
                      >
                        <span className="pr-4">{faq.question}</span>
                        <ChevronDown className={`w-5 h-5 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-5 sm:px-6 pb-6 text-body-sm text-silver/80 border-t border-white/5 pt-4 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* 4. Related Disciplines */}
      <section className="py-20 sm:py-28 bg-bg-primary border-t border-white/5">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="COMPLEMENTARY DISCIPLINES"
              title="EXPLORE RELATED TRAINING TRACKS"
              subtitle="Combine routines for total athletic conditioning."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {relatedPrograms.map((rel, idx) => (
              <Reveal key={rel.id} delay={idx * 0.08} className="h-full">
                <ProgramCard program={rel} index={idx} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
