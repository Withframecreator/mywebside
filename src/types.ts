export interface ServiceItem {
  id: string;
  title: string;
  hindiTitle: string;
  category: 'wedding' | 'prewedding' | 'events' | 'fashion' | 'cinematography';
  icon: string;
  description: string;
  bullets: string[];
  imageUrl: string;
  priceStarting: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'All' | 'Weddings' | 'Pre-Wedding' | 'Reels & Video' | 'Fashion' | 'Events';
  imageUrl: string;
  location: string;
  likes: string;
  isReel?: boolean;
  videoUrl?: string;
  duration?: string;
  aspect?: 'square' | 'portrait' | 'landscape';
  objectPosition?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  eventType: string;
  comment: string;
  hindiHighlight?: string;
  rating: number;
  date: string;
  avatarUrl: string;
}

export interface PackageItem {
  id: string;
  name: string;
  hindiName: string;
  tag?: string;
  price: string;
  originalPrice?: string;
  eventSpan: string;
  deliverables: string[];
  features: string[];
  isPopular?: boolean;
}

export interface ReelItem {
  id: string;
  title: string;
  views: string;
  likes: string;
  coverUrl: string;
  videoUrl: string;
  audioTrack: string;
}

export interface AIConceptResult {
  conceptTitle: string;
  colorPalette: string[];
  paletteNames: string[];
  moodboardSummary: string;
  mustHaveShots: { title: string; description: string }[];
  reelConcept: {
    hook: string;
    trendingAudioStyle: string;
    storyline: string;
  };
  recommendedGear: string[];
  estimatedTeamSize: string;
}
