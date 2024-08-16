<template>
    <!-- Property Type -->
    <section class="property-type-sec">
        <div class="section-shape-imgs">
            <img src="@/assets/img/shapes/property-sec-bg-1.png" class="rectangle-left" alt="icon">
            <img src="@/assets/img/shapes/property-sec-bg-2.png" class="rectangle-right" alt="icon">
            <img src="@/assets/img/icons/red-circle.svg" class="bg-09" alt="Image">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="section-heading" data-aos="fade-down" data-aos-duration="1000">
                        <h2>Explore by Property Type</h2>
                        <div class="sec-line">
                            <span class="sec-line1"></span>
                            <span class="sec-line2"></span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed </p>
                    </div>
                    <div class="owl-navigation">
                        <div class="owl-nav mynav1 nav-control"></div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="property-type-slider owl-carousel">
                        <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
                            <Slide v-for="item in PropertyType" :key="item.id">
                                <div class="property-card">
                                    <div class="property-img">
                                        <img :src="require(`@/assets/img/icons/${item.Icon}`)" alt="icon">
                                    </div>
                                    <div class="property-name">
                                        <h4>{{item.Title}}</h4>
                                        <p>{{item.Property}}</p>
                                    </div>
                                </div>
                            </Slide>
                            <template #addons>
                                <Navigation />
                            </template>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Property Type -->
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import PropertyType from '@/assets/json/index-property-type.json'
import "vue3-carousel/dist/carousel.css";

export default {
    data() {
        return {
            PropertyType: PropertyType,
            settings: {
                itemsToShow: 1,
                snapAlign: "center",
            },
            breakpoints: {
                575: 
                {
                    itemsToShow: 2,
                    snapAlign: "center",
                },
                767: 
                {
                    itemsToShow: 2,
                    snapAlign: "center",
                },
                991: 
                {
                    itemsToShow: 3,
                    snapAlign: "center",
                },
                1024: 
                {
                    itemsToShow: 4,
                    snapAlign: "start",
                },
            },
        }
    },
    components: {
        Carousel,
        Slide,
        Navigation,
    },
}
</script>