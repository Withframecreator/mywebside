import { Instagram, ExternalLink } from 'lucide-react';
import { STUDIO_DETAILS } from '../data/studioData';
import igBrideSilhouette from '../assets/images/instagram_bride_silhouette_1783164767914.jpg';
import igBrideDoubleSilhouette from '../assets/images/instagram_bride_double_silhouette_1783170588931.jpg';
import igMaroonTale from '../assets/images/instagram_maroon_tale_1783164782172.jpg';

export function InstagramFeed() {
  const images = [
    { id: "ig1", url: igMaroonTale, likes: "15.3K", comments: "298" },
    { id: "ig2", url: igBrideDoubleSilhouette, likes: "24.1K", comments: "589" },
    { id: "ig3", url: igBrideSilhouette, likes: "18.5K", comments: "342" }
  ];

  return (
    <section className="py-16 bg-charcoal-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display flex items-center gap-2">
              <Instagram className="w-7 h-7 text-gold" />
              <span>Instagram</span>
            </h2>
            <p className="text-zinc-350 text-xs sm:text-sm mt-1 max-w-2xl">
              Live feed embeds require Instagram/third-party widgets. For free hosting, we link directly and show highlights.
            </p>
          </div>
          <div className="flex items-center gap-3 self-start md:self-center">
            <a
              href={STUDIO_DETAILS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-charcoal-light/60 border border-white/5 hover:border-gold hover:text-white px-5 py-2.5 rounded-xl text-xs font-bold text-zinc-300 transition-all"
            >
              <span>Open {STUDIO_DETAILS.instagramHandle}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Responsive Feed row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {images.map((img) => (
            <a
              key={img.id}
              href={STUDIO_DETAILS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-charcoal-light/40 border border-white/5 rounded-2xl overflow-hidden block shadow-xl transition-all hover:border-gold/30 relative w-full h-auto max-w-full"
            >
              <img
                src={img.url}
                alt="Instagram Feed Post Thumbnail"
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Instagram Hover Stats Overlay */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 pointer-events-none">
                <span className="flex items-center gap-1.5 text-white font-bold text-sm">
                  ❤️ {img.likes}
                </span>
                <span className="flex items-center gap-1.5 text-white font-bold text-sm">
                  💬 {img.comments}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
