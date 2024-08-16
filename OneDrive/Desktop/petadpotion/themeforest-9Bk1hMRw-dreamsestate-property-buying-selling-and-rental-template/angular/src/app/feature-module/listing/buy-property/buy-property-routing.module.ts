import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyPropertyComponent } from './buy-property.component';
import { BuyDetailViewComponent } from './buy-detail-view/buy-detail-view.component';
import { BuyDetailsComponent } from './buy-details/buy-details.component';
import { BuyGridMapComponent } from './buy-grid-map/buy-grid-map.component';
import { BuyListMapComponent } from './buy-list-map/buy-list-map.component';
import { BuyPropertyGridSidebarComponent } from './buy-property-grid-sidebar/buy-property-grid-sidebar.component';
import { BuyPropertyGridComponent } from './buy-property-grid/buy-property-grid.component';
import { BuyPropertyListSidebarComponent } from './buy-property-list-sidebar/buy-property-list-sidebar.component';
import { BuyPropertyListComponent } from './buy-property-list/buy-property-list.component';

const routes: Routes = [
  {
    path: '',
    component: BuyPropertyComponent,
    children: [
      { path: 'buy-details', component: BuyDetailsComponent },
      { path: 'buy-property-grid', component: BuyPropertyGridComponent },
      {
        path: 'buy-property-grid-sidebar',
        component: BuyPropertyGridSidebarComponent,
      },
      { path: 'buy-property-list', component: BuyPropertyListComponent },
      {
        path: 'buy-property-list-sidebar',
        component: BuyPropertyListSidebarComponent,
      },
      { path: 'buy-details-view', component: BuyDetailViewComponent },
      { path: 'buy-list-map', component: BuyListMapComponent },
      { path: 'buy-grid-map', component: BuyGridMapComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyPropertyRoutingModule {}
