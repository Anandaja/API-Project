<template>
  <layouts-header></layouts-header>
  <page-header :title="title" :text="text" :text1="text1" />
  <section class="feature-property-sec for-rent bg-white listing-section">
    <div class="container">
      <!-- Sort Result -->
      <buy-list-header></buy-list-header>
      <!-- /Sort Result -->

      <div class="row justify-content-center buy-list">
        <!-- Buy List -->
        <div
          class="col-lg-12"
          v-for="record in Buy_Property_List"
          :key="record.id"
        >
          <div class="product-custom">
            <div class="profile-widget rent-list-view">
              <div class="doc-img">
                <router-link to="/buy/buy-details" class="property-img">
                  <img
                    class="img-fluid"
                    alt="Property Image"
                    :src="require(`@/assets/img/rent/${record.RentImage}`)"
                  />
                </router-link>
                <div class="featured">
                  <span>Featured</span>
                </div>
                <div :class="record.Class">
                  <span>{{ record.New }}</span>
                </div>
                <a href="javascript:void(0)">
                  <div :class="record.FavClass">
                    <span><i class="fa-regular fa-heart"></i></span>
                  </div>
                </a>
                <div class="user-avatar">
                  <img
                    :src="
                      require(`@/assets/img/profiles/${record.AvatarImage}`)
                    "
                    alt="User"
                  />
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
                        <router-link to="/buy/buy-details" tabindex="-1">{{
                          record.Topic
                        }}</router-link>
                      </h3>
                      <div class="product-amount">
                        <h5>
                          <span>{{ record.Amount }} </span>
                        </h5>
                      </div>
                    </div>
                    <p><i class="feather-map-pin"></i> {{ record.Location }}</p>
                  </div>
                </div>
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
      </div>
    </div>
  </section>

  <layouts-footer></layouts-footer>
</template>

<script>
import Buy_Property_List from "@/assets/json/buy-property-list.json";
export default {
  data() {
    return {
      Buy_Property_List: Buy_Property_List,
      title: "Buy Property List Without Sidebar",
      text: "Home",
      text1: "Buy Property List Without Sidebar",
    };
  },
};
</script>
