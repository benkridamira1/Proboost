import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideochatmanagerComponent } from './videochatmanager.component';

describe('VideochatmanagerComponent', () => {
  let component: VideochatmanagerComponent;
  let fixture: ComponentFixture<VideochatmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideochatmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideochatmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
