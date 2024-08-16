<template>
    <!-- Feature Property For Rent -->
    <section class="feature-property-sec for-rent">
        <div class="container">
            <div class="section-heading text-center">
                <h2>Featured Properties for Rent</h2>
                <div class="sec-line">
                    <span class="sec-line1"></span>
                    <span class="sec-line2"></span>
                </div>
                <p>Hand-picked selection of quality places</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="feature-slider owl-carousel">
                        <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
                            <Slide v-for="item in FeatureRent" :key="item.id">
                                <div class="slider-col">
                                    <div class="product-custom">
                                        <div class="profile-widget">
                                            <div class="doc-img">
                                                <router-link to="/rent/rent-details" class="property-img">
                                                    <img class="img-fluid" alt="Property Image"
                                                        :src="require(`@/assets/img/product/${item.Image}`)">
                                                </router-link>
                                                <div class="product-amount">
                                                    <h5><span>{{item.Price}}</span> / Night</h5>
                                                </div>
                                                <div class="featured">
                                                    <span>Featured</span>
                                                </div>
                                                <div :class="item.BadgeClass">
                                                    <span>{{item.Badge}}</span>
                                                </div>
                                                <a href="javascript:void(0)">
                                                    <div class="favourite" @click="toggleSelected(item)" :class="{ selected: item.isSelected }">
                                                        <span><i class="fa-regular fa-heart"></i></span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="pro-content text-start">
                                                <div class="rating">
                                                    <span class="rating-count">
                                                        <i class="fa-solid fa-star checked"></i>
                                                        <i class="fa-solid fa-star checked"></i>
                                                        <i class="fa-solid fa-star checked"></i>
                                                        <i class="fa-solid fa-star checked"></i>
                                                        <i class="fa-solid fa-star checked"></i>
                                                    </span>
                                                    <span class="rating-review">Excellent</span>
                                                </div>
                                                <h3 class="title">
                                                    <router-link to="/rent/rent-details">{{item.Title}}</router-link>
                                                </h3>
                                                <p><i class="feather-map-pin"></i> {{item.Content}}</p>
                                                <ul class="d-flex details">
                                                    <li>
                                                        <img src="@/assets/img/icons/bed-icon.svg" alt="bed-icon">
                                                        {{item.Beds}}
                                                    </li>
                                                    <li>
                                                        <img src="@/assets/img/icons/bath-icon.svg" alt="bath-icon">
                                                        {{item.Baths}}
                                                    </li>
                                                    <li>
                                                        <img src="@/assets/img/icons/building-icon.svg" alt="building-icon">
                                                        {{item.Space}}
                                                    </li>
                                                </ul>
                                                <ul class="property-category d-flex justify-content-between align-items-center">
                                                    <li class="user-info">
                                                        <router-link to="/rent/rent-details"><img :src="require(`@/assets/img/profiles/${item.Avatar}`)"
                                                                class="img-fluid avatar" alt="User"></router-link>
                                                        <div class="user-name">
                                                            <h6><router-link to="/rent/rent-details">{{item.Name}}</router-link></h6>
                                                            <p>{{item.City}}</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <router-link to="/rent/rent-details" class="btn-primary">Book Now</router-link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-custom">
                                        <div class="profile-widget">
                                            <div class="doc-img">
                                                <router-link to="/rent/rent-details" class="property-img">
                                                    <img class="img-fluid" alt="Property Image"
                                                    :src="require(`@/assets/img/product/${item.Image1}`)">
                                                </router-link>
                                                <div class="product-amount">
                                                    <h5><span>{{item.Price1}} </span> / Night</h5>
                                                </div>
                                                <div class="featured">
                                                    <span>Featured</span>
                                                </div>
                                                <a href="javascript:void(0)">
                                                    <div class="favourite" @click="toggleSelected(item)" :class="{ selected: item.isSelected }">
                                                        <span><i class="fa-regular fa-heart"></i></span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="pro-content text-start">
                                                <div class="rating">
                                                    <span class="rating-count">
                                                        <i class="fa-solid fa-star checked"></i>
                                                        <i class="fa-solid fa-star checked"></i>
                                                        <i class="fa-solid fa-star checked"></i>
                                                        <i class="fa-solid fa-star checked"></i>
                                                        <i class="fa-solid fa-star checked"></i>
                                                    </span>
                                                    <span class="rating-review">Excellent</span>
                                                </div>
                                                <h3 class="title">
                                                    <router-link to="/rent/rent-details">{{item.Title1}}</router-link>
                                                </h3>
                                                <p><i class="feather-map-pin"></i> {{item.Content1}}</p>
                                                <ul class="d-flex details">
                                                    <li>
                                                        <img src="@/assets/img/icons/bed-icon.svg" alt="bed-icon">
                                                       {{item.Beds1}}
                                                    </li>
                                                    <li>
                                                        <img src="@/assets/img/icons/bath-icon.svg" alt="bath-icon">
                                                        {{item.Baths1}}
                                                    </li>
                                                    <li>
                                                        <img src="@/assets/img/icons/building-icon.svg" alt="building-icon">
                                                        {{item.Space1}}
                                                    </li>
                                                </ul>
                                                <ul class="property-category d-flex justify-content-between align-items-center">
                                                    <li class="user-info">
                                                        <a href="javascript:void(0);"><img
                                                                :src="require(`@/assets/img/profiles/${item.Avatar1}`)" class="img-fluid avatar"
                                                                alt="User"></a>
                                                        <div class="user-name">
                                                            <h6><router-link to="/rent/rent-details">{{item.Name1}}</router-link></h6>
                                                            <p>{{item.City1}}</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <router-link to="/rent/rent-details" class="btn-primary">Book Now</router-link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <template #addons>
                                <Navigation />
                            </template>
                        </Carousel>
                    </div>
                    <div class="view-property-btn d-flex justify-content-center" data-aos="fade-down"
                        data-aos-duration="2000">
                        <router-link to="/rent/rent-property-grid" class="btn-primary">View All Properties</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-imgs">
            <img src="@/assets/img/bg/price-bg.png" class="bg-04" alt="Image">
        </div>
    </section>
    <!-- /Feature Property For Rent -->
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import FeatureRent from '@/assets/json/index-feature-rent.json'
import "vue3-carousel/dist/carousel.css";

export default {
    data() {
        return {
            FeatureRent: FeatureRent,
            isSelected: false,
            settings: {
                itemsToShow: 1,
                snapAlign: "center",
            },
            breakpoints: {
                575:
                {
                    itemsToShow: 2,
                    snapAlign: "center",
                },
                767:
                {
                    itemsToShow: 2,
                    snapAlign: "center",
                },
                991:
                {
                    itemsToShow: 3,
                    snapAlign: "center",
                },
                1024:
                {
                    itemsToShow: 3,
                    snapAlign: "start",
                },
            },
        }
    },
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    methods: {
    toggleSelected(item) {
      item.isSelected = !item.isSelected;
    },
  }
}
</script>