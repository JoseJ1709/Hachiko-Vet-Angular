import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientosVComponent } from './tratamientos-v.component';

describe('TratamientosVComponent', () => {
  let component: TratamientosVComponent;
  let fixture: ComponentFixture<TratamientosVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TratamientosVComponent]
    });
    fixture = TestBed.createComponent(TratamientosVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
