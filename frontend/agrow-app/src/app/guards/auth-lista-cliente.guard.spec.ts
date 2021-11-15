import { TestBed } from '@angular/core/testing';

import { AuthListaClienteGuard } from './auth-lista-cliente.guard';

describe('AuthListaClienteGuard', () => {
  let guard: AuthListaClienteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthListaClienteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
