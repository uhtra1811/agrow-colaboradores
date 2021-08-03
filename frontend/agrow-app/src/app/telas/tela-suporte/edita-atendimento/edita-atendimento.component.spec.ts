import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaAtendimentoComponent } from './edita-atendimento.component';

describe('EditaAtendimentoComponent', () => {
  let component: EditaAtendimentoComponent;
  let fixture: ComponentFixture<EditaAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaAtendimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
