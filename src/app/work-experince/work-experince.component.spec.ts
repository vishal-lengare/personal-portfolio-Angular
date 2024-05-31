import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperinceComponent } from './work-experince.component';

describe('WorkExperinceComponent', () => {
  let component: WorkExperinceComponent;
  let fixture: ComponentFixture<WorkExperinceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkExperinceComponent]
    });
    fixture = TestBed.createComponent(WorkExperinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
