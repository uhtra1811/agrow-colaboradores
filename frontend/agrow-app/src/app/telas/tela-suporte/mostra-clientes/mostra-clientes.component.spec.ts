import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraClientesComponent } from './mostra-clientes.component';

describe('MostraClientesComponent', () => {
  let component: MostraClientesComponent;
  let fixture: ComponentFixture<MostraClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostraClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
