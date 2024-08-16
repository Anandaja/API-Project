import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';

@Component({
  selector: 'app-agency-list-sidebar',
  templateUrl: './agency-list-sidebar.component.html',
  styleUrl: './agency-list-sidebar.component.scss'
})
export class AgencyListSidebarComponent {
  public routes = routes

}
