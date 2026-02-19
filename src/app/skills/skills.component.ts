import { Component } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills: Skill[] = [
    // Frontend
    { name: 'Angular & Angular Material', level: 'Expert',       rating: 90 },
    { name: 'React JS & Redux',           level: 'Expert',       rating: 85 },
    { name: 'HTML · CSS · JavaScript',    level: 'Expert',       rating: 92 },
    // Backend & Cloud
    { name: 'Java',                       level: 'Advanced',     rating: 70 },
    { name: 'Python',                     level: 'Advanced',     rating: 75 },
    { name: 'AWS Cloud Services',         level: 'Advanced',     rating: 70 },
    { name: 'PostgreSQL',                 level: 'Intermediate', rating: 65 },
    // AI / ML / Data Science
    { name: 'NumPy & Pandas',             level: 'Advanced',     rating: 75 },
    { name: 'NLP (Natural Language Processing)', level: 'Advanced', rating: 72 },
    { name: 'CNN & Deep Learning',        level: 'Intermediate', rating: 65 },
    { name: 'LangChain',                  level: 'Advanced',     rating: 78 },
    { name: 'RAG (Retrieval-Augmented Generation)', level: 'Advanced', rating: 78 },
    { name: 'OpenAI Agents & APIs',       level: 'Advanced',     rating: 80 },
    { name: 'A2A (Agent-to-Agent)',       level: 'Intermediate', rating: 68 },
  ];

  techList: string[] = [
    'Angular', 'React', 'TypeScript', 'JavaScript', 'RxJS', 'NgRx', 'Redux',
    'Node.js', 'Java', 'Python', 'AWS EC2', 'AWS S3', 'AWS SQS', 'PostgreSQL',
    'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch',
    'LangChain', 'OpenAI', 'RAG', 'A2A', 'NLP', 'CNN', 'LLMs',
    'Git', 'Jenkins', 'SonarQube', 'Figma', 'REST APIs', 'GraphQL',
    'CSS3', 'SCSS', 'Material Design', 'PrimeNG', 'Docker', 'Azure',
  ];
}
