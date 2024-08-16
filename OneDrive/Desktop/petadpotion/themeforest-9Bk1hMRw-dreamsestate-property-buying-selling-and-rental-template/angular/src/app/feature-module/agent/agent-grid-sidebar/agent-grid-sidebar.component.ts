import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';

@Component({
  selector: 'app-agent-grid-sidebar',
  templateUrl: './agent-grid-sidebar.component.html',
  styleUrl: './agent-grid-sidebar.component.scss'
})
export class AgentGridSidebarComponent {
  public routes = routes;
}
