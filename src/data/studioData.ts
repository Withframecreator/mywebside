import { ServiceItem, PortfolioItem, Testimonial, PackageItem, ReelItem } from '../types';
import portfolioWeddingImg from '../assets/images/regenerated_image_1783116624756.jpg';
import sunsetVowsImg from '../assets/images/regenerated_image_1783119295027.jpg';
import haldiSmokeImg from '../assets/images/regenerated_image_1783119648447.jpg';
import fashionLookbookImg from '../assets/images/regenerated_image_1783120463534.jpg';
import vipAfterpartyImg from '../assets/images/regenerated_image_1783120616933.jpg';
import maternityRomanceImg from '../assets/images/regenerated_image_1783120731754.jpg';
import bridalEntryImg from '../assets/images/regenerated_image_1783121060719.jpg';
import birthdayGalaImg from '../assets/images/regenerated_image_1783121041514.jpg';

export const STUDIO_DETAILS = {
  name: "With Frame Creator",
  hindiName: "विथ फ्रेम क्रिएटर",
  tagline: "Turning Fleeting Moments into Timeless Cinematic Masterpieces",
  hindiTagline: "हम सिर्फ तस्वीरें नहीं खींचते, हम आपकी खूबसूरत यादें बुनते हैं",
  phone: "+91 82876 15770",
  whatsappUrl: "https://wa.me/918287615770?text=Hello%20With%20Frame%20Creator%20Studio!%20I%20would%20like%20to%20enquire%20about%20your%20photography%20services.",
  email: "withframecreator@gmail.com",
  instagramHandle: "@withframecreator",
  instagramUrl: "https://instagram.com/withframecreator",
  youtubeUrl: "https://youtube.com/@withframecreator",
  facebookName: "Frame Creator",
  linkedinName: "With Frame Creator",
  hours: "24 Hours Open (24 घंटे सर्विस के लिए उपलब्ध)",
  rating: "5.0",
  reviewCount: "250+",
  address: "Premium Cinematic Studio, New Delhi & PAN India Coverage"
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "wedding",
    title: "Cinematic Wedding Coverage",
    hindiTitle: "शाही वेडिंग एवं शादी फोटोग्राफी",
    category: "wedding",
    icon: "HeartHandshake",
    description: "Complete royal wedding coverage combining candid emotional storytelling, timeless traditional portraits, and breathtaking 4K drone cinematography.",
    bullets: [
      "Candid & Traditional Photography + Videography",
      "4K 60fps Cinema Camera & DJI Drone Coverage",
      "Teaser Trailer (1 min) + Full Wedding Film (30-45 mins)",
      "Premium Italian Leatherette Coffee Table Albums",
      "Instant Same-Day Photo Delivery for Instagram"
    ],
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    priceStarting: "₹65,000 / day"
  },
  {
    id: "prewedding",
    title: "Concept Pre-Wedding Shoots",
    hindiTitle: "प्री-वेडिंग सिनेमैटिक शूट",
    category: "prewedding",
    icon: "Sparkles",
    description: "Romantic destination & concept shoots directed like a Bollywood romantic song. We assist with styling, concept ideation, and hidden scenic spots.",
    bullets: [
      "Concept Storyboard & Styling Consultation",
      "Night Cinematography with Bokeh & Smoke flares",
      "Licensed Romantic Music Video Reel",
      "30+ High-End Magazine Retouched Portraits",
      "Save The Date Invitation Teaser"
    ],
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    priceStarting: "₹35,000 / shoot"
  },
  {
    id: "cinematography",
    title: "Viral Instagram Reels & Cinema",
    hindiTitle: "ट्रेंडिंग इंस्टाग्राम रील्स एवं वीडियो",
    category: "cinematography",
    icon: "Video",
    description: "High-retention vertical reels edited with color grading, speed-ramping transitions, and viral audio cues designed to get millions of views.",
    bullets: [
      "Dedicated Vertical Reel Cinematographer",
      "24-Hour Express Delivery for Instagram Reels",
      "Trending Audio & Sound Design Synchronization",
      "Color Graded cinematic LUTs",
      "Behind-the-Scenes (BTS) candid cuts"
    ],
    imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    priceStarting: "₹15,000 / event"
  },
  {
    id: "events",
    title: "Events, Birthday & Parties",
    hindiTitle: "इवेंट्स, बर्थडे एवं पार्टी सेलिब्रेशन",
    category: "events",
    icon: "PartyPopper",
    description: "High-energy coverage for corporate galas, milestone birthdays, anniversary celebrations, ring ceremonies, and private VIP gatherings.",
    bullets: [
      "Unobtrusive Candid Guest Reactions",
      "High-Speed Low Light Flash Photography",
      "Instant QR Code Live Photo Sharing Gallery",
      "Group Portrait Stage Management",
      "Highlight Montage Video (2-3 mins)"
    ],
    imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    priceStarting: "₹20,000 / event"
  },
  {
    id: "fashion",
    title: "Fashion & Artist Portfolios",
    hindiTitle: "प्रोफेशनल फैशन एवं पोर्टफोलियो",
    category: "fashion",
    icon: "Camera",
    description: "Striking editorial studio portraits, model lookbooks, acting headshots, and designer catalogue shoots crafted with dramatic Rembrandt lighting.",
    bullets: [
      "Studio / Outdoor Architectural Locations",
      "Professional Lighting Setup & Tethered Shooting",
      "High-End Skin Retouching & Color Accuracy",
      "Composite & Editorial Layout Options",
      "Multiple Look & Wardrobe Changes"
    ],
    imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80",
    priceStarting: "₹18,000 / session"
  }
];

