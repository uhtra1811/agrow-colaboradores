import { TestBed } from '@angular/core/testing';

import { AuthDesenvolvimentoGuard } from './auth-desenvolvimento.guard';

describe('AuthDesenvolvimentoGuard', () => {
  let guard: AuthDesenvolvimentoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthDesenvolvimentoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
