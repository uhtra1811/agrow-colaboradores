import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraAuxilioSuporteComponent } from './mostra-auxilio-suporte.component';

describe('MostraAuxilioSuporteComponent', () => {
  let component: MostraAuxilioSuporteComponent;
  let fixture: ComponentFixture<MostraAuxilioSuporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostraAuxilioSuporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraAuxilioSuporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
