import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesmeetEachbuilingComponent } from './timesmeet-eachbuiling.component';

describe('TimesmeetEachbuilingComponent', () => {
  let component: TimesmeetEachbuilingComponent;
  let fixture: ComponentFixture<TimesmeetEachbuilingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesmeetEachbuilingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesmeetEachbuilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
