import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  myData: string[][] = [
    ['Name', 'Vishal Lengare'],
    ['DOB', '01/06/2001'],
    ['Work Exp', '1.5+ yr'],
    ['Education', 'BSC(ECS) (2022)'],
    ['Interest', 'Cricket']
  ]

aboutMe: string[] = [
  'Hi, I am Software Engineer with 1.5+ yr of experience is software industry.',
  'Worked as Angular Developer at CodeSeeds Solution LLP, Pune and Atos Syntel Pvt. Ltd , Pune And currently working At Logimetrix TechSolutions Pvt Ltd , Lucknow.',
  'Delivered all products within deadlines. Always egar to learn new technologies ',
  'Currently working as Angular Developer at Logimetrix TechSolutions Pvt Ltd'
]
  constructor(){}


  ngOnInit(): void {

  }

}
