import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDesenvolvimentoComponent } from './tela-desenvolvimento.component';

describe('TelaDesenvolvimentoComponent', () => {
  let component: TelaDesenvolvimentoComponent;
  let fixture: ComponentFixture<TelaDesenvolvimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaDesenvolvimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaDesenvolvimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
