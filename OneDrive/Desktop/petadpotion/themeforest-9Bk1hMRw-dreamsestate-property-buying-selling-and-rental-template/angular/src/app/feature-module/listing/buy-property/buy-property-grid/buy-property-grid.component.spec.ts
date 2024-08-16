import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPropertyGridComponent } from './buy-property-grid.component';

describe('BuyPropertyGridComponent', () => {
  let component: BuyPropertyGridComponent;
  let fixture: ComponentFixture<BuyPropertyGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyPropertyGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyPropertyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
