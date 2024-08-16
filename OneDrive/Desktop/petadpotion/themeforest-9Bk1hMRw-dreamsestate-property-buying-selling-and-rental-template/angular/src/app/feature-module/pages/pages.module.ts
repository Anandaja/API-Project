import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SharedModule } from '../../shared/shared.module';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { AddNewPropertyComponent } from './add-new-property/add-new-property.component';
import { AddNewPropertyRentalComponent } from './add-new-property-rental/add-new-property-rental.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PricingComponent } from './pricing/pricing.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { CompareComponent } from './compare/compare.component';
import { Error404Component } from './error/error-404/error-404.component';
import { Error500Component } from './error/error-500/error-500.component';
import { FaqComponent } from './faq/faq.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
@NgModule({
  declarations: [
    PagesComponent,
    AboutUsComponent,
    ComingSoonComponent,
    AddNewPropertyComponent,
    AddNewPropertyRentalComponent,
    InvoiceDetailsComponent,
    PrivacyPolicyComponent,
    PricingComponent,
    OurTeamComponent,
    CompareComponent,
    Error404Component,
    Error500Component,
    FaqComponent,
    GalleryComponent,
    MaintenanceComponent,
    TestimonialComponent,
    TermsConditionComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, SharedModule],
})
export class PagesModule {}
