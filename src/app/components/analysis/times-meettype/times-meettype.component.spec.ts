import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesMeettypeComponent } from './times-meettype.component';

describe('TimesMeettypeComponent', () => {
  let component: TimesMeettypeComponent;
  let fixture: ComponentFixture<TimesMeettypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesMeettypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesMeettypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
