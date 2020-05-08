import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopargrankComponent } from './topargrank.component';

describe('TopargrankComponent', () => {
  let component: TopargrankComponent;
  let fixture: ComponentFixture<TopargrankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopargrankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopargrankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
