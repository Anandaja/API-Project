<template>
  <layouts-header></layouts-header>
  <page-header :title="title" :text="text" :text1="text1" />

  <!-- Feature Property For Rent -->
  <div class="property-sidebar">
    <section class="feature-property-sec for-rent content">
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
                      id="rentsidelistsort"
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
                      id="rentsidelistpricerange"
                      placeholder="Low to High"
                    />
                  </div>
                </div>
                <div class="grid-list-view">
                  <ul>
                    <li>
                      <router-link to="/rent/rent-property-grid-sidebar"
                        ><i class="bx bx-grid"></i
                      ></router-link>
                    </li>
                    <li>
                      <router-link
                        to="/rent/rent-property-list-sidebar"
                        class="active"
                        ><i class="bx bx-list-ul"></i
                      ></router-link>
                    </li>
                    <li>
                      <router-link to="/rent/rent-list-map"
                        ><i class="bx bxs-map"></i
                      ></router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Sort Result -->

        <div class="row justify-content-center">
          <!-- Sidebar -->
          <div class="col-xl-4 theiaStickySidebar">
            <div class="stickysidebar">
              <buy-sidebar></buy-sidebar>
            </div>
          </div>
          <!-- /Sidebar -->

          <div class="col-xl-8 product-sidebarview">
            <!-- Rent List -->
            <div
              class="product-custom"
              v-for="record in RentPropertyListSidebar"
              :key="record.id"
            >
              <div class="profile-widget rent-list-view">
                <div class="doc-img">
                  <router-link to="/rent/rent-details" class="property-img">
                    <img
                      class="img-fluid"
                      alt="Product image"
                      :src="require(`@/assets/img/rent/${record.Image}`)"
                    />
                  </router-link>
                  <div :class="record.BadgeClass">
                    <span>{{ record.Badge }}</span>
                  </div>
                  <div :class="record.BadgeClass1">
                    <span>{{ record.Badge1 }}</span>
                  </div>
                  <div class="product-amount">
                    <h5>
                      <span>{{ record.Price }} </span> / night
                    </h5>
                  </div>
                  <a href="javascript:void(0)">
                    <div
                      class="favourite" @click="toggleSelected(record)" :class="{ selected: record.isSelected }">
                      <span><i class="fa-regular fa-heart"></i></span>
                    </div>
                  </a>
                </div>
                <div class="pro-content">
                  <div class="list-head">
                    <div class="rating">
                      <span class="rating-count d-inline-flex">
                        <i class="fa fa-star checked"></i>
                        <i class="fa fa-star checked"></i>
                        <i class="fa fa-star checked"></i>
                        <i class="fa fa-star checked"></i>
                        <i class="fa fa-star checked"></i>
                      </span>
                      <span class="rating-review">Excellent</span>
                    </div>
                    <h3 class="title">
                      <a href="javascript:void(0)" tabindex="-1">{{
                        record.Title
                      }}</a>
                    </h3>
                    <p><i class="feather-map-pin"></i>{{ record.Content }}</p>
                  </div>
                  <ul class="d-flex details">
                    <li>
                      <img
                        src="@/assets/img/icons/bed-icon.svg"
                        alt="bed-icon"
                      />
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
                      {{ record.Space }}
                    </li>
                  </ul>
                  <ul
                    class="property-category d-flex justify-content-between align-items-center"
                  >
                    <li class="user-info">
                      <a href="javascript:void(0);"
                        ><img
                          :src="
                            require(`@/assets/img/profiles/${record.Avatar}`)
                          "
                          class="img-fluid avatar"
                          alt=""
                      /></a>
                      <div class="user-name">
                        <h6>
                          <a href="javascript:void(0);">{{ record.Name }}</a>
                        </h6>
                        <p>{{ record.City }}</p>
                      </div>
                    </li>
                    <li>
                      <router-link to="/rental-order" class="btn-primary"
                        >Book Now</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- /Rent List -->

            <!-- Pagination -->
            <div class="row">
              <div class="col-lg-12">
                <div class="grid-pagination">
                  <ul class="pagination justify-content-center">
                    <li class="page-item prev">
                      <a class="page-link" href="javascript:void(0);"
                        ><i class="fa-solid fa-arrow-left"></i> Prev</a
                      >
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0);">1</a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link" href="javascript:void(0);">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0);">3</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="javascript:void(0);">4</a>
                    </li>
                    <li class="page-item next">
                      <a class="page-link" href="javascript:void(0);"
                        >Next <i class="fa-solid fa-arrow-right"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- /Pagination -->
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- /Feature Property For Rent -->

  <layouts-footer></layouts-footer>
</template>

<script>
import RentPropertyListSidebar from "@/assets/json/rent-property-list-sidebar.json";
export default {
  data() {
    return {
      RentPropertyListSidebar: RentPropertyListSidebar,
      title: "Rent Property List With Sidebar",
      text: "Home",
      text1: "Rent Property List With Sidebar",
      Sort: ["Default", "A-Z"],
      Pricerange: ["Low to High", "High to Low"],
      isSelected: false,
    };
  },
  methods: {
    toggleSelected(record) {
      record.isSelected = !record.isSelected;
    },
  },
};
</script>