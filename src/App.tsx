import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ShowreelSection } from './components/ShowreelSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { InstagramFeed } from './components/InstagramFeed';
import { FounderSection } from './components/FounderSection';
import { PackagesSection } from './components/PackagesSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { BookingModal } from './components/BookingModal';
import { AIShootPlanner } from './components/AIShootPlanner';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleOpenBooking = (packageName = '') => {
    setSelectedPackage(packageName);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
    setSelectedPackage('');
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-charcoal-dark text-[#E5E5E5] selection:bg-gold selection:text-charcoal-dark overflow-x-hidden antialiased">
      {/* Main fixed Navigation bar */}
      <Navbar onOpenBooking={() => handleOpenBooking('Custom Consultation')} />

      {/* Spacer to prevent content overlap with fixed navbar */}
      <div className="h-[80px] lg:h-[96px]" />

      {/* Hero section */}
      <HeroSection
        onOpenBooking={() => handleOpenBooking('Custom Consultation')}
        onOpenShowreel={() => handleScrollToSection('showreel')}
      />

      {/* Main Core Layout Sections */}
      <main className="relative">
        <AboutSection />
        <ShowreelSection />
        <ServicesSection onOpenBooking={() => handleOpenBooking('Custom Service Quote')} />
        <WhyChooseSection />
        <PortfolioSection />
        <AIShootPlanner />
        <PackagesSection onOpenBooking={() => handleOpenBooking('Custom Package Inquiry')} />
        <TestimonialsSection />
        <InstagramFeed />
        <FounderSection />
        <LocationSection onOpenBooking={() => handleOpenBooking('General Consultation')} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking('Footer Quote Request')} />

      {/* Floaters (Actions sidebar + Smart Chatbot) */}
      <FloatingActions />

      {/* Popups & Dialog Modals */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        initialPackage={selectedPackage}
      />
    </div>
  );
}

