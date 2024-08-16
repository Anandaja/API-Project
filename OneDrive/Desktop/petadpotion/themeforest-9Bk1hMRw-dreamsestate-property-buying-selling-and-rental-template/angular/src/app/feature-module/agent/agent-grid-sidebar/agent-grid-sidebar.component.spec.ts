import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentGridSidebarComponent } from './agent-grid-sidebar.component';

describe('AgentGridSidebarComponent', () => {
  let component: AgentGridSidebarComponent;
  let fixture: ComponentFixture<AgentGridSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgentGridSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentGridSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
