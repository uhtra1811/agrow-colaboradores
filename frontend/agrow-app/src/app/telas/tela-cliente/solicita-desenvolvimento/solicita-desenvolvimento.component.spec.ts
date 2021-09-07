import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitaDesenvolvimentoComponent } from './solicita-desenvolvimento.component';

describe('SolicitaDesenvolvimentoComponent', () => {
  let component: SolicitaDesenvolvimentoComponent;
  let fixture: ComponentFixture<SolicitaDesenvolvimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitaDesenvolvimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitaDesenvolvimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
