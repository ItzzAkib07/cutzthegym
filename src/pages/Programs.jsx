import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import ProgramCard from '../components/cards/ProgramCard';
import Reveal from '../components/animation/Reveal';
import Button from '../components/common/Button';
import { programsData } from '../data/programs';

export default function Programs() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Bodybuilding & Physique', 'Conditioning & Shred', 'Power & Performance', 'Elite Mentorship', 'Nutrition Science', 'Group Studio', 'Mind & Mobility', 'Youth & Developmental'];

  const filteredPrograms = selectedCategory === 'All'
    ? programsData
    : programsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-24 pb-20 bg-bg-primary">
      <SEO
        title="Training Programs & Fitness Services — CUTZ THE GYM Pune"
        description="Explore 10 elite fitness disciplines at CUTZ THE GYM: Muscle Building, Fat Loss, Strength Training, Body Composition, Personal Training, Diet Plans, Dance, Zumba, and Yoga in Lohegaon."
      />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-bg-secondary border-b border-gold/20 overflow-hidden text-center">
        <Container>
          <span className="text-eyebrow text-gold font-bold">
            10 CHAMPIONSHIP DISCIPLINES
          </span>
          <h1 className="text-display-lg text-white mt-2 leading-tight">
            FIND THE RIGHT FITNESS PROGRAM FOR YOUR GOALS
          </h1>
          <p className="mt-4 text-body-lg font-editorial italic text-gold max-w-2xl mx-auto">
            "Engineered for hypertrophy, metabolic vigor, athletic resilience, and community vitality."
          </p>
        </Container>
      </section>

      {/* Main Grid with Category Filters */}
      <section className="py-16 sm:py-24">
        <Container>
          {/* Section Heading with Part 10 format */}
          <Reveal>
            <SectionHeading
              eyebrow="OUR PROGRAMS"
              title="EXPLORE THE 10 TRAINING DISCIPLINES"
              subtitle="TAILORED EXERCISE & NUTRITION ARCHITECTURES"
              description="Select a discipline below to view biomechanical focuses, target audiences, and specific training deliverables."
            />
          </Reveal>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-full text-eyebrow transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gold-gradient text-black font-extrabold shadow-gold-glow scale-102'
                    : 'bg-[#141414] border border-white/10 text-silver/80 hover:text-white hover:border-gold/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid with Equal Heights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredPrograms.map((program, idx) => (
              <Reveal key={program.id} delay={idx * 0.06} className="h-full">
                <ProgramCard program={program} index={idx} />
              </Reveal>
            ))}
          </div>

          {/* Bottom Conversion Banner */}
          <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#171717] via-[#121212] to-[#171717] border border-gold/30 text-center space-y-4">
            <span className="text-eyebrow text-gold font-bold">
              UNSURE WHICH PROTOCOL FITS YOU?
            </span>
            <h3 className="text-heading-xl text-white">
              GET A CUSTOM EVALUATION AT OUR RECEPTION
            </h3>
            <p className="text-body-sm text-silver/70 max-w-xl mx-auto">
              Our head coaches analyze your mobility, joint mechanics, and body composition to recommend the exact regimen tailored to your timeline.
            </p>
            <div className="pt-2">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
                BOOK FITNESS EVALUATION
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
