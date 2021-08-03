import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSuporteComponent } from './tela-suporte.component';

describe('TelaSuporteComponent', () => {
  let component: TelaSuporteComponent;
  let fixture: ComponentFixture<TelaSuporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaSuporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaSuporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
