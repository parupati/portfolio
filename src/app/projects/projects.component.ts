import { Component } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Singularity',
      technologies: 'React, Angular 12, Java, Node, AWS EC2, S3, SQS, System Manager, SonarQube, Jenkins, Git, PostgreSQL, Python, Material',
      description: [
        'Led cross-functional team to deliver patent-domain UI and cloud services on time.',
        'Responsible for code reviews, performance optimization, and security of the application.',
        'Managed minor/major releases and provided production support.',
      ],
    },
    {
      title: 'Armada',
      technologies: 'Angular 8, React, Vue, Java, Node, Python, AWS, SonarQube, ADO, Django, RDS, PostgreSQL, PrimeNG, Redux, RxJS, Azure',
      description: [
        'Led team delivery of a multi-framework content management platform.',
        'Mentored junior engineers and drove code quality through reviews.',
        'Conducted POCs on new business use cases and emerging technologies.',
      ],
    },
    {
      title: 'Travel Guard',
      technologies: 'AngularJS, Java, Alfresco, PEGA, MySQL, Karma, Jasmine',
      description: [
        'Implemented Google Maps integration and application widgetization.',
        'Managed release activities and maintained comprehensive unit test coverage.',
      ],
    },
  ];

  getTechList(technologies: string): string[] {
    return technologies.split(',').map(t => t.trim()).slice(0, 8);
  }
}
