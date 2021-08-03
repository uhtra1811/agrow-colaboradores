import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaTreinamentoComponent } from './tela-treinamento.component';

describe('TelaTreinamentoComponent', () => {
  let component: TelaTreinamentoComponent;
  let fixture: ComponentFixture<TelaTreinamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaTreinamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaTreinamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
