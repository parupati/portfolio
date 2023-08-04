import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Singularity',
      technologies: 'React Js, Angular 12, Java, Node, Aws EC2, S3, SQS, System Manager, SonarQube, Jenkins, GIT, Postgres SQL, Python, Material, Node',
      description: [
        'I am responsible for leading the team and delivering the product on time.',
        'I am responsible for Code Reviews and for performance & security of application.',
        'I am responsible for Minor/Major releases and production support.'
      ],
    },
    {
      title: 'Armada',
      technologies: 'Angular 8, React, Vue Js, Java, Node, Python, Aws, SonarQube, ADO, S3,DJAGO, RDS, Postgres SQL, PrimeNg, Redux, Rxjs, Azure',
      description: [
        'I am responsible for leading the team on delivering the product on time.',
        'I am responsible for Code Reviews and for performance & security of application.',
        'I used to mentor Junior resources.',
        'I used to do POC on new business use cases and in new technologies'
      ],
    },
    {
      title: 'Travel Guard',
      technologies: 'Angular Js, Java, Alfresco, PEGA, MySQL, Karma, Jasmin',
      description: [
        'Learned new concepts like Google Maps integration, Widzetization of an application',
        'Take care of Release activities and Unit Test cases.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
