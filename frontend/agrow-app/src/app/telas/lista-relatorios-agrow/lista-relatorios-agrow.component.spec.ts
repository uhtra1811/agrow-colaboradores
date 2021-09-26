import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRelatoriosAgrowComponent } from './lista-relatorios-agrow.component';

describe('ListaRelatoriosAgrowComponent', () => {
  let component: ListaRelatoriosAgrowComponent;
  let fixture: ComponentFixture<ListaRelatoriosAgrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRelatoriosAgrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRelatoriosAgrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
