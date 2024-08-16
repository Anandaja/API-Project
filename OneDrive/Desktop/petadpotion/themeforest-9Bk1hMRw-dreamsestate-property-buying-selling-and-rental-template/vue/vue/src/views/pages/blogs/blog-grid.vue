<template>
  <layouts-header></layouts-header>
  <page-header :title="title" :text="text" :text1="text1" />
  <div class="section blog-section">
    <div class="container">
      <div class="row">
        <div
          class="col-xl-4 col-lg-6 col-md-6"
          v-for="record in Blog_Grid"
          :key="record.id"
        >
          <!-- Blog -->
          <div class="blog-card" data-aos="fade-down" data-aos-duration="2000">
            <div class="blog-img">
              <router-link to="/blogs/blog-details"
                ><img
                  :src="require(`@/assets/img/blog/${record.LocationImage}`)"
                  alt="Blog Image"
              /></router-link>
            </div>
            <div class="blog-content">
              <div class="blog-property">
                <span>{{ record.Type }}</span>
              </div>
              <div class="blog-title">
                <h3>
                  <router-link to="/blogs/blog-details">{{
                    record.Title
                  }}</router-link>
                </h3>
                <p>
                  {{ record.Topic }}
                </p>
              </div>
              <ul
                class="property-category d-flex justify-content-between align-items-center"
              >
                <li class="user-info">
                  <a href="javascript:void(0);"
                    ><img
                      :src="require(`@/assets/img/profiles/${record.Image}`)"
                      class="img-fluid avatar"
                      alt="User"
                  /></a>
                  <div class="user-name">
                    <a href="javascript:void(0);">{{ record.Name }}</a>
                    <p>{{ record.Date }}</p>
                  </div>
                </li>
                <li>
                  <router-link to="/blogs/blog-details"
                    ><span><i class="fa-solid fa-arrow-right"></i></span
                  ></router-link>
                </li>
              </ul>
            </div>
          </div>
          <!-- /Blog -->
        </div>
      </div>
    </div>
  </div>

  <layouts-footer></layouts-footer>
</template>
<script>
import Blog_Grid from "@/assets/json/blog-grid.json";
export default {
  data() {
    return {
      Blog_Grid: Blog_Grid,
      title: "Blog Grid",
      text: "Home",
      text1: "Blog Grid",
    };
  },
};
</script>
