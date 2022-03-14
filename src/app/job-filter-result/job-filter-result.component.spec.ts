import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFilterResultComponent } from './job-filter-result.component';

describe('JobFilterResultComponent', () => {
  let component: JobFilterResultComponent;
  let fixture: ComponentFixture<JobFilterResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobFilterResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobFilterResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
