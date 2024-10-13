import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginVeteComponent } from './login-vete.component';

describe('LoginVeteComponent', () => {
  let component: LoginVeteComponent;
  let fixture: ComponentFixture<LoginVeteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginVeteComponent]
    });
    fixture = TestBed.createComponent(LoginVeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
