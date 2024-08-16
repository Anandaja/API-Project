import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentGridMapComponent } from './rent-grid-map.component';

describe('RentGridMapComponent', () => {
  let component: RentGridMapComponent;
  let fixture: ComponentFixture<RentGridMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentGridMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentGridMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
