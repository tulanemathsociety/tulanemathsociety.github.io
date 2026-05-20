export type EventCategory =
  | "Problem Solving"
  | "Putnam Prep"
  | "Talk"
  | "Social"
  | "Career / Grad School";

export interface ClubEvent {
  id: string;
  title: string;
  category: EventCategory;
  date: string;
  time: string;
  location: string;
  description: string;
  rsvpUrl: string;
}

export type ResourceCategory =
  | "Coursework"
  | "Proofs"
  | "LaTeX"
  | "Putnam"
  | "Research"
  | "Grad School"
  | "Careers"
  | "Books";

export interface Resource {
  id: string;
  title: string;
  category: ResourceCategory;
  description: string;
  href: string;
}

export interface Officer {
  id: string;
  name: string;
  role: string;
  email: string;
  bio: string;
  initials: string;
  isAdvisor?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
