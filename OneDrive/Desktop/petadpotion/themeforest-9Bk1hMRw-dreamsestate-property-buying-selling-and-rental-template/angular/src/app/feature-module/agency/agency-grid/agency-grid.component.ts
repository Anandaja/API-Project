import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';

@Component({
  selector: 'app-agency-grid',
  templateUrl: './agency-grid.component.html',
  styleUrl: './agency-grid.component.scss'
})
export class AgencyGridComponent {
  public routes = routes

}
