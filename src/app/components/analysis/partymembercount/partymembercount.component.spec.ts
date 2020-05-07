import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartymembercountComponent } from './partymembercount.component';

describe('PartymembercountComponent', () => {
  let component: PartymembercountComponent;
  let fixture: ComponentFixture<PartymembercountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartymembercountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartymembercountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
