<template>
  <layouts-header></layouts-header>
  <page-header :title="title" :text="text" :text1="text1" />
  <div class="listing-section">
    <div class="container">
      <!-- show Result -->
      <agent-select-header></agent-select-header>
      <!-- /Show Result -->

      <div class="row">
        <!-- Agent -->
        <div
          class="col-lg-12 d-flex"
          v-for="record in Agent_List"
          :key="record.id"
        >
          <div class="agent-list flex-fill">
            <div class="agent-img">
              <router-link to="/agent/agent-details" class="property-img">
                <img
                  class="img-fluid"
                  alt="Property Image"
                  :src="require(`@/assets/img/agents/${record.Image}`)"
                />
              </router-link>
            </div>
            <div class="agent-content">
              <div class="agent-info">
                <div class="agent-rating">
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
                  <h5><i class="bx bx-user-voice"></i>{{ record.Role }}</h5>
                </div>
                <div class="list-feature">
                  <span>{{ record.Listing }}</span>
                </div>
              </div>
              <div>
                <p>
                  We were referred to Eric through our close friends and are so
                  happy with the service he provided! This was our first house,
                  so we had a lot of questions and he was happy to answer them
                  all!
                </p>
                <ul>
                  <li>
                    <a href="javascript:void(0);"
                      ><i class="fa-brands fa-facebook-f"></i
                    ></a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      ><i class="fa-brands fa-instagram"></i
                    ></a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      ><i class="fa-brands fa-behance"></i
                    ></a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      ><i class="fa-brands fa-twitter"></i
                    ></a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      ><i class="fa-brands fa-pinterest-p"></i
                    ></a>
                  </li>
                  <li>
                    <a href="javascript:void(0);"
                      ><i class="fa-brands fa-linkedin"></i
                    ></a>
                  </li>
                </ul>
              </div>
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
import Agent_List from "@/assets/json/agent-list.json";
export default {
  data() {
    return {
      Agent_List: Agent_List,
      title: "Agent Grid Without Sidebar",
      text: "Home",
      text1: "Agent Grid Without Sidebar",
    };
  },
};
</script>
