<template>
    <layouts-header></layouts-header>
    <page-header :title="title" :text="text" :text1="text1" />

    <!-- Content -->
    <div class="content p-0">
        <div class="container-fluid">
            <div class="row">

                <!-- Map -->
                <div class="col-xl-5 col-sm-12 map-right grid-map">
                    <div id="map" class="map-listing">
                        <GoogleMap api-key="YOUR_ACTUAL_API_KEY" @click="showInfo(marker)"
                            style="width: 100%; height: 500px" :center="center" :zoom="15">
                            <Marker :options="{ position: center }" />
                        </GoogleMap>
                    </div>
                </div>
                <!-- /Map -->

                <!-- Rent -->
                <div class="col-xl-7 col-sm-12 no-map map-content">

                    <!-- Sidebar -->
                    <search-map></search-map>
                    <!-- /Sidebar -->

                    <!-- Result -->
                    <div class="result-map">
                        <div class="showing-result-head">
                            <div class="row align-items-center">
                                <div class="col-md-3">
                                    <div class="result-show">
                                        <h5>Showing result <span>06</span> of <span>125</span></h5>
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <div class="row">
                                        <div class="col-md-12 d-flex justify-content-md-end flex-wrap">
                                            <div class="sort-by grid-head">
                                                <div>
                                                    <span>Sort By</span>
                                                </div>
                                                <div class="review-form">
                                                    <vue-select :options="Sort" id="rentmapsort"
                                                        placeholder="Default" />
                                                </div>
                                            </div>
                                            <div class="grid-list-view">
                                                <ul class="justify-content-end">
                                                    <li><router-link to="/rent/rent-property-grid"><i
                                                                class="bx bx-grid"></i></router-link>
                                                    </li>
                                                    <li><router-link to="/rent/rent-property-list"><i
                                                                class="bx bx-list-ul"></i></router-link></li>
                                                    <li><router-link to="/rent/rent-grid-map" class="active"><i
                                                                class="bx bxs-map"></i></router-link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Result -->

                    <div class="feature-property-sec for-rent rent-grid p-0 bg-white">
                        <div class="row ">

                            <!-- Rent Grid -->
                            <div class="col-lg-6 col-12 d-flex" v-for="record in RentGridMap" :key="record.id">
                                <div class="product-custom flex-fill">
                                    <div class="profile-widget">
                                        <div class="doc-img">
                                            <router-link to="/rent/rent-details" class="property-img">
                                                <img class="img-fluid" alt="Product image"
                                                    :src="require(`@/assets/img/product/${record.Image}`)">
                                            </router-link>
                                            <div class="product-amount">
                                                <h5><span>{{ record.Price }} </span> / night</h5>
                                            </div>
                                            <div class="featured">
                                                <span>Featured</span>
                                            </div>
                                            <div :class="record.BadgeClass">
                                                <span>{{ record.Badge }}</span>
                                            </div>
                                            <a href="javascript:void(0)">
                                                <div class="favourite" @click="toggleSelected(record)" :class="{ selected: record.isSelected }">
                                                    <span><i class="fa-regular fa-heart"></i></span>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="pro-content">
                                            <div class="rating">
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star checked"></i>
                                                Excellent
                                            </div>
                                            <h3 class="title">
                                                <router-link to="/rent/rent-details"
                                                    tabindex="-1">{{ record.Title }}</router-link>
                                            </h3>
                                            <p><i class="feather-map-pin"></i> {{ record.Content }}
                                            </p>
                                            <ul class="d-flex details">
                                                <li>
                                                    <img src="@/assets/img/icons/bed-icon.svg" alt="bed-icon">
                                                    {{ record.Beds }}
                                                </li>
                                                <li>
                                                    <img src="@/assets/img/icons/bath-icon.svg" alt="bath-icon">
                                                    {{ record.Baths }}
                                                </li>
                                                <li>
                                                    <img src="@/assets/img/icons/building-icon.svg" alt="building-icon">
                                                    {{ record.Space }}
                                                </li>
                                            </ul>
                                            <ul
                                                class="property-category d-flex justify-content-between align-items-center">
                                                <li class="user-info">
                                                    <a href="javascript:void(0);"><img
                                                            :src="require(`@/assets/img/profiles/${record.Avatar}`)"
                                                            class="img-fluid avatar" alt=""></a>
                                                    <div class="user-name">
                                                        <a href="javascript:void(0);">{{ record.Name }}</a>
                                                        <p>{{ record.City }}</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <router-link to="/rental-order" class="btn-primary">Book
                                                        Now</router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /Rent Grid -->

                            <!-- Pagination -->
                            <div class="col-lg-12">
                                <div class="grid-pagination grid-pagination-map">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item prev">
                                            <a class="page-link" href="javascript:void(0);"><i class="fa-solid fa-arrow-left"></i>
                                                Prev</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="javascript:void(0);">1</a>
                                        </li>
                                        <li class="page-item active">
                                            <a class="page-link" href="javascript:void(0);">2</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="javascript:void(0);">.3</a>
                                        </li>
                                        <li class="page-item next">
                                            <a class="page-link" href="javascript:void(0);">Next <i
                                                    class="fa-solid fa-arrow-right"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- /Pagination -->

                        </div>
                    </div>
                </div>
                <!-- /Rent -->

            </div>
        </div>
    </div>
    <!-- /Content -->

    <layouts-footer></layouts-footer>
