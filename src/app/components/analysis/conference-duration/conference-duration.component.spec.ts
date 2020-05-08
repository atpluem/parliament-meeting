import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceDurationComponent } from './conference-duration.component';

describe('ConferenceDurationComponent', () => {
  let component: ConferenceDurationComponent;
  let fixture: ComponentFixture<ConferenceDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceDurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
