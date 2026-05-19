import type { PortableTextBlock } from "next-sanity";

// ── Shared ──
export interface SanityImage {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
}

// ── Services ──
export interface SanityService {
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: SanityImage;
  orderRank: number;
}

// ── Projects ──
export interface SanityProjectFeature {
  icon: string;
  title: string;
  description: string;
}

export interface SanityProjectTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface SanityClientInfo {
  name: string;
  industry: string;
  services: string[];
}

export type SanityProjectPriority = "featured" | "high" | "normal" | "low";

export interface SanityProjectListItem {
  title: string;
  slug: string;
  category: string;
  description: string;
  tech: string[];
  image: SanityImage;
  year: string;
  tagline: string;
  platform: string;
  duration: string;
  teamSize: string;
  status: string;
  priority: SanityProjectPriority;
}

export type SanityProjectGalleryType = "mobile" | "desktop";

export type SanityProjectType = "mobile" | "website";

export interface SanityProject extends SanityProjectListItem {
  heroImage?: SanityImage;
  projectType?: SanityProjectType;
  websiteUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  challenge: string;
  solution: string;
  client: SanityClientInfo;
  features: SanityProjectFeature[];
  gallery: SanityImage[];
  galleryType?: SanityProjectGalleryType;
  testimonial?: SanityProjectTestimonial;
}

// ── Clients ──
export interface SanityClient {
  name: string;
  icon: string;
  color: string;
  type: string;
  logo?: SanityImage;
  orderRank: number;
}

// ── Testimonials ──
export interface SanityTestimonial {
  name: string;
  role: string;
  company: string;
  rating: number;
  comment: string;
  avatar: string;
  color: string;
  orderRank: number;
}

// ── Offices ──
export interface SanityOffice {
  city: string;
  label: string;
  address: string;
  phone: string;
  hours: string;
  image: SanityImage;
  mapLink: string;
  orderRank: number;
}

// ── FAQs ──
export interface SanityFaqItem {
  question: string;
  answer: string;
  context: "homepage" | "contact" | "both";
  orderRank: number;
}

// ── How We Work ──
export interface SanityHowWeWorkStep {
  number: string;
  title: string;
  description: string;
  iconKey: string;
  orderRank: number;
}

// ── Hero Section ──
export interface SanityHeroSection {
  rotatingWords: string[];
  headingPrefix: string;
  headingSuffix: string;
  bodyText: string;
  ctaPrimaryText: string;
  ctaPrimaryLink: string;
  ctaSecondaryText: string;
  ctaSecondaryLink: string;
}

// ── About Page ──
export interface SanityStat {
  value: number;
  suffix: string;
  label: string;
}

export interface SanityValue {
  num: string;
  title: string;
  desc: string;
  iconKey: string;
}

export interface SanityAboutPage {
  heroTagline: string;
  heroTitle: string;
  heroAccent: string;
  heroDescription: string;
  heroImage: SanityImage;
  stats: SanityStat[];
  values: SanityValue[];
  visionTitle: string;
  visionText: string;
  missionTitle: string;
  missionText: string;
  foundedYear: string;
  clientRetention: string;
  portfolioTag: string;
  portfolioTitle: string;
  portfolioAccent: string;
  portfolioDescription: string;
  portfolioButtonText: string;
  portfolioFile?: { _ref: string; url: string };
}

// ── Careers Page ──
export interface SanityPerk {
  title: string;
  desc: string;
  iconKey: string;
}

export interface SanityJobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
  details: string;
}

export interface SanityCareersPage {
  perks: SanityPerk[];
  positions: SanityJobPosition[];
}

// ── Contact Page ──
export interface SanityContactPage {
  heroTitle: string;
  heroAccent: string;
  heroSubtitle: string;
  serviceOptions: string[];
}

// ── Footer ──
export interface SanityLinkItem {
  label: string;
  href: string;
}

export interface SanityLinkColumn {
  heading: string;
  links: SanityLinkItem[];
}

export interface SanityFooterConfig {
  brandDescription: string;
  columns: SanityLinkColumn[];
  copyrightText: string;
}

// ── Legal Page ──
export interface SanityLegalPage {
  title: string;
  pageType: "privacy" | "terms";
  lastUpdated: string;
  subtitle: string;
  content: PortableTextBlock[];
}

// ── Site Settings ──
export interface SanitySocialLink {
  platform: string;
  url: string;
}

export interface SanitySiteSettings {
  siteName: string;
  siteDescription: string;
  socialLinks: SanitySocialLink[];
  contactEmail: string;
  contactPhone: string;
}
