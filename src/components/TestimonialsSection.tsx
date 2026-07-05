import { Star } from 'lucide-react';
import { TESTIMONIALS_LIST } from '../data/studioData';

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 bg-charcoal-dark border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-10">
          <h2 className="text-3xl font-extrabold text-white font-display">Testimonials</h2>
          <p className="text-zinc-350 text-sm mt-1 font-sans">
            Google reviews style cards (replace with real reviews/DM screenshots).
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_LIST.map((test) => (
            <div
              key={test.id}
              className="bg-charcoal-light/40 border border-white/5 rounded-2xl p-6 text-left flex flex-col justify-between hover:border-gold/20 transition-all duration-300 shadow-xl relative overflow-hidden group"
            >
              {/* Google Badge Accent */}
              <div className="absolute top-4 right-4 text-zinc-850 font-extrabold text-sm select-none font-sans group-hover:text-gold/20 transition-colors">
                G
              </div>

              <div>
                {/* Stars */}
                <div className="flex items-center gap-0.5 text-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-zinc-305 text-xs sm:text-sm italic leading-relaxed font-sans mb-4">
                  \"{test.comment}\"
                </p>


              </div>

              {/* Author Info */}
              <div className="flex items-center mt-4 border-t border-white/5 pt-4">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white font-display">
                    {test.name}
                  </span>
                  <span className="text-[10px] text-zinc-450">
                    {test.role} • {test.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
