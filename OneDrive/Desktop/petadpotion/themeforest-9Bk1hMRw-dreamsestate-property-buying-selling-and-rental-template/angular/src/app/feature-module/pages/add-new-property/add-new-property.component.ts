import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
interface ItemType {
  
}

@Component({
  selector: 'app-add-new-property',
  templateUrl: './add-new-property.component.html',
  styleUrl: './add-new-property.component.scss',
})
export class AddNewPropertyComponent {
  public routes = routes;
  activeTab: string = 'propertyinfo';

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
  items: ItemType[] = [];
  addMore() {
    this.items.push({});
  }
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
