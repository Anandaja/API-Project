import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentPropertyGridComponent } from './rent-property-grid.component';

describe('RentPropertyGridComponent', () => {
  let component: RentPropertyGridComponent;
  let fixture: ComponentFixture<RentPropertyGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentPropertyGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentPropertyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
