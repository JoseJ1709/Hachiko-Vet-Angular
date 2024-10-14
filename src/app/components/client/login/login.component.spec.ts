import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponentClient } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponentClient;
  let fixture: ComponentFixture<LoginComponentClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponentClient]
    });
    fixture = TestBed.createComponent(LoginComponentClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
