import { Camera, Film, Sparkles } from 'lucide-react';
import weddingCollageImg from '../assets/images/regenerated_image_1783165909266.jpg';
import founderPortrait from '../assets/images/regenerated_image_1783170245653.jpg';

export function FounderSection() {
  const tags = ["With Sumit", "Storytelling", "Cinematic Films"];

  return (
    <section className="py-20 bg-charcoal-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Founder Bio and details */}
          <div className="lg:col-span-6 text-left space-y-6">
            <div>
              <h2 className="text-3xl font-extrabold text-white font-display">
                Meet the Vision Behind the Lens
              </h2>
              <div className="h-0.5 w-20 bg-gold mt-2 rounded" />
            </div>

            <div className="space-y-4 font-sans">
              <h3 className="text-lg font-bold text-gold-light font-display">
                Founder & Creative Head: Sumit
              </h3>
              
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Sumit is a corporate professional, fitness enthusiast, passionate filmmaker, and storyteller who balances professional excellence with high-concept visual creativity. Together with our team of senior cinematographers, they have built "With Frame Creator" into Delhi NCR’s premier photography collective.
              </p>

              <blockquote className="border-l-4 border-gold pl-4 py-1 italic text-zinc-400 text-sm">
                \"We treat every wedding film like a cinema release — customizing sound, music pacing, lighting angles, and emotional build-up to fit your specific family legacy.\"
              </blockquote>
            </div>

            {/* Tags row */}
            <div className="flex flex-wrap gap-2 pt-2 font-display">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-charcoal-light border border-white/5 text-zinc-400 font-medium text-xs rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Imagery Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 items-center">
            <div className="rounded-2xl overflow-hidden border border-white/5 shadow-xl relative aspect-[3/4] group">
              <img
                src={founderPortrait}
                alt="Sumit - Founder behind the camera lens"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 via-transparent to-transparent opacity-65 pointer-events-none" />
              <div className="absolute bottom-4 left-4 text-left font-display">
                <span className="text-[10px] text-gold font-bold uppercase tracking-widest flex items-center gap-1">
                  <Camera className="w-3 h-3" />
                  The Elegant Bride
                </span>
                <span className="text-xs font-bold text-white block mt-0.5">Timeless Bridal Grace</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/5 shadow-xl relative aspect-square group">
              <img
                src={weddingCollageImg}
                alt="Fine art wedding storybook collage"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 via-transparent to-transparent opacity-65 pointer-events-none" />
              <div className="absolute bottom-4 left-4 text-left font-display">
                <span className="text-[10px] text-gold font-bold uppercase tracking-widest flex items-center gap-1">
                  <Film className="w-3 h-3" />
                  Luxury Album
                </span>
                <span className="text-xs font-bold text-white block mt-0.5">Grand Adventure</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
