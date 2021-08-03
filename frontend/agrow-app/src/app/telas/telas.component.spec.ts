import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelasComponent } from './telas.component';

describe('TelasComponent', () => {
  let component: TelasComponent;
  let fixture: ComponentFixture<TelasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
