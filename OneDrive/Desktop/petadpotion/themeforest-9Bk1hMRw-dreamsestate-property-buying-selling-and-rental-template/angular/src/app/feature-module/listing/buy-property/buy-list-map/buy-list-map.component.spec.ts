import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyListMapComponent } from './buy-list-map.component';

describe('BuyListMapComponent', () => {
  let component: BuyListMapComponent;
  let fixture: ComponentFixture<BuyListMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyListMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyListMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
