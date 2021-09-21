import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArvoreRecursosClienteComponent } from './arvore-recursos-cliente.component';

describe('ArvoreRecursosClienteComponent', () => {
  let component: ArvoreRecursosClienteComponent;
  let fixture: ComponentFixture<ArvoreRecursosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArvoreRecursosClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArvoreRecursosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
