import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
  selector: 'app-rent-property-grid-sidebar',
  templateUrl: './rent-property-grid-sidebar.component.html',
  styleUrl: './rent-property-grid-sidebar.component.scss',
})
export class RentPropertyGridSidebarComponent {
  public routes = routes;
  isSelectAdded: boolean[] = [true];
  public isFavourite: boolean[] = Array(10).fill(true);
  categories: boolean = false;
  amenities: boolean = false;

  toggleSelect(index: number) {
    this.isSelectAdded[index] = !this.isSelectAdded[index];
  }
  toggleFavourite(index: number) {
    if (this.isFavourite[index] !== undefined) {
      this.isFavourite[index] = !this.isFavourite[index];
    }
  }
  showCategories() {
    this.categories = !this.categories;
  }
  showAmenities() {
    this.amenities = !this.amenities;
  }
  sliderValue1: number = 0;
  sliderValue2: number = 700;
  updateSliderValues() {
    if (this.sliderValue1 > this.sliderValue2) {
      this.sliderValue1 = this.sliderValue2;
    }
  }
}
