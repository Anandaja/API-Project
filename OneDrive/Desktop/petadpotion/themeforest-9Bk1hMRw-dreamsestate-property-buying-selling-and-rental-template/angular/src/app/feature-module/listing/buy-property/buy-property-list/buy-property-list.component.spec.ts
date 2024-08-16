import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPropertyListComponent } from './buy-property-list.component';

describe('BuyPropertyListComponent', () => {
  let component: BuyPropertyListComponent;
  let fixture: ComponentFixture<BuyPropertyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyPropertyListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyPropertyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
