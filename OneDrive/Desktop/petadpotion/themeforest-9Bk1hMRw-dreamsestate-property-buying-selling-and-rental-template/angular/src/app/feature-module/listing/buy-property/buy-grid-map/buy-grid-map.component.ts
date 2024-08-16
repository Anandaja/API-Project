/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-grid-map',
  templateUrl: './buy-grid-map.component.html',
  styleUrl: './buy-grid-map.component.scss'
})
export class BuyGridMapComponent implements OnInit{
  public routes = routes
  infowindow: any;
  bounds = new google.maps.LatLngBounds();
  map: any;
  locations = [
    {
      "id":1,
      "lat":53.470692,
      "lng":-2.220328,
      "rent_prize":"$1,100 ",
      "rent_bed":"4",
      "rent_baths":"4",
      "rent_sqft":"1900",
      "rent_listedon":"17 Jan 2023",
      "rent_Category":"Condos",
      "rent_name":"Place perfect for nature",
      "total_review":"17",
      "rent_address":"122-140 N Morgan St, Chicago, IL 60607, USA",
      "image":'assets/img/product/product-1.jpg',
      "profile_image":'assets/img/profiles/avatar-01.jpg'
    },
    {
      "id":2,
	"lat":53.469189,
	"lng":-2.199262,
	"rent_prize":"$1,700 ",
	"rent_bed":"4",
	"rent_baths":"4",
	"rent_sqft":"1100",
	"rent_listedon":"17 Jan 2023",
	"rent_Category":"Condos",
	"rent_name":"Place perfect for nature",
	"rent_address":"470 Park Ave S, New York, NY 10016",
	"total_review":"17",
	"image":'assets/img/product/product-2.jpg',
	"profile_image":'assets/img/profiles/avatar-02.jpg'
    },
    {
      "id":3,
      "lat":53.468665,
      "lng":-2.189269,
      "rent_prize":"$1,400 ",
      "rent_bed":"4",
      "rent_baths":"4",
      "rent_sqft":"5000",
      "rent_listedon":"17 Jan 2023",
      "rent_Category":"Condos",
      "rent_name":"Place perfect for nature",
      "total_review":"17",
      "rent_address":"122-140 N Morgan St, Chicago, IL 60607, USA",
      "image":'assets/img/product/product-3.jpg',
      "profile_image":'assets/img/profiles/avatar-03.jpg'
    },
    {
      "id":4,
      "lat":53.463894,
      "lng":-2.177880,
      "rent_prize":"$1,400 ",
      "rent_bed":"4",
      "rent_baths":"4",
      "rent_sqft":"1000",
      "rent_listedon":"17 Jan 2023",
      "rent_Category":"Condos",
      "rent_name":"Place perfect for nature",
      "total_review":"17",
      "rent_address":"470 Park Ave S, New York, NY 10016",
      "image":'assets/img/product/product-4.jpg',
      "profile_image":'assets/img/profiles/avatar-04.jpg'
    },
    {
      "id":5,
      "lat":53.466359,
      "lng":-2.213314,
      "rent_prize":"$1,400 ",
      "rent_bed":"4",
      "rent_baths":"4",
      "rent_sqft":"3500",
      "rent_listedon":"17 Jan 2023",
      "rent_Category":"Condos",
      "rent_name":"Place perfect for nature",
      "total_review":"17",
      "rent_address":"122-140 N Morgan St, Chicago, IL 60607, USA",
      "image":'assets/img/product/product-5.jpg',
      "profile_image":'assets/img/profiles/avatar-05.jpg'
    },
    {
      "id":6,
		"lat":53.469189,
		"lng":-2.210661,
		"rent_prize":"$1,400 ",
		"rent_bed":"4",
		"rent_baths":"4",
		"rent_sqft":"3500",
		"rent_listedon":"17 Jan 2023",
		"rent_Category":"Condos",
		"rent_name":"Place perfect for nature",
		"rent_address":"470 Park Ave S, New York, NY 10016",
		"total_review":"17",
		"image":'assets/img/product/product-2.jpg',
		"profile_image":'assets/img/profiles/avatar-02.jpg'
    },
    {
      "id":7,
      "lat":53.468665,
      "lng":-2.188532,
      "rent_prize":"$1,400 ",
      "rent_bed":"4",
      "rent_baths":"4",
      "rent_sqft":"2500",
      "rent_listedon":"17 Jan 2023",
      "rent_Category":"Condos",
      "rent_name":"Place perfect for nature",
      "total_review":"17",
      "rent_address":"122-140 N Morgan St, Chicago, IL 60607, USA",
      "image":'assets/img/product/product-3.jpg',
      "profile_image":'assets/img/profiles/avatar-03.jpg'
    },
    {
      "id":8,
		"lat":53.463894,
		"lng":-2.1950372,
		"rent_prize":"$1,200 ",
		"rent_bed":"4",
		"rent_baths":"4",
		"rent_sqft":"5000",
		"rent_listedon":"17 Jan 2023",
		"rent_Category":"Condos",
		"rent_name":"Place perfect for nature",
		"total_review":"17",
		"rent_address":"470 Park Ave S, New York, NY 10016",
		"image":'assets/img/product/product-4.jpg',
		"profile_image":'assets/img/profiles/avatar-04.jpg'
    },
    {
      "id":9,
		"lat":53.466359,
		"lng":-2.203314,
		"rent_prize":"$1,500 ",
		"rent_bed":"4",
		"rent_baths":"4",
		"rent_sqft":"1200",
		"rent_listedon":"17 Jan 2023",
		"rent_Category":"Condos",
		"rent_name":"Place perfect for nature",
		"total_review":"17",
		"rent_address":"122-140 N Morgan St, Chicago, IL 60607, USA",
		"image":'assets/img/product/product-5.jpg',
		"profile_image":'assets/img/profiles/avatar-05.jpg'
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
  setInfo(marker: { profile_image: string; rent_prize: string; image: string; total_review: string; rent_name: string;rent_address: string; rent_bed: string;rent_baths: string; rent_sqft: string;rent_listedon: string,rent_Category: string}) {
    const content =
    '<div class="">'+
    '<div class="product-custom">'+
    '<div class="profile-widget">'+
    '<div class="doc-img">'+
      '<a href="javascript:void(0)" class="property-img">'+
        '<img class="img-fluid" alt="img" src="' + marker.image + '">'+
      '</a>'+
        '<div class="feature-rating">' +
          '<div>' +
            '<div class="featured">' +
              '<span>Featured</span>' +
            '</div>' +
          '</div>' +
          '<a href="javascript:void(0)">' +
            '<div class="favourite">' +
              '<span><i class="fa-regular fa-heart"></i></span>' +
            '</div>' +
          '</a>' +
        '</div>' +
          '<div class="user-avatar">'+
          '<img src="' + marker.profile_image + '" alt="Image">'+
          '	</div>'+
          '<div class="product-amount">' +
          '<span>' + marker.rent_prize + '</span>' +
          '</div>'  +
      '</div>'+
      '<div class="pro-content">'+
        '<div class="rating">'+
          '<i class="fa-solid fa-star checked"></i>'+
            '<i class="fa-solid fa-star checked"></i>'+
            '<i class="fa-solid fa-star checked"></i>'+
            '<i class="fa-solid fa-star checked"></i>'+
            '<i class="fa-solid fa-star checked"></i>'+
            '<span>5.0 (' + marker.total_review + ' Reviews)</span>'+
        '</div>'+
            '<h3 class="title">'+
            '<a href="javascript:void(0)" tabindex="-1">' + marker.rent_name + '</a> '+
            '</h3>'+
            '<p><i class="feather-map-pin"></i> ' + marker.rent_address + '</p>'+
        '<ul class="d-flex details">'+
        '<li>'+
          '<img src="assets/img/icons/bed-icon.svg" alt="bed-icon">'+
            '<span>' + marker.rent_bed + ' Beds </span>'+
            '</li>'+
          '<li>'+
            '<img src="assets/img/icons/bath-icon.svg" alt="bath-icon">'+
              '<span>' + marker.rent_baths + ' Baths </span>'+
            '</li>'+
          '<li>'+
            '<img src="assets/img/icons/building-icon.svg" alt="building-icon">'+
              '<span>' + marker.rent_sqft + ' Sqft </span>'+
            '</li>'+
          '</ul>'+
        '<ul class="property-category d-flex justify-content-between">'+
        '<li>'+
          '<span class="list">Listed on : </span>'+
            '<span class="date">' + marker.rent_listedon + '</span>'+
            '</li>'+
          '<li>'+
          '<span class="category list">Category : </span>'+
            '<span class="category-value date">' + marker.rent_Category + '</span>'+
            '</li>'+
          '</ul>'+
        '</div>'+
      '</div>'+
      '</div>'+
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
  isClassAdded: boolean[] = [false];
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
}
