import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
  selector: 'app-rent-property-list-sidebar',
  templateUrl: './rent-property-list-sidebar.component.html',
  styleUrl: './rent-property-list-sidebar.component.scss'
})
export class RentPropertyListSidebarComponent {
  public routes = routes
  isClassAdded: boolean[] = [false];
  isSelectAdded: boolean[] = [true];
  toggleSelect(index: number) {
    this.isSelectAdded[index] = !this.isSelectAdded[index];
  }
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
  showLess: boolean = false;
  showAmenitiesLess:boolean = false;
  toggleShowLess() {
    this.showLess = !this.showLess;
  }
  toggleAmenitiesShowLess() {
    this.showAmenitiesLess = !this.showAmenitiesLess;
  }
  sliderValue1: number = 0;
  sliderValue2: number = 700;
  updateSliderValues() {
   
    if (this.sliderValue1 > this.sliderValue2) {
      this.sliderValue1 = this.sliderValue2;
    }
  }
}
