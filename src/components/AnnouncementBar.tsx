import { Star, Phone, Clock, Sparkles } from 'lucide-react';
import { STUDIO_DETAILS } from '../data/studioData';

export function AnnouncementBar({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-zinc-950 font-semibold text-xs py-2 px-4 shadow-md relative z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 tracking-wide">
          <span className="flex items-center gap-1 bg-zinc-950 text-amber-400 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
            {STUDIO_DETAILS.rating} Google Rating
          </span>
          <span className="hidden sm:inline font-medium text-zinc-900">
            • 24 Hours Open (24 घंटे सर्विस के लिए उपलब्ध)
          </span>
        </div>

        <div className="flex items-center gap-4 ml-auto sm:ml-0">
          <a
            href={`tel:${STUDIO_DETAILS.phone}`}
            className="flex items-center gap-1.5 hover:underline font-bold text-zinc-950 bg-amber-400/30 px-2 py-0.5 rounded transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{STUDIO_DETAILS.phone}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="hidden md:flex items-center gap-1 bg-zinc-950 hover:bg-zinc-800 text-amber-400 px-3 py-1 rounded text-xs font-bold transition-all shadow-sm"
          >
            <Sparkles className="w-3 h-3" />
            <span>Instant Booking</span>
          </button>
        </div>
      </div>
    </div>
  );
}
