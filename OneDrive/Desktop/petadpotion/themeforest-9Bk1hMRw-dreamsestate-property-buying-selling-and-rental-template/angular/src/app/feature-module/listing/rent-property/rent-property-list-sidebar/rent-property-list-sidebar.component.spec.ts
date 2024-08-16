import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentPropertyListSidebarComponent } from './rent-property-list-sidebar.component';

describe('RentPropertyListSidebarComponent', () => {
  let component: RentPropertyListSidebarComponent;
  let fixture: ComponentFixture<RentPropertyListSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentPropertyListSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentPropertyListSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
