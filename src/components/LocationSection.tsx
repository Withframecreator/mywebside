import { Phone, MessageSquare, MapPin, Calendar, Clock, Star, Heart } from 'lucide-react';
import { STUDIO_DETAILS } from '../data/studioData';

interface LocationSectionProps {
  onOpenBooking: () => void;
}

export function LocationSection({ onOpenBooking }: LocationSectionProps) {
  return (
    <section id="contact" className="py-20 bg-charcoal-dark border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left mb-12">
          <h2 className="text-3xl font-extrabold text-white font-display">Location</h2>
          <p className="text-zinc-350 text-sm mt-1 font-sans">
            Based in Delhi NCR. Serving Delhi, Gurugram, Noida, Chandigarh, and destination weddings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact cards and final CTA */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Quick Contact Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Call Card */}
              <a
                href={`tel:${STUDIO_DETAILS.phone}`}
                className="bg-charcoal-light/40 border border-white/5 hover:border-gold/20 rounded-2xl p-5 flex items-center gap-4 transition-all text-left shadow-lg"
              >
                <div className="p-3 bg-gold/10 rounded-xl text-gold-light">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 font-extrabold uppercase tracking-widest">Call Now</span>
                  <span className="text-sm font-bold text-white block mt-0.5">{STUDIO_DETAILS.phone}</span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={STUDIO_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-charcoal-light/40 border border-white/5 hover:border-[#00A884]/20 rounded-2xl p-5 flex items-center gap-4 transition-all text-left shadow-lg"
              >
                <div className="p-3 bg-[#00A884]/10 rounded-xl text-[#00A884]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 font-extrabold uppercase tracking-widest">WhatsApp</span>
                  <span className="text-sm font-bold text-white block mt-0.5">Chat Instantly</span>
                </div>
              </a>
            </div>

            {/* Let's Create Timeless Together Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 text-left space-y-6 shadow-2xl relative overflow-hidden flex-1 flex flex-col justify-center">
              <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-gold-light uppercase tracking-wider font-display">
                  <Heart className="w-4 h-4 fill-gold text-gold" />
                  <span>Your Story, Our Lens</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
                  Let’s create something timeless together.
                </h3>
                <p className="text-zinc-350 text-xs sm:text-sm leading-relaxed max-w-md font-sans">
                  Have an event date locked in? Booking slots for this wedding season are filling fast. Secure your custom cinematic package today.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`tel:${STUDIO_DETAILS.phone}`}
                  className="px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-750 text-white font-bold text-xs flex items-center gap-2 transition-all active:scale-98 font-display"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href={STUDIO_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-[#00A884] hover:bg-[#008f6f] text-white font-bold text-xs flex items-center gap-2 transition-all active:scale-98 font-display"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-charcoal-dark font-black text-xs flex items-center gap-2 transition-all active:scale-98 shadow-md cursor-pointer font-display"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Free Consultation</span>
                </button>
              </div>


            </div>
          </div>

          {/* Right Column: Interactive Embedded Map */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/5 shadow-2xl relative min-h-[300px] h-full bg-charcoal-light">
            {/* Embed high-quality dark styled Google Maps focused on Delhi NCR */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5262963172!2d76.76357755375591!3d28.646677258953185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0xd39e701141d38694!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[350px] border-0 opacity-80 invert filter contrast-125 hue-rotate-180"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="With Frame Creator Delhi NCR Coverage Map"
            />
            {/* Elegant Map Floating Tag */}
            <div className="absolute bottom-4 left-4 bg-charcoal-dark/90 border border-white/5 backdrop-blur-md px-3 py-2 rounded-xl text-left flex items-center gap-2 shadow-lg">
              <MapPin className="w-4 h-4 text-gold" />
              <div className="flex flex-col">
                <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Based in</span>
                <span className="text-[11px] font-bold text-white">Delhi NCR, India</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
