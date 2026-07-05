import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Heart, MapPin, ZoomIn } from 'lucide-react';
import { PORTFOLIO_GALLERY } from '../data/studioData';
import { PortfolioItem } from '../types';

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters: string[] = [
    'All',
    'Wedding',
    'Pre-Wedding',
    'Fashion',
    'Reels & Video',
    'Birthday',
    'Portfolio',
    'Headshot',
    'Events',
    'Commercial',
    'Maternity'
  ];

  // Map filters to items in PORTFOLIO_GALLERY
  const getFilteredItems = (): PortfolioItem[] => {
    if (activeFilter === 'All') return PORTFOLIO_GALLERY;
    
    return PORTFOLIO_GALLERY.filter(item => {
      const categoryLower = item.category.toLowerCase();
      const titleLower = item.title.toLowerCase();
      const id = item.id;
      
      if (activeFilter === 'Wedding') {
        return categoryLower.includes('wed') || titleLower.includes('bridal') || titleLower.includes('groom') || titleLower.includes('haldi') || id === 'p1' || id === 'p5';
      }
      if (activeFilter === 'Pre-Wedding') {
        return categoryLower === 'pre-wedding' || titleLower.includes('engagement') || titleLower.includes('romance') || titleLower.includes('vows') || id === 'p2' || id === 'p9';
      }
      if (activeFilter === 'Fashion') {
        return categoryLower.includes('fashion') || titleLower.includes('lookbook') || id === 'p4';
      }
      if (activeFilter === 'Reels & Video') {
        return categoryLower.includes('reel') || categoryLower.includes('video') || item.isReel || id === 'p3' || id === 'p7';
      }
      if (activeFilter === 'Birthday') {
        return titleLower.includes('birthday') || id === 'p8';
      }
      if (activeFilter === 'Portfolio') {
        return categoryLower.includes('portfolio') || titleLower.includes('portfolio') || id === 'p6' || id === 'p9_new';
      }
      if (activeFilter === 'Headshot') {
        return titleLower.includes('headshot') || id === 'p7';
      }
      if (activeFilter === 'Events') {
        return categoryLower.includes('event') || titleLower.includes('gala') || titleLower.includes('celebration') || id === 'p6' || id === 'p8';
      }
      if (activeFilter === 'Commercial') {
        return categoryLower.includes('commercial') || titleLower.includes('commercial') || id === 'p9_new';
      }
      if (activeFilter === 'Maternity') {
        return titleLower.includes('maternity') || id === 'p9';
      }
      return false;
    });
  };

  const filteredItems = getFilteredItems();

  const openLightbox = (itemIndex: number) => {
    setLightboxIndex(itemIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-charcoal-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-10">
          <h2 className="text-3xl font-extrabold text-white font-display">Portfolio</h2>
          <p className="text-zinc-350 text-sm mt-1 font-sans">
            Filter by category. Click to preview (lightbox).
          </p>
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filt) => (
            <button
              key={filt}
              onClick={() => setActiveFilter(filt)}
              className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all cursor-pointer ${
                activeFilter === filt
                  ? "bg-gold text-charcoal-dark border-gold shadow-lg shadow-gold/10 font-display"
                  : "bg-charcoal-light/60 text-zinc-400 border-white/5 hover:text-white hover:border-zinc-700"
              }`}
            >
              {filt}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            let displayTitle = "Wedding";
            let displayTagline = "Candid + cinematic";

            if (item.id === "p1") {
              displayTitle = "Wedding";
              displayTagline = "Candid + cinematic";
            } else if (item.id === "p2") {
              displayTitle = "Pre-Wedding";
              displayTagline = "Romantic couple storytelling";
            } else if (item.id === "p3") {
              displayTitle = "Reels & Video";
              displayTagline = "Social media optimization";
            } else if (item.id === "p4") {
              displayTitle = "Fashion";
              displayTagline = "Magazine & luxury vibe";
            } else if (item.id === "p5") {
              displayTitle = "Birthday";
              displayTagline = "Celebration storytelling";
            } else if (item.id === "p6") {
              displayTitle = "Portfolio";
              displayTagline = "Model portfolio focus";
            } else if (item.id === "p7") {
              displayTitle = "Headshot";
              displayTagline = "Corporate profiles & actor look";
            } else if (item.id === "p8") {
              displayTitle = "Events";
              displayTagline = "Corporate and networking style";
            } else if (item.id === "p9_new") {
              displayTitle = "Commercial";
              displayTagline = "Commercial & advertising style";
            } else if (item.id === "p9") {
              displayTitle = "Maternity";
              displayTagline = "Timeless + emotional family legacy";
            }

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group bg-[#141414] border border-white/5 rounded-[24px] overflow-hidden hover:border-gold/20 transition-all duration-300 shadow-xl cursor-pointer relative flex flex-col"
              >
                {/* Image Frame */}
                <div className={`relative overflow-hidden rounded-t-[24px] ${
                  item.aspect === "portrait"
                    ? "aspect-[3/4]"
                    : item.aspect === "landscape"
                    ? "aspect-[4/3]"
                    : "aspect-square"
                }`}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      item.objectPosition || ""
                    } ${
                      item.id === "p2" || item.id === "p5"
                        ? "scale-[1.15] group-hover:scale-[1.22]"
                        : "group-hover:scale-105"
                    }`}
                  />
                  
                  {/* Like Count Badge */}
                  <div className="absolute bottom-4 right-4 bg-charcoal-dark/85 border border-white/10 backdrop-blur-md px-2.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                    <span className="text-[10px] font-bold text-white tracking-wider">{item.likes}</span>
                  </div>

                  {/* Instant zoom button on bottom-right */}
                  <div className="absolute top-4 right-4 bg-charcoal-dark/80 border border-white/10 backdrop-blur-md p-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-4 h-4 text-gold-light" />
                  </div>
                </div>

                {/* Title display below for default state (mobile-friendly) */}
                <div className="p-5 text-left flex flex-col gap-1.5">
                  <span className="text-lg font-semibold text-[#E1BA6D] font-['Montserrat',sans-serif] tracking-wide">
                    {displayTitle}
                  </span>
                  <span className="text-sm text-white font-normal font-['Montserrat',sans-serif]">
                    {displayTagline}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* If no items */}
        {filteredItems.length === 0 && (
          <div className="py-16 text-center border border-white/5 rounded-2xl bg-charcoal-light/20">
            <p className="text-zinc-500 text-sm">No items found in this category. We are uploading new shoots soon!</p>
          </div>
        )}

        {/* Lightbox Modal */}
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div
            className="fixed inset-0 z-50 bg-charcoal-dark/98 backdrop-blur-sm flex flex-col justify-center items-center p-4 sm:p-8 animate-in fade-in duration-200"
            onClick={closeLightbox}
          >
            {/* Top Bar inside Lightbox */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <div className="text-left">
                <span className="text-[10px] text-gold-light font-bold uppercase tracking-widest block font-display">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="text-xs sm:text-base font-extrabold text-white font-display">
                  {filteredItems[lightboxIndex].title}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 sm:p-3 rounded-full bg-charcoal-light border border-white/5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title="Close Lightbox"
              >
                <X className="w-5 h-5 sm:w-6 h-6" />
              </button>
            </div>

            {/* Middle Carousel Area */}
            <div className="relative w-full max-w-5xl aspect-[4/3] max-h-[75vh] flex items-center justify-center">
              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 z-20 p-2 sm:p-3.5 rounded-full bg-charcoal-light/80 border border-white/5 text-zinc-350 hover:text-white hover:bg-charcoal-light transition-all transform hover:scale-105 cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 h-6" />
              </button>

              {/* Main Image */}
              <img
                src={filteredItems[lightboxIndex].imageUrl}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl border border-white/5 animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 z-20 p-2 sm:p-3.5 rounded-full bg-charcoal-light/80 border border-white/5 text-zinc-350 hover:text-white hover:bg-charcoal-light transition-all transform hover:scale-105 cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 h-6" />
              </button>
            </div>

            {/* Bottom Info inside Lightbox */}
            <div className="absolute bottom-6 left-4 right-4 flex flex-col items-center gap-1.5 text-center">
              <p className="text-zinc-400 text-xs flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>{filteredItems[lightboxIndex].location}</span>
              </p>
              <div className="text-[10px] text-zinc-600 font-mono">
                Image {lightboxIndex + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
