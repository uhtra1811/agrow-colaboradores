import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraLogAtualizacaoComponent } from './cadastra-log-atualizacao.component';

describe('CadastraLogAtualizacaoComponent', () => {
  let component: CadastraLogAtualizacaoComponent;
  let fixture: ComponentFixture<CadastraLogAtualizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraLogAtualizacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraLogAtualizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
