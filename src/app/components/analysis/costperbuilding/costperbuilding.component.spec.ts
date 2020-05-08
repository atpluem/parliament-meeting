import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostperbuildingComponent } from './costperbuilding.component';

describe('CostperbuildingComponent', () => {
  let component: CostperbuildingComponent;
  let fixture: ComponentFixture<CostperbuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostperbuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostperbuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
