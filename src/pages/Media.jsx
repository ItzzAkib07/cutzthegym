import React, { useState } from 'react';
import { Play, Image, Sparkles, Filter, Film, ArrowRight } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import TextReveal from '../components/animation/TextReveal';
import RevealOnScroll from '../components/animation/RevealOnScroll';
import MediaCard from '../components/media/MediaCard';
import VideoModal from '../components/media/VideoModal';
import MediaLightbox from '../components/media/MediaLightbox';
import { mediaData } from '../data/media';
import { mediaCategories } from '../data/mediaCategories';

export default function Media() {
  const [selectedCategory, setSelectedCategory] = useState('All Media');
  const [mediaTypeFilter, setMediaTypeFilter] = useState('all'); // 'all' | 'video' | 'image'
  const [activeVideo, setActiveVideo] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Filter logic
  const filteredMedia = mediaData.filter((item) => {
    const matchesCategory = selectedCategory === 'All Media' || item.category === selectedCategory;
    const matchesType = mediaTypeFilter === 'all' || item.type === mediaTypeFilter;
    return matchesCategory && matchesType;
  });

  const photoList = filteredMedia.filter((m) => m.type === 'image');

  const handleSelectMedia = (item) => {
    if (item.type === 'video') {
      setActiveVideo(item);
      setVideoModalOpen(true);
    } else {
      const idx = photoList.findIndex((p) => p.id === item.id);
      setActiveImageIndex(idx !== -1 ? idx : 0);
      setLightboxOpen(true);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-bg-primary overflow-x-hidden">
      <SEO
        title="Cutz Media Arena — Videos & Gym Photography | CUTZ THE GYM Pune"
        description="Explore the energy, discipline, training sessions, and experiences that define the Cutz The Gym community in Lohegaon, Pune."
      />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-bg-secondary border-b border-gold/20 overflow-hidden text-center">
        <Container>
          <span className="text-eyebrow text-gold font-bold inline-block mb-3">
            CINEMATIC ARCHIVE
          </span>
          <h1 className="text-display-xl font-hero uppercase text-white tracking-tight">
            <TextReveal text="CUTZ MEDIA ARENA" stagger={0.03} />
          </h1>
          <p className="mt-4 text-body-lg font-editorial italic text-gold max-w-2xl mx-auto">
            "Inside Cutz. Beyond Limits. Explore the discipline, machinery, and championship sessions."
          </p>
        </Container>
      </section>

      {/* Media Arena Grid & Filters */}
      <section className="py-16 sm:py-24">
        <Container>
          {/* Top Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-white/10">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {mediaCategories.slice(0, 7).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-heading tracking-wider uppercase transition-all ${
                    selectedCategory === cat
                      ? 'bg-gold-gradient text-black font-extrabold shadow-gold-glow'
                      : 'bg-[#141414] border border-white/10 text-silver/80 hover:text-white hover:border-gold/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Type Filter Toggles */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#141414] border border-white/10 self-start md:self-auto">
              <button
                onClick={() => setMediaTypeFilter('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-heading tracking-wider uppercase transition-colors ${
                  mediaTypeFilter === 'all' ? 'bg-gold text-black font-bold' : 'text-silver/70 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setMediaTypeFilter('video')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-heading tracking-wider uppercase transition-colors ${
                  mediaTypeFilter === 'video' ? 'bg-gold text-black font-bold' : 'text-silver/70 hover:text-white'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>Video</span>
              </button>
              <button
                onClick={() => setMediaTypeFilter('image')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-heading tracking-wider uppercase transition-colors ${
                  mediaTypeFilter === 'image' ? 'bg-gold text-black font-bold' : 'text-silver/70 hover:text-white'
                }`}
              >
                <Image className="w-3.5 h-3.5" />
                <span>Photos</span>
              </button>
            </div>
          </div>

          {/* Grid of Media Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredMedia.map((item, idx) => (
              <RevealOnScroll key={item.id} direction="up" delay={idx * 0.05} className="h-full">
                <MediaCard media={item} onSelect={handleSelectMedia} />
              </RevealOnScroll>
            ))}
          </div>

          {filteredMedia.length === 0 && (
            <div className="py-20 text-center space-y-4">
              <Film className="w-12 h-12 text-gold/40 mx-auto" />
              <p className="text-body-md text-silver/70">
                No media assets found matching the selected category and filter.
              </p>
              <button
                onClick={() => { setSelectedCategory('All Media'); setMediaTypeFilter('all'); }}
                className="text-xs font-heading text-gold uppercase underline"
              >
                Reset Media Filters
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* Lightbox & Video Modal */}
      <VideoModal
        video={activeVideo}
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      <MediaLightbox
        mediaList={photoList}
        currentIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setActiveImageIndex(idx)}
      />

      {/* Conversion Banner */}
      <section className="py-20 bg-bg-secondary border-t border-gold/20 text-center">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="VISIT IN PERSON"
            title="EXPERIENCE CUTZ ON THE FLOOR"
            description="Nothing matches the sensory reality of training in our 10,000 SQFT climate-controlled arena."
            align="center"
          />
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" size="lg" variant="primary" icon={ArrowRight}>
              BOOK FACILITY WALKTHROUGH
            </Button>
            <Button to="/memberships" size="lg" variant="secondary">
              VIEW MEMBERSHIPS
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

