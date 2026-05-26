import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  outcome: string;
};

export type Project = {
  title: string;
  category:
    | "Frontend"
    | "Full Stack"
    | "SaaS"
    | "Dashboard"
    | "Landing Page"
    | "E-commerce"
    | "Automation"
    | "API";
  summary: string;
  impact: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  status: "Live" | "In progress" | "Case study";
  year: string;
  demoUrl?: string;
  githubUrl: string;
};

export type Experience = {
  period: string;
  company: string;
  role: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};
