export interface Pillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Specialty {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  iconName: string;
  image?: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface TargetCriterion {
  id: string;
  text: string;
  category?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
