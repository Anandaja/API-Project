import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyGridComponent } from './agency-grid.component';

describe('AgencyGridComponent', () => {
  let component: AgencyGridComponent;
  let fixture: ComponentFixture<AgencyGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgencyGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgencyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
