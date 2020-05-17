import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendfactionEachpartyComponent } from './attendfaction-eachparty.component';

describe('AttendfactionEachpartyComponent', () => {
  let component: AttendfactionEachpartyComponent;
  let fixture: ComponentFixture<AttendfactionEachpartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendfactionEachpartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendfactionEachpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
