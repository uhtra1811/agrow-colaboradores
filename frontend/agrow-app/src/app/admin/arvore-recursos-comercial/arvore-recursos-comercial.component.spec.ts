import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArvoreRecursosComercialComponent } from './arvore-recursos-comercial.component';

describe('ArvoreRecursosComercialComponent', () => {
  let component: ArvoreRecursosComercialComponent;
  let fixture: ComponentFixture<ArvoreRecursosComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArvoreRecursosComercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArvoreRecursosComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
