import { Component, OnInit } from '@angular/core';
import { Skills } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skills[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Expert',
      rating: 90
    },
    {
      name: 'ReactJS, Redux, NextJS',
      level: 'Intermediate',
      rating: 60
    },
    {
      name: 'TypeScript',
      level: 'Expert',
      rating: 90
    },
    {
      name: 'JavaScript',
      level: 'Good',
      rating: 80
    },
    {
      name: 'HTM, CSS',
      level: 'very Good',
      rating: 85
    },
  ]


  constructor(){}

  ngOnInit(): void {

  }

}
