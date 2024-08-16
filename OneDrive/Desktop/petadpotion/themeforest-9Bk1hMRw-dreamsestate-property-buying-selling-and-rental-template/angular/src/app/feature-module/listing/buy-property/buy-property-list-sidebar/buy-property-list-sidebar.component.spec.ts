import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPropertyListSidebarComponent } from './buy-property-list-sidebar.component';

describe('BuyPropertyListSidebarComponent', () => {
  let component: BuyPropertyListSidebarComponent;
  let fixture: ComponentFixture<BuyPropertyListSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyPropertyListSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyPropertyListSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
