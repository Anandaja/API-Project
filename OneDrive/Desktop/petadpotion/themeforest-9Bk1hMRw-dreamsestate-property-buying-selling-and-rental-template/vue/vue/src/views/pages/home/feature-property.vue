<template>
  <!-- Feature Properties For Sale-->
  <section class="feature-property-sec">
    <div class="container">
      <div class="section-heading text-center">
        <h2>Featured Properties for Sales</h2>
        <div class="sec-line">
          <span class="sec-line1"></span>
          <span class="sec-line2"></span>
        </div>
        <p>Hand-Picked selection of quality places</p>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="feature-slider owl-carousel">
            <Carousel
              :wrap-around="true"
              :settings="settings"
              :breakpoints="breakpoints"
            >
              <Slide v-for="item in Feature" :key="item.id">
                <div class="slider-col">
                  <div
                    class="product-custom"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    <div class="profile-widget">
                      <div class="doc-img">
                        <router-link
                          to="/rent/rent-details"
                          class="property-img"
                        >
                          <img
                            class="img-fluid"
                            alt="Property Image"
                            :src="require(`@/assets/img/product/${item.Image}`)"
                          />
                        </router-link>
                        <div class="product-amount">
                          <span>{{ item.Price }}</span>
                        </div>
                        <div class="feature-rating">
                          <div>
                            <div class="featured">
                              <span>{{ item.Badge }}</span>
                            </div>
                            <div :class="item.BadgeClass">
                              <span>{{ item.BadgeTwo }}</span>
                            </div>
                          </div>
                          <a href="javascript:void(0)">
                            <div
                              class="favourite"
                              @click="toggleSelected(item)"
                              :class="{ selected: item.isSelected }"
                            >
                              <span><i class="fa-regular fa-heart"></i></span>
                            </div>
                          </a>
                        </div>
                        <div class="user-avatar">
                          <img
                            :src="
                              require(`@/assets/img/profiles/${item.Avatar}`)
                            "
                            alt="User"
                          />
                        </div>
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
                          <p class="rating-review">
                            <span>{{ item.Rating }}</span
                            >({{ item.Review }})
                          </p>
                        </div>
                        <h3 class="title">
                          <router-link to="/rent/rent-details">{{
                            item.Title
                          }}</router-link>
                        </h3>
                        <p>
                          <span><i class="feather-map-pin"></i></span
                          >{{ item.Content }}
                        </p>
                        <ul class="d-flex details">
                          <li>
                            <img
                              src="@/assets/img/icons/bed-icon.svg"
                              alt="bed-icon"
                            />
                            {{ item.Bed }}
                          </li>
                          <li>
                            <img
                              src="@/assets/img/icons/bath-icon.svg"
                              alt="bath-icon"
                            />
                            {{ item.Baths }}
                          </li>
                          <li>
                            <img
                              src="@/assets/img/icons/building-icon.svg"
                              alt="building-icon"
                            />
                            {{ item.Space }}
                          </li>
                        </ul>

                        <ul
                          class="property-category d-flex justify-content-between"
                        >
                          <li>
                            <span class="list">Listed on : </span>
                            <span class="date">{{ item.Listed }}</span>
                          </li>
                          <li>
                            <span class="category list">Category : </span>
                            <span class="category-value date">{{
                              item.Category
                            }}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    class="product-custom"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    <div class="profile-widget">
                      <div class="doc-img">
                        <router-link
                          to="/rent/rent-details"
                          class="property-img"
                        >
                          <img
                            class="img-fluid"
                            alt="Property Image"
                            :src="
                              require(`@/assets/img/product/${item.Image1}`)
                            "
                          />
                        </router-link>
                        <div class="feature-rating">
                          <div>
                            <div class="featured">
                              <span>{{ item.Badge1 }}</span>
                            </div>
                          </div>
                          <a href="javascript:void(0)">
                            <div
                              class="favourite"
                              @click="toggleSelected(item)"
                              :class="{ selected: item.isSelected }"
                            >
                              <span><i class="fa-regular fa-heart"></i></span>
                            </div>
                          </a>
                        </div>
                        <div class="product-amount">
                          <span>{{ item.Price1 }}</span>
                        </div>
                        <div class="user-avatar">
                          <img
                            :src="
                              require(`@/assets/img/profiles/${item.Avatar1}`)
                            "
                            alt="User"
                          />
                        </div>
                      </div>
                      <div class="pro-content text-start">
                        <div class="rating">
                          <span class="rating-count">
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star checked"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                          </span>
                          <p class="rating-review">
                            <span>{{ item.Rating1 }}</span
                            >({{ item.Review1 }})
                          </p>
                        </div>
                        <h3 class="title">
                          <router-link to="/rent/rent-details">{{
                            item.Title1
                          }}</router-link>
                        </h3>
                        <p>
                          <i class="feather-map-pin"></i>{{ item.Content1 }}
                        </p>
                        <ul class="d-flex details">
                          <li>
                            <img
                              src="@/assets/img/icons/bed-icon.svg"
                              alt="bed-icon"
                            />
                            {{ item.Bed1 }}
                          </li>
                          <li>
                            <img
                              src="@/assets/img/icons/bath-icon.svg"
                              alt="bath-icon"
                            />
                            {{ item.Baths1 }}
                          </li>
                          <li>
                            <img
                              src="@/assets/img/icons/building-icon.svg"
                              alt="building-icon"
                            />
                            {{ item.Space }}
                          </li>
                        </ul>

                        <ul
                          class="property-category d-flex justify-content-between"
                        >
                          <li>
                            <span class="list">Listed on : </span>
                            <span class="date">{{ item.Listed1 }}</span>
                          </li>
                          <li>
                            <span class="category list">Category : </span>
                            <span class="category-value date">{{
                              item.Category1
                            }}</span>
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
          <div
            class="view-property-btn d-flex justify-content-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <router-link to="/rent/rent-property-grid" class="btn-primary"
              >View All Properties</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="bg-imgs">
      <img src="@/assets/img/bg/price-bg.png" class="bg-01" alt="icon" />
      <img src="@/assets/img/icons/blue-circle.svg" class="bg-02" alt="icon" />
      <img src="@/assets/img/icons/red-circle.svg" class="bg-03" alt="icon" />
    </div>
  </section>
  <!-- /Feature Properties For Sale -->
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import Feature from "@/assets/json/index-feature-property.json";
import "vue3-carousel/dist/carousel.css";

export default {
  data() {
    return {
      Feature: Feature,
      isSelected: false,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        575: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        767: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        991: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 3,
          snapAlign: "start",
        },
      },
    };
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
  },
};
</script>