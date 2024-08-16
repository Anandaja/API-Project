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
        <div class="blog-slider owl-carousel">
          <Carousel
            :wrap-around="true"
            :settings="settings"
            :breakpoints="breakpoints"
          >
            <Slide v-for="record in Buy_Listing" :key="record.id">
              <!-- List -->
              <div class="product-custom">
                <div class="profile-widget">
                  <div class="doc-img">
                    <router-link to="/buy/buy-detail-view" class="property-img">
                      <img
                        class="img-fluid"
                        alt="Property Image"
                        :src="require(`@/assets/img/product/${record.RentImage}`)"
                      />
                    </router-link>
                    <div class="product-amount">
                      <span>{{record.Amount}}</span>
                    </div>
                    <div class="feature-rating">
                      <div>
                        <div class="featured">
                          <span>Featured</span>
                        </div>
                        <div :class="record.Class">
                          <span>{{record.New}}</span>
                        </div>
                      </div>
                      <a href="javascript:void(0)">
                        <div class="favourite" @click="toggleSelected(record)" :class="{ selected: record.isSelected }">
                          <span><i class="fa-regular fa-heart"></i></span>
                        </div>
                      </a>
                    </div>
                    <div class="user-avatar">
                      <img
                        :src="require(`@/assets/img/profiles/${record.AvatarImage}`)"
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
                      <p class="rating-review"><span>{{record.Star}}</span>{{record.Reviews}}</p>
                    </div>
                    <h3 class="title">
                      <router-link to="/buy/buy-detail-view"
                        >{{record.Name}}</router-link
                      >
                    </h3>
                    <p>
                      <i class="feather-map-pin"></i> {{record.Location}}
                    </p>
                    <ul class="d-flex details">
                      <li>
                        <img
                          src="@/assets/img/icons/bed-icon.svg"
                          alt="bed-icon"
                        />
                        {{record.Beds}}
                      </li>
                      <li>
                        <img
                          src="@/assets/img/icons/bath-icon.svg"
                          alt="bath-icon"
                        />
                        {{record.Baths}}
                      </li>
                      <li>
                        <img
                          src="@/assets/img/icons/building-icon.svg"
                          alt="building-icon"
                        />
                        {{record.Sqft}}
                      </li>
                    </ul>

                    <ul
                      class="property-category d-flex justify-content-between"
                    >
                      <li>
                        <span class="list">Listed on : </span>
                        <span class="date">{{record.Date}}</span>
                      </li>
                      <li>
                        <span class="category list">Category : </span>
                        <span class="category-value date">{{record.Category}}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /List -->
            </Slide>
            <template #addons>
              <Pagination />
            </template>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import Buy_Listing from "@/assets/json/buy-listing.json";
export default {
  data() {
    return {
      isSelected: false,
      Buy_Listing: Buy_Listing,
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