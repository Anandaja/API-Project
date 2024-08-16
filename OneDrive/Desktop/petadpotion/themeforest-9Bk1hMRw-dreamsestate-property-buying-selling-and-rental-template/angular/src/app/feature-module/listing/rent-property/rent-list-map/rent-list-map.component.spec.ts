import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentListMapComponent } from './rent-list-map.component';

describe('RentListMapComponent', () => {
  let component: RentListMapComponent;
  let fixture: ComponentFixture<RentListMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentListMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentListMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
