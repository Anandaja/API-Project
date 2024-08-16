import { AfterViewChecked, Component, ViewEncapsulation } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { LightGallery } from 'lightgallery/lightgallery';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from '../../../../shared/routes/routes';


@Component({
  selector: 'app-rent-details',
  templateUrl: './rent-details.component.html',
  styleUrl: './rent-details.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class RentDetailsComponent implements AfterViewChecked {
  public routes = routes;
  public isClassAdded: boolean[] = [false];

  public slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav-thumbnails',
    nav: true,
  };
  public slideConfig2 = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.rental-slider',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    nav: true,
  };
  private lightGallery!: LightGallery;
  private needRefresh = false;

  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
};
  onInit = (detail: { instance: LightGallery }): void => {
    this.lightGallery = detail.instance;
  };
  public agentviewSlider1: OwlOptions = {
    loop: true,
    margin: 24,
    nav: false,
    dots: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 3,
      },

      768: {
        items: 3,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  };
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
}
