import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPropertyRentalComponent } from './add-new-property-rental.component';

describe('AddNewPropertyRentalComponent', () => {
  let component: AddNewPropertyRentalComponent;
  let fixture: ComponentFixture<AddNewPropertyRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewPropertyRentalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewPropertyRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
