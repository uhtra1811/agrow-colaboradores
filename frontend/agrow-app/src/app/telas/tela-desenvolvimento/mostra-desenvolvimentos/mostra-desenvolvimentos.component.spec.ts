import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraDesenvolvimentosComponent } from './mostra-desenvolvimentos.component';

describe('MostraDesenvolvimentosComponent', () => {
  let component: MostraDesenvolvimentosComponent;
  let fixture: ComponentFixture<MostraDesenvolvimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostraDesenvolvimentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraDesenvolvimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
