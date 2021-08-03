import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaComercialComponent } from './tela-comercial.component';

describe('TelaComercialComponent', () => {
  let component: TelaComercialComponent;
  let fixture: ComponentFixture<TelaComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaComercialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
