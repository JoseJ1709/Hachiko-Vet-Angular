import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponentDogs } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponentDogs;
  let fixture: ComponentFixture<LoginComponentDogs>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponentDogs]
    });
    fixture = TestBed.createComponent(LoginComponentDogs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
