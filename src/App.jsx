import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Preloader from './components/common/Preloader';
import PageTransition from './components/common/PageTransition';

// Lazy-loaded Pages for peak bundle splitting & speed
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Facilities = lazy(() => import('./pages/Facilities'));
const Programs = lazy(() => import('./pages/Programs'));
const ProgramDetails = lazy(() => import('./pages/ProgramDetails'));
const Trainers = lazy(() => import('./pages/Trainers'));
const Memberships = lazy(() => import('./pages/Memberships'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Videos = lazy(() => import('./pages/Videos'));
const Media = lazy(() => import('./pages/Media'));
const Transformations = lazy(() => import('./pages/Transformations'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#080808]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-full border-2 border-gold/30 border-t-gold animate-spin shadow-gold-glow" />
        <span className="text-[10px] font-heading tracking-[0.25em] uppercase text-silver/60">
          LOADING CALIBRATION...
        </span>
      </div>
    </div>
  );
}

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const location = useLocation();

  // Scroll to top immediately on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Preloader onComplete={() => setPreloaderDone(true)} />
      <MainLayout>
        <Suspense fallback={<PageLoader />}>
          <PageTransition key={location.pathname}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/programs/:slug" element={<ProgramDetails />} />
              <Route path="/trainers" element={<Trainers />} />
              <Route path="/media" element={<Media />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/memberships" element={<Memberships />} />
              <Route path="/transformations" element={<Transformations />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </Suspense>
      </MainLayout>
    </>
  );
}
