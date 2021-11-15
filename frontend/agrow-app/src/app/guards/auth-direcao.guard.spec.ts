import { TestBed } from '@angular/core/testing';

import { AuthDirecaoGuard } from './auth-direcao.guard';

describe('AuthDirecaoGuard', () => {
  let guard: AuthDirecaoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthDirecaoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
