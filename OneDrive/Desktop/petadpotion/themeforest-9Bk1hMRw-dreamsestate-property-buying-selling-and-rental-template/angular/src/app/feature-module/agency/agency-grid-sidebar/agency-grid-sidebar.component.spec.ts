import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyGridSidebarComponent } from './agency-grid-sidebar.component';

describe('AgencyGridSidebarComponent', () => {
  let component: AgencyGridSidebarComponent;
  let fixture: ComponentFixture<AgencyGridSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgencyGridSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgencyGridSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
