import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, Instagram, Award, Users } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Reveal from '../components/animation/Reveal';
import TrainerCard from '../components/cards/TrainerCard';
import TrainerProfileModal from '../components/trainers/TrainerProfileModal';
import { trainersData, trainerCategories } from '../data/trainers';
import { siteConfig } from '../data/siteConfig';

export default function Trainers() {
  const [selectedCategory, setSelectedCategory] = useState('All Trainers');
  const [activeTrainerModal, setActiveTrainerModal] = useState(null);

  const founder = trainersData.find((t) => t.isFounder) || trainersData[0];

  // Filter calculation with live record counts
  const filteredTrainers = selectedCategory === 'All Trainers'
    ? trainersData
    : trainersData.filter((t) => t.category === selectedCategory);

  const getCategoryCount = (category) => {
    if (category === 'All Trainers') return trainersData.length;
    return trainersData.filter((t) => t.category === category).length;
  };

  return (
    <div className="pt-24 pb-20 bg-bg-primary">
      <SEO
        title="Meet Our Expert Coaching Staff — CUTZ THE GYM Pune"
        description="Meet the elite coaching staff at CUTZ THE GYM in Lohegaon, Pune led by IFBB Pro Krishna Chauhan. Strength, hypertrophy, Zumba, Yoga, and 1-on-1 personal trainers."
      />

      {/* 1. Page Hero (Part 8 Exact Specification) */}
      <section className="relative py-20 sm:py-28 bg-bg-secondary border-b border-gold/20 overflow-hidden text-center">
        <div className="absolute inset-0 bg-radial-gradient from-gold/10 via-transparent to-black pointer-events-none" />
        <Container className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-eyebrow text-gold font-bold">
              ELITE COACHING DISCOVERY
            </span>
          </div>

          <h1 className="text-display-lg text-white mt-1 leading-tight">
            MEET THE EXPERTS BEHIND YOUR TRANSFORMATION.
          </h1>

          <p className="mt-4 text-body-lg text-silver/80 max-w-2xl mx-auto">
            Professional guidance, structured training, and a team committed to helping you become stronger.
          </p>
        </Container>
      </section>

      {/* 2. Founder Spotlight Master Showcase */}
      <section className="py-20 sm:py-28 bg-[#0a0a0a] border-b border-white/5">
        <Container>
          <Reveal>
            <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#171717] via-[#121212] to-[#171717] border-2 border-gold shadow-[0_0_45px_rgba(201,160,74,0.25)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Portrait */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-gold/40 shadow-2xl">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover object-top filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  </div>
                </div>

                {/* Narrative */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-gradient text-black">
                    <Sparkles className="w-3.5 h-3.5 text-black" />
                    <span className="text-eyebrow font-extrabold tracking-widest uppercase">
                      FOUNDER & HEAD COACH
                    </span>
                  </div>

                  <h2 className="text-display-lg text-white leading-tight">
                    {founder.name}
                  </h2>
                  <p className="text-eyebrow text-gold tracking-widest uppercase font-semibold">
                    {founder.title} — {founder.specialty}
                  </p>

                  <p className="text-body-md text-silver/80 leading-relaxed">
                    {founder.bio}
                  </p>

                  <blockquote className="border-l-2 border-gold pl-4 text-body-lg text-silver/90 italic font-editorial">
                    "{founder.philosophy}"
                  </blockquote>

                  {founder.signatureFocus && (
                    <div className="space-y-2 pt-2">
                      <span className="text-eyebrow text-white/50 block">
                        CHAMPIONSHIP FOCUS:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {founder.signatureFocus.map((f, i) => (
                          <div key={i} className="flex items-center gap-2 text-body-sm text-silver/90">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Button 
                      onClick={() => setActiveTrainerModal(founder)} 
                      variant="primary" 
                      size="md" 
                      icon={ArrowRight}
                    >
                      VIEW COMPLETE BIO & CREDENTIALS
                    </Button>
                    <a
                      href={siteConfig.contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded border border-white/20 text-btn text-white hover:border-gold hover:text-gold transition-colors"
                    >
                      <Instagram className="w-4 h-4 text-gold" />
                      <span>INSTAGRAM</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 3. Category Filter Navigation & Roster Grid */}
      <section className="py-20 sm:py-28 bg-bg-primary">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="OUR COACHING STAFF"
              title="EXPLORE THE SPECIALIZED DIRECTORY"
              subtitle="Filter by discipline: strength, personal coaching, group fitness, Zumba, or yoga."
              description="Every trainer at CUTZ THE GYM brings certified qualifications, biomechanical discipline, and genuine dedication to your physical evolution."
            />
          </Reveal>

          {/* Horizontal Category Navigation with Counts (Part 8) */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-12 scrollbar-none">
            {trainerCategories.map((cat) => {
              const count = getCategoryCount(cat);
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-full text-eyebrow whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-gold-gradient text-black font-extrabold shadow-gold-glow scale-102'
                      : 'bg-[#141414] border border-white/10 text-silver/80 hover:text-white hover:border-gold/40'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    isActive ? 'bg-black/25 text-black font-bold' : 'bg-white/10 text-silver/60'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Equal-Height Responsive Trainer Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          >
            <AnimatePresence>
              {filteredTrainers.length > 0 ? (
                filteredTrainers.map((coach) => (
                  <motion.div
                    layout
                    key={coach.id}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <TrainerCard
                      trainer={coach}
                      onViewProfile={(t) => setActiveTrainerModal(t)}
                    />
                  </motion.div>
                ))
              ) : (
                /* Empty State (Part 8) */
                <div className="col-span-full py-16 text-center rounded-2xl bg-bg-card border border-white/10 space-y-4">
                  <Users className="w-12 h-12 text-gold/40 mx-auto" />
                  <h3 className="text-heading-md text-white">
                    NO TRAINERS CURRENTLY LISTED UNDER "{selectedCategory}"
                  </h3>
                  <p className="text-body-sm text-silver/60 max-w-md mx-auto">
                    New coaches and instructors are regularly added. Select "All Trainers" to browse our active staff.
                  </p>
                  <button
                    onClick={() => setSelectedCategory('All Trainers')}
                    className="text-btn text-gold hover:underline uppercase"
                  >
                    View All Active Trainers
                  </button>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* Trainer Profile Modal (Part 8) */}
      <TrainerProfileModal
        isOpen={!!activeTrainerModal}
        onClose={() => setActiveTrainerModal(null)}
        trainer={activeTrainerModal}
      />
    </div>
  );
}
