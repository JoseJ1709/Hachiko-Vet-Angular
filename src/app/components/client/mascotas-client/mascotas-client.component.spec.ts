import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasClientComponent } from './mascotas-client.component';

describe('MascotasClientComponent', () => {
  let component: MascotasClientComponent;
  let fixture: ComponentFixture<MascotasClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascotasClientComponent]
    });
    fixture = TestBed.createComponent(MascotasClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
