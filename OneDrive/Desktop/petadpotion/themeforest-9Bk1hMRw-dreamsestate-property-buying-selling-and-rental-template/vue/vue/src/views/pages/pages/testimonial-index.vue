<template>
  <layouts-header></layouts-header>
  <page-header :title="title" :text="text" :text1="text1" />
  <div class="listing-section">
    <div class="container">
      <div class="testimonial-group m-0">
        <div class="row">
          <!-- Col -->
          <div
            class="col-lg-4 col-12 d-flex aos"
            data-aos="fade-down"
            data-aos-duration="1200"
            data-aos-delay="100"
            v-for="record in Testimonial"
            :key="record.id"
          >
            <div class="card testimonial-card flex-fill">
              <div class="user-icon">
                <a href="javascript:void(0);"
                  ><img
                    :src="require(`@/assets/img/profiles/${record.Image}`)"
                    alt="User"
                /></a>
              </div>
              <p>
                Omnis velit quia. Perspiciatis et cupiditate. Voluptatum beatae
                asperiores dolor magnam fuga. Sed fuga est harum quo nesciunt
                sint. Optio veniam...Omnis velit quia. Perspiciatis et
                cupiditate. Voluptatum beatae asperiores dolor magnam fuga. Sed
                fuga est harum quo nesciunt sint. Optio veniam...
              </p>
              <h4>
                <a href="javascript:void(0);">{{ record.Name }}</a>
              </h4>
              <div class="rating">
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
              </div>
              <div class="quotes-head"></div>
            </div>
          </div>
          <!-- /Col -->
        </div>
      </div>
    </div>
  </div>

  <layouts-footer></layouts-footer>
</template>
<script>
import Testimonial from "@/assets/json/testimonial.json";
export default {
  data() {
    return {
      Testimonial: Testimonial,
      title: "Contact Us",
      text: "Home",
      text1: "Contact Us",
    };
  },
};
</script>
