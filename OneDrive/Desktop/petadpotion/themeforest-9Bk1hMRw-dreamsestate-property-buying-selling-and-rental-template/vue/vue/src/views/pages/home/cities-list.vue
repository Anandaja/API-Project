<template>
    <!-- Cities List -->
    <section class="cities-list-sec">
        <div class="container">
            <div class="section-heading">
                <h2>Cities With Listing</h2>
                <div class="sec-line">
                    <span class="sec-line1"></span>
                    <span class="sec-line2"></span>
                </div>
                <p>Destinations we love the most</p>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="city-card-slider owl-carousel">
                        <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
                            <Slide v-for="item in CitiesList" :key="item.id">
                                <div class="city-first-card">
                                    <div class="city-list">
                                        <div class="city-img">
                                            <img :src="require(`@/assets/img/city/${item.Image}`)" alt="City">
                                        </div>
                                        <div class="city-name text-start">
                                            <h5>{{item.City}}</h5>
                                            <p>{{item.Property}}</p>
                                        </div>
                                        <div class="arrow-overlay">
                                            <router-link to="/rent/rent-property-grid"><i class='fa-solid fa-arrow-right'></i></router-link>
                                        </div>
                                    </div>
                                    <div class="city-list">
                                        <div class="city-img">
                                            <img :src="require(`@/assets/img/city/${item.Image1}`)" alt="City">
                                        </div>
                                        <div class="city-name text-start">
                                            <h5>{{item.City1}}</h5>
                                            <p>{{item.Property1}}</p>
                                        </div>
                                        <div class="arrow-overlay">
                                            <router-link to="/rent/rent-property-grid"><i class='fa-solid fa-arrow-right'></i></router-link>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                            <template #addons>
                                <Pagination />
                            </template>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Cities List -->
</template>

<script>
import { Carousel, Pagination, Slide } from "vue3-carousel";
import CitiesList from '@/assets/json/index-cities-list.json'
import "vue3-carousel/dist/carousel.css";

export default {
    data() {
        return {
            CitiesList: CitiesList,
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
                    itemsToShow: 3,
                    snapAlign: "start",
                },
            },
        }
    },
    components: {
        Carousel,
        Slide,
        Pagination
    },
}
</script>