import { Component, OnInit } from '@angular/core';
import { WorkExperince } from '../models/models';

@Component({
  selector: 'app-work-experince',
  templateUrl: './work-experince.component.html',
  styleUrls: ['./work-experince.component.css']
})
export class WorkExperinceComponent implements OnInit {

  workExp: WorkExperince[] = [
    {
      role: 'Associate Consultant',
      company: 'Atos Syntel Pvt. Ltd',
      duration: 'Oct 2022 - Dec 2022',
      description: [
        'Worked as a Associate Consultant On the Automation Testing Using JAVA/SELENIUM',
        'Technical - Java, Selenium, JUnit'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'CodeSeeds Solutions Pvt. Ltd',
      duration: 'Jan 2023 - July 2023',
      description: [
        'Worked as a Software Engineer Trainee And Complete the training and development using angular',
        'Technical - Angular, TypeScript, JavaScript, Html, Css'
      ]
    },
    {
      role: 'Angular Developer',
      company: 'Logimetrix TechSolutions Pvt. Ltd',
      duration: 'July 2023- Present',
      description: [
        'Working on the Angular Development Environment With different different domaiins, also working on the react JS and Node JS with express. and Mongo DB',
        'Technical - Angular, TypeScript, JavaScript, React, Redux, NextJS, Html, Css, NodeJS, Express, MongoDb'
      ]
    },
  ]

  constructor(){}

  ngOnInit(): void {

  }

}
