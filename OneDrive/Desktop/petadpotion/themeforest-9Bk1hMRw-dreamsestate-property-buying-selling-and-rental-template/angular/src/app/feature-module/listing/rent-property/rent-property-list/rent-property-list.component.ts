import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
  selector: 'app-rent-property-list',
  templateUrl: './rent-property-list.component.html',
  styleUrl: './rent-property-list.component.scss'
})
export class RentPropertyListComponent {
  public routes = routes
  isClassAdded: boolean[] = [false];
  isSelectAdded: boolean[] = [true];
  toggleSelect(index: number) {
    this.isSelectAdded[index] = !this.isSelectAdded[index];
  }
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
}
