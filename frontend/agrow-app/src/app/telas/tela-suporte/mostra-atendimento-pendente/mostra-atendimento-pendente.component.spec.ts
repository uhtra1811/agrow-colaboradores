import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraAtendimentoPendenteComponent } from './mostra-atendimento-pendente.component';

describe('MostraAtendimentoPendenteComponent', () => {
  let component: MostraAtendimentoPendenteComponent;
  let fixture: ComponentFixture<MostraAtendimentoPendenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostraAtendimentoPendenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraAtendimentoPendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
