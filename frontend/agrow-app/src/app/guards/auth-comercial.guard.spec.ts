import { TestBed } from '@angular/core/testing';

import { AuthComercialGuard } from './auth-comercial.guard';

describe('AuthComercialGuard', () => {
  let guard: AuthComercialGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthComercialGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
