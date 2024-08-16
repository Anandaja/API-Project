<template>
  <!-- Rent Listings -->
  <div class="agentpro-list">
    <div class="agentview-slider owl-carousel feature-property-sec for-rent">
      <Carousel
        :wrap-around="true"
        :settings="settings"
        :breakpoints="breakpoints"
      >
        <Slide v-for="record in Agency_Property" :key="record.id">
          <div class="product-custom">
            <div class="profile-widget">
              <div class="pro-img">
                <router-link to="/rent/rent-details" class="property-img">
                  <img
                    class="img-fluid"
                    alt="Property Image"
                    :src="
                      require(`@/assets/img/product/${record.ProductImage}`)
                    "
                  />
                </router-link>
                <div class="product-amount">
                  <h5>
                    <span>{{ record.Amount }} </span> / Night
                  </h5>
                </div>
                <div class="featured">
                  <span>Featured</span>
                </div>
                <a href="javascript:void(0)">
                  <div
                    class="favourite"
                    @click="toggleSelected(record)"
                    :class="{ selected: record.isSelected }"
                  >
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
                  <router-link to="/rent/rent-details">{{
                    record.Title
                  }}</router-link>
                </h3>
                <p><i class="feather-map-pin"></i>{{ record.Location }}</p>
                <ul class="d-flex details">
                  <li>
                    <img src="@/assets/img/icons/bed-icon.svg" alt="bed-icon" />
                    {{ record.Beds }}
                  </li>
                  <li>
                    <img
                      src="@/assets/img/icons/bath-icon.svg"
                      alt="bath-icon"
                    />
                    {{ record.Baths }}
                  </li>
                  <li>
                    <img
                      src="@/assets/img/icons/building-icon.svg"
                      alt="building-icon"
                    />
                    {{ record.Sqft }}
                  </li>
                </ul>
                <ul
                  class="property-category d-flex justify-content-between align-items-center"
                >
                  <li class="user-info">
                    <a href="javascript:void(0);"
                      ><img
                        :src="require(`@/assets/img/profiles/${record.Image}`)"
                        class="img-fluid avatar"
                        alt="User"
                    /></a>
                    <div class="user-name">
                      <h6>
                        <a href="javascript:void(0);">{{ record.Name }}</a>
                      </h6>
                      <p>{{ record.Topic }}</p>
                    </div>
                  </li>
                  <li>
                    <router-link to="/rent/rent-details" class="btn-primary"
                      >Book Now</router-link
                    >
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
  <!-- /Rent Listings -->
</template>
  <script>
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Agency_Property from "@/assets/json/agency-property.json";
export default {
  data() {
    return {
      isSelected: false,
      Agency_Property: Agency_Property,
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
          itemsToShow: 2,
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