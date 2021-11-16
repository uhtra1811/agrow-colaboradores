import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAtualizacaoComponent } from './log-atualizacao.component';

describe('LogAtualizacaoComponent', () => {
  let component: LogAtualizacaoComponent;
  let fixture: ComponentFixture<LogAtualizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogAtualizacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogAtualizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
