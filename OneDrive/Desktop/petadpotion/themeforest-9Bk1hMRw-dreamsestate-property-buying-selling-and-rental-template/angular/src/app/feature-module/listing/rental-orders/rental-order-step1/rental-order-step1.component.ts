import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
  selector: 'app-rental-order-step1',
  templateUrl: './rental-order-step1.component.html',
  styleUrl: './rental-order-step1.component.scss'
})
export class RentalOrderStep1Component {
  public routes = routes;
}
