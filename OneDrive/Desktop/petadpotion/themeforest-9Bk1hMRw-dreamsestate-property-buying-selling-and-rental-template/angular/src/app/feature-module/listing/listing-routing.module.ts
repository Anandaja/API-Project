import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './listing.component';
import { RentalOrderComponent } from './rental-orders/rental-order/rental-order.component';
import { RentalOrderStep1Component } from './rental-orders/rental-order-step1/rental-order-step1.component';
import { RentalOrderStep2Component } from './rental-orders/rental-order-step2/rental-order-step2.component';
import { RentalOrderStep3Component } from './rental-orders/rental-order-step3/rental-order-step3.component';

const routes: Routes = [
  {
    path: '',
    component: ListingComponent,
    children: [
      {
        path: 'rental-order',
        component: RentalOrderComponent,
      },
      {
        path: 'rental-order-step1',
        component: RentalOrderStep1Component,
      },
      {
        path: 'rental-order-step2',
        component: RentalOrderStep2Component,
      },
      {
        path: 'rental-order-step3',
        component: RentalOrderStep3Component,
      },
      {
        path: 'buy-property',
        loadChildren: () =>
          import('./buy-property/buy-property.module').then(
            (m) => m.BuyPropertyModule
          ),
      },
      {
        path: 'rent-property',
        loadChildren: () =>
          import('./rent-property/rent-property.module').then(
            (m) => m.RentPropertyModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingRoutingModule {}
