/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';

@Component({
  selector: 'app-rent-list-map',
  templateUrl: './rent-list-map.component.html',
  styleUrl: './rent-list-map.component.scss',
})
export class RentListMapComponent implements OnInit {
  public routes = routes;
  isSelectAdded: boolean[] = [true];
  toggleSelect(index: number) {
    this.isSelectAdded[index] = !this.isSelectAdded[index];
  }
  infowindow: any;
  bounds = new google.maps.LatLngBounds();
  map: any;
  locations = [
    {
      id: 1,
      lat: 53.470692,
      lng: -2.220328,
      rent_prize: '$1,100 ',
      rent_bed: '4',
      rent_baths: '4',
      rent_sqft: '1900',
      rent_listedon: '17 Jan 2023',
      rent_Category: 'Condos',
      rent_name: 'Place perfect for nature',
      total_review: '17',
      rent_address: '122-140 N Morgan St, Chicago, IL 60607, USA',
      image: 'assets/img/product/product-1.jpg',
      profile_image: 'assets/img/profiles/avatar-01.jpg',
    },
    {
      id: 2,
      lat: 53.469189,
      lng: -2.199262,
      rent_prize: '$1,700 ',
      rent_bed: '4',
      rent_baths: '4',
      rent_sqft: '1100',
      rent_listedon: '17 Jan 2023',
      rent_Category: 'Condos',
      rent_name: 'Place perfect for nature',
      rent_address: '470 Park Ave S, New York, NY 10016',
      total_review: '17',
      image: 'assets/img/product/product-2.jpg',
      profile_image: 'assets/img/profiles/avatar-02.jpg',
    },
    {
      id: 3,
      lat: 53.468665,
      lng: -2.189269,
      rent_prize: '$1,400 ',
      rent_bed: '4',
      rent_baths: '4',
      rent_sqft: '5000',
      rent_listedon: '17 Jan 2023',
      rent_Category: 'Condos',
      rent_name: 'Place perfect for nature',
      total_review: '17',
      rent_address: '122-140 N Morgan St, Chicago, IL 60607, USA',
      image: 'assets/img/product/product-3.jpg',
      profile_image: 'assets/img/profiles/avatar-03.jpg',
    },
    {
      id: 4,
      lat: 53.463894,
      lng: -2.17788,
      rent_prize: '$1,400 ',
      rent_bed: '4',
      rent_baths: '4',
      rent_sqft: '1000',
      rent_listedon: '17 Jan 2023',
      rent_Category: 'Condos',
      rent_name: 'Place perfect for nature',
      total_review: '17',
      rent_address: '470 Park Ave S, New York, NY 10016',
      image: 'assets/img/product/product-4.jpg',
      profile_image: 'assets/img/profiles/avatar-04.jpg',
    },
    {
      id: 5,
      lat: 53.466359,
      lng: -2.213314,
      rent_prize: '$1,400 ',
      rent_bed: '4',
      rent_baths: '4',
      rent_sqft: '3500',
      rent_listedon: '17 Jan 2023',
      rent_Category: 'Condos',
      rent_name: 'Place perfect for nature',
      total_review: '17',
      rent_address: '122-140 N Morgan St, Chicago, IL 60607, USA',
      image: 'assets/img/product/product-5.jpg',
      profile_image: 'assets/img/profiles/avatar-05.jpg',
    },
    {
      id: 6,
      lat: 53.469189,
      lng: -2.210661,
      rent_prize: '$1,400 ',
      rent_bed: '4',
      rent_baths: '4',
      rent_sqft: '3500',
      rent_listedon: '17 Jan 2023',
      rent_Category: 'Condos',
      rent_name: 'Place perfect for nature',
      rent_address: '470 Park Ave S, New York, NY 10016',
      total_review: '17',
      image: 'assets/img/product/product-2.jpg',
      profile_image: 'assets/img/profiles/avatar-02.jpg',
    },
    {
      id: 7,
      lat: 53.468665,
      lng: -2.188532,
      rent_prize: '$1,400 ',
      rent_bed: '4',
      rent_baths: '4',
      rent_sqft: '2500',
      rent_listedon: '17 Jan 2023',
      rent_Category: 'Condos',
      rent_name: 'Place perfect for nature',
      total_review: '17',
      rent_address: '122-140 N Morgan St, Chicago, IL 60607, USA',
      image: 'assets/img/product/product-3.jpg',
      profile_image: 'assets/img/profiles/avatar-03.jpg',
    },
    {
      id: 8,
      lat: 53.463894,
      lng: -2.1950372,
      rent_prize: '$1,200 ',
      rent_bed: '4',
      rent_baths: '4',
      rent_sqft: '5000',
      rent_listedon: '17 Jan 2023',
      rent_Category: 'Condos',
      rent_name: 'Place perfect for nature',
      total_review: '17',
      rent_address: '470 Park Ave S, New York, NY 10016',
      image: 'assets/img/product/product-4.jpg',
      profile_image: 'assets/img/profiles/avatar-04.jpg',
    },
    {
      id: 9,
      lat: 53.466359,
      lng: -2.203314,
      rent_prize: '$1,500 ',
      rent_bed: '4',
      rent_baths: '4',
      rent_sqft: '1200',
      rent_listedon: '17 Jan 2023',
      rent_Category: 'Condos',
      rent_name: 'Place perfect for nature',
      total_review: '17',
      rent_address: '122-140 N Morgan St, Chicago, IL 60607, USA',
      image: 'assets/img/product/product-5.jpg',
      profile_image: 'assets/img/profiles/avatar-05.jpg',
    },
  ];

