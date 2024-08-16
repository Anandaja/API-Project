import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyPropertyRoutingModule } from './buy-property-routing.module';
import { BuyPropertyComponent } from './buy-property.component';
import { BuyDetailViewComponent } from './buy-detail-view/buy-detail-view.component';
import { BuyDetailsComponent } from './buy-details/buy-details.component';
import { BuyGridMapComponent } from './buy-grid-map/buy-grid-map.component';
import { BuyListMapComponent } from './buy-list-map/buy-list-map.component';
import { BuyPropertyGridSidebarComponent } from './buy-property-grid-sidebar/buy-property-grid-sidebar.component';
import { BuyPropertyGridComponent } from './buy-property-grid/buy-property-grid.component';
import { BuyPropertyListSidebarComponent } from './buy-property-list-sidebar/buy-property-list-sidebar.component';
import { BuyPropertyListComponent } from './buy-property-list/buy-property-list.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    BuyPropertyComponent,
    BuyDetailsComponent,
    BuyPropertyGridComponent,
    BuyPropertyListSidebarComponent,
    BuyPropertyListComponent,
    BuyPropertyGridSidebarComponent,
    BuyDetailViewComponent,
    BuyGridMapComponent,
    BuyListMapComponent,
  ],
  imports: [
    CommonModule,
    BuyPropertyRoutingModule,
    SharedModule
  ]
})
export class BuyPropertyModule { }
