import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'The University of Texas at Austin',
      course: 'Postgraduate Degree, Artificial Intelligence and Machine Learning',
      duration: '2023-2024',
      score: '',
    },
    {
      institute: 'JNTU - Hyderabad',
      course: 'B.Tech in Computer Science',
      duration: '2008-2012',
      score: '70%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
