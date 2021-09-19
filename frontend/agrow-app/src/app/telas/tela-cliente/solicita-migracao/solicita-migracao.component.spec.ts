import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitaMigracaoComponent } from './solicita-migracao.component';

describe('SolicitaMigracaoComponent', () => {
  let component: SolicitaMigracaoComponent;
  let fixture: ComponentFixture<SolicitaMigracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitaMigracaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitaMigracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
