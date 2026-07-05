import React, { useState, useEffect } from 'react';
import { Play, Calendar, MapPin, Phone, MessageSquare, DollarSign, Users, ChevronRight, Check, Camera, X, RefreshCw } from 'lucide-react';
import { STUDIO_DETAILS, STATS_LIST } from '../data/studioData';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenShowreel: () => void;
}

import bgImage1 from '../assets/images/couple_pool_charpai_1783117476316.jpg';
import bgImage2 from '../assets/images/fashion_heritage_full_body_1783159847891.jpg';
import bgImage3 from '../assets/images/fashion_heritage_portrait_1783120249817.jpg';
import bgImage4 from '../assets/images/instagram_bride_double_silhouette_1783170588931.jpg';
import bgImage5 from '../assets/images/instagram_bride_silhouette_1783164767914.jpg';
import bgImage6 from '../assets/images/instagram_maroon_tale_1783164782172.jpg';
import bgImage7 from '../assets/images/instagram_wedding_collage_1783164796078.jpg';

const HERO_IMAGES = [
  bgImage1,
  bgImage2,
  bgImage3,
  bgImage4,
  bgImage5,
  bgImage6,
  bgImage7
];

/*
  ==========================================================================
  LOCAL LAPTOP IMAGES CONFIGURATION (लोकल लैपटॉप इमेजेस सेटअप)
  ==========================================================================
  If you are running this project locally on your laptop, you can easily use
  your own 7 slideshow images. Choose ONE of the two options below:

  Option A: [RECOMMENDED - standard relative browser paths]
  - Create a folder at: public/images/hero/ (inside the project root)
  - Save your 7 images exactly as:
    1. image1.jpg
    2. image2.jpg
    3. image3.jpg
    4. image4.jpg
    5. image5.jpg
    6. image6.jpg
    7. image7.jpg
  - These will be loaded at runtime using browser relative paths:
    "/images/hero/image1.jpg" up to "/images/hero/image7.jpg"

  Option B: [Using src/assets/ folder]
  - Create a folder at: src/assets/hero/
  - Save your 7 images as: image1.jpg to image7.jpg
  - Note: This is useful if you wish to import them directly.
  ==========================================================================
*/

export const LOCAL_LAPTOP_PUBLIC_IMAGES = [
  "/images/hero/image1.jpg",
  "/images/hero/image2.jpg",
  "/images/hero/image3.jpg",
  "/images/hero/image4.jpg",
  "/images/hero/image5.jpg",
  "/images/hero/image6.jpg",
  "/images/hero/image7.jpg"
];

export const LOCAL_LAPTOP_ASSETS_IMAGES = [
  "./assets/hero/image1.jpg",
  "./assets/hero/image2.jpg",
  "./assets/hero/image3.jpg",
  "./assets/hero/image4.jpg",
  "./assets/hero/image5.jpg",
  "./assets/hero/image6.jpg",
  "./assets/hero/image7.jpg"
];

const PRESET_THEMES = {
  original: HERO_IMAGES,
  laptopPublic: LOCAL_LAPTOP_PUBLIC_IMAGES,
  laptopAssets: LOCAL_LAPTOP_ASSETS_IMAGES,
  wedding: [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1507504038482-7621c51dbec5?auto=format&fit=crop&w=1200&q=80"
  ],
  prewedding: [
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1482424911688-2d3ee250e7b8?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?auto=format&fit=crop&w=1200&q=80"
  ]
};

