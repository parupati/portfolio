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
      institute: "JNTU - Hyderabad",
      course: 'B.Tech in Computer Science',
      duration: '2008-2012',
      score: '70%',
    },
    {
      institute: 'Vikas Junior College',
      course: 'MPC',
      duration: '2006-2008',
      score: '90%',
    },
    {
      institute: 'Bhashyam Public School',
      course: 'SSC',
      duration: '2005-2006',
      score: '90%',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
