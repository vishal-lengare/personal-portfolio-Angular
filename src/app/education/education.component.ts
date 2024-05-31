import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationList: Education[] = [
    {
      Institute: 'Shree Shivaji Vidyalaya, Mahud bk',
      course: 'SSC',
      durations: '2015 - 2017',
      score: '78.80%'
    },
    {
      Institute: 'Rajaram Jr Collage, Pandharpur',
      course: 'HSC',
      durations: '2017 - 2019',
      score: '71.69%'
    },
    {
      Institute: 'Vidnyan Mahavidyalaya, Sangola',
      course: 'BSC(ECS)',
      durations: '2019 - 2022',
      score: '82%'
    },
    

  ]


  constructor(){}

  ngOnInit(): void {

  }

}
