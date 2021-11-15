import { TestBed } from '@angular/core/testing';

import { AuthTreinamentoGuard } from './auth-treinamento.guard';

describe('AuthTreinamentoGuard', () => {
  let guard: AuthTreinamentoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthTreinamentoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
