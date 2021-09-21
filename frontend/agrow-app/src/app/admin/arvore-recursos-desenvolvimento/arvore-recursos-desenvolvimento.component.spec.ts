import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArvoreRecursosDesenvolvimentoComponent } from './arvore-recursos-desenvolvimento.component';

describe('ArvoreRecursosDesenvolvimentoComponent', () => {
  let component: ArvoreRecursosDesenvolvimentoComponent;
  let fixture: ComponentFixture<ArvoreRecursosDesenvolvimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArvoreRecursosDesenvolvimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArvoreRecursosDesenvolvimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
