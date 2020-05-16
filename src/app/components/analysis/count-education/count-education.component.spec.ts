import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountEducationComponent } from './count-education.component';

describe('CountEducationComponent', () => {
  let component: CountEducationComponent;
  let fixture: ComponentFixture<CountEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
