import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
   { 
    title: 'DPU (Dairy procurement unit)',
    technologies: 'Angular, Typescript, NodeJS, Express',
    description: [
      'Worked as a Angular application developer',
      'Build the Angular component and angular services for the code reusability'
    ]
  },
   { 
    title: 'Absolut Study',
    technologies: 'Angular, Typescript, NodeJS, Express',
    description: [
      'Worked as a Jr.Angular application developer',
      'Build the Angular component and angular services for the code reusability'
    ]
  },
  ]

  constructor(){}

  ngOnInit(): void {

  }

}
