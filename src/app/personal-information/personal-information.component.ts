import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Madhukar Reddy Parupati'],
    ['DOB', '3<sup>rd</sup> Jan, 1991'],
    ['Work Exp', '10 Years'],
    ['Education', 'B.Tech (2012)'],
    ['Interests', 'Traveling'],
  ];

  aboutMe: string[] = [
    'Hi there! I am a passionate and creative Frontend Developer with a strong eye for design and a love for crafting beautiful and intuitive user experiences.',
    'I specialize in turning ideas into reality through code and enjoy the process of bringing life to websites and web applications.',
    'have solid 10 years experience in designing and developing Web Applications using Angular, React, Java and AWS.'
  ];

  constructor() {}

  ngOnInit(): void {}
}
