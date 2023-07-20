import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material, Rxjs',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'React Js, Redux',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'JAVA',
      level: 'Advanced',
      rating: 70,
    },
    {
      name: 'Python',
      level: 'Intermidiate',
      rating: 60,
    },
    {
      name: 'AWS',
      level: 'Advanced',
      rating: 70,
    },
    {
      name: 'Postgre SQL',
      level: 'Intermidiate',
      rating: 60,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
