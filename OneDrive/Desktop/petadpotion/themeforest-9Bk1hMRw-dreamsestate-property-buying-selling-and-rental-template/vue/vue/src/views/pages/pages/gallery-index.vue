<template>
  <layouts-header></layouts-header>
  <page-header :title="title" :text="text" :text1="text1" />
  <div class="gallery-section">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-sm-12 aos"
          data-aos="fade-down"
          v-for="(image, index) in galleryImages"
          :key="index"
          @click="() => show(index)"
        >
          <div class="gallery-widget">
            <a href="javascript:;" data-fancybox="gallery2">
              <img
                class="img-fluid"
                alt="Image"
                :src="require(`@/assets/img/gallery/${image.src}`)"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <vue-easy-lightbox
    :visible="visible"
    :index="index"
    :imgs="
      galleryImages.map((image) => ({
        src: require(`@/assets/img/gallery/${image.src}`),
      }))
    "
    @hide="visible = false"
    @on-prev="handlePrev"
    @on-next="handleNext"
  >
  </vue-easy-lightbox>

  <layouts-footer></layouts-footer>
</template>
<script>
import VueEasyLightbox from "vue-easy-lightbox";
export default {
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      title: "Gallery",
      text: "Home",
      text1: "Gallery",
      visible: false,
      index: 0,
      galleryImages: [
        {
          src: "gallery-thum-01.jpg",
        },
        {
          src: "gallery-thum-02.jpg",
        },
        {
          src: "gallery-thum-03.jpg",
        },
        {
          src: "gallery-thum-04.jpg",
        },
        {
          src: "gallery-thum-05.jpg",
        },
        {
          src: "gallery-thum-06.jpg",
        },
        {
          src: "gallery-thum-07.jpg",
        },
        {
          src: "gallery-thum-08.jpg",
        },
        {
          src: "gallery-thum-09.jpg",
        },
        {
          src: "gallery-thum-10.jpg",
        },
        {
          src: "gallery-thum-11.jpg",
        },
        {
          src: "gallery-thum-12.jpg",
        },
        {
          src: "gallery-thum-13.jpg",
        },
        {
          src: "gallery-thum-14.jpg",
        },
        {
          src: "gallery-thum-15.jpg",
        },
        {
          src: "gallery-thum-16.jpg",
        },
        {
          src: "gallery-thum-17.jpg",
        },
        {
          src: "gallery-thum-18.jpg",
        },
      ],
    };
  },
  methods: {
    show(index) {
      this.index = index;
      this.visible = true;
    },
    handlePrev() {},
    handleNext() {},
  },
};
</script>
