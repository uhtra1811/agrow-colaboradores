import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArvoreRecursosComponent } from './arvore-recursos.component';

describe('ArvoreRecursosComponent', () => {
  let component: ArvoreRecursosComponent;
  let fixture: ComponentFixture<ArvoreRecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArvoreRecursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArvoreRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
