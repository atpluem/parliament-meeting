import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtopicRejectrateComponent } from './subtopic-rejectrate.component';

describe('SubtopicRejectrateComponent', () => {
  let component: SubtopicRejectrateComponent;
  let fixture: ComponentFixture<SubtopicRejectrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtopicRejectrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtopicRejectrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
