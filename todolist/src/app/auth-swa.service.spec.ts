import { TestBed } from '@angular/core/testing';

import { AuthSWAService } from './auth-swa.service';

describe('AuthSWAService', () => {
  let service: AuthSWAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSWAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
