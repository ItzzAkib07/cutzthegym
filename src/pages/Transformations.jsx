import React, { useState } from 'react';
import { ArrowRight, Sparkles, AlertCircle, CheckCircle2, TrendingUp, Trophy, Filter } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import BeforeAfterSlider from '../components/common/BeforeAfterSlider';
import Button from '../components/common/Button';
import TextReveal from '../components/animation/TextReveal';
import RevealOnScroll from '../components/animation/RevealOnScroll';
import TiltCard from '../components/animation/TiltCard';
import { transformationsData, transformationCategories } from '../data/transformations';

export default function Transformations() {
  const [selectedCategory, setSelectedCategory] = useState('All Journeys');

  const filteredStories = transformationsData.stories.filter((story) => {
    if (selectedCategory === 'All Journeys') return true;
    return story.category === selectedCategory;
  });

  return (
    <div className="pt-24 pb-20 bg-bg-primary overflow-x-hidden">
      <SEO
        title="Real People. Real Fitness Journeys — CUTZ THE GYM Pune"
        description="Every fitness journey is unique. Discover the dedication, discipline, and progress behind every transformation at CUTZ THE GYM in Lohegaon, Pune."
      />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-bg-secondary border-b border-gold/20 overflow-hidden text-center">
        <Container>
          <span className="text-eyebrow text-gold font-bold inline-block mb-3">
            AUTHENTIC PROGRESSION ARCHIVE
          </span>
          <h1 className="text-display-xl font-hero uppercase text-white tracking-tight">
            <TextReveal text="REAL FITNESS JOURNEYS" stagger={0.03} />
          </h1>
          <p className="mt-4 text-body-lg font-editorial italic text-gold max-w-2xl mx-auto">
            "Every transformation begins with a decision to uphold a higher physical standard."
          </p>
        </Container>
      </section>

      {/* Sample / Illustrative Disclaimer Banner */}
      <section className="py-6 bg-[#0e0e0e] border-b border-white/5">
        <Container className="max-w-4xl">
          <div className="p-4 rounded-xl bg-bg-card border border-gold/30 flex items-start gap-3 text-body-sm text-[#D1D1D1]">
            <AlertCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed font-sans">
              <strong className="text-gold uppercase font-heading font-semibold">Authenticity Standard: </strong> 
              {transformationsData.notice}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Section */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow={transformationsData.sectionHeading.eyebrow}
            title={transformationsData.sectionHeading.title}
            subtitle={transformationsData.sectionHeading.subtitle}
            description={transformationsData.sectionHeading.description}
            align="center"
          />

          {/* Category Filter Pills */}
          <div className="mt-8 mb-16 flex flex-wrap items-center justify-center gap-2.5">
            {transformationCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-heading tracking-wider uppercase transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gold-gradient text-black font-extrabold shadow-gold-glow scale-105'
                    : 'bg-[#141414] border border-white/10 text-silver/80 hover:border-gold/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Stories List */}
          <div className="space-y-20 sm:space-y-28">
            {filteredStories.map((story, idx) => (
              <div
                key={story.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 rounded-2xl bg-[#0f0f0f] border border-white/10 hover:border-gold/30 transition-all duration-500 shadow-2xl"
              >
                {/* Media Container: Slider or Featured Image */}
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <RevealOnScroll direction="up" delay={0.1}>
                    {story.hasSlider ? (
                      <BeforeAfterSlider
                        beforeImage={story.beforeImage}
                        afterImage={story.afterImage}
                        beforeLabel="INITIAL"
                        afterLabel="CALIBRATED"
                      />
                    ) : (
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-gold/30 shadow-2xl group">
                        <img
                          src={story.afterImage}
                          alt={story.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                        <span className="absolute bottom-4 left-4 px-3 py-1.5 rounded bg-black/80 border border-gold/50 text-[10px] font-heading tracking-widest text-gold uppercase font-bold">
                          {story.category}
                        </span>
                      </div>
                    )}
                  </RevealOnScroll>
                </div>

                {/* Narrative Details */}
                <div className={`lg:col-span-5 flex flex-col justify-between h-full space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <RevealOnScroll direction="up" delay={0.2}>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <span className="text-eyebrow text-gold font-bold">
                          {story.category}
                        </span>
                        <span className="text-xs font-heading tracking-widest text-silver/60 uppercase">
                          {story.duration}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-heading-lg font-heading uppercase tracking-tight text-white">
                          {story.name}
                        </h3>
                        <p className="text-sm font-editorial italic text-gold/80 mt-1">
                          "{story.tagline}"
                        </p>
                      </div>

                      <p className="text-body-sm text-[#D1D1D1] leading-relaxed font-sans">
                        {story.story}
                      </p>

                      {/* Stat Metrics Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-white/10">
                        {Object.entries(story.stats).map(([key, value], i) => (
                          <div key={i} className="p-3.5 rounded-lg bg-[#141414] border border-white/10 flex flex-col justify-between">
                            <span className="text-[10px] uppercase font-heading tracking-wider text-silver/60 block">
                              {key}
                            </span>
                            <span className="text-base font-heading text-gold font-bold mt-1">
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3">
                        <Button
                          to="/contact?plan=personal-training"
                          variant="primary"
                          size="md"
                          icon={ArrowRight}
                          className="w-full sm:w-auto"
                        >
                          COMMENCE THIS PROTOCOL
                        </Button>
                      </div>
                    </div>
                  </RevealOnScroll>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Conversion Banner */}
      <section className="py-20 sm:py-28 bg-bg-secondary border-t border-gold/20 text-center">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="TAKE THE FIRST STEP"
            title="YOUR TRANSFORMATION STARTS HERE"
            description="Book an initial consultation and body composition assessment at our 10,000 SQFT facility in Lohegaon, Pune."
            align="center"
          />
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" size="lg" variant="primary" icon={ArrowRight}>
              BOOK INITIAL CONSULTATION
            </Button>
            <Button to="/memberships" size="lg" variant="secondary">
              EXPLORE MEMBERSHIP TIERS
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
