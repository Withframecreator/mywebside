import { Film, BookOpen, Clock, Globe, ArrowRight } from 'lucide-react';
import portraitImg from '../assets/images/regenerated_image_1783195222900.jpg';
import secondaryImg from '../assets/images/couple_pool_charpai_1783117476316.jpg';

export function AboutSection() {
  const features = [
    {
      icon: <Film className="w-5 h-5 text-gold" />,
      title: "Cinematic Storytelling",
      desc: "Films that feel like you — not a template."
    },
    {
      icon: <BookOpen className="w-5 h-5 text-gold" />,
      title: "Luxury Albums",
      desc: "Archival prints with premium finishing."
    },
    {
      icon: <Clock className="w-5 h-5 text-gold" />,
      title: "Limited Bookings",
      desc: "Quality focus with personal supervision."
    },
    {
      icon: <Globe className="w-5 h-5 text-gold" />,
      title: "Delhi NCR + Destinations",
      desc: "Udaipur, Chandigarh & beyond."
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-white/5 bg-charcoal-light/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* About Text Column */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left font-['Montserrat',sans-serif]">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide font-['Montserrat']">
                About With Frame Creator <sup className="text-[#E1BA6D] font-normal text-lg sm:text-xl select-none relative -top-1 ml-1">®</sup>
              </h2>
              {/* Golden horizontal underline bar with rounded ends */}
              <div className="h-1 w-[60px] bg-[#E1BA6D] mt-3.5 rounded-full" />
            </div>

            <p className="text-[#E5E5E5] text-sm sm:text-base leading-relaxed font-normal">
              <strong>WITH FRAME CREATOR®</strong> is a Delhi NCR based premium wedding photography and cinematography brand specializing in wedding films, pre-wedding shoots, birthdays, maternity, fashion photography, and commercial & event coverage.
            </p>

            <blockquote className="border-l-4 border-[#E1BA6D] pl-4 py-1.5 text-white font-medium text-base sm:text-lg italic leading-relaxed font-['Montserrat']">
              "Every frame has a story. We don't just shoot events. We document emotions."
            </blockquote>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className="bg-charcoal-light/60 border border-white/5 rounded-xl p-4 flex items-start gap-3 hover:border-gold/20 transition-all"
                >
                  <div className="p-2 rounded-lg bg-gold/10 shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wide font-display">
                      {feat.title}
                    </h4>
                    <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visually Hidden SEO Keywords for Search Engines (Smart SEO Fold) */}
            <div className="sr-only" aria-hidden="true">
              <h2>With Frame Creator - Premium Photography Services</h2>
              <p>We specialize in delivering top-tier luxury shoots. Our expertise spans:</p>
              <ul>
                <li>Best Wedding Photographer in Delhi NCR</li>
                <li>Cinematic Wedding Films Delhi</li>
                <li>Pre Wedding Shoot Delhi</li>
                <li>Maternity Photography Delhi</li>
                <li>Birthday party photographers in Delhi</li>
                <li>Model portfolio shoot Delhi</li>
                <li>Fashion photographer in Delhi</li>
                <li>Modeling portfolio photography Delhi NCR</li>
              </ul>
            </div>
          </div>

          {/* About Gallery Images */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative group">
              <img
                src={secondaryImg}
                alt="Best Wedding Photographer in Delhi NCR - Pre Wedding Shoot Delhi"
                className="w-full object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            <div className="rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative group">
              <img
                src={portraitImg}
                alt="Cinematic Wedding Films Delhi - Modeling portfolio photography Delhi NCR"
                className="w-full object-cover object-[center_bottom] aspect-[3/4] group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
