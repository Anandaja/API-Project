import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalOrderStep2Component } from './rental-order-step2.component';

describe('RentalOrderStep2Component', () => {
  let component: RentalOrderStep2Component;
  let fixture: ComponentFixture<RentalOrderStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentalOrderStep2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentalOrderStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
