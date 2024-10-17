import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoDComponent } from './tratamiento-d.component';

describe('TratamientoDComponent', () => {
  let component: TratamientoDComponent;
  let fixture: ComponentFixture<TratamientoDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TratamientoDComponent]
    });
    fixture = TestBed.createComponent(TratamientoDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
