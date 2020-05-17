import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypemeetingAvgtimeComponent } from './typemeeting-avgtime.component';

describe('TypemeetingAvgtimeComponent', () => {
  let component: TypemeetingAvgtimeComponent;
  let fixture: ComponentFixture<TypemeetingAvgtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypemeetingAvgtimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypemeetingAvgtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
