import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentComponent } from './agent.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { AgentGridComponent } from './agent-grid/agent-grid.component';
import { AgentGridSidebarComponent } from './agent-grid-sidebar/agent-grid-sidebar.component';
import { AgentListSidebarComponent } from './agent-list-sidebar/agent-list-sidebar.component';
import { AgentListComponent } from './agent-list/agent-list.component';

const routes: Routes = [
  {
    path: '',
    component: AgentComponent,
    children: [
      {
        path: 'agent-details',
        component: AgentDetailsComponent,
      },
      {
        path: 'agent-grid',
        component: AgentGridComponent,
      },
      {
        path: 'agent-grid-sidebar',
        component: AgentGridSidebarComponent,
      },
      {
        path: 'agent-list',
        component: AgentListComponent,
      },
      {
        path: 'agent-list-sidebar',
        component: AgentListSidebarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentRoutingModule {}