export const PORTFOLIO_GALLERY: PortfolioItem[] = [
  {
    id: "p1",
    title: "Aarav & Meera - Royal Udaipur Wedding",
    category: "Weddings",
    imageUrl: portfolioWeddingImg,
    location: "Candid + Cinematic",
    likes: "4.8K",
    aspect: "portrait"
  },
  {
    id: "p2",
    title: "Sunset Vows at Goan Shores",
    category: "Pre-Wedding",
    imageUrl: sunsetVowsImg,
    location: "South Goa Beach",
    likes: "6.2K",
    aspect: "landscape"
  },
  {
    id: "p3",
    title: "Cinematic Bridal Entry Slow-Mo",
    category: "Reels & Video",
    imageUrl: bridalEntryImg,
    location: "Taj Palace, New Delhi",
    likes: "18.5K",
    isReel: true,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    duration: "0:28",
    aspect: "portrait",
    objectPosition: "object-[center_15%]"
  },
  {
    id: "p4",
    title: "Vogue India Style Lookbook",
    category: "Fashion",
    imageUrl: fashionLookbookImg,
    location: "Studio 4 Studio, Mumbai",
    likes: "3.1K",
    aspect: "portrait"
  },
  {
    id: "p5",
    title: "Haldi Yellow Smoke Revelry",
    category: "Weddings",
    imageUrl: haldiSmokeImg,
    location: "Jaipur Heritage Resort",
    likes: "9.4K",
    aspect: "square"
  },
  {
    id: "p6",
    title: "Tech Summit VIP Afterparty",
    category: "Events",
    imageUrl: vipAfterpartyImg,
    location: "Aer Lounge, Gurugram",
    likes: "2.3K",
    aspect: "portrait",
    objectPosition: "object-[center_35%]"
  },
  {
    id: "p7",
    title: "Groom Squad Teaser Transition",
    category: "Reels & Video",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    location: "Chhatarpur Farms, Delhi",
    likes: "24.1K",
    isReel: true,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    duration: "0:35",
    aspect: "portrait"
  },
  {
    id: "p8",
    title: "Kavya 21st Grand Birthday Gala",
    category: "Events",
    imageUrl: birthdayGalaImg,
    location: "Le Meridien, New Delhi",
    likes: "3.9K",
    aspect: "square"
  },
  {
    id: "p9_new",
    title: "Urban Commercial Fashion Shoot",
    category: "Pre-Wedding",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
    location: "Studio 11, Mumbai",
    likes: "8.1K",
    aspect: "landscape"
  },
  {
    id: "p9",
    title: "Misty Mountain Engagement Romance",
    category: "Pre-Wedding",
    imageUrl: maternityRomanceImg,
    location: "Manali Pine Forests",
    likes: "7.7K",
    aspect: "portrait"
  }
];

