import React from 'react';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import CustomCursor from '../components/common/CustomCursor';
import ScrollProgress from '../components/common/ScrollProgress';
import BackToTop from '../components/common/BackToTop';
import FloatingWhatsApp from '../components/navigation/FloatingWhatsApp';
import StickyMobileCTA from '../components/navigation/StickyMobileCTA';
import SmoothScroll from '../components/animation/SmoothScroll';

export default function MainLayout({ children }) {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#080808] text-white flex flex-col justify-between selection:bg-gold selection:text-black">
        {/* Cursor & Global Motion Widgets */}
        <CustomCursor />
        <ScrollProgress />

        {/* Global Navigation */}
        <Navbar />

        {/* Routed Content */}
        <main className="flex-grow w-full relative z-10">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Conversion Actions */}
        <BackToTop />
        <FloatingWhatsApp />
        <StickyMobileCTA />
      </div>
    </SmoothScroll>
  );
}

