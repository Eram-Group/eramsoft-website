import projectsData from "./projects.json";

export interface ProjectFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  phase: string;
  description: string;
}

export interface ResultMetric {
  metric: string;
  label: string;
}

export interface Project {
  title: string;
  slug: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  year: string;
  tagline: string;
  platform: string;
  duration: string;
  teamSize: string;
  status: string;
  challenge: string;
  solution: string;
  client: {
    name: string;
    industry: string;
    location: string;
    services: string[];
  };
  features: ProjectFeature[];
  gallery: string[];
  process: ProcessStep[];
  results: ResultMetric[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  appStoreUrl?: string;
  googlePlayUrl?: string;
  websiteUrl?: string;
}

export const projects: Project[] = projectsData;
