import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  Dumbbell, 
  ShieldCheck, 
  Flame, 
  Users, 
  Play, 
  Instagram, 
  MapPin, 
  Phone, 
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import MagneticButton from '../components/common/MagneticButton';
import Reveal from '../components/animation/Reveal';
import TextReveal from '../components/animation/TextReveal';
import AnimatedCounter from '../components/animation/AnimatedCounter';
import HeroScene from '../components/three/HeroScene';
import ProgramCard from '../components/cards/ProgramCard';
import FacilityCard from '../components/cards/FacilityCard';
import MembershipCard from '../components/cards/MembershipCard';
import TestimonialCard from '../components/cards/TestimonialCard';
import BeforeAfterSlider from '../components/common/BeforeAfterSlider';
import ContactForm from '../components/forms/ContactForm';
import VideoModal from '../components/media/VideoModal';
import MediaLightbox from '../components/media/MediaLightbox';
import MediaCarousel from '../components/media/MediaCarousel';

import { siteConfig } from '../data/siteConfig';
import { programsData } from '../data/programs';
import { facilitiesData } from '../data/facilities';
import { membershipsData } from '../data/memberships';
import { testimonialsData } from '../data/testimonials';
import { transformationsData } from '../data/transformations';
import { mediaData } from '../data/media';

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const featuredVideo = mediaData.find((v) => v.isFeatured && v.type === 'video') || mediaData[0];
  const primaryTransformation = transformationsData.stories[0];
  const photoList = mediaData.filter((m) => m.type === 'image');

  const handleOpenVideo = (video) => {
    setSelectedVideo(video);
    setVideoModalOpen(true);
  };

  const handleSelectMedia = (item) => {
    if (item.type === 'video') {
      setSelectedVideo(item);
      setVideoModalOpen(true);
    } else {
      const idx = photoList.findIndex((p) => p.id === item.id);
      setActiveImageIndex(idx !== -1 ? idx : 0);
      setLightboxOpen(true);
    }
  };

  return (
    <>
      <SEO
        title="CUTZ THE GYM — By IFBB Pro Krishna Chauhan | 10,000 SQFT Fitness Destination"
        description="Experience Pune's elite 10,000 SQFT fitness destination in Lohegaon. Led by IFBB Pro Krishna Chauhan. Complete with advanced bodybuilding equipment, strength arena, Zumba, Yoga, and Dance."
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION: CINEMATIC MASTERPIECE & 3D INTERACTIVE ARENA             */}
      {/* ========================================================================= */}
      <section className="relative min-h-[100svh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-bg-primary">
        {/* Background Atmosphere & High-Resolution Textured Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop"
            alt="CUTZ THE GYM Atmospheric Arena"
            className="w-full h-full object-cover filter brightness-[0.22] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/90" />
          <div className="absolute inset-0 bg-radial-gradient from-gold/10 via-transparent to-black/80" />
        </div>

        {/* 3D Scene Layer (Floating Metallic Dumbbell with Physically Based Lighting) */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-80 sm:opacity-100">
          <HeroScene />
        </div>

        {/* Hero Narrative Layer */}
        <Container className="relative z-20 text-center flex flex-col items-center">
          {/* Champion Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-gold/40 shadow-[0_0_20px_rgba(201,160,74,0.25)] mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
            <span className="text-eyebrow text-gold font-bold">
              LED BY IFBB PRO KRISHNA CHAUHAN
            </span>
          </motion.div>

          {/* Primary Oversized Display Typography (Anton font) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-xl text-white max-w-6xl drop-shadow-2xl"
          >
            YOUR BODY. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-silver to-gold-highlight text-glow">
              YOUR POWER.
            </span>{" "}
            <br />
            YOUR LEGACY.
          </motion.h1>

          {/* Secondary Editorial Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 text-base sm:text-2xl font-editorial italic text-gold font-light max-w-2xl"
          >
            Train Under a Champion. Transform Like a Champion.
          </motion.p>

          {/* Supportive Verified Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-2 text-eyebrow text-silver/70 max-w-xl"
          >
            10,000 SQFT • Full Air Conditioning • Lohegaon, Pune
          </motion.p>

          {/* Interactive CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            <MagneticButton strength={25}>
              <Button
                to="/memberships"
                size="lg"
                variant="primary"
                icon={ArrowRight}
              >
                START YOUR TRANSFORMATION
              </Button>
            </MagneticButton>

            <MagneticButton strength={20}>
              <Button to="/facilities" size="lg" variant="secondary">
                EXPLORE THE GYM
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-14 sm:mt-18 flex flex-col items-center gap-2 text-silver/40 text-caption font-bold"
          >
            <span className="text-eyebrow">DISCOVER THE ARENA</span>
            <ChevronDown className="w-4 h-4 text-gold animate-bounce" />
          </motion.div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. VERIFIED STATISTICS & PILLARS SECTION                                 */}
      {/* ========================================================================= */}
      <section className="relative z-20 py-12 bg-[#0c0c0c] border-y border-gold/20">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
            {siteConfig.stats.verifiedStats.map((stat, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="p-4 border-r last:border-r-0 border-white/5">
                  <div className="text-4xl sm:text-6xl font-hero text-white tracking-tight">
                    {stat.value === "10,000" ? (
                      <>
                        <AnimatedCounter end={10000} />
                        
                        <span className="text-gold text-2xl sm:text-3xl ml-3 font-heading">
                          {stat.suffix}
                        </span>
                      </>
                    ) : (
                      <span>
                        {stat.value}{" "}
                        <span className="text-gold text-2xl sm:text-3xl font-heading">
                          {stat.suffix}
                        </span>
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-eyebrow text-silver/80">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. BRAND INTRODUCTION: SPLIT-SCREEN EDITORIAL                             */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-bg-primary relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Visual Storytelling */}
            <div className="lg:col-span-6 relative">
              <Reveal>
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-gold/30 shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop"
                    alt="CUTZ THE GYM Interior"
                    className="w-full h-full object-cover filter brightness-85 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                  {/* Floating Metallic Stat Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-lg bg-black/80 backdrop-blur-md border border-gold/40">
                    <span className="text-eyebrow text-gold font-bold">
                      LOCATION ARCHITECTURE
                    </span>
                    <h3 className="text-heading-lg text-white mt-0.5">
                      10,000 SQFT OF SERIOUS PERFORMANCE
                    </h3>
                    <p className="text-body-sm text-silver/70 mt-1">
                      In front of Golden Winds Society, near D.Y. Patil College,
                      Lohegaon, Pune.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Editorial Manifesto */}
            <div className="lg:col-span-6 space-y-6">
              <Reveal delay={0.15}>
                <SectionHeading
                  align="left"
                  eyebrow="THE PHILOSOPHY"
                  title="MORE THAN A GYM. A STANDARD OF GREATNESS."
                  subtitle="Where elite bodybuilding pedigree meets high-precision sports science."
                />
              </Reveal>

              <Reveal delay={0.25}>
                <p className="text-body-md text-silver/80 leading-relaxed">
                  Most fitness centers offer rows of machines. CUTZ THE GYM was
                  engineered by IFBB Pro Krishna Chauhan to offer a
                  transformational culture. We operate under the philosophy that
                  every repetition, every meal, and every recovery protocol must
                  have intention.
                </p>
              </Reveal>

              <Reveal delay={0.35}>
                <div className="space-y-3 pt-2">
                  {[
                    "World-class bio-mechanically calibrated strength equipment",
                    "Unrivaled 10,000 SQFT spacious training floor with zero overcrowding",
                    "100% full air-conditioning with high-capacity fresh-air exchange",
                    "Diverse group disciplines including Zumba, Dance, Yoga, and Kids training",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-body-sm text-silver/90 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.45}>
                <div className="pt-6">
                  <Button
                    to="/about"
                    variant="primary"
                    size="md"
                    icon={ArrowRight}
                  >
                    DISCOVER OUR STORY
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. SERVICES PREVIEW: INTERACTIVE PROGRAM CARDS                             */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-bg-secondary relative border-t border-white/5">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="OUR PROGRAMS"
              title="FIND THE RIGHT FITNESS PROGRAM FOR YOUR GOALS"
              subtitle="PRECISION TRAINING PROTOCOLS"
              description="Explore our specialized training tracks designed under IFBB Pro standards to sculpt and strengthen every muscle group."
            />
          </Reveal>

          {/* 6 Core Highlight Cards in Equal-Height CSS Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {programsData.slice(0, 6).map((program, idx) => (
              <Reveal key={program.id} delay={idx * 0.08} className="h-full">
                <ProgramCard program={program} index={idx} />
              </Reveal>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button
              to="/programs"
              variant="outline"
              size="lg"
              icon={ArrowRight}
            >
              EXPLORE ALL 10 DISCIPLINES & SERVICES
            </Button>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. FACILITY SHOWCASE: 10,000 SQFT ARENA                                  */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-bg-primary relative overflow-hidden">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="OUR FACILITIES"
              title="EXPLORE OUR 10,000 SQFT FITNESS SPACE"
              subtitle="PUNE'S BENCHMARK BODYBUILDING ARENA"
              description="Constructed without compromise: elite pin-loaded machines, Olympic platforms, dedicated studio spaces, and hospital-grade sanitization."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {facilitiesData.slice(0, 6).map((facility, idx) => (
              <Reveal key={facility.id} delay={idx * 0.08} className="h-full">
                <FacilityCard facility={facility} />
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              to="/facilities"
              variant="secondary"
              size="md"
              icon={ArrowRight}
            >
              VIEW COMPREHENSIVE FACILITY TOUR
            </Button>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. FOUNDER SPOTLIGHT: IFBB PRO KRISHNA CHAUHAN                            */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#0a0a0a] border-y border-gold/25 relative overflow-hidden">
        {/* Ambient Gold Halo */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-gold/10 blur-[160px] pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Portrait Box */}
            <div className="lg:col-span-5 relative">
              <Reveal>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-gold shadow-[0_0_40px_rgba(201,160,74,0.3)]">
                  <img
                    src={siteConfig.founder.image}
                    alt="IFBB Pro Krishna Chauhan"
                    className="w-full h-full object-cover object-top filter contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-3 py-1 rounded bg-gold-gradient text-black text-eyebrow font-extrabold uppercase">
                      FOUNDER & HEAD COACH
                    </span>
                    <h3 className="text-heading-xl text-white mt-2 leading-none">
                      KRISHNA CHAUHAN
                    </h3>
                    <p className="text-eyebrow text-gold font-bold mt-1">
                      IFBB PRO ATHLETE
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Founder Narrative & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal delay={0.15}>
                <SectionHeading
                  align="left"
                  eyebrow="OUR LEADERSHIP"
                  title="TRAIN UNDER AN IFBB PRO CHAMPION"
                  subtitle="PERFORM WITH PURPOSE"
                />
              </Reveal>

              <Reveal delay={0.25}>
                <blockquote className="border-l-2 border-gold pl-4 text-body-lg text-silver/90 italic font-editorial leading-relaxed">
                  "{siteConfig.founder.quote}"
                </blockquote>
              </Reveal>

              <Reveal delay={0.35}>
                <p className="text-body-md text-silver/80 leading-relaxed">
                  {siteConfig.founder.bio}
                </p>
              </Reveal>

              <Reveal delay={0.45}>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Button
                    to="/trainers"
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                  >
                    MEET YOUR TRAINER
                  </Button>
                  <Button to="/contact" variant="outline" size="lg">
                    BOOK 1-ON-1 CONSULTATION
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. GROUP FITNESS SHOWCASE: DANCE, ZUMBA, YOGA & KIDS                     */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-bg-secondary relative">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="GROUP FITNESS & WELLNESS"
              title="COMMUNITY STUDIO CLASSES"
              subtitle="DANCE, ZUMBA, YOGA & KIDS ACTIVITIES"
              description="Fitness is multifaceted. Our wooden-sprung studio hosts dynamic sessions designed for high-calorie cardio, stress release, and athletic mobility."
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {[
              {
                title: "Kids Activities",
                slug: "kids-activities",
                desc: "Agility, balance & motor skills for young champions.",
                image:
                  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop",
              },
              {
                title: "Dance Aerobics",
                slug: "dance",
                desc: "Rhythmic cardiovascular workouts set to energizing beats.",
                image:
                  "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800&auto=format&fit=crop",
              },
              {
                title: "Zumba Fitness",
                slug: "zumba",
                desc: "High-octane Latin dance intervals that burn up to 600+ kcal.",
                image:
                  "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
              },
              {
                title: "Yoga & Mindfulness",
                slug: "yoga",
                desc: "Restorative flows, joint decompression, and breathwork.",
                image:
                  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
              },
            ].map((group, idx) => (
              <Reveal key={group.slug} delay={idx * 0.08} className="h-full">
                <Link
                  to={`/programs/${group.slug}`}
                  className="group relative rounded-xl overflow-hidden aspect-[3/4] block bg-black border border-white/10 hover:border-gold transition-all duration-500 shadow-xl h-full hover:-translate-y-1"
                >
                  <img
                    src={group.image}
                    alt={group.title}
                    className="w-full h-full object-cover filter brightness-70 group-hover:brightness-90 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-eyebrow text-gold font-bold block mb-1">
                      STUDIO CLASS
                    </span>
                    <h3 className="text-heading-lg text-white group-hover:text-gold transition-colors leading-tight">
                      {group.title}
                    </h3>
                    <p className="text-body-sm text-silver/80 mt-1 line-clamp-2">
                      {group.desc}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 8. TRANSFORMATION STORYTELLING & INTERACTIVE SLIDER                      */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-bg-primary relative overflow-hidden border-t border-white/5">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="PROVEN RESULTS"
              title="REAL PEOPLE. REAL FITNESS JOURNEYS."
              subtitle="DEDICATION. DISCIPLINE. PROGRESSION."
              description="Every fitness journey is unique. Discover the dedication, discipline, and progress behind every transformation."
            />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Interactive Before / After Slider */}
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <BeforeAfterSlider
                  beforeImage={primaryTransformation.beforeImage}
                  afterImage={primaryTransformation.afterImage}
                  beforeLabel="INITIAL"
                  afterLabel="CALIBRATED"
                />
              </Reveal>
            </div>

            {/* Metrics & Story Box */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal delay={0.25}>
                <div className="p-6 sm:p-7 rounded-xl bg-bg-card border border-white/10 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-eyebrow text-gold font-bold">
                      {primaryTransformation.category}
                    </span>
                    <span className="text-caption text-silver/60">
                      {primaryTransformation.duration}
                    </span>
                  </div>

                  <h3 className="text-heading-lg text-white leading-tight">
                    {primaryTransformation.name}
                  </h3>

                  <p className="text-body-sm text-[#D1D1D1] leading-relaxed font-sans">
                    {primaryTransformation.story}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
                    <div className="p-3 rounded bg-black/50 border border-white/5">
                      <span className="text-eyebrow text-silver/50 block">
                        FOCUS AREA
                      </span>
                      <p className="text-lg font-heading text-gold">
                        {primaryTransformation.stats.focus || "Hypertrophy"}
                      </p>
                    </div>
                    <div className="p-3 rounded bg-black/50 border border-white/5">
                      <span className="text-eyebrow text-silver/50 block">
                        CALIBRATION
                      </span>
                      <p className="text-lg font-heading text-white">
                        {primaryTransformation.duration}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      to="/transformations"
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      VIEW ALL FITNESS JOURNEYS
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 9. CUTZ MEDIA ARENA                                                       */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#050505] relative border-y border-gold/20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="CUTZ MEDIA ARENA"
              title="INSIDE CUTZ. BEYOND LIMITS."
              subtitle="WITNESS THE ATMOSPHERE & METHODOLOGY"
              description="Explore the energy, discipline, training sessions, and experiences that define the Cutz The Gym community."
            />
          </Reveal>

          {/* Featured Video Teaser Card */}
          <Reveal delay={0.15}>
            <div
              onClick={() => handleOpenVideo(featuredVideo)}
              className="group relative aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden cursor-pointer border border-gold/40 shadow-[0_0_50px_rgba(201,160,74,0.25)] hover:border-gold transition-all mb-16"
              data-cursor="video"
            >
              <img
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                className="w-full h-full object-cover filter brightness-[0.72] group-hover:brightness-90 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Pulsing Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-gold-gradient text-black flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 sm:w-10 h-8 sm:h-10 fill-black translate-x-0.5" />
                </div>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-eyebrow text-gold font-bold block mb-1">
                    FEATURED WALKTHROUGH • {featuredVideo.category}
                  </span>
                  <h3 className="text-heading-md sm:text-heading-xl text-white leading-tight">
                    {featuredVideo.title}
                  </h3>
                </div>
                {featuredVideo.duration && (
                  <span className="text-caption font-mono font-bold text-silver/80 px-2.5 py-1 rounded bg-black/70 border border-white/10">
                    {featuredVideo.duration}
                  </span>
                )}
              </div>
            </div>
          </Reveal>

          {/* Media Carousel */}
          <Reveal delay={0.25}>
            <MediaCarousel
              mediaList={mediaData}
              onSelectMedia={handleSelectMedia}
            />
          </Reveal>

          <div className="mt-14 text-center">
            <Button to="/media" variant="primary" size="lg" icon={ArrowRight}>
              EXPLORE ALL MEDIA & ARCHIVES
            </Button>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 10. MEMBERSHIP PREVIEW                                                    */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-bg-secondary relative">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="OUR MEMBERSHIPS"
              title="EXPLORE MEMBERSHIP PLANS AT CUTZ THE GYM"
              subtitle="INVEST IN YOURSELF. THE RESULTS BEGIN HERE."
              description="Transparent, configurable memberships. Train all year round under the standards set by IFBB Pro Krishna Chauhan."
            />
          </Reveal>

          {/* Pricing Grid with Equal Height */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {membershipsData.packages.slice(0, 3).map((pkg, idx) => (
              <Reveal key={pkg.id} delay={idx * 0.1} className="h-full">
                <MembershipCard pkg={pkg} />
              </Reveal>
            ))}
          </div>

          <div className="mt-14 text-center space-y-4">
            <p className="text-caption text-silver/60 max-w-xl mx-auto italic font-editorial">
              {membershipsData.disclaimer}
            </p>
            <Button
              to="/memberships"
              variant="primary"
              size="lg"
              icon={ArrowRight}
            >
              VIEW ALL PACKAGES & FULL FEATURE COMPARISON
            </Button>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 11. MEMBER TESTIMONIALS                                                   */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-bg-primary relative border-t border-white/5">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="MEMBER EXPERIENCES"
              title="WHAT ATHLETES SAY ABOUT CUTZ THE GYM"
              subtitle="Authentic feedback from our Lohegaon members and athletes."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {testimonialsData.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.08} className="h-full">
                <TestimonialCard item={item} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 12. INSTAGRAM SHOWCASE                                                    */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#070707] border-y border-white/5">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
            <div>
              <span className="text-eyebrow text-gold font-bold">
                COMMUNITY FEED
              </span>
              <h3 className="text-heading-lg text-white mt-1">
                FOLLOW OUR JOURNEY @CUTZTHEGYM
              </h3>
            </div>
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white/5 border border-gold/30 text-btn text-white hover:text-gold hover:border-gold transition-colors"
            >
              <Instagram className="w-4 h-4 text-gold" />
              <span>FOLLOW ON INSTAGRAM</span>
            </a>
          </div>

          {/* Instagram-style visual grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop",
            ].map((img, i) => (
              <a
                key={i}
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden border border-white/5"
              >
                <img
                  src={img}
                  alt={`CUTZ Instagram Post ${i + 1}`}
                  className="w-full h-full object-cover filter brightness-85 group-hover:brightness-100 group-hover:scale-110 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-gold" />
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 13. LOCATION & CONTACT PREVIEW                                            */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 bg-bg-secondary relative">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="OUR LOCATION"
              title="VISIT CUTZ THE GYM IN LOHEGAON, PUNE"
              subtitle="LOCATED IN FRONT OF GOLDEN WINDS SOCIETY, NEAR D.Y. PATIL COLLEGE"
            />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Location & Google Map Embed */}
            <div className="lg:col-span-6 space-y-6">
              <Reveal delay={0.15}>
                <div className="p-6 sm:p-7 rounded-xl bg-bg-card border border-white/10 space-y-4">
                  <h3 className="text-heading-md text-white">
                    OFFICIAL GYM LOCATION
                  </h3>
                  <div className="space-y-2 text-body-sm text-silver/80">
                    <p className="font-semibold text-white">CUTZ THE GYM</p>
                    <p>{siteConfig.location.fullAddress}</p>
                    <p className="text-gold pt-1">
                      Direct: {siteConfig.contact.formattedPrimaryPhone} /{" "}
                      {siteConfig.contact.formattedSecondaryPhone}
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href={siteConfig.location.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-btn text-gold hover:underline"
                    >
                      <span>OPEN IN GOOGLE MAPS</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="aspect-[16/10] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <iframe
                    title="CUTZ THE GYM Location"
                    src={siteConfig.location.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>

            {/* Right: Fast Contact & Consultation Form */}
            <div className="lg:col-span-6">
              <Reveal delay={0.35}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        video={selectedVideo}
      />

      {/* Media Lightbox */}
      <MediaLightbox
        mediaList={photoList}
        currentIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setActiveImageIndex(idx)}
      />
    </>
  );
}
