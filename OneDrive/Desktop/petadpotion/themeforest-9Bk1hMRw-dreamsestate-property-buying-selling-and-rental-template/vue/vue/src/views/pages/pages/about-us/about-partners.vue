<template>
  <section class="section partners-sec">
    <div class="container">
      <div class="section-heading text-center">
        <h2>Hundreds of Partners Around the World</h2>
        <div class="sec-line">
          <span class="sec-line1"></span>
          <span class="sec-line2"></span>
        </div>
        <p>
          Every day, we build trust through communication, transparency, and
          results.
        </p>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="partners-slider owl-carousel">
            <Carousel
              :wrap-around="true"
              :settings="settings"
              :breakpoints="breakpoints"
            >
              <Slide v-for="record in About_Us" :key="record.id">
                <div class="partner-icon">
                  <img
                    :src="require(`@/assets/img/icons/${record.Image}`)"
                    alt="Partners"
                  />
                </div>
              </Slide>
              <template #addons>
              </template>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import About_Us from "@/assets/json/about-us.json";
export default {
  data() {
    return {
      About_Us: About_Us,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        575: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        767: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        991: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 6,
          snapAlign: "start",
        },
      },
    };
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>
