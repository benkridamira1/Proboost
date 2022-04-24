import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideochatrqComponent } from './videochatrq.component';

describe('VideochatrqComponent', () => {
  let component: VideochatrqComponent;
  let fixture: ComponentFixture<VideochatrqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideochatrqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideochatrqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
