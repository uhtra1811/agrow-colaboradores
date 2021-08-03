import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaGerenciaComponent } from './tela-gerencia.component';

describe('TelaGerenciaComponent', () => {
  let component: TelaGerenciaComponent;
  let fixture: ComponentFixture<TelaGerenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaGerenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaGerenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
