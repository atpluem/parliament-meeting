import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncilMemberComponent } from './council-member.component';

describe('CouncilMemberComponent', () => {
  let component: CouncilMemberComponent;
  let fixture: ComponentFixture<CouncilMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouncilMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncilMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
