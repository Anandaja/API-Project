import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';

@Component({
  selector: 'app-agent-grid',
  templateUrl: './agent-grid.component.html',
  styleUrl: './agent-grid.component.scss'
})
export class AgentGridComponent {
  public routes = routes;
}
