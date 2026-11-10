import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Sparkles, Filter, ArrowRight } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Lightbox from '../components/gallery/Lightbox';
import TextReveal from '../components/animation/TextReveal';
import RevealOnScroll from '../components/animation/RevealOnScroll';
import { galleryItems, galleryCategories } from '../data/gallery';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-24 pb-20 bg-bg-primary overflow-x-hidden">
      <SEO
        title="Visual Gallery — 10,000 SQFT Gym Interior & Training | CUTZ THE GYM Pune"
        description="View the visual gallery of CUTZ THE GYM in Lohegaon, Pune. Explore our heavy lifting zones, plate-loaded machines, cardio arenas, and group fitness studios."
      />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-bg-secondary border-b border-gold/20 overflow-hidden text-center">
        <Container>
          <span className="text-eyebrow text-gold font-bold inline-block mb-3">
            THE VISUAL EXPERIENCE
          </span>
          <h1 className="text-display-xl font-hero uppercase text-white tracking-tight">
            <TextReveal text="ARENA MEDIA GALLERY" stagger={0.03} />
          </h1>
          <p className="mt-4 text-body-lg font-editorial italic text-gold max-w-2xl mx-auto">
            "A photographic glimpse inside Pune's premier 10,000 SQFT fitness destination."
          </p>
        </Container>
      </section>

      {/* Main Gallery Section */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <SectionHeading
              eyebrow="OUR GALLERY"
              title="EXPLORE THE TRAINING ARENA IN PHOTOGRAPHS"
              subtitle="INTERIOR, EQUIPMENT & COMMUNITY SESSIONS"
              description="Filter by area of interest or click any image to view in high definition."
              align="left"
              className="mb-0"
            />
            <Button to="/media" variant="secondary" size="sm" icon={ArrowRight}>
              VISIT FULL MEDIA ARENA
            </Button>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-start gap-2 mb-12">
            {galleryCategories.map((cat) => (
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

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item, idx) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openLightbox(idx)}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer bg-black border border-white/10 hover:border-gold/50 shadow-xl hover:-translate-y-1.5 transition-all duration-500"
                  data-cursor="pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover filter brightness-[0.75] group-hover:brightness-100 group-hover:scale-108 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-gold/40 text-caption text-gold font-bold uppercase">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-gold" />
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-heading-md font-heading uppercase text-white">
                      {item.title}
                    </h4>
                    {item.caption && (
                      <p className="text-caption text-[#B8B8B8] mt-0.5 line-clamp-1 font-sans">{item.caption}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={filteredItems}
        currentIndex={currentIndex}
        onNavigate={setCurrentIndex}
      />
    </div>
  );
}
