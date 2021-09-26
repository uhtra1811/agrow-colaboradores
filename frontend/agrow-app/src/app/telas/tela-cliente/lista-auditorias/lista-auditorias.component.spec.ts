import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAuditoriasComponent } from './lista-auditorias.component';

describe('ListaAuditoriasComponent', () => {
  let component: ListaAuditoriasComponent;
  let fixture: ComponentFixture<ListaAuditoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAuditoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAuditoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
