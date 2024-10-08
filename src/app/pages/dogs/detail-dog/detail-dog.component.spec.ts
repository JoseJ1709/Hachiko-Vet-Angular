import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDogComponent } from './detail-dog.component';

describe('DetailDogComponent', () => {
  let component: DetailDogComponent;
  let fixture: ComponentFixture<DetailDogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailDogComponent]
    });
    fixture = TestBed.createComponent(DetailDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
