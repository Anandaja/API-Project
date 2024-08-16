import { Component, OnInit } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import * as AOS from 'aos';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
}) 
export class GalleryComponent implements OnInit {
  public routes = routes;
  settings = {
    counter: false,
    plugins: [lgZoom, lgThumbnail],
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { index, prevIndex } = detail;
  };
  ngOnInit() {
    AOS.init({ disable: 'mobile', duration: 1200, once: true });
  }
}
