<template>
  <layouts-header></layouts-header>
  <page-header :title="title" :text="text" :text1="text1" />
  <div class="property-sidebar">
    <section class="feature-property-sec for-rent content">
      <div class="container">
        <!-- Sort Result -->
        <buy-list-sidebar-header></buy-list-sidebar-header>
        <div class="row">
          <!-- Sidebar -->
          <div class="col-xl-3 theiaStickySidebar">
            <div class="stickysidebar">
              <buy-sidebar></buy-sidebar>
            </div>
          </div>
          <!-- /Sidebar -->

          <div class="col-xl-9">
            <div class="row justify-content-center buy-list">
              <!-- Buy List -->
              <div class="col-lg-12" v-for="record in Buy_Property_List_Sidebar" :key="record.id">
                <div class="product-custom">
                  <div class="profile-widget rent-list-view">
                    <div class="doc-img">
                      <router-link to="/buy/buy-details" class="property-img">
                        <img class="img-fluid" alt="Property Image" :src="require(`@/assets/img/rent/${record.RentImage}`)
                          " />
                      </router-link>
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
                      <div class="user-avatar">
                        <img :src="require(`@/assets/img/profiles/${record.AvatarImage}`)
                          " alt="User" />
                      </div>
                    </div>
                    <div class="pro-content">
                      <div class="list-head">
                        <div class="rating">
                          <i class="fa-solid fa-star checked"></i>
                          <i class="fa-solid fa-star checked"></i>
                          <i class="fa-solid fa-star checked"></i>
                          <i :class="record.StarClass"></i>
                          <i :class="record.StarClass1"></i>
                          <span class="me-1">{{ record.Star }}</span>
                          {{ record.Reviews }}
                          <div class="product-name-price">
                            <h3 class="title">
                              <router-link to="/buy/buy-details" tabindex="-1">{{ record.Topic }}</router-link>
                            </h3>
                            <div class="product-amount">
                              <h5>
                                <span>{{ record.Amount }} </span>
                              </h5>
                            </div>
                          </div>
                          <p>
                            <i class="feather-map-pin"></i>
                            {{ record.Location }}
                          </p>
                        </div>
                      </div>
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
                      <ul class="property-category d-flex justify-content-between">
                        <li>
                          <span class="list">Listed on : </span>
                          <span class="date">{{ record.Date }}</span>
                        </li>
                        <li>
                          <span class="category list">Category : </span>
                          <span class="category-value date">{{
                            record.Category
                          }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /Buy List -->

              <!-- Pagination -->
              <div class="grid-pagination">
                <ul class="pagination justify-content-center">
                  <li class="page-item prev">
                    <a class="page-link" href="javascript:void(0);"><i class="fa-solid fa-arrow-left"></i> Prev</a>
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
                    <a class="page-link" href="javascript:void(0);">Next <i class="fa-solid fa-arrow-right"></i></a>
                  </li>
                </ul>
              </div>
              <!-- /Pagination -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <layouts-footer></layouts-footer>
</template>
<script>
import Buy_Property_List_Sidebar from "@/assets/json/buy-property-list-sidebar.json";
export default {
  data() {
    return {
      Buy_Property_List_Sidebar: Buy_Property_List_Sidebar,
      title: "Buy Property List With Sidebar",
      text: "Home",
      text1: "Buy Property List With Sidebar",
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
