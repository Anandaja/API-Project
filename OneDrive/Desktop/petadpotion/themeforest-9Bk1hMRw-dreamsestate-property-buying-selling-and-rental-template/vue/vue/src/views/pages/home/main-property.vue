<template>
    <!-- Couter -->
    <section class="counter-sec">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
                    <div class="counter-box flex-fill" data-aos="fade-down" data-aos-duration="2000">
                        <div class="counter-icon">
                            <img src="@/assets/img/icons/counter-icon-1.svg" alt="icon">
                        </div>
                        <div class="counter-value">
                            <h3 class="dash-count"><span class="counter-up">
                                <vue3-autocounter
                                    ref="counter"
                                    :startAmount="1"
                                    :delay="3"
                                    :endAmount="50"
                                    :duration="5"
                                    separator=","
                                    :autoinit="true" />
                                </span>K</h3>
                            <h5>Listings Added </h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
                    <div class="counter-box flex-fill" data-aos="fade-down" data-aos-duration="2000">
                        <div class="counter-icon">
                            <img src="@/assets/img/icons/counter-icon-2.svg" alt="icon">
                        </div>
                        <div class="counter-value">
                            <h3 class="dash-count"><span class="counter-up">                    
                                <vue3-autocounter
                                    ref="counter"
                                    :startAmount="100"
                                    :delay="3"
                                    :endAmount="3000"
                                    :duration="5"
                                    separator=","
                                    :autoinit="true" />
                                </span>+</h3>
                            <h5>Agents Listed </h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
                    <div class="counter-box flex-fill" data-aos="fade-down" data-aos-duration="2000">
                        <div class="counter-icon">
                            <img src="@/assets/img/icons/counter-icon-3.svg" alt="icon">
                        </div>
                        <div class="counter-value">
                            <h3 class="dash-count"><span class="counter-up">
                                <vue3-autocounter
                                    ref="counter"
                                    :startAmount="100"
                                    :delay="3"
                                    :endAmount="2000"
                                    :duration="5"
                                    separator=","
                                    :autoinit="true" />
                            </span>+</h3>
                            <h5>Sales Completed </h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
                    <div class="counter-box flex-fill" data-aos="fade-down" data-aos-duration="2000">
                        <div class="counter-icon">
                            <img src="@/assets/img/icons/counter-icon-4.svg" alt="icon">
                        </div>
                        <div class="counter-value">
                            <h3 class="dash-count"><span class="counter-up">
                                <vue3-autocounter
                                    ref="counter"
                                    :startAmount="100"
                                    :delay="3"
                                    :endAmount="5000"
                                    :duration="5"
                                    separator=","
                                    :autoinit="true" />
                            </span>+</h3>
                            <h5>Users</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Couter -->

    <!-- Main Property -->
    <section class="main-property-sec">
        <div class="container">
            <div class="main-property-details">
                <div class="row justify-content-center">

                    <!-- Buy Property -->
                    <div class="col-lg-4 col-md-6" data-aos="fade-down" data-aos-duration="2000">
                        <div class="single-property-card">
                            <div class="img-card">
                                <router-link to="/buy/buy-property-grid"><img src="@/assets/img/city/property-img-1.jpg"
                                        alt="Property Image"></router-link>
                            </div>
                            <div class="buy-property">
                                <h4><router-link to="/buy/buy-property-grid">Buy a Property</router-link></h4>
                                <router-link to="/buy/buy-property-grid" class="arrow buy-arrow"><i
                                        class='fa-solid fa-arrow-right'></i></router-link>
                            </div>
                        </div>
                    </div>
                    <!-- /Buy Property -->

                    <!-- Sell Property -->
                    <div class="col-lg-4 col-md-6" data-aos="fade-down" data-aos-duration="2000">
                        <div class="single-property-card">
                            <div class="img-card">
                                <router-link to="/rent/rent-property-grid"><img src="@/assets/img/city/property-img-2.jpg"
                                        alt="Property Image"></router-link>
                            </div>
                            <div class="buy-property">
                                <h4><router-link to="/rent/rent-property-grid">Sell a Property</router-link></h4>
                                <router-link to="/rent/rent-property-grid" class="arrow sell-arrow"><i
                                        class='fa-solid fa-arrow-right'></i></router-link>
                            </div>
                        </div>
                    </div>
                    <!-- /Sell Property -->

                    <!-- Rent Property -->
                    <div class="col-lg-4 col-md-6" data-aos="fade-down" data-aos-duration="2000">
                        <div class="single-property-card">
                            <div class="img-card">
                                <router-link to="/rent/rent-property-grid"><img src="@/assets/img/city/property-img-3.jpg"
                                        alt="Property Image"></router-link>
                            </div>
                            <div class="buy-property">
                                <h4><router-link to="/rent/rent-property-grid">Rent a Property</router-link></h4>
                                <router-link to="/rent/rent-property-grid" class="arrow rent-arrow"><i
                                        class='fa-solid fa-arrow-right'></i></router-link>
                            </div>
                        </div>
                    </div>
                    <!-- /Rent Property -->

                </div>


                <div class="bg-imgs">
                    <img src="@/assets/img/bg/prop-bg.png" class="bg-10" alt="icon">
                </div>
            </div>

            <!-- Partners -->
            <div class="partners-sec">
                <div class="section-heading text-center">
                    <h2>Hundreds of Partners Around the World</h2>
                    <div class="sec-line">
                        <span class="sec-line1"></span>
                        <span class="sec-line2"></span>
                    </div>
                    <p> Every day, we build trust through communication, transparency, and results.</p>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="partners-slider owl-carousel">
                            <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
                            <Slide v-for="item in MainProperty" :key="item.id">
                                <div class="partner-icon">
                                    <img :src="require(`@/assets/img/icons/${item.Image}`)" alt="Partners">
                                </div>
                            </Slide>
                        </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Partners -->

        </div>
        <div class="bg-imgs">
            <img src="@/assets/img/icons/blue-circle.svg" class="bg-08" alt="icon">
        </div>
    </section>
    <!-- /Main Property -->
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import MainProperty from '@/assets/json/index-main-property.json'
import "vue3-carousel/dist/carousel.css";

export default {
    data() {
        return {
            MainProperty: MainProperty,
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
                    itemsToShow: 3,
                    snapAlign: "center",
                },
                991:
                {
                    itemsToShow: 4,
                    snapAlign: "center",
                },
                1024:
                {
                    itemsToShow: 6,
                    snapAlign: "start",
                },
            },
        }
    },
    components: {
        Carousel,
        Slide,
    },
}
</script>