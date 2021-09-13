import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTreinamentosComponent } from './lista-treinamentos.component';

describe('ListaTreinamentosComponent', () => {
  let component: ListaTreinamentosComponent;
  let fixture: ComponentFixture<ListaTreinamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTreinamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTreinamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
