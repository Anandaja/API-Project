<template>
  <layouts-header></layouts-header>
  <page-header :title="title" :text="text" :text1="text1" />
  <div class="listing-section">
    <div class="container">
      <select-header></select-header>
      <div class="row">
        <div class="col-lg-12">
          <!-- Agency List -->
          <div
            class="agent-list agency"
            v-for="record in Agency_List"
            :key="record.id"
          >
            <div class="agent-img">
              <router-link to="/agency/agency-details" class="property-img">
                <img
                  class="img-fluid"
                  alt="Property Image"
                  :src="require(`@/assets/img/property/${record.Image}`)"
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
                      >{{ record.ratingeviews }}
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
          <!-- /Agency List -->
        </div>
      </div>
    </div>
  </div>
  <layouts-footer></layouts-footer>
</template>
<script>
import Agency_List from "@/assets/json/agency-list.json";
export default {
  data() {
    return {
      Agency_List: Agency_List,
      title: "Agency List Without Sidebar",
      text: "Home",
      text1: "Agency List Without Sidebar",
    };
  },
};
</script>
