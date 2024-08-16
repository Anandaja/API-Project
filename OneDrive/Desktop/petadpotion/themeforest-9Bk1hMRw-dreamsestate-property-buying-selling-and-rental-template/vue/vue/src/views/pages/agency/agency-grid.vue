<template>
  <layouts-header></layouts-header>
  <page-header :title="title" :text="text" :text1="text1" />
  <div class="listing-section">
    <div class="container">
      <!-- Show Result -->
      <select-header></select-header>
      <!-- Show Result -->

      <div class="row">
        <!-- Agency -->
        <div
          class="col-lg-4 col-md-6 d-flex"
          v-for="record in Agency_Grid"
          :key="record.id"
        >
          <div class="agent-card agency card flex-fill">
            <div class="agent-img">
              <router-link to="/agency/agency-details">
                <img
                  class="img-fluid"
                  alt="Property Image"
                  :src="require(`@/assets/img/property/${record.Image}`)"
                />
              </router-link>
              <div class="list-feature">
                <span>{{ record.Listing }}</span>
              </div>
            </div>
            <div class="agent-content">
              <div class="rating">
                <span class="rating-count">
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i :class="record.Class"></i>
                  <i :class="record.Class1"></i>
                </span>
                <p class="rating-review">
                  <span>{{ record.Star }}</span
                  >{{ record.Reviews }}
                </p>
              </div>
              <div class="agency-user">
                <div class="agency-user-info">
                  <h6>
                    <router-link to="/agency/agency-details">{{
                      record.Name
                    }}</router-link>
                  </h6>
                  <p><i class="bx bx-map"></i>{{ record.Location }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Agency -->
      </div>
    </div>
  </div>
  <layouts-footer></layouts-footer>
</template>
<script>
import Agency_Grid from "@/assets/json/agency-grid.json";
export default {
  data() {
    return {
      Agency_Grid: Agency_Grid,
      title: "Agency Grid Without Sidebar",
      text: "Home",
      text1: "Agency Grid Without Sidebar",
    };
  },
};
</script>
