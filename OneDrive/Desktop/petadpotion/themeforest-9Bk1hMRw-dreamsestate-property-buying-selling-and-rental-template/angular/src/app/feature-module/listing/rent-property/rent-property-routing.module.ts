import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentPropertyComponent } from './rent-property.component';
import { RentDetailsComponent } from './rent-details/rent-details.component';
import { RentGridMapComponent } from './rent-grid-map/rent-grid-map.component';
import { RentListMapComponent } from './rent-list-map/rent-list-map.component';
import { RentPropertyGridSidebarComponent } from './rent-property-grid-sidebar/rent-property-grid-sidebar.component';
import { RentPropertyGridComponent } from './rent-property-grid/rent-property-grid.component';
import { RentPropertyListSidebarComponent } from './rent-property-list-sidebar/rent-property-list-sidebar.component';
import { RentPropertyListComponent } from './rent-property-list/rent-property-list.component';

const routes: Routes = [
  {
    path: '',
    component: RentPropertyComponent,
    children: [
      {
        path: 'rent-details',
        component: RentDetailsComponent,
      },
      {
        path: 'rent-grid-map',
        component: RentGridMapComponent,
      },
      {
        path: 'rent-list-map',
        component: RentListMapComponent,
      },
      {
        path: 'rent-property-grid',
        component: RentPropertyGridComponent,
      },
      {
        path: 'rent-property-grid-sidebar',
        component: RentPropertyGridSidebarComponent,
      },
      {
        path: 'rent-property-list',
        component: RentPropertyListComponent,
      },
      {
        path: 'rent-property-list-sidebar',
        component: RentPropertyListSidebarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentPropertyRoutingModule {}
