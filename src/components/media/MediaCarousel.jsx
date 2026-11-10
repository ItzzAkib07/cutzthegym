import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MediaCard from './MediaCard';

// Swiper core styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MediaCarousel({ mediaList = [], onSelectMedia }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (!mediaList.length) return null;

  return (
    <div className="relative w-full">
      {/* Custom Header Nav Controls */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gold" />
          <span className="text-eyebrow text-gold font-bold">
            SWIPE TO EXPLORE ({mediaList.length} ASSETS)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            ref={prevRef}
            aria-label="Previous Slide"
            className="p-3 rounded-full bg-[#141414] border border-white/15 text-white hover:text-gold hover:border-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            ref={nextRef}
            aria-label="Next Slide"
            className="p-3 rounded-full bg-[#141414] border border-white/15 text-white hover:text-gold hover:border-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Swiper Container */}
      <Swiper
        modules={[Navigation, Pagination, Keyboard, A11y]}
        spaceBetween={24}
        slidesPerView={1.15}
        grabCursor={true}
        keyboard={{ enabled: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.8,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 28,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
          1280: {
            slidesPerView: 3.5,
            spaceBetween: 32,
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
        className="!overflow-visible"
      >
        {mediaList.map((media) => (
          <SwiperSlide key={media.id} className="h-auto">
            <MediaCard media={media} onSelect={onSelectMedia} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

