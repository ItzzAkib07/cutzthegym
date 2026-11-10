import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Sparkles, Maximize2 } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Reveal from '../components/animation/Reveal';
import FacilityCard from '../components/cards/FacilityCard';
import Lightbox from '../components/gallery/Lightbox';
import { facilitiesData } from '../data/facilities';
import { galleryItems } from '../data/gallery';

export default function Facilities() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-24 pb-20 bg-bg-primary">
      <SEO
        title="10,000 SQFT World-Class Facilities — CUTZ THE GYM Pune"
        description="Explore the expansive 10,000 SQFT facilities at CUTZ THE GYM in Lohegaon, Pune: Heavy strength arenas, plate-loaded machines, full AC, sprung dance studio, and clean locker amenities."
      />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-bg-secondary border-b border-gold/20 overflow-hidden text-center">
        <Container>
          <span className="text-eyebrow text-gold font-bold">
            10,000 SQFT ARCHITECTURAL SCALE
          </span>
          <h1 className="text-display-lg text-white mt-2 leading-tight">
            WORLD-CLASS GYM FACILITIES
          </h1>
          <p className="mt-4 text-body-lg font-editorial italic text-gold max-w-2xl mx-auto">
            "Engineered for serious lifters, athletic mobility, and community wellness in Lohegaon, Pune."
          </p>
        </Container>
      </section>

      {/* Facility Grid with Equal Height CSS Grid */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="OUR FACILITIES"
              title="EXPLORE OUR 10,000 SQFT FITNESS SPACE"
              subtitle="PURPOSE-BUILT TRAINING ENVIRONMENTS"
              description="Every square foot is calibrated for movement efficiency, heavy resistance tension, and athletic safety."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {facilitiesData.map((facility, idx) => (
              <Reveal key={facility.id} delay={idx * 0.08} className="h-full">
                <FacilityCard facility={facility} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Interactive Facility Gallery Grid with Lightbox */}
      <section className="py-20 bg-bg-secondary border-t border-white/5">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="ARENA PHOTOGRAPHY"
              title="INSPECT THE TRAINING FLOOR UP CLOSE"
              subtitle="VISUAL EVIDENCE & SPECIFICATIONS"
              description="Click any photograph to view high-resolution details in our full-screen lightbox."
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.slice(0, 6).map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.06}>
                <div
                  onClick={() => openLightbox(idx)}
                  className="group relative rounded-xl overflow-hidden aspect-[16/11] cursor-pointer bg-black border border-white/10 hover:border-gold/60 transition-all duration-300 shadow-xl hover:-translate-y-1"
                  data-cursor="pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover filter brightness-75 group-hover:brightness-95 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-gold/40 text-caption text-gold font-bold uppercase">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Expand Icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-gold" />
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-heading-md text-white">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button to="/gallery" variant="outline" size="md" icon={ArrowRight}>
              OPEN COMPREHENSIVE IMAGE GALLERY
            </Button>
          </div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={galleryItems}
        currentIndex={currentImageIndex}
        onNavigate={setCurrentImageIndex}
      />
    </div>
  );
}
