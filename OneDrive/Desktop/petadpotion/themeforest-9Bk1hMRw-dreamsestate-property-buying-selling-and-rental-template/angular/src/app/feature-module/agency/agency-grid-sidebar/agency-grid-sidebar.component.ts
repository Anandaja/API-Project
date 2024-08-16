import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';

@Component({
  selector: 'app-agency-grid-sidebar',
  templateUrl: './agency-grid-sidebar.component.html',
  styleUrl: './agency-grid-sidebar.component.scss'
})
export class AgencyGridSidebarComponent {
  public routes = routes

}
