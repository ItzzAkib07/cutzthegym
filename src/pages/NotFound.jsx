import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import TextReveal from '../components/animation/TextReveal';

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center pt-24 pb-20 bg-bg-primary text-center overflow-x-hidden">
      <SEO
        title="404 — Page Not Found | CUTZ THE GYM"
        description="The requested page could not be located on CUTZ THE GYM."
      />

      <Container className="max-w-xl space-y-6">
        <span className="text-eyebrow text-gold font-bold inline-block">
          ROUTE OUT OF BOUNDS
        </span>
        <h1 className="text-8xl sm:text-9xl font-hero font-extrabold text-white tracking-tight leading-none text-glow">
          404
        </h1>
        <h2 className="text-heading-lg font-heading uppercase text-white font-bold">
          PAGE NOT LOCATED
        </h2>
        <p className="text-body-sm text-silver/70 max-w-md mx-auto leading-relaxed font-sans">
          The fitness page or resource you are looking for has been moved or does not exist. Return to the arena floor or explore our specialized training disciplines.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to="/" variant="primary" size="lg" icon={Home} iconPosition="left">
            RETURN TO ARENA
          </Button>
          <Button to="/programs" variant="secondary" size="lg" icon={ArrowRight}>
            VIEW PROGRAMS
          </Button>
        </div>
      </Container>
    </div>
  );
}
