import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
  selector: 'app-rental-order-step2',
  templateUrl: './rental-order-step2.component.html',
  styleUrl: './rental-order-step2.component.scss'
})
export class RentalOrderStep2Component {
  public routes = routes;
}
