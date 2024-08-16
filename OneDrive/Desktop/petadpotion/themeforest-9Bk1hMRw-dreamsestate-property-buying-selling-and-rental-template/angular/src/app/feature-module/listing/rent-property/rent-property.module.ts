import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentPropertyRoutingModule } from './rent-property-routing.module';
import { RentPropertyComponent } from './rent-property.component';
import { SharedModule } from '../../../shared/shared.module';
import { RentDetailsComponent } from './rent-details/rent-details.component';
import { RentGridMapComponent } from './rent-grid-map/rent-grid-map.component';
import { RentListMapComponent } from './rent-list-map/rent-list-map.component';
import { RentPropertyGridSidebarComponent } from './rent-property-grid-sidebar/rent-property-grid-sidebar.component';
import { RentPropertyGridComponent } from './rent-property-grid/rent-property-grid.component';
import { RentPropertyListSidebarComponent } from './rent-property-list-sidebar/rent-property-list-sidebar.component';
import { RentPropertyListComponent } from './rent-property-list/rent-property-list.component';

@NgModule({
  declarations: [
    RentPropertyComponent,
    RentDetailsComponent,
    RentGridMapComponent,
    RentListMapComponent,
    RentPropertyGridComponent,
    RentPropertyGridSidebarComponent,
    RentPropertyListSidebarComponent,
    RentPropertyListComponent,
  ],
  imports: [CommonModule, RentPropertyRoutingModule, SharedModule],
})
export class RentPropertyModule {}
