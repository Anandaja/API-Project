<template>
  <layouts-header></layouts-header>
  <page-header :title="title" :text="text" :text1="text1" />
  <div class="listing-section">
    <div class="container">
      <!-- Show Result -->
      <agent-select-header></agent-select-header>
      <!-- /Show Result -->

      <div class="row">
        <!-- Agent -->
        <div
          class="col-lg-4 col-md-6 d-flex"
          v-for="record in Agent_Grid"
          :key="record.id"
        >
          <div class="agent-card card flex-fill">
            <div class="agent-img">
              <router-link to="/agent/agent-details" class="property-img">
                <img
                  class="img-fluid"
                  alt="Property Image"
                  :src="require(`@/assets/img/agents/${record.Image}`)"
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
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                </span>
                <p class="rating-review">
                  <span>{{ record.Star }}</span
                  >{{ record.Reviews }}
                </p>
              </div>
              <h6>
                <router-link to="/agent/agent-details">{{
                  record.Name
                }}</router-link>
              </h6>
              <p><i class="bx bx-user-voice"></i>{{ record.Role }}</p>
            </div>
          </div>
        </div>
        <!-- /Agent -->
      </div>
    </div>
  </div>

  <layouts-footer></layouts-footer>
</template>
<script>
import Agent_Grid from "@/assets/json/agent-grid.json";
export default {
  data() {
    return {
      Agent_Grid: Agent_Grid,
      title: "Agent Grid Without Sidebar",
      text: "Home",
      text1: "Agent Grid Without Sidebar",
    };
  },
};
</script>
