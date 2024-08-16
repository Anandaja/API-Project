import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyGridMapComponent } from './buy-grid-map.component';

describe('BuyGridMapComponent', () => {
  let component: BuyGridMapComponent;
  let fixture: ComponentFixture<BuyGridMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyGridMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyGridMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
