import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeintervalComponent } from './ageinterval.component';

describe('AgeintervalComponent', () => {
  let component: AgeintervalComponent;
  let fixture: ComponentFixture<AgeintervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeintervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeintervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
