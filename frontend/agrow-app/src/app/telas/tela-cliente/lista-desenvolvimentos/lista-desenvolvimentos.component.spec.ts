import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDesenvolvimentosComponent } from './lista-desenvolvimentos.component';

describe('ListaDesenvolvimentosComponent', () => {
  let component: ListaDesenvolvimentosComponent;
  let fixture: ComponentFixture<ListaDesenvolvimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDesenvolvimentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDesenvolvimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
