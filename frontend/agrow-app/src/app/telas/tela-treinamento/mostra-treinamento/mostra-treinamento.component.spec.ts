import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraTreinamentoComponent } from './mostra-treinamento.component';

describe('MostraTreinamentoComponent', () => {
  let component: MostraTreinamentoComponent;
  let fixture: ComponentFixture<MostraTreinamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostraTreinamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraTreinamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
