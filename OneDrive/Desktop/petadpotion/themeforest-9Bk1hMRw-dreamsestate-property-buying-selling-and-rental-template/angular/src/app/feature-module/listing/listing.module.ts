import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { ListingComponent } from './listing.component';
import { RentalOrderStep1Component } from './rental-orders/rental-order-step1/rental-order-step1.component';
import { RentalOrderStep2Component } from './rental-orders/rental-order-step2/rental-order-step2.component';
import { RentalOrderStep3Component } from './rental-orders/rental-order-step3/rental-order-step3.component';
import { RentalOrderComponent } from './rental-orders/rental-order/rental-order.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ListingComponent,
    RentalOrderStep1Component,
    RentalOrderStep2Component,
    RentalOrderStep3Component,
    RentalOrderComponent,
  ],
  imports: [CommonModule, ListingRoutingModule, SharedModule],
})
export class ListingModule {}
