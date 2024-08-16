import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';

@Component({
  selector: 'app-agent-list-sidebar',
  templateUrl: './agent-list-sidebar.component.html',
  styleUrl: './agent-list-sidebar.component.scss'
})
export class AgentListSidebarComponent {
  public routes = routes;
}
