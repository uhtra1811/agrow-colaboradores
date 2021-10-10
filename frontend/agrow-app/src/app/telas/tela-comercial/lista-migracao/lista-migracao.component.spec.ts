import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMigracaoComponent } from './lista-migracao.component';

describe('ListaMigracaoComponent', () => {
  let component: ListaMigracaoComponent;
  let fixture: ComponentFixture<ListaMigracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMigracaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMigracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
