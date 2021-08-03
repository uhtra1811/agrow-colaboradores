import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAtendimentoComponent } from './registro-atendimento.component';

describe('RegistroAtendimentoComponent', () => {
  let component: RegistroAtendimentoComponent;
  let fixture: ComponentFixture<RegistroAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroAtendimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