</template>

<script>
const locations = [
    {
        "id": "01",
        "lat": "53.470692",
        "lng": "-2.220328",
        "rent_prize": "$1,400 ",
        "rent_bed": "4",
        "rent_baths": "4",
        "rent_sqft": "1500",
        "rent_listedon": "17 Jan 2024",
        "rent_Category": "Condos",
        "rent_name": "Place perfect for nature",
        "total_review": "17",
        "rent_address": "122-140 N Morgan St, Chicago, IL 60607, USA",
        "image": 'product-1.jpg',
        "profile_image": 'avatar-01.jpg'
    },
    {
        "id": "02",
        "lat": "53.469189",
        "lng": "-2.199262",
        "rent_prize": "$1,400 ",
        "rent_bed": "4",
        "rent_baths": "4",
        "rent_sqft": "1000",
        "rent_listedon": "17 Jan 2024",
        "rent_Category": "Condos",
        "rent_name": "Place perfect for nature",
        "rent_address": "470 Park Ave S, New York, NY 10016",
        "total_review": "17",
        "image": 'product-2.jpg',
        "profile_image": 'avatar-02.jpg'
    },
    {
        "id": "03",
        "lat": "53.468665",
        "lng": "-2.189269",
        "rent_prize": "$1,400 ",
        "rent_bed": "4",
        "rent_baths": "4",
        "rent_sqft": "5000",
        "rent_listedon": "17 Jan 2024",
        "rent_Category": "Condos",
        "rent_name": "Place perfect for nature",
        "total_review": "17",
        "rent_address": "122-140 N Morgan St, Chicago, IL 60607, USA",
        "image": 'product-3.jpg',
        "profile_image": 'avatar-03.jpg'
    },
    {
        "id": "04",
        "lat": "53.463894",
        "lng": "-2.177880",
        "rent_prize": "$1,400 ",
        "rent_bed": "4",
        "rent_baths": "4",
        "rent_sqft": "350",
        "rent_listedon": "17 Jan 2024",
        "rent_Category": "Condos",
        "rent_name": "Place perfect for nature",
        "total_review": "17",
        "rent_address": "470 Park Ave S, New York, NY 10016",
        "image": 'product-4.jpg',
        "profile_image": 'avatar-04.jpg'
    },
    {
        "id": "05",
        "lat": "53.466359",
        "lng": "-2.213314",
        "rent_prize": "$1,400 ",
        "rent_bed": "4",
        "rent_baths": "4",
        "rent_sqft": "1100",
        "rent_listedon": "17 Jan 2024",
        "rent_Category": "Condos",
        "rent_name": "Place perfect for nature",
        "total_review": "17",
        "rent_address": "122-140 N Morgan St, Chicago, IL 60607, USA",
        "image": 'product-5.jpg',
        "profile_image": 'avatar-05.jpg'
    },
    {
        "id": "06",
        "lat": "53.469189",
        "lng": "-2.210661",
        "rent_prize": "$1,400 ",
        "rent_bed": "4",
        "rent_baths": "4",
        "rent_sqft": "300",
        "rent_listedon": "17 Jan 2024",
        "rent_Category": "Condos",
        "rent_name": "Place perfect for nature",
        "rent_address": "470 Park Ave S, New York, NY 10016",
        "total_review": "17",
        "image": 'product-2.jpg',
        "profile_image": 'avatar-02.jpg'
    },
    {
        "id": "07",
        "lat": "53.468665",
        "lng": "-2.188532",
        "rent_prize": "$1,400 ",
        "rent_bed": "4",
        "rent_baths": "4",
        "rent_sqft": "3000",
        "rent_listedon": "17 Jan 2024",
        "rent_Category": "Condos",
        "rent_name": "Place perfect for nature",
        "total_review": "17",
        "rent_address": "122-140 N Morgan St, Chicago, IL 60607, USA",
        "image": 'product-3.jpg',
        "profile_image": 'avatar-03.jpg'
    },
    {
        "id": "08",
        "lat": "53.463894",
        "lng": "-2.1950372",
        "rent_prize": "$1,400 ",
        "rent_bed": "4",
        "rent_baths": "4",
        "rent_sqft": "1000",
        "rent_listedon": "17 Jan 2024",
        "rent_Category": "Condos",
        "rent_name": "Place perfect for nature",
        "total_review": "17",
        "rent_address": "470 Park Ave S, New York, NY 10016",
        "image": 'product-4.jpg',
        "profile_image": 'avatar-04.jpg'
    },
    {
        "id": "09",
        "lat": "53.466359",
        "lng": "-2.203314",
        "rent_prize": "$1,400 ",
        "rent_bed": "4",
        "rent_baths": "4",
        "rent_sqft": "2000",
        "rent_listedon": "17 Jan 2024",
        "rent_Category": "Condos",
        "rent_name": "Place perfect for nature",
        "total_review": "17",
        "rent_address": "122-140 N Morgan St, Chicago, IL 60607, USA",
        "image": 'product-5.jpg',
        "profile_image": 'avatar-05.jpg'
    }
];

