export interface Education {
  institute: string;
  course: string;
  duration: string;
  score: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: string;
  rating: number;
}

export interface Project {
  title: string;
  subtitle: string;
  technologies: string;
  description: string[];
  tag?: string;
  githubUrl?: string;
  demoUrl?: string;
}
