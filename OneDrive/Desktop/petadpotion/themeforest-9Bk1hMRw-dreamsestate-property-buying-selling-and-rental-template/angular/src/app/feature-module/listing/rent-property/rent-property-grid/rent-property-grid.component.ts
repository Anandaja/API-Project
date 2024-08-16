import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
  selector: 'app-rent-property-grid',
  templateUrl: './rent-property-grid.component.html',
  styleUrl: './rent-property-grid.component.scss',
})
export class RentPropertyGridComponent {
  isSelectAdded: boolean[] = [true];
  public isFavourite: boolean[] = Array(10).fill(true);
  public routes = routes;
  toggleSelect(index: number) {
    this.isSelectAdded[index] = !this.isSelectAdded[index];
  }
  toggleFavourite(index: number) {
    if (this.isFavourite[index] !== undefined) {
      this.isFavourite[index] = !this.isFavourite[index];
    }
  }
}