const icons = {

};

import RentGridMap from '@/assets/json/rent-grid-map.json'
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

/* eslint-disable */

// Declare google as a global variable
/* global google */

export default defineComponent({
    setup() {
        const center = { lat: 40.689247, lng: -74.044502 };

        return { center };
    },
    components: { GoogleMap, Marker },
    data() {
        return {
            RentGridMap: RentGridMap,
            title: "Rent Property Grid With Map",
            text: "Home",
            text1: "Rent Property Grid With Map",
            Sort: ["Default", "10 AM - 12 PM", "12 PM - 2 PM", "02 PM - 04 PM"],
            icons: icons,
            locations: locations,
            isSelected: false,
        }
    },
    methods: {
        showInfo(marker) {
            this.infoWindowPosition = marker.position;
            this.infoWindowOpened = true;
            this.setInfo(marker);
        },
        toggleSelected(record) {
            record.isSelected = !record.isSelected;
        },
    },
    mounted() {
        // Your Google Maps related code here
        google.maps.visualRefresh = true;
        var slider,
            infowindow = null;
        var bounds = new google.maps.LatLngBounds();
        var map,
            current = 0;

        function show() {
            infowindow.close();
            if (!map.slide) {
                return;
            }
            var next, marker;
            if (locations.length == 0) {
                return
            } else if (locations.length == 1) {
                next = 0;
            }
            if (locations.length > 1) {
                do {
                    next = Math.floor(Math.random() * locations.length);
                } while (next == current)
            }
            current = next;
            marker = locations[next];
            setInfo(marker);
            infowindow.open(map, marker);
        }

        function initialize() {
            var bounds = new google.maps.LatLngBounds();
            var mapOptions = {
                zoom: 14,
                center: new google.maps.LatLng(53.470692, -2.220328),
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,

            };

            map = new google.maps.Map(document.getElementById('map'), mapOptions);
            map.slide = true;

            setMarkers(map, locations);
            infowindow = new google.maps.InfoWindow({
                content: "loading..."
            });
            google.maps.event.addListener(infowindow, 'closeclick', function () {
                infowindow.close();
            });
            slider = window.setTimeout(show, 3000);
        }

        function setInfo(marker) {
            var content =
                '<div class="">' +
                '<div class="product-custom">' +
                '<div class="profile-widget">' +
                '<div class="doc-img">' +
                '<a href="javascript:void(0)" class="property-img">' +
                '<img class="img-fluid" alt="img" src="' + require(`@/assets/img/product/${marker.image}`) + '">' +
                '</a>' +
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
                '<div class="user-avatar">' +
                '<img src="' + require(`@/assets/img/profiles/${marker.profile_image}`) + '" alt="Image">' +
                '	</div>' +
                '<div class="product-amount">' +
                '<span>' + marker.rent_prize + '</span>' +
                '</div>' +
                '</div>' +
                '<div class="pro-content">' +
                '<div class="rating">' +
                '<i class="fa-solid fa-star checked"></i>' +
                '<i class="fa-solid fa-star checked"></i>' +
                '<i class="fa-solid fa-star checked"></i>' +
                '<i class="fa-solid fa-star checked"></i>' +
                '<i class="fa-solid fa-star checked"></i>' +
                '<span>5.0 (' + marker.total_review + ' Reviews)</span>' +
                '</div>' +
                '<h3 class="title">' +
                '<a href="javascript:void(0)" tabindex="-1">' + marker.rent_name + '</a> ' +
                '</h3>' +
                '<p><i class="feather-map-pin"></i> ' + marker.rent_address + '</p>' +
                '<ul class="d-flex details">' +
                '<li>' +
                '<img src=" ' + require(`@/assets/img/icons/bed-icon.svg`) + '" alt="bed-icon">' +
                '<span>' + marker.rent_bed + ' Beds </span>' +
                '</li>' +
                '<li>' +
                '<img src=" ' + require(`@/assets/img/icons/bath-icon.svg`) + ' " alt="bath-icon">' +
                '<span>' + marker.rent_baths + ' Baths </span>' +
                '</li>' +
                '<li>' +
                '<img src=" ' + require(`@/assets/img/icons/building-icon.svg`) + ' " alt="building-icon">' +
                '<span>' + marker.rent_sqft + ' Sqft </span>' +
                '</li>' +
                '</ul>' +
                '<ul class="property-category d-flex justify-content-between">' +
                '<li>' +
                '<span class="list">Listed on : </span>' +
                '<span class="date">' + marker.rent_listedon + '</span>' +
                '</li>' +
                '<li>' +
                '<span class="category list">Category : </span>' +
                '<span class="category-value date">' + marker.rent_Category + '</span>' +
                '</li>' +
                '</ul>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';
            infowindow.setContent(content);
        }

        function setMarkers(map, markers) {
            for (var i = 0; i < markers.length; i++) {
                var item = markers[i];
                var latlng = new google.maps.LatLng(item.lat, item.lng);
                var marker = new google.maps.Marker({
                    position: latlng,
                    map: map,
                    profile_image: item.profile_image,
                    rent_Category: item.rent_Category,
                    rent_listedon: item.rent_listedon,
                    rent_sqft: item.rent_sqft,
                    rent_baths: item.rent_baths,
                    rent_bed: item.rent_bed,
                    rent_address: item.rent_address,
                    rent_prize: item.rent_prize,
                    rent_name: item.rent_name,
                    total_review: item.total_review,

                    animation: google.maps.Animation.DROP,
                    icon: icons[item.icons],
                    image: item.image
                });
                bounds.extend(marker.position);
                markers[i] = marker;
                google.maps.event.addListener(marker, "click", function () {
                    setInfo(this);
                    infowindow.open(map, this);
                    window.clearTimeout(slider);
                });
            }
            map.fitBounds(bounds);
            google.maps.event.addListener(map, 'zoom_changed', function () {
                if (map.zoom > 16) map.slide = false;
            });
        }

        google.maps.event.addDomListener(window, 'load', initialize);
    },
});
</script>