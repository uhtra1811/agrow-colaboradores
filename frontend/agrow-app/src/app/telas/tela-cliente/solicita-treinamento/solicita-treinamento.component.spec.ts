import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitaTreinamentoComponent } from './solicita-treinamento.component';

describe('SolicitaTreinamentoComponent', () => {
  let component: SolicitaTreinamentoComponent;
  let fixture: ComponentFixture<SolicitaTreinamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitaTreinamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitaTreinamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
