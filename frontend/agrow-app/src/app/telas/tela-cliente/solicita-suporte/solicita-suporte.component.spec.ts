import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitaSuporteComponent } from './solicita-suporte.component';

describe('SolicitaSuporteComponent', () => {
  let component: SolicitaSuporteComponent;
  let fixture: ComponentFixture<SolicitaSuporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitaSuporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitaSuporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