export const REELS_SHOWCASE: ReelItem[] = [
  {
    id: "r1",
    title: "Bridal Entry Reveal - 4K Slow Motion",
    views: "1.4M Views",
    likes: "128K",
    coverUrl: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    audioTrack: "🎵 Kudmai (Cinematic Orchestral Mix)"
  },
  {
    id: "r2",
    title: "Groom Squad Swag Transition",
    views: "890K Views",
    likes: "94K",
    coverUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    audioTrack: "🎵 Arjan Vailly x King Beat Transition"
  },
  {
    id: "r3",
    title: "Haldi Flower Shower Candid Teaser",
    views: "2.1M Views",
    likes: "215K",
    coverUrl: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    audioTrack: "🎵 Chaudhary - Coke Studio Folk Blend"
  },
  {
    id: "r4",
    title: "Night Pre-Wedding Sparkler Romance",
    views: "650K Views",
    likes: "71K",
    coverUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4",
    audioTrack: "🎵 Kesariya (Acoustic Sunset Reprise)"
  }
];

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: "pkg_silver",
    name: "Intimate Celebration",
    hindiName: "सिल्वर पैकेज (छोटे फंक्शन)",
    price: "₹45,000",
    originalPrice: "₹55,000",
    eventSpan: "1 Day (Up to 8 Hours)",
    deliverables: [
      "1 Candid Photographer + 1 Traditional Photographer",
      "1 Cinematic Videographer",
      "Highlight Trailer (2 Mins) + Edited Raw Footage",
      "250+ Color Graded Digital Photos",
      "Express 5-Day Delivery"
    ],
    features: ["Best for Birthdays, Roka, Engagement, Corporate"],
    isPopular: false
  },
  {
    id: "pkg_gold",
    name: "Royal Shaadi Classic",
    hindiName: "गोल्ड पैकेज (वेडिंग 2-डे)",
    tag: "Most Booked 🔥",
    price: "₹1,35,000",
    originalPrice: "₹1,60,000",
    eventSpan: "2 Days (Haldi/Mehendi + Wedding)",
    deliverables: [
      "2 Senior Candid Photographers + 1 Traditional",
      "2 Cinema Cinematographers + 1 DJI Drone Pilot",
      "Cinematic Wedding Film (30 Mins) + 1 Min Teaser",
      "3 Viral Instagram Reels (Delivered next morning)",
      "2 Premium 40-Sheet Hardcover Photo Albums",
      "All High-Res Raw & Graded Photos on Luxury Pen Drive"
    ],
    features: ["Complete Royal Wedding Storytelling", "24/7 Priority Director Support"],
    isPopular: true
  },
  {
    id: "pkg_platinum",
    name: "Cinematic Grand Legacy",
    hindiName: "प्लेटिनम सिनेमैटिक (डेस्टिनेशन)",
    tag: "Luxury Elite ✨",
    price: "₹2,40,000",
    originalPrice: "₹2,85,000",
    eventSpan: "3 Days (Full Destination Wedding)",
    deliverables: [
      "Lead Director + 3 Candid Photographers",
      "3 Senior Cinematographers + Dual Drone Crew",
      "Exclusive Concept Pre-Wedding Shoot Included",
      "Feature Length Movie (45 Mins) + 3 Teasers",
      "8 Viral Reels with Custom Sound Engineering",
      "3 Luxury Parents & Couple Photo Books + Wall Canvas"
    ],
    features: ["PAN India Travel Setup Ready", "VIP Same-Day Edit Screening at Reception"],
    isPopular: false
  }
];

export const TESTIMONIALS_LIST: Testimonial[] = [
  {
    id: "t1",
    name: "Vikram & Neha Sharma",
    role: "Bride & Groom (Delhi Wedding)",
    eventType: "Grand Wedding & Reception",
    comment: "Perfect place for Photography & Cinematography with creative team and updated gadgets\nThey are super creative and cooperative. If you are finding best wedding photographers in Delhi, I'll recommend you with Frame creator & Photography. they have best team.\nGreat work!🏆🎖️",
    hindiHighlight: "इनकी 24 घंटे की सर्विस और काम करने का दोस्ताना तरीका बेहतरीन है। वीडियो क्वालिटी एकदम फिल्मी है!",
    rating: 5,
    date: "March 2026",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t2",
    name: "Rajesh Singhania",
    role: "MD, company",
    eventType: "Annual Corporate Jubilee",
    comment: "We hired With Frame Creator for a two-day corporate headshot shoot at our office for all our employees' LinkedIn profiles and I-cards. They set up a brilliant studio-grade background and lighting system right inside our workspace. The best part was how seamlessly they managed it during office hours—employees could just walk in and get their photos taken whenever they were free from work. Extremely professional, highly efficient, and the quality of the executive portraits is outstanding!",
    hindiHighlight: "प्रोफेशनल टीम और समय पर डिलीवरी। कॉर्पोरेट एवं पार्टी के लिए बेस्ट स्टूडियो।",
    rating: 5,
    date: "February 2026",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t3",
    name: "Simran Kaur",
    role: "Fashion Influencer",
    eventType: "Outdoor Portfolio & Reels",
    comment: "Very creative and professional fashion photographer. They managed the entire outdoor shoot seamlessly using portable diffusers and flashes to combat harsh sunlight. The output is absolutely stunning.",
    hindiHighlight: "रील्स की एडिटिंग और स्लो-मोशन शॉट्स लाजवाब हैं। 5/5 स्टार्स!",
    rating: 5,
    date: "January 2026",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  }
];

export const STATS_LIST = [
  { label: "Google Rating", value: "5.0 ⭐", sub: "Verified Reviews" },
  { label: "Weddings Captured", value: "500+", sub: "PAN India" },
  { label: "Reels View Count", value: "15M+", sub: "Viral Reach" },
  { label: "Studio Hours", value: "24/7", sub: "Always Available" }
];
