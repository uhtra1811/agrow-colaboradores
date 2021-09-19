import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitaAuditoriaComponent } from './solicita-auditoria.component';

describe('SolicitaAuditoriaComponent', () => {
  let component: SolicitaAuditoriaComponent;
  let fixture: ComponentFixture<SolicitaAuditoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitaAuditoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitaAuditoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
