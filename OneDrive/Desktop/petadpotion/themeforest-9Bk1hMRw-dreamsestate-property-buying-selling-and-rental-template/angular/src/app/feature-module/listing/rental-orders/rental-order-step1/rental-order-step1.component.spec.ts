import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalOrderStep1Component } from './rental-order-step1.component';

describe('RentalOrderStep1Component', () => {
  let component: RentalOrderStep1Component;
  let fixture: ComponentFixture<RentalOrderStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentalOrderStep1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentalOrderStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
