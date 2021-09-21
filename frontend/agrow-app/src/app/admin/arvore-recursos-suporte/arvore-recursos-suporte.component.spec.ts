import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArvoreRecursosSuporteComponent } from './arvore-recursos-suporte.component';

describe('ArvoreRecursosSuporteComponent', () => {
  let component: ArvoreRecursosSuporteComponent;
  let fixture: ComponentFixture<ArvoreRecursosSuporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArvoreRecursosSuporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArvoreRecursosSuporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
