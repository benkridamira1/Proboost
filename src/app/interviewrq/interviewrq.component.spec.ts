import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewrqComponent } from './interviewrq.component';

describe('InterviewrqComponent', () => {
  let component: InterviewrqComponent;
  let fixture: ComponentFixture<InterviewrqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewrqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewrqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
