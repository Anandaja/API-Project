import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalOrderStep3Component } from './rental-order-step3.component';

describe('RentalOrderStep3Component', () => {
  let component: RentalOrderStep3Component;
  let fixture: ComponentFixture<RentalOrderStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentalOrderStep3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentalOrderStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
