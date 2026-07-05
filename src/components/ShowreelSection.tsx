import React from 'react';
import { Play, Youtube, Sparkles } from 'lucide-react';
import { STUDIO_DETAILS } from '../data/studioData';
import showreelPosterImg from '../assets/images/abc_8868_1783197571040.jpg';

export function ShowreelSection() {
  const handleRedirect = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(STUDIO_DETAILS.youtubeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="showreel" className="py-20 bg-charcoal-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide font-['Montserrat',sans-serif]">Showreel</h2>
          <div className="text-[#E5E5E5] text-sm sm:text-base mt-3 font-medium font-['Montserrat',sans-serif] leading-relaxed flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
            <span>Wedding highlights</span>
            <span className="text-zinc-500 select-none font-normal">•</span>
            <span>Birthday films</span>
            <span className="text-zinc-500 select-none font-normal">•</span>
            <span>Cinematic love stories</span>
            <span className="text-zinc-500 select-none font-normal">•</span>
            <span>Fashion lookbooks</span>
            <span className="text-zinc-500 select-none font-normal">•</span>
            <span>Event films</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Video Player */}
          <div className="lg:col-span-8">
            <div
              onClick={handleRedirect}
              className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-charcoal-light group cursor-pointer"
            >
              <img
                src={showreelPosterImg}
                alt="With Frame Creator Cinematic Showreel"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Black Tint Overlay */}
              <div className="absolute inset-0 bg-charcoal-dark/30 transition-all duration-300 group-hover:bg-charcoal-dark/25 pointer-events-none" />

              {/* Play / Pause Centered Button */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
                <button
                  id="showreel-play-button"
                  onClick={handleRedirect}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gold hover:bg-gold-light text-charcoal-dark flex items-center justify-center shadow-2xl transition-all duration-300 transform scale-100 hover:scale-110 active:scale-95"
                  aria-label="Play on YouTube"
                >
                  <Play className="w-8 h-8 fill-charcoal-dark text-charcoal-dark ml-1" />
                </button>
              </div>

              {/* Bottom Video Controls Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-charcoal-dark/85 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-white flex items-center gap-1.5 font-display">
                    <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
                    With Frame Creator Cinematic Reel
                  </span>
                </div>
                <button
                  onClick={handleRedirect}
                  className="text-[10px] font-bold text-gold uppercase tracking-widest flex items-center gap-1.5 bg-white/5 px-2.5 py-1.5 rounded-md hover:bg-white/10 transition-colors"
                >
                  <Youtube className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                  Watch on YouTube
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Information Panel */}
          <div className="lg:col-span-4 bg-charcoal-light/40 border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6 text-left">
            <div>
              <h3 className="text-lg font-bold text-white font-display uppercase tracking-wide">What you’ll see</h3>
              <div className="h-0.5 w-12 bg-gold mt-1" />
            </div>

            <ul className="space-y-4 font-sans">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                <span className="text-zinc-300 text-sm leading-relaxed">
                  Wedding highlights filled with genuine laughter, teary eyes, and raw royal emotion.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                <span className="text-zinc-300 text-sm leading-relaxed">
                  Popular Punjabi and Sufi acoustic wedding edits (12K+ views across social media).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                <span className="text-zinc-300 text-sm leading-relaxed">
                  Cinematic couple pre-wedding teaser films and fast-paced high retention Reels.
                </span>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/5">
              <a
                href={STUDIO_DETAILS.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-charcoal-light border border-white/5 hover:border-gold text-zinc-300 hover:text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 transition-all active:scale-98 font-display"
              >
                <Youtube className="w-4 h-4 text-red-500" />
                <span>Open YouTube Playlist</span>
              </a>
              <p className="text-[10px] text-zinc-500 font-mono text-center mt-3">
                Background autoplay is muted for best UX.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