export function HeroSection({ onOpenBooking, onOpenShowreel }: HeroSectionProps) {
  const [slideshowImages, setSlideshowImages] = useState<string[]>(LOCAL_LAPTOP_PUBLIC_IMAGES);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [brideName, setBrideName] = useState('');
  const [groomName, setGroomName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [location, setLocation] = useState('');
  const [budgetRange, setBudgetRange] = useState('');
  const [phone, setPhone] = useState('');
  const [contactWhatsApp, setContactWhatsApp] = useState(true);

  // Customizer state
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const [tempImages, setTempImages] = useState<string[]>([]);

  // Form result states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteResult, setQuoteResult] = useState<null | {
    packageName: string;
    estimatedCost: string;
    deliverables: string[];
    teamSize: string;
  }>(null);

  const customStats = [
    {
      value: "5+",
      label: "Years Experience"
    },
    {
      value: "100+",
      label: "Weddings Captured PAN India"
    },
    {
      value: "Delhi NCR",
      label: "+ Destinations"
    }
  ];

  // Load custom images from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('WFC_HERO_IMAGES');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === HERO_IMAGES.length) {
          setSlideshowImages(parsed);
        }
      } catch (e) {
        console.error("Failed to parse saved slideshow images", e);
      }
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slideshowImages]);

  const handleGetQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) {
      alert("Please enter a valid 10-digit mobile number for lead generation.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      // Logic for dynamic pricing estimation based on budget/details
      let estimatedCost = "₹1,35,000";
      let packageName = "Gold Royal Shaadi Classic";
      let teamSize = "2 Cinematographers + 2 Candid Photographers + 1 Drone Pilot";
      let deliverables = [
        "Cinematic Wedding Film (30 Mins) + 1 Min Teaser",
        "3 Viral Instagram Reels (Delivered next morning)",
        "2 Premium 40-Sheet Hardcover Photo Albums",
        "All Raw & Color Graded high-res photos on Luxury Pen Drive"
      ];

      if (budgetRange === "under-50k" || budgetRange === "50k-1lakh") {
        packageName = "Silver Intimate Celebration Package";
        estimatedCost = "₹65,000";
        teamSize = "1 Candid Photographer + 1 Traditional Photographer + 1 Cinematographer";
        deliverables = [
          "2-3 Mins Highlight Film + Edited Raw Footage",
          "250+ Premium Retouched Color-Graded Photos",
          "Express 5-Day Online Delivery Gallery link"
        ];
      } else if (budgetRange === "above-2lakh") {
        packageName = "Platinum Cinematic Grand Legacy";
        estimatedCost = "₹2,40,000";
        teamSize = "Lead Director + 3 Candid Photographers + 3 Senior Cinematographers + 2 Drone Pilots";
        deliverables = [
          "Exclusive Bollywood Style Pre-Wedding Film Included",
          "Feature Length Movie (45 Mins) + 3 Teaser Cuts",
          "8 Viral Reels with custom sound engineering & BTS",
          "3 Luxury Leather-Bound Hardcover Couple Photo Books"
        ];
      }

      setQuoteResult({
        packageName,
        estimatedCost,
        deliverables,
        teamSize
      });
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center py-12 lg:py-24 overflow-hidden">
      {/* Background Slideshow with Cross-fade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {slideshowImages.map((img, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: currentImageIndex === idx ? 1 : 0,
            }}
          >
            <img
              src={img}
              alt={`Background Scene ${idx + 1}`}
              className="w-full h-full object-cover object-center select-none"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const fallbacks = [
                  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&q=85",
                  "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=1920&q=85",
                  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1920&q=85",
                  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1920&q=85",
                  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=85",
                  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=85",
                  "https://images.unsplash.com/photo-1507504038482-7621c51dbec5?auto=format&fit=crop&w=1920&q=85"
                ];
                const target = e.target as HTMLImageElement;
                if (target.src !== fallbacks[idx % fallbacks.length]) {
                  target.src = fallbacks[idx % fallbacks.length];
                }
              }}
            />
          </div>
        ))}
        {/* Subtle dark vignette, radial overlay, and gradients for full-bleed, high contrast protection */}
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark/95 via-charcoal-dark/45 to-charcoal-dark/90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/80 via-transparent to-charcoal-dark/95 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-light/95 border border-gold/30 text-[11px] sm:text-xs font-medium text-gold-light shadow-xl backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span>Limited bookings • Personal supervision • Cinematic storytelling</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
            Every Moment <span className="text-gold">Well Captured.</span> <br />
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent font-serif italic font-normal">
              Every Frame a Story.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-zinc-300 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-sans">
            Premium Wedding Photography & Cinematic Films in Delhi NCR. Capturing raw emotions. Crafting timeless memories that stay frame-perfect forever.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto pt-2">
            <button
              onClick={onOpenShowreel}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-charcoal-dark text-xs sm:text-sm font-extrabold px-6 py-3.5 rounded-xl transition-all shadow-xl shadow-gold/15 group"
            >
              <Play className="w-4 h-4 fill-charcoal-dark group-hover:scale-110 transition-transform" />
              <span>View Showreel</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="flex items-center justify-center gap-2 bg-charcoal-light/90 hover:bg-charcoal-dark border border-white/10 hover:border-gold text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl transition-all"
            >
              <span>Book Consultation</span>
            </button>

            <a
              href={STUDIO_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-whatsapp/20 hover:bg-whatsapp/40 border border-whatsapp/40 hover:border-whatsapp text-whatsapp text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Distinct Boxed Stats layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 w-full pt-8 border-t border-white/5">
            {customStats.map((stat, i) => (
              <div 
                key={i} 
                className="flex flex-col text-left bg-[#141414] border border-[rgba(225,186,109,0.15)] rounded-2xl p-4 shadow-lg transition-transform hover:scale-[1.02] duration-300"
              >
                <span className="text-2xl font-bold text-[#E1BA6D] tracking-tight leading-none font-['Montserrat',sans-serif]">
                  {stat.value}
                </span>
                <span className="text-white font-normal text-sm mt-2 font-['Montserrat',sans-serif] leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Right Content: Instant Quote Form */}
        <div id="quote-form" className="lg:col-span-5 w-full scroll-mt-24 lg:justify-self-end lg:ml-auto max-w-md">
          <div className="rounded-[24px] p-5 sm:p-6 shadow-2xl relative overflow-hidden border border-[rgba(225,186,109,0.3)] bg-[rgba(20,20,20,0.45)] backdrop-blur-md font-['Montserrat',sans-serif]">
            
            <div className="flex justify-between items-start mb-5">
              <div>
                <h3 className="text-lg font-bold text-white tracking-wide font-['Montserrat']">Instant Quote</h3>
                <p className="text-[11px] text-[#CCCCCC] font-normal mt-0.5">Get a custom package in 30 minutes.</p>
              </div>
              <a
                href="tel:+918287615770"
                className="text-right pt-1 group"
              >
                <span className="text-xs font-bold text-white tracking-wide font-['Montserrat'] group-hover:text-[#E1BA6D] transition-colors">Call: 8287615770</span>
              </a>
            </div>

            {quoteResult ? (
              // Results Display (Maintains the exact same beautiful transparent background and layout)
              <div className="space-y-4 py-3 animate-in fade-in zoom-in-95 duration-300 font-['Montserrat']">
                <div className="bg-[rgba(225,186,109,0.1)] border border-[rgba(225,186,109,0.3)] rounded-2xl p-4 text-center">
                  <span className="text-xs font-semibold text-[#E1BA6D] uppercase tracking-widest">Recommended Plan</span>
                  <h4 className="text-lg font-bold text-white mt-1">{quoteResult.packageName}</h4>
                  <div className="text-2xl font-black text-[#E1BA6D] mt-2">{quoteResult.estimatedCost}*</div>
                  <p className="text-[10px] text-zinc-400 mt-1">*Starting price. Fully customizable.</p>
                </div>

                <div>
                  <h5 className="text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-2">Team Details</h5>
                  <div className="flex items-center gap-2 bg-[rgba(40,36,32,0.6)] border border-white/5 p-2.5 rounded-xl text-xs text-zinc-200">
                    <Users className="w-4 h-4 text-[#E1BA6D] shrink-0" />
                    <span>{quoteResult.teamSize}</span>
                  </div>
                </div>

                <div>
                  <h5 className="text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-2">Key Deliverables</h5>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {quoteResult.deliverables.map((del, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#E1BA6D] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <a
                    href={`https://wa.me/918287615770?text=Hello!%20I%20just%20generated%20an%20instant%20quote%20on%20your%20website%20for%20a%20wedding%20package.%20Names:%20${brideName}%20and%20${groomName},%20Date:%20${eventDate},%20Location:%20${location},%20Budget:%20${budgetRange}.%20Please%20confirm%20availability!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#00A884] hover:bg-[#008f6f] text-white font-bold text-xs sm:text-sm rounded-full text-center flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-102"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-white fill-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>Confirm Dates on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setQuoteResult(null);
                      setBrideName('');
                      setGroomName('');
                      setEventDate('');
                      setLocation('');
                      setBudgetRange('');
                      setPhone('');
                    }}
                    className="w-full py-2.5 bg-transparent border border-white/20 hover:border-white text-zinc-300 font-bold text-xs rounded-full transition-colors"
                  >
                    Calculate New Quote
                  </button>
                </div>
              </div>
            ) : (
              // Form Input Grid
              <form onSubmit={handleGetQuote} className="space-y-4 font-['Montserrat']">
                
                {/* Bride / Groom Name Grid Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-[#CCCCCC] uppercase tracking-wider mb-1.5 font-['Montserrat']">Bride Name</label>
                    <input
                      type="text"
                      required
                      value={brideName}
                      onChange={(e) => setBrideName(e.target.value)}
                      placeholder="e.g. Aanya"
                      className="w-full bg-[rgba(40,36,32,0.6)] border border-white/10 focus:border-[#E1BA6D] focus:outline-none rounded-xl px-3 py-2.5 text-xs text-white placeholder-zinc-500 font-normal font-['Montserrat']"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#CCCCCC] uppercase tracking-wider mb-1.5 font-['Montserrat']">Groom Name</label>
                    <input
                      type="text"
                      required
                      value={groomName}
                      onChange={(e) => setGroomName(e.target.value)}
                      placeholder="e.g. Arjun"
                      className="w-full bg-[rgba(40,36,32,0.6)] border border-white/10 focus:border-[#E1BA6D] focus:outline-none rounded-xl px-3 py-2.5 text-xs text-white placeholder-zinc-500 font-normal font-['Montserrat']"
                    />
                  </div>
                </div>

                {/* Event Date / Location Grid Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-[#CCCCCC] uppercase tracking-wider mb-1.5 font-['Montserrat']">Event Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full bg-[rgba(40,36,32,0.6)] border border-white/10 focus:border-[#E1BA6D] focus:outline-none rounded-xl px-3 py-2.5 text-xs text-white font-['Montserrat'] cursor-pointer scheme-dark"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#CCCCCC] uppercase tracking-wider mb-1.5 font-['Montserrat']">Location</label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Delhi / Gurugram / Noida / D"
                        className="w-full bg-[rgba(40,36,32,0.6)] border border-white/10 focus:border-[#E1BA6D] focus:outline-none rounded-xl px-3 py-2.5 text-xs text-white placeholder-zinc-500 font-normal font-['Montserrat']"
                      />
                    </div>
                  </div>
                </div>

                {/* Budget Range / Phone Number Grid Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-[#CCCCCC] uppercase tracking-wider mb-1.5 font-['Montserrat']">Budget Range</label>
                    <div className="relative">
                      <select
                        required
                        value={budgetRange}
                        onChange={(e) => setBudgetRange(e.target.value)}
                        className="w-full bg-[rgba(40,36,32,0.6)] border border-white/10 focus:border-[#E1BA6D] focus:outline-none rounded-xl px-3 py-2.5 text-xs text-white font-['Montserrat'] appearance-none pr-8 cursor-pointer"
                      >
                        <option value="">Choose...</option>
                        <option value="under-50k">Under ₹50,000</option>
                        <option value="50k-1lakh">₹50,000 - ₹1,00,000</option>
                        <option value="1lakh-2lakh">₹1,00,000 - ₹2,00,000</option>
                        <option value="above-2lakh">Above ₹2,00,000</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-zinc-400">
                        <svg className="fill-current h-4 w-4 text-zinc-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#CCCCCC] uppercase tracking-wider mb-1.5 font-['Montserrat']">Phone Number</label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="10-digit mobile number"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        required
                        className="w-full bg-[rgba(40,36,32,0.6)] border border-white/10 focus:border-[#E1BA6D] focus:outline-none rounded-xl px-3 py-2.5 text-xs text-white placeholder-zinc-500 font-normal font-['Montserrat']"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact WhatsApp Option */}
                <div className="flex items-center gap-2.5 py-1">
                  <input
                    type="checkbox"
                    id="whatsapp-check"
                    checked={contactWhatsApp}
                    onChange={(e) => setContactWhatsApp(e.target.checked)}
                    className="w-4 h-4 accent-[#00A884] rounded border-white/10 bg-charcoal-dark cursor-pointer"
                  />
                  <label htmlFor="whatsapp-check" className="text-[11px] text-[#CCCCCC] cursor-pointer select-none font-medium font-['Montserrat']">
                    Contact me on WhatsApp
                  </label>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-transparent border border-[#E1BA6D] hover:bg-[#E1BA6D] hover:text-black text-white font-bold text-xs sm:text-sm rounded-full flex items-center justify-center gap-2 cursor-pointer transition-all uppercase tracking-wider font-['Montserrat'] active:scale-98"
                >
                  {isSubmitting ? "Calculating..." : "Get Custom Package in 30 minutes →"}
                </button>

                {/* Legal Disclaimer */}
                <p className="text-[9px] text-zinc-500 text-center mt-3 font-normal font-['Montserrat'] leading-relaxed">
                  By submitting, you agree to be contacted via call/WhatsApp for your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
