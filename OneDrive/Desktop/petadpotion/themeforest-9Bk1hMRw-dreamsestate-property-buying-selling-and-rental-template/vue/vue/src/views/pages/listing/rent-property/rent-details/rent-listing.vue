<template>
  <div class="similar-list">
    <div class="section-heading">
      <h2>Similar Listings</h2>
      <div class="sec-line">
        <span class="sec-line1"></span>
        <span class="sec-line2"></span>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
        eiusmodtempor incididunt
      </p>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="feature-property-sec for-rent p-0">
          <div class="rentfeature-slider owl-carousel">
            <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
              <Slide v-for="record in Rent_Listing" :key="record.id">
                <div class="product-custom">
                  <div class="profile-widget">
                    <div class="doc-img">
                      <router-link to="/rent/rent-details" class="property-img">
                        <img class="img-fluid" alt="Property Image" :src="require(`@/assets/img/product/${record.ProductImage}`)
                          " />
                      </router-link>
                      <div class="product-amount">
                        <h5>
                          <span>{{ record.Amount }}</span> / Night
                        </h5>
                      </div>
                      <div class="featured">
                        <span>Featured</span>
                      </div>
                      <div :class="record.Class">
                        <span>{{ record.New }}</span>
                      </div>
                      <a href="javascript:void(0)">
                        <div class="favourite" @click="toggleSelected(record)" :class="{ selected: record.isSelected }">
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
                        <router-link to="/rent/rent-details">{{ record.Topic }}</router-link>
                      </h3>
                      <p>
                        <i class="feather-map-pin"></i> {{ record.Location }}
                      </p>
                      <ul class="d-flex details">
                        <li>
                          <img src="@/assets/img/icons/bed-icon.svg" alt="bed-icon" />
                          {{ record.Beds }}
                        </li>
                        <li>
                          <img src="@/assets/img/icons/bath-icon.svg" alt="bath-icon" />
                          {{ record.Baths }}
                        </li>
                        <li>
                          <img src="@/assets/img/icons/building-icon.svg" alt="building-icon" />
                          {{ record.Sqft }}
                        </li>
                      </ul>
                      <ul class="property-category d-flex justify-content-between align-items-center">
                        <li class="user-info">
                          <a href="javascript:void(0);"><img
                              :src="require(`@/assets/img/profiles/${record.AvatarImage}`)" class="img-fluid avatar"
                              alt="User" /></a>
                          <div class="user-name">
                            <h6>
                              <a href="javascript:void(0);">{{
                                record.Name
                              }}</a>
                            </h6>
                            <p>{{ record.LocationOne }}</p>
                          </div>
                        </li>
                        <li>
                          <router-link to="/rent/rent-details" class="btn-primary">Book Now</router-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Slide>
              <template #addons>
                <Pagination />
              </template>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Rent_Listing from "@/assets/json/rent-listing.json";
export default {
  data() {
    return {
      isSelected: false,
      Rent_Listing: Rent_Listing,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        575: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        767: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        991: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 3,
          snapAlign: "start",
        },
      },
    };
  },
  methods: {
    toggleSelected(record) {
      record.isSelected = !record.isSelected;
    },
  },
  components: {
    Carousel,
    Slide,
    Pagination,
  },
};
</script>
