import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { STUDIO_DETAILS } from '../data/studioData';
import wfcLogo from '../assets/images/wfc_logo_1782683374396.jpg';

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Showreel", href: "#showreel" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-[#0B0B0B]/75 backdrop-blur-[8px] border-b border-white/5 shadow-2xl"
          : "bg-[#0B0B0B]"
      }`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-0 transition-all duration-300 ease-in-out ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="flex items-center justify-between w-full lg:w-auto">
          {/* Brand Logo & Subtext Container */}
          <div className="flex flex-col items-start text-left">
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                <img
                  src={wfcLogo}
                  alt="With Frame Creator Logo"
                  className="w-full h-full object-contain scale-[1.35] -translate-y-[4%]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5 font-display uppercase font-sans">
                With Frame Creator<span className="text-[#d4af37] ml-0.5">®</span>
              </span>
            </a>
            <span className="text-[10px] sm:text-[11px] text-zinc-400 font-medium tracking-wider mt-1 select-none">
              Delhi NCR | Wedding • Pre-Wedding • Fashion • Events • Commercial
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-charcoal-light text-zinc-300 hover:text-white border border-white/5"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Nav Links (Center-Right) */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs sm:text-sm font-medium text-white hover:text-gold transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons (Right corner) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={STUDIO_DETAILS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all shadow-lg shadow-whatsapp/30"
          >
            <span>WhatsApp Call</span>
          </a>

          <a
            href="#quote-form"
            className="border-2 border-zinc-700 bg-charcoal-dark hover:bg-zinc-900 hover:border-gold text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all flex items-center gap-2 hover:scale-105 shadow-md"
          >
            <span>Book Consultation</span>
          </a>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-charcoal-dark border-b border-white/5 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl bg-charcoal-light border border-white/5 text-xs font-semibold text-zinc-200 flex items-center justify-between"
              >
                <span>{link.label}</span>
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#quote-form"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full border-2 border-zinc-700 hover:border-gold hover:bg-zinc-900 text-white font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all text-center"
            >
              <span>Book Consultation</span>
            </a>

            <a
              href={STUDIO_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-whatsapp hover:bg-whatsapp-dark text-white font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2 text-center"
            >
              <span>Chat on WhatsApp (24/7 Available)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
