<template>
  <layouts-header></layouts-header>
  <page-header :title="title" :text="text" :text1="text1" />
  <div class="content">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 theiaStickySidebar">
          <div class="stickysidebar">
            <!-- Sidebar -->
            <select-sidebar></select-sidebar>
            <!-- /Sidebar -->
          </div>
        </div>

        <div class="col-lg-9">
          <div class="row">
            <!-- Agent -->
            <div class="col-xl-4 col-lg-6 col-md-6 d-flex" v-for="record in Agency_Grid" :key="record.id">
              <div class="agent-card agency card flex-fill">
                <div class="agent-img">
                  <router-link to="/agency/agency-details" class="property-img">
                    <img class="img-fluid" alt="Property Image"
                      :src="require(`@/assets/img/property/${record.Image}`)" />
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
                      <span>{{ record.Star }}</span>{{ record.Reviews }}
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
            <!-- /Agent -->

            <!-- Pagination -->
            <div class="col-lg-12">
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
            </div>
            <!-- /Pagination -->
          </div>
        </div>
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
      SelectEstate: ["Select", "Luxurios Estate", "Green Reality"],
      SelectTexas: ["Select", "Texas", "New York"],
      SelOakley: ["Select", "Oakley", "Park Ave"],
      SelectVilla: ["Select", "Villa", "Apartment"],
      title: "Agency Grid With Sidebar",
      text: "Home",
      text1: "Agency Grid With Sidebar",
    };
  },
};
</script>