  ngOnInit(): void {
    this.initilize();
  }
  initilize() {
    window.location.reload();
    window.stop();
    this.bounds = new google.maps.LatLngBounds();
    const mapOptions = {
      zoom: 14,
      center: { lat: 53.470692, lng: -2.220328 },
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      mapOptions
    );
    this.map.slide = true;

    this.setMarkers(this.map, this.locations);
    this.infowindow = new google.maps.InfoWindow({
      content: 'loading...',
    });
    // google.maps.event.addListener(this.infowindow, 'closeclick', function () {
    //   this.infowindow.close();
    // });
    // this.slider = window.setTimeout(this.show, 3000);
  }
  setInfo(marker: {
    profile_link: string;
    doc_name: string;
    image: string;
    address: string;
  }) {
    const content =
      '<div class="profile-widget" style="width: 100%; display: inline-block;">' +
      '<div class="list-map-img">' +
      '<a href="' +
      marker.profile_link +
      '" tabindex="0" target="_blank">' +
      '<img class="img-fluid" alt="' +
      marker.doc_name +
      '" src="' +
      marker.image +
      '">' +
      '</a>' +
      '</div>' +
      '<div class="pro-content">' +
      '<h3 class="title">' +
      '<a href="' +
      marker.profile_link +
      '" tabindex="0">' +
      marker.doc_name +
      '</a>' +
      '<i class="fas fa-check-circle verified"></i>' +
      '</h3>' +
      '<ul class="available-info">' +
      '<li><i class="feather icon-map-pin"></i> ' +
      marker.address +
      ' </li>' +
      '</ul>' +
      '<div class="avalbity-review avalbity-review-list">' +
      '<ul>' +
      '<li>' +
      '<div class="avalibity-date">' +
      '<span><i class="feather icon-calendar"></i></span>' +
      '<div class="avalibity-datecontent">' +
      '<h6>Next Availabilty</h6>' +
      '<h5>24 May 2023</h5>' +
      '</div>' +
      '</div>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>';
    this.infowindow.setContent(content);
  }
  setMarkers(map: any, locations: any) {
    for (let i = 0; i < locations.length; i++) {
      const item = locations[i];
      const latlng = new google.maps.LatLng(item.lat, item.lng);
      const marker = new google.maps.Marker({
        position: latlng,
        map: map,

        icon: 'assets/img/marker.png',
      });
      this.bounds.extend(latlng);

      google.maps.event.addListener(marker, 'click', () => {
        this.setInfo(item);
        this.infowindow.open(map, marker);
      });
    }
    map.fitBounds(this.bounds);
    google.maps.event.addListener(map, 'zoom_changed', function () {
      if (map.zoom > 16) map.slide = false;
    });
  }
}
