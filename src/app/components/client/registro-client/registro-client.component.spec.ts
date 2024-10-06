import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroClientComponent } from './registro-client.component';

describe('RegistroClientComponent', () => {
  let component: RegistroClientComponent;
  let fixture: ComponentFixture<RegistroClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroClientComponent]
    });
    fixture = TestBed.createComponent(RegistroClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
