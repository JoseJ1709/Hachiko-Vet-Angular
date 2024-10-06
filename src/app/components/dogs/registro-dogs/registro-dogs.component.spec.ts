import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDogsComponent } from './registro-dogs.component';

describe('RegistroDogsComponent', () => {
  let component: RegistroDogsComponent;
  let fixture: ComponentFixture<RegistroDogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroDogsComponent]
    });
    fixture = TestBed.createComponent(RegistroDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
