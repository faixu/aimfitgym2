export interface SiteContent {
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutContent: string;
  whatsappNumber: string;
  whatsappMessage: string;
  address: string;
  phone: string;
  openingHours: string;
  googleMapsUrl: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  isPopular: boolean;
  order: number;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
  image?: string;
  transformationImage?: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  image: string;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  goal: "Weight Loss" | "Muscle Gain" | "General Fitness";
  createdAt: any;
  status: "new" | "contacted" | "joined";
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  createdAt: string;
}
