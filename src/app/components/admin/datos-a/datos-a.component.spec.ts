import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosAComponent } from './datos-a.component';

describe('DatosAComponent', () => {
  let component: DatosAComponent;
  let fixture: ComponentFixture<DatosAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosAComponent]
    });
    fixture = TestBed.createComponent(DatosAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
