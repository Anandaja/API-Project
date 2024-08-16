<template>
  <layouts-header></layouts-header>
  <page-header :title="title" :text="text" :text1="text1" />
  <div class="listing-section">
    <div class="container">
      <!-- Sort Result -->
     <buy-grid-header></buy-grid-header>
      <!-- /Sort Result -->

      <div class="for-rent p-0">
        <div class="row">
          <!-- Buy grid -->
          <div
            class="col-lg-4 col-md-6"
            v-for="record in Buy_Property_Grid"
            :key="record.id"
          >
            <div class="product-custom">
              <div class="profile-widget">
                <div class="doc-img">
                  <router-link to="/buy/buy-details" class="property-img">
                    <img
                      class="img-fluid"
                      alt="Property Image"
                      :src="
                        require(`@/assets/img/product/${record.ProductImage}`)
                      "
                    />
                  </router-link>
                  <div class="product-amount">
                    <span>{{ record.Amount }}</span>
                  </div>
                  <div class="feature-rating">
                    <div>
                      <div class="featured">
                        <span>Featured</span>
                      </div>
                      <div :class="record.Class">
                        <span>{{ record.New }}</span>
                      </div>
                    </div>
                    <a href="javascript:void(0)">
                      <div :class="record.FavClass">
                        <span><i class="fa-regular fa-heart"></i></span>
                      </div>
                    </a>
                  </div>
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
                  <div class="rating">
                    <span class="rating-count">
                      <i class="fa-solid fa-star checked"></i>
                      <i class="fa-solid fa-star checked"></i>
                      <i :class="record.StarClass"></i>
                      <i :class="record.StarClass1"></i>
                      <i :class="record.StarClass2"></i>
                    </span>
                    <p class="rating-review">
                      <span>{{ record.Star }}</span
                      >{{ record.Reviews }}
                    </p>
                  </div>
                  <h3 class="title">
                    <router-link to="/buy/buy-details" tabindex="-1">{{
                      record.Title
                    }}</router-link>
                  </h3>
                  <p><i class="feather-map-pin"></i> {{ record.Location }}</p>
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
          <!-- /Buy grid -->
        </div>
      </div>
    </div>
  </div>
  <layouts-footer></layouts-footer>
</template>
<script>
import Buy_Property_Grid from "@/assets/json/buy-property.json";
export default {
  data() {
    return {
      Buy_Property_Grid: Buy_Property_Grid,
      title: "Buy Property Grid Without Sidebar",
      text: "Home",
      text1: "Buy Property Grid Without Sidebar",
    };
  },
};
</script>
