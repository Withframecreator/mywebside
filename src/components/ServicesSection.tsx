import React from 'react';
import { ArrowRight } from 'lucide-react';
import fashionImg from '../assets/images/regenerated_image_1783107157630.jpg';
import preWeddingImg from '../assets/images/regenerated_image_1783115930201.jpg';
import weddingImg from '../assets/images/regenerated_image_1783116229804.jpg';
import birthdayImg from '../assets/images/regenerated_image_1783116428133.jpg';

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

export function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  const services = [
    {
      title: "💎 Wedding Photography",
      desc: "Cinematic storytelling, candid moments, luxury albums.",
      image: weddingImg
    },
    {
      title: "🌅 Pre-Wedding Shoot",
      desc: "Destination shoots — Udaipur, Chandigarh & beyond.",
      image: preWeddingImg
    },
    {
      title: "📸 Fashion & Portfolio Shoot",
      desc: "High-end editorial fashion lookbooks, modeling portfolios, and striking creative portraits with high-fidelity color grading.",
      image: fashionImg
    },
    {
      title: "🎉 Birthday & Events",
      desc: "First birthday highlights and cinematic edits.",
      image: birthdayImg
    }
  ];

  return (
    <section id="services" className="py-20 bg-charcoal-dark border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-extrabold text-white font-display">Our Services</h2>
          <p className="text-zinc-350 text-sm mt-1">
            Modern coverage with a premium finish.
          </p>
        </div>

        {/* Services Grid: 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Cards 1, 2, 3 */}
          {services.slice(0, 3).map((svc, i) => {
            const isFashion = i === 2;
            const isFirstBox = i === 0;
            const isSecondBox = i === 1;
            return (
              <div
                key={i}
                className={`group border transition-all duration-300 flex flex-col shadow-xl relative ${
                  isFashion 
                    ? "bg-[#141414] border-white/10 rounded-[24px] hover:border-gold/30" 
                    : "bg-charcoal-light/40 border-white/5 rounded-2xl hover:border-gold/30"
                }`}
              >
                <div className={`relative overflow-hidden ${
                  isFashion 
                    ? "aspect-[3/4] rounded-t-[24px]" 
                    : "aspect-[4/3] rounded-t-2xl"
                }`}>
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className={`w-full h-full transition-transform duration-500 border-0 outline-none ${
                      isFirstBox 
                        ? "scale-[1.15] group-hover:scale-[1.22]" 
                        : isSecondBox
                          ? "scale-[1.14] group-hover:scale-[1.20]"
                          : "group-hover:scale-105"
                    } ${isFashion ? "object-cover object-top" : "object-cover object-center"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 to-transparent opacity-65 pointer-events-none" />
                </div>
                <div className="p-5 text-left flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white font-['Montserrat',sans-serif]">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-['Montserrat',sans-serif]">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Services Grid Row 2: Wide & Custom Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Card 4: Birthday & Events */}
          <div className="lg:col-span-5 group bg-charcoal-light/40 border border-white/5 rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-300 flex flex-col shadow-xl">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={services[3].image}
                alt={services[3].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 to-transparent opacity-65 pointer-events-none" />
            </div>
            <div className="p-5 text-left">
              <h3 className="text-base font-extrabold text-white font-display">
                {services[3].title}
              </h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-sans">
                {services[3].desc}
              </p>
            </div>
          </div>

          {/* Card 5: Wide Commercial Shoots Bento-style */}
          <div className="lg:col-span-7 bg-charcoal-light/40 border border-white/5 rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-300 grid grid-cols-1 sm:grid-cols-12 shadow-xl">
            {/* Image section */}
            <div className="sm:col-span-6 relative h-48 sm:h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80"
                alt="Commercial Shoots"
                className="w-full h-full object-cover animate-in fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charcoal-dark/20 sm:to-transparent" />
            </div>

            {/* Content section */}
            <div className="sm:col-span-6 p-6 sm:p-8 flex flex-col justify-center text-left space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-white font-display flex items-center gap-2">
                  🏢 Commercial Shoots
                </h3>
                <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed font-sans">
                  Brand films, corporate events, product photography — built for marketing, recall, and premium positioning.
                </p>
              </div>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 self-start text-xs font-bold text-gold hover:text-gold-light transition-colors group cursor-pointer font-display"
              >
                <span>Get a quote</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
