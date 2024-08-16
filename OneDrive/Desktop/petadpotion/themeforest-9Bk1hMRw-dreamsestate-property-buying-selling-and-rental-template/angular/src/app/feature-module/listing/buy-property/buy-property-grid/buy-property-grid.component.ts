import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
  selector: 'app-buy-property-grid',
  templateUrl: './buy-property-grid.component.html',
  styleUrl: './buy-property-grid.component.scss',
})
export class BuyPropertyGridComponent {
  public routes = routes;
  public isCollapsed = true;
  public isFavourite: boolean[] = Array(10).fill(true);
  isClassAdded: boolean[] = [false];
  isSelectAdded: boolean[] = [true];
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
  toggleFavourite(index: number) {
    if (this.isFavourite[index] !== undefined) {
      this.isFavourite[index] = !this.isFavourite[index];
    }
  }
}
