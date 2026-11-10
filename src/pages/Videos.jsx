import React, { useState } from 'react';
import { Film, Play, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import TextReveal from '../components/animation/TextReveal';
import RevealOnScroll from '../components/animation/RevealOnScroll';
import MediaCard from '../components/media/MediaCard';
import VideoModal from '../components/media/VideoModal';
import { mediaData } from '../data/media';

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const videoList = mediaData.filter((item) => item.type === 'video');

  const handleSelectVideo = (video) => {
    setActiveVideo(video);
    setVideoModalOpen(true);
  };

  return (
    <div className="pt-24 pb-20 bg-bg-primary overflow-x-hidden">
      <SEO
        title="Training Footage & Gym Walkthroughs — CUTZ THE GYM Pune"
        description="Watch exclusive training clips, biomechanical execution guides, and facility walkthroughs filmed at CUTZ THE GYM in Lohegaon, Pune."
      />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 bg-bg-secondary border-b border-gold/20 overflow-hidden text-center">
        <Container>
          <span className="text-eyebrow text-gold font-bold inline-block mb-3">
            MOTION ARCHIVE
          </span>
          <h1 className="text-display-xl font-hero uppercase text-white tracking-tight">
            <TextReveal text="CINEMATIC VIDEO FOOTAGE" stagger={0.03} />
          </h1>
          <p className="mt-4 text-body-lg font-editorial italic text-gold max-w-2xl mx-auto">
            "High-definition walkthroughs, exercise breakdowns, and championship intensity."
          </p>
        </Container>
      </section>

      {/* Video Showcase Grid */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <SectionHeading
              eyebrow="OFFICIAL REEL"
              title="EXPLORE ALL VIDEO RELEASES"
              description="Biomechanical execution, athlete sessions, and facility walkthroughs at CUTZ THE GYM."
              align="left"
              className="mb-0"
            />
            <Button to="/media" variant="secondary" size="sm" icon={ArrowRight}>
              EXPLORE FULL MEDIA ARENA
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {videoList.map((video, idx) => (
              <RevealOnScroll key={video.id} direction="up" delay={idx * 0.06} className="h-full">
                <MediaCard media={video} onSelect={handleSelectVideo} />
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Video Modal Player */}
      <VideoModal
        video={activeVideo}
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      {/* Conversion Banner */}
      <section className="py-20 bg-bg-secondary border-t border-gold/20 text-center">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="TRAIN WITH US"
            title="READY FOR YOUR FIRST SESSION?"
            description="Book a consultation at CUTZ THE GYM in Lohegaon, Pune."
            align="center"
          />
          <div className="mt-8">
            <Button to="/contact" size="lg" variant="primary" icon={ArrowRight}>
              COMMENCE YOUR MEMBERSHIP
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
