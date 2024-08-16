import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { AgentGridComponent } from './agent-grid/agent-grid.component';
import { AgentGridSidebarComponent } from './agent-grid-sidebar/agent-grid-sidebar.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AgentListSidebarComponent } from './agent-list-sidebar/agent-list-sidebar.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    AgentComponent,
    AgentDetailsComponent,
    AgentGridComponent,
    AgentGridSidebarComponent,
    AgentListComponent,
    AgentListSidebarComponent
  ], 
  imports: [
    CommonModule,
    AgentRoutingModule,
    SharedModule
  ]
})
export class AgentModule { }
