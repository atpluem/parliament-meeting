import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryViewComponent } from './ministry-view.component';

describe('MinistryViewComponent', () => {
  let component: MinistryViewComponent;
  let fixture: ComponentFixture<MinistryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
