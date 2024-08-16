import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
  selector: 'app-rental-order',
  templateUrl: './rental-order.component.html',
  styleUrl: './rental-order.component.scss'
})
export class RentalOrderComponent {
  public routes = routes

}
