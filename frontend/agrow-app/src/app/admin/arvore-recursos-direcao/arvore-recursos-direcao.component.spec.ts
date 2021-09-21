import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArvoreRecursosDirecaoComponent } from './arvore-recursos-direcao.component';

describe('ArvoreRecursosDirecaoComponent', () => {
  let component: ArvoreRecursosDirecaoComponent;
  let fixture: ComponentFixture<ArvoreRecursosDirecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArvoreRecursosDirecaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArvoreRecursosDirecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
