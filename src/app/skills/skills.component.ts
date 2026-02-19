import { Component } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Angular & Angular Material', level: 'Expert', rating: 90 },
    { name: 'React JS & Redux',           level: 'Expert', rating: 85 },
    { name: 'HTML · CSS · JavaScript',    level: 'Expert', rating: 92 },
    { name: 'Java',                        level: 'Advanced', rating: 70 },
    { name: 'Python',                      level: 'Intermidiate', rating: 60 },
    { name: 'AWS Cloud Services',          level: 'Advanced', rating: 70 },
    { name: 'PostgreSQL',                  level: 'Intermidiate', rating: 60 },
  ];

  techList: string[] = [
    'Angular', 'React', 'TypeScript', 'JavaScript', 'RxJS', 'NgRx', 'Redux',
    'Node.js', 'Java', 'Python', 'AWS EC2', 'AWS S3', 'AWS SQS', 'PostgreSQL',
    'Git', 'Jenkins', 'SonarQube', 'Figma', 'REST APIs', 'GraphQL',
    'CSS3', 'SCSS', 'Material Design', 'PrimeNG', 'Docker', 'Azure',
  ];
}
