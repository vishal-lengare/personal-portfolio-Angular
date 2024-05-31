import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myPortfolio';
  @HostBinding('clss.pc') pcMode = false;
  constructor(private breakpointObserver: BreakpointObserver){}
  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape]).subscribe(result => {
      if (result.breakpoints[Breakpoints.HandsetPortrait]) {
        this.pcMode = false;
      }
      if (result.breakpoints[Breakpoints.WebLandscape]) {
        this.pcMode = true;
      }
    });
  }
}
