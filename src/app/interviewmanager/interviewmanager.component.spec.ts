import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewmanagerComponent } from './interviewmanager.component';

describe('InterviewmanagerComponent', () => {
  let component: InterviewmanagerComponent;
  let fixture: ComponentFixture<InterviewmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
