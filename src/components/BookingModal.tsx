import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { STUDIO_DETAILS } from '../data/studioData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: string;
}

export function BookingModal({ isOpen, onClose, initialPackage = "" }: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventType, setEventType] = useState('');
  const [location, setLocation] = useState('');
  const [pkg, setPkg] = useState(initialPackage);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !eventDate || !eventType) {
      alert("Please fill in all mandatory fields.");
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-charcoal-dark/90 backdrop-blur-sm flex justify-center items-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-charcoal-light border border-white/5 rounded-2xl w-full max-w-lg shadow-2xl relative overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200">
        
        {/* Gold line */}
        <div className="h-1 bg-gradient-to-r from-gold via-gold-light to-gold shrink-0" />

        {/* Modal Header */}
        <div className="p-5 border-b border-white/5 flex items-center justify-between bg-charcoal-dark/40 shrink-0">
          <div className="text-left">
            <h3 className="text-base sm:text-lg font-extrabold text-white font-display flex items-center gap-1.5">
              <Sparkles className="w-5 h-5 text-gold animate-pulse" />
              <span>Book Consultation 24/7</span>
            </h3>
            <p className="text-[11px] text-zinc-400 mt-0.5">Secure your wedding season slots instantly.</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-charcoal-dark text-zinc-400 hover:text-white transition-colors cursor-pointer"
            title="Dismiss"
          >
            <X className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 overflow-y-auto flex-1 text-left">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-5 animate-in zoom-in-95 duration-300">
              <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mx-auto text-2xl font-bold">
                ✓
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base sm:text-lg font-black text-white font-display">Booking Received, {name}!</h4>
                <p className="text-xs text-zinc-450 max-w-sm mx-auto leading-relaxed">
                  Congratulations! Sumit will contact you on your mobile (<strong>{phone}</strong>) within 30 minutes to confirm date lock availability.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/918287615770?text=Hello%20With%20Frame%20Creator!%20I%20just%20submitted%20a%20consultation%20booking%20for%20a%20${eventType}%20on%20${eventDate}%20at%20${location}.%20My%20name%20is%20${name}.%20Please%20confirm%20availability!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#00A884] hover:bg-[#008f6f] text-white font-extrabold text-xs transition-all active:scale-98 font-display"
                >
                  Confirm Instantly on WhatsApp
                </a>
              </div>

              <p className="text-[10px] text-zinc-500 font-mono">
                Opening Hours: 24 Hours Open. Call anytime at +91 82876 15770.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              
              {/* Name */}
              <div>
                <label className="block text-[11px] font-bold text-zinc-450 uppercase tracking-wide mb-1">Your Name *</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Aanya / Arjun"
                    required
                    className="w-full bg-charcoal-dark border border-white/10 focus:border-gold focus:outline-none rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white"
                  />
                </div>
              </div>

              {/* Grid 1: Phone / Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-zinc-450 uppercase tracking-wide mb-1">Mobile Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3 w-4 h-4 text-zinc-500" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-digit phone"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      required
                      className="w-full bg-charcoal-dark border border-white/10 focus:border-gold focus:outline-none rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-zinc-450 uppercase tracking-wide mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3 w-4 h-4 text-zinc-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. name@example.com"
                      className="w-full bg-charcoal-dark border border-white/10 focus:border-gold focus:outline-none rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Grid 2: Event Date / Event Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-zinc-450 uppercase tracking-wide mb-1">Event Date *</label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-3 w-4 h-4 text-zinc-500" />
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      required
                      className="w-full bg-charcoal-dark border border-white/10 focus:border-gold focus:outline-none rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-zinc-450 uppercase tracking-wide mb-1">Event Type *</label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    required
                    className="w-full bg-charcoal-dark border border-white/10 focus:border-gold focus:outline-none rounded-xl px-3.5 py-2.5 text-xs text-white"
                  >
                    <option value="">Select Event...</option>
                    <option value="Wedding / Shaadi">Wedding / Shaadi</option>
                    <option value="Pre-Wedding Film">Pre-Wedding Shoot & Film</option>
                    <option value="Birthday Celebration">Birthday Celebration</option>
                    <option value="Maternity & Baby Shoot">Maternity / Cake Smash</option>
                    <option value="Commercial / Fashion">Commercial / Corporate Event</option>
                  </select>
                </div>
              </div>

              {/* Location & Package */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-zinc-450 uppercase tracking-wide mb-1">Event Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-zinc-500" />
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Gurugram / Udaipur"
                      className="w-full bg-charcoal-dark border border-white/10 focus:border-gold focus:outline-none rounded-xl pl-10 pr-3.5 py-2.5 text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-zinc-450 uppercase tracking-wide mb-1">Select Package</label>
                  <select
                    value={pkg}
                    onChange={(e) => setPkg(e.target.value)}
                    className="w-full bg-charcoal-dark border border-white/10 focus:border-gold focus:outline-none rounded-xl px-3.5 py-2.5 text-xs text-white"
                  >
                    <option value="">Choose...</option>
                    <option value="silver">Silver Package</option>
                    <option value="gold">Gold Package</option>
                    <option value="platinum">Platinum Package</option>
                    <option value="custom">Custom Customized Package</option>
                  </select>
                </div>
              </div>

              {/* WhatsApp notification check */}
              <div className="flex items-center gap-2 py-1">
                <input
                  type="checkbox"
                  id="whatsapp-confirm"
                  defaultChecked
                  className="w-4 h-4 accent-gold rounded border-white/10 bg-charcoal-dark"
                />
                <label htmlFor="whatsapp-confirm" className="text-[10px] text-zinc-400 cursor-pointer select-none">
                  Receive live availability updates and booking confirmation via WhatsApp.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-gold via-gold-light to-gold hover:from-gold-light hover:to-gold text-charcoal-dark font-black text-xs sm:text-sm rounded-xl cursor-pointer shadow-lg shadow-gold/10 active:scale-98 transition-all font-display"
              >
                Schedule Free Consultation (निःशुल्क परामर्श बुक करें)
              </button>

            </form>
          )}
        </div>

        {/* Modal Footer warning */}
        <div className="bg-charcoal-dark p-4 border-t border-white/5 text-center shrink-0 flex items-center justify-center gap-1.5 text-[10px] text-zinc-500 font-mono">
          <AlertCircle className="w-3.5 h-3.5 text-zinc-600" />
          <span>Limited wedding slots. Submit now to hold dates temporarily.</span>
        </div>

      </div>
    </div>
  );
}
