import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyListSidebarComponent } from './agency-list-sidebar.component';

describe('AgencyListSidebarComponent', () => {
  let component: AgencyListSidebarComponent;
  let fixture: ComponentFixture<AgencyListSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgencyListSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgencyListSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
