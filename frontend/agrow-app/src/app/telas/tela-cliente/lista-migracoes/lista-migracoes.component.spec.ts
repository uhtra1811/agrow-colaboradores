import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMigracoesComponent } from './lista-migracoes.component';

describe('ListaMigracoesComponent', () => {
  let component: ListaMigracoesComponent;
  let fixture: ComponentFixture<ListaMigracoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMigracoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMigracoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
