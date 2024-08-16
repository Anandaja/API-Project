import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { materialModule } from './material.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { GoogleMapsModule } from '@angular/google-maps';
import { LightgalleryModule } from 'lightgallery/angular';
import { CountUpModule } from 'ngx-countup';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    materialModule,
    SlickCarouselModule,
    GoogleMapsModule,
    LightgalleryModule,
    CountUpModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    materialModule,
    SlickCarouselModule,
    GoogleMapsModule,
    LightgalleryModule,
    CountUpModule
  ],
  providers: [],
})
export class SharedModule {}