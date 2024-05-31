import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appResponsive]'
})
export class ResponsiveDirective implements OnInit {

  constructor(private elementRef: ElementRef, private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape]).subscribe(result => {
      if (result.breakpoints[Breakpoints.HandsetPortrait]) {
        this.elementRef.nativeElement.classList.remove('pc');
      }
      if (result.breakpoints[Breakpoints.WebLandscape]) {
        this.elementRef.nativeElement.classList.add('pc');
      }
    });
  }
}
