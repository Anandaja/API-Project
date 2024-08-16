import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyDetailViewComponent } from './buy-detail-view.component';

describe('BuyDetailViewComponent', () => {
  let component: BuyDetailViewComponent;
  let fixture: ComponentFixture<BuyDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyDetailViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
