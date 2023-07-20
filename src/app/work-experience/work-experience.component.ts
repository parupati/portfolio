import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Associate Lead Technology',
      company: 'Clarivate Analitics',
      duration: 'May 2021 - Till Date',
      description: [
        'Working to expand google in remote areas.',
        'Working to develop new technologies to make life easier.',
      ],
    },
    {
      role: 'Senior Consultant Frontend Technologies',
      company: 'A + E Networks',
      duration: 'Sept 2019 - May 2021',
      description: [
        'Involved in various Public talks',
        'Open Sourced Google VP8',
      ],
    },
    {
      role: 'Lead  Frontend Technologies',
      company: 'Adapt Motors',
      duration: 'Feb 2016 - Sept 2019',
      description: [
        'Included Android in Google',
        'Worked on Development of Google Maps',
      ],
    },
    {
      role: 'Associate Consultant Frontend Technologies',
      company: 'AIG',
      duration: 'Dec 2014 - Dec 2016',
      description: [
        'Worked on Google Toolbar',
        'Involved in team to develop Google Chrome',
      ],
    },
    {
      role: 'Associate Consultant Frontend Technologies',
      company: 'JDPA',
      duration: 'Mar 2013 - Dec 2014',
      description: [
        'Worked with multiple teams to develop desktop and web applications',
        'Worked on different technologies such as (Dotnet, C++, Java)',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
