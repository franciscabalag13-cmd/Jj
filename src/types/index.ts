export interface Project {
  id: string;
  title: string;
  summary: string;
  fullDescription: string;
  category: 'Design Systems' | 'Developer Tools' | 'Web Applications' | 'Creative Tech';
  year: string;
  role: string;
  impactMetrics: { label: string; value: string }[];
  technologies: string[];
  features: string[];
  interactiveDemoType: 'aura' | 'lumina' | 'devpulse' | 'zenith';
  githubUrl: string;
  liveUrl: string;
}

export interface PlaygroundComponent {
  id: string;
  name: string;
  description: string;
  category: string;
  code: string;
  language: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
}
