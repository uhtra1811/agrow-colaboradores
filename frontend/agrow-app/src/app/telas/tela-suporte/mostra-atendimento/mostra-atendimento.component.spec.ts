import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraAtendimentoComponent } from './mostra-atendimento.component';

describe('MostraAtendimentoComponent', () => {
  let component: MostraAtendimentoComponent;
  let fixture: ComponentFixture<MostraAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostraAtendimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
