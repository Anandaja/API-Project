import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddNewPropertyComponent } from './add-new-property/add-new-property.component';
import { AddNewPropertyRentalComponent } from './add-new-property-rental/add-new-property-rental.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PricingComponent } from './pricing/pricing.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { CompareComponent } from './compare/compare.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Error404Component } from './error/error-404/error-404.component';
import { Error500Component } from './error/error-500/error-500.component';
import { FaqComponent } from './faq/faq.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'about-us', component: AboutUsComponent },
      {
        path: 'add-new-property',
        component: AddNewPropertyComponent,
      },
      {
        path: 'add-new-property-rental',
        component: AddNewPropertyRentalComponent,
      },
      {
        path: 'invoice-details',
        component: InvoiceDetailsComponent,
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
      },
      {
        path: 'pricing',
        component: PricingComponent,
      },
      {
        path: 'our-team',
        component: OurTeamComponent,
      },
      { path: 'coming-soon', component: ComingSoonComponent },
      {
        path: 'compare',
        component: CompareComponent,
      },
      {
        path: 'gallery',
        component: GalleryComponent,
      },
      {
        path: 'error-404',
        component: Error404Component,
      },
      {
        path: 'error-500',
        component: Error500Component,
      },
      {
        path: 'faq',
        component: FaqComponent,
      },
      {
        path: 'maintenance',
        component: MaintenanceComponent,
      },
     
      {
        path: 'testimonial',
        component: TestimonialComponent,
      },
      {
        path: 'terms-condition',
        component: TermsConditionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
