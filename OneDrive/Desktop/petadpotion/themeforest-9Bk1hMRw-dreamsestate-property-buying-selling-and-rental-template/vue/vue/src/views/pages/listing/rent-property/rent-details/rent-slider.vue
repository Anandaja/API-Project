<template>
  <div class="buy-details-col">
    <div class="rental-card">
      <Carousel
        class="slider rental-slider"
        :items-to-show="1"
        :wrap-around="false"
        v-model="currentSlide"
      >
        <Slide
          v-for="(image, index) in images"
          :key="index"
          class="product-img"
        >
          <div class="carousel__item">
            <img
              :src="require(`@/assets/img/rent/${image.src}`)"
              :alt="image.alt"
            />
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
      <Carousel
        id="thumbnails"
        :items-to-show="4"
        :wrap-around="true"
        v-model="currentSlide"
        ref="carousel"
      >
        <Slide v-for="(image, index) in imagesOne" :key="index">
          <div class="slider slider-nav-thumbnails" @click="slideTo(index)">
            <img
              :src="require(`@/assets/img/rent/${image.src}`)"
              :alt="image.alt"
            />
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      images: [
        { src: "rent-detail-01.jpg", alt: "Slider" },
        { src: "rent-detail-02.jpg", alt: "Slider" },
        { src: "rent-detail-03.jpg", alt: "Slider" },
        { src: "rent-detail-04.jpg", alt: "Slider" },
        { src: "rent-detail-05.jpg", alt: "Slider" },
      ],
      imagesOne: [
        { src: "rent-detail-01.jpg", alt: "product image" },
        { src: "rent-detail-02.jpg", alt: "product image" },
        { src: "rent-detail-03.jpg", alt: "product image" },
        { src: "rent-detail-04.jpg", alt: "product image" },
        { src: "rent-detail-05.jpg", alt: "product image" },
      ],
      currentSlide: 0,
    };
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
  },
});
</script>
