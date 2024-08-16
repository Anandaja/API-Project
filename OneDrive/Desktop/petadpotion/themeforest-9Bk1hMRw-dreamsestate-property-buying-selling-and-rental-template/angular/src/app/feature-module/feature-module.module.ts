import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleRoutingModule } from './feature-module-routing.module';
import { FeatureModuleComponent } from './feature-module.component';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FeatureModuleComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    
  ],
  imports: [
    CommonModule,
    FeatureModuleRoutingModule,
    SharedModule
  ]
})
export class FeatureModuleModule { }
