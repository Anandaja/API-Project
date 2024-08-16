import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';

@Component({
  selector: 'app-add-new-property-rental',
  templateUrl: './add-new-property-rental.component.html',
  styleUrl: './add-new-property-rental.component.scss'
})
export class AddNewPropertyRentalComponent {
  activeTab: string = 'propertyinfo';
  public routes = routes
  setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }
  scrollToSection(section: HTMLElement) {
    if (section) {
      this.scrollTo(section);
    }
  }

  scrollTo(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
