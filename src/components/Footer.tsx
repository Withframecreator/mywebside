import { Instagram, Youtube, Phone, MessageSquare, ArrowUp, Linkedin } from 'lucide-react';
import { STUDIO_DETAILS } from '../data/studioData';

interface FooterProps {
  onOpenBooking: () => void;
}

export function Footer({ onOpenBooking }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-dark border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center space-y-6">
        
        {/* Scroll back to top button */}
        <button
          onClick={handleScrollToTop}
          className="p-2.5 rounded-full bg-charcoal-light border border-white/5 hover:border-gold text-zinc-400 hover:text-white transition-all cursor-pointer shadow-lg"
          title="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        {/* Brand Name */}
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-black tracking-widest text-white font-display">
            WITH FRAME CREATOR <span className="text-gold font-serif font-normal">®</span>
          </h2>
          <p className="text-xs text-zinc-400 font-sans tracking-wide">
            Wedding • Pre-Wedding • Fashion • Events • Commercial — Delhi NCR
          </p>
        </div>

        {/* Quick Footer Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-xs font-semibold text-zinc-450 font-display">
          <a href={`tel:${STUDIO_DETAILS.phone}`} className="hover:text-gold transition-colors">
            Call
          </a>
          <span className="text-zinc-800">•</span>
          <a href={STUDIO_DETAILS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#00A884] transition-colors">
            WhatsApp
          </a>
          <span className="text-zinc-800">•</span>
          <button onClick={onOpenBooking} className="hover:text-gold transition-colors cursor-pointer">
            Get Quote
          </button>
        </div>

        {/* Social Icons row */}
        <div className="flex items-center gap-4">
          <a
            href={STUDIO_DETAILS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-charcoal-light border border-white/5 hover:border-pink-500/40 text-zinc-450 hover:text-white transition-all"
            title="Instagram Profile"
          >
            <Instagram className="w-4.5 h-4.5" />
          </a>
          <a
            href="https://youtube.com/@withframecreator"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-charcoal-light border border-white/5 hover:border-red-500/40 text-zinc-450 hover:text-white transition-all"
            title="YouTube Channel"
          >
            <Youtube className="w-4.5 h-4.5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-charcoal-light border border-white/5 hover:border-blue-500/40 text-zinc-450 hover:text-white transition-all"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4.5 h-4.5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[10px] text-zinc-600 font-mono pt-4 border-t border-zinc-900/60 w-full max-w-md">
          © 2026 With Frame Creator Studio. All rights reserved. Registered Trademark in Delhi NCR.
        </p>

      </div>
    </footer>
  );
}
