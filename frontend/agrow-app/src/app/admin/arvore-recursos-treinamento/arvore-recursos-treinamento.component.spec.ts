import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArvoreRecursosTreinamentoComponent } from './arvore-recursos-treinamento.component';

describe('ArvoreRecursosTreinamentoComponent', () => {
  let component: ArvoreRecursosTreinamentoComponent;
  let fixture: ComponentFixture<ArvoreRecursosTreinamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArvoreRecursosTreinamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArvoreRecursosTreinamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
