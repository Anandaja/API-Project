<template>
  <layouts-header></layouts-header>
  <page-header :title="title" :text="text" :text1="text1" />

  <!-- Feature Property For Rent -->
  <div class="listing-section">
    <div class="container">

      <!-- Sort Result -->
      <div class="showing-result-head">
        <div class="row align-items-center">
          <div class="col-lg-3">
            <div class="result-show">
              <h5>Showing result <span>06</span> of <span>125</span></h5>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="sort-result">
              <div class="sort-by grid-head">
                <div>
                  <p>Sort By</p>
                </div>
                <div class="review-form">
                  <vue-select 
                    :options="Sort"
                    id="rentsort"
                    placeholder="Default"
                  />
                </div>
              </div>
              <div class="price-range grid-head">
                <div>
                  <p>Price Range</p>
                </div>
                <div class="review-form">
                  <vue-select 
                    :options="Pricerange"
                    id="rentpricerange"
                    placeholder="Low to High"
                  />
                </div>
              </div>
              <div class="grid-list-view">
                <ul>
                  <li><router-link to="/rent/rent-property-grid" class="active"><i class="bx bx-grid"></i></router-link></li>
                  <li><router-link to="/rent/rent-property-list"><i class="bx bx-list-ul"></i></router-link></li>
                  <li><router-link to="/rent/rent-grid-map"><i class="bx bxs-map"></i></router-link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Sort Result -->

      <div class="feature-property-sec for-rent for-rent p-0 bg-transparent">
        <div class="row">

          <!-- Rent grid -->
          <div class="col-lg-4 col-md-6"  v-for="record in RentPropertyGrid"
            :key="record.id">
            <div class="product-custom">
              <div class="profile-widget">
                <div class="doc-img">
                  <router-link to="/rent/rent-details" class="property-img">
                    <img class="img-fluid" alt="Property Image" :src="require(`@/assets/img/product/${record.Image}`)">
                  </router-link>
                  <div class="product-amount">
                    <h5><span>{{record.Price}} </span> / Night</h5>
                  </div>
                  <div class="featured">
                    <span>Featured</span>
                  </div>
                  <div :class="record.BadgeClass">
                    <span>{{record.Badge}}</span>
                  </div>
                  <a href="javascript:void(0)">
                    <div class="favourite" @click="toggleSelected(record)" :class="{ selected: record.isSelected }">
                      <i class="fa-regular fa-heart"></i>
                    </div>
                  </a>
                </div>
                <div class="pro-content">
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
                    <router-link to="/rent/rent-details">{{record.Title}}</router-link>
                  </h3>
                  <p><i class="feather-map-pin"></i> {{record.Content}}</p>
                  <ul class="d-flex details">
                    <li>
                      <img src="@/assets/img/icons/bed-icon.svg" alt="bed-icon">
                      {{record.Beds}}
                    </li>
                    <li>
                      <img src="@/assets/img/icons/bath-icon.svg" alt="bath-icon">
                      {{record.Baths}}
                    </li>
                    <li>
                      <img src="@/assets/img/icons/building-icon.svg" alt="building-icon">
                      {{record.Space}}
                    </li>
                  </ul>
                  <ul class="property-category d-flex justify-content-between align-items-center">
                    <li class="user-info">
                      <router-link to="/agent/agent-grid"><img :src="require(`@/assets/img/profiles/${record.Avatar}`)" class="img-fluid avatar"
                          alt="User"></router-link>
                      <div class="user-name">
                        <router-link to="/agent/agent-grid">{{record.Name}}</router-link>
                        <p>{{record.City}}</p>
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
          <!-- /Rent grid -->

        </div>
      </div>
    </div>
  </div>
  <!-- /Feature Property For Rent -->

  <layouts-footer></layouts-footer>
</template>


<script>
import RentPropertyGrid from '@/assets/json/rent-property-grid.json'
export default {
  data() {
    return {
      isSelected: false,
      RentPropertyGrid: RentPropertyGrid,
      title: "Rent Property Grid Without Sidebar",
      text: "Home",
      text1: "Rent Property Grid Without Sidebar",
      Sort: ["Default", "A-Z"],
      Pricerange: ["Low to High", "High to Low"]
    };
  },
  methods: {
    toggleSelected(record) {
      record.isSelected = !record.isSelected;
    },
  },
};
</script>