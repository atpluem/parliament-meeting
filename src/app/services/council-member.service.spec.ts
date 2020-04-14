import { TestBed } from '@angular/core/testing';

import { CouncilMemberService } from './council-member.service';

describe('CouncilMemberService', () => {
  let service: CouncilMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouncilMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
