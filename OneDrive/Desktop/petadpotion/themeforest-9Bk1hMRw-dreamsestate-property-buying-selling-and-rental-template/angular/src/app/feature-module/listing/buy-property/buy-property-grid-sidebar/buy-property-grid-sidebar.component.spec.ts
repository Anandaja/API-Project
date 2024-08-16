import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPropertyGridSidebarComponent } from './buy-property-grid-sidebar.component';

describe('BuyPropertyGridSidebarComponent', () => {
  let component: BuyPropertyGridSidebarComponent;
  let fixture: ComponentFixture<BuyPropertyGridSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyPropertyGridSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyPropertyGridSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
