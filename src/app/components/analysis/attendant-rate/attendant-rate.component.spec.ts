import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendantRateComponent } from './attendant-rate.component';

describe('AttendantRateComponent', () => {
  let component: AttendantRateComponent;
  let fixture: ComponentFixture<AttendantRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendantRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendantRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
