import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeDirectorComponent } from './creative-director.component';

describe('CreativeDirectorComponent', () => {
  let component: CreativeDirectorComponent;
  let fixture: ComponentFixture<CreativeDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreativeDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativeDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
