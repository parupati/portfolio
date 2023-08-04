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
        'Working on Patents domain, building effecient UI and Coud services to process Patent Data.',
        'Working on various path breaking applications and part of complex eco system.',
      ],
    },
    {
      role: 'Senior Consultant Frontend Technologies',
      company: 'A + E Networks',
      duration: 'Sept 2019 - May 2021',
      description: [
        'Involved in leading team to design best practices.',
        'Part of Research team to innovate and introduce reliable architecture.',
      ],
    },
    {
      role: 'Lead  Frontend Technologies',
      company: 'Adapt Motors',
      duration: 'Feb 2016 - Sept 2019',
      description: [
        'Worked with OEMs and end users to understand and design the application.',
        'Worked on Development of CDP for the companu',
      ],
    },
    {
      role: 'Associate Consultant Frontend Technologies',
      company: 'AIG',
      duration: 'Dec 2014 - Dec 2016',
      description: [
        'Learned new technologies and had good exposure to Insurance domain.',
        'Involved in team to build widgets which can be reused anywhere.',
      ],
    },
    {
      role: 'Associate Consultant Frontend Technologies',
      company: 'JDPA',
      duration: 'Mar 2013 - Dec 2014',
      description: [
        'Worked with multiple teams to develop mobile and web applications.',
        'Learned how to be a good team player and what it takes to deliver.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
