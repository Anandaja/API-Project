import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalOrderComponent } from './rental-order.component';

describe('RentalOrderComponent', () => {
  let component: RentalOrderComponent;
  let fixture: ComponentFixture<RentalOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentalOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentalOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
