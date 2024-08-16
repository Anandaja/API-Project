import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentPropertyGridSidebarComponent } from './rent-property-grid-sidebar.component';

describe('RentPropertyGridSidebarComponent', () => {
  let component: RentPropertyGridSidebarComponent;
  let fixture: ComponentFixture<RentPropertyGridSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentPropertyGridSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RentPropertyGridSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
