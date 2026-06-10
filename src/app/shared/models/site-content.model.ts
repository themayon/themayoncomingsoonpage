export interface ActionLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavigationLink {
  label: string;
  path: string;
  external?: boolean;
}

export interface Metric {
  value: string;
  label: string;
}

export interface InsightCard {
  title: string;
  description: string;
  bullets: string[];
  badge?: string;
  badgeTone?: 'success' | 'warning' | 'accent';
  href?: string;
  external?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface PageSection {
  title: string;
  description: string;
  items: string[];
}

export interface ContactPoint {
  label: string;
  value: string;
  href: string;
  note?: string;
  external?: boolean;
}

export interface PageContent {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  intro: string;
  primaryCta: ActionLink;
  secondaryCta?: ActionLink;
  sections: PageSection[];
  contactPoints?: ContactPoint[];
}

