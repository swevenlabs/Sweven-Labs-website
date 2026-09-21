export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: string[];
  iconName: string;
  featured?: boolean;
}

export interface TechnologyItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'AI & Data' | 'DevOps & Tools';
  description: string;
  icon: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  clientType: string;
  category: string;
  summary: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  impact: string[];
  technologies: string[];
  image: string;
  featured: boolean;
  year: string;
  link?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ValuePillar {
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  preferredContact: string;
  message: string;
  honeypot?: string; // Spam protection
}

export interface SiteConfig {
  name: string;
  tagline: string;
  subTagline: string;
  heroHeadline: string;
  heroDescription: string;
  email: string;
  phone?: string;
  location: string;
  socials: SocialLink[];
  services: ServiceItem[];
  technologies: TechnologyItem[];
  projects: ProjectCaseStudy[];
  processSteps: ProcessStep[];
  faqs: FAQItem[];
  pillars: ValuePillar[];
}
