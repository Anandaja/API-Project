import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentPropertyListComponent } from './rent-property-list.component';

describe('RentPropertyListComponent', () => {
  let component: RentPropertyListComponent;
  let fixture: ComponentFixture<RentPropertyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentPropertyListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentPropertyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
