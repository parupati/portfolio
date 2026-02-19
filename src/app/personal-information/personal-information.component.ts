import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Madhukar Reddy Parupati'],
    ['Work Exp', '13 Years'],
    ['Education', 'B.Tech (2012)'],
    ['Interests', 'Traveling'],
  ];

  aboutMe: string[] = [
    'Hi there! I am a passionate Full Stack Developer and AI/ML enthusiast with a strong eye for design and a love for crafting beautiful, intuitive user experiences.',
    'I specialize in turning ideas into reality through code and enjoy building scalable web applications as well as intelligent AI-powered solutions.',
    'I have 13 years of experience designing and developing web applications using Angular, React, Java, and AWS — and more recently, exploring AI/ML, LLM agents, RAG pipelines, and data science.'
  ];

  constructor() {}

  ngOnInit(): void {}
}
