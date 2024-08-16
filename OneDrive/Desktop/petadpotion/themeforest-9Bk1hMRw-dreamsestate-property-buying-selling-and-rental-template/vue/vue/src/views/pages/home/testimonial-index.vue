<template>
    <!-- Testimonial -->
    <section class="testimonial-sec">
        <div class="container">
            <div class="section-heading">
                <h2>Testimonials</h2>
                <div class="sec-line">
                    <span class="sec-line1"></span>
                    <span class="sec-line2"></span>
                </div>
                <p>What our happy client says</p>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="testimonial-slider owl-carousel">
                        <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
                            <Slide v-for="item in Testimonial" :key="item.id">
                                <div class="testimonial-card">
                                    <div class="user-icon">
                                        <a href="javascript:void(0);"><img :src="require(`@/assets/img/profiles/${item.Image}`)"
                                                alt="User"></a>
                                    </div>
                                    <p>Omnis velit quia. Perspiciatis et cupiditate. Voluptatum beatae asperiores dolor magnam
                                        fuga. Sed fuga est harum quo nesciunt sint. Optio veniam...Omnis velit quia.
                                        Perspiciatis et cupiditate. Voluptatum beatae asperiores dolor magnam fuga. Sed fuga est
                                        harum quo nesciunt sint. Optio veniam...</p>
                                    <h4><a href="javascript:void(0);">{{item.Name}}</a></h4>
                                    <div class="rating">
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
                                        <span><i class="fa-solid fa-star"></i></span>
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
    <!-- /Testimonial -->

    <!-- Pricing -->
    <section class="price-section">
        <div class="container">
            <div class="pricing-tab">
                <div class="section-heading">
                    <h2>Pricing & Subscriptions</h2>
                    <div class="sec-line">
                        <span class="sec-line1"></span>
                        <span class="sec-line2"></span>
                    </div>
                    <p>Checkout our package, choose your package wisely</p>
                </div>
                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#monthly-price" type="button" role="tab" aria-controls="monthly-price"
                            aria-selected="true">Monthly</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#yearly-price" type="button" role="tab" aria-controls="yearly-price"
                            aria-selected="false">Yearly</button>
                    </li>
                </ul>
            </div>

            <div class="tab-content" id="pills-tabContent">

                <!-- Monthly Price -->
                <div class="tab-pane fade active show" id="monthly-price" role="tabpanel"
                    aria-labelledby="pills-profile-tab">
                    <div class="row justify-content-center">

                        <!-- Price Item -->
                        <div class="col-lg-4 col-md-6">
                            <div class="price-card aos" data-aos="flip-right" data-aos-easing="ease-out-cubic">
                                <div class="price-title">
                                    <h3>Standard</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
                                        nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                                <div class="price-features">
                                    <h5>Key Features</h5>
                                    <ul>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>10 Listing Per Login
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>100+ Users</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Enquiry On Listing
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>24 Hrs Support</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Custom Review</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Impact Reporting</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Onboarding & Account
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>API Access</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Transaction Tracking
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Branding</li>
                                    </ul>
                                </div>
                                <div class="price-btn">
                                    <router-link to="/" class="btn-primary">Get Quote</router-link>
                                </div>
                            </div>
                        </div>
                        <!-- /Price Item -->

                        <!-- Price Item -->
                        <div class="col-lg-4 col-md-6">
                            <div class="price-card" data-aos="flip-right" data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000">
                                <div class="price-sticker">
                                    <img src="@/assets/img/icons/pricing-icon.svg" alt="price-sticker">
                                </div>
                                <div class="price-title">
                                    <h3>Professional</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
                                        nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                                <div class="price-features professional">
                                    <h5>Key Features</h5>
                                    <ul>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>20 Listing Per Login
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>100+ Users</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Enquiry On Listing
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>24 Hrs Support</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Custom Review</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Impact Reporting</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Onboarding & Account
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>API Access</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Transaction Tracking
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Branding</li>
                                    </ul>
                                </div>
                                <div class="price-btn">
                                    <router-link to="/" class="btn-primary">Get Quote</router-link>
                                </div>
                            </div>
                        </div>
                        <!-- /Price Item -->

                        <!-- Price Item -->
                        <div class="col-lg-4 col-md-6">
                            <div class="price-card" data-aos="flip-right" data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <div class="price-title">
                                    <h3>Enterprise</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
                                        nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                                <div class="price-features enterprise">
                                    <h5>Key Features</h5>
                                    <ul>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>30 Listing Per Login
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>100+ Users</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Enquiry On Listing
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>24 Hrs Support</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Custom Review</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Impact Reporting</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Onboarding & Account
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>API Access</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Transaction Tracking
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Branding</li>
                                    </ul>
                                </div>
                                <div class="price-btn">
                                    <router-link to="/" class="btn-primary">Get Quote</router-link>
                                </div>
                            </div>
                        </div>
                        <!-- /Price Item -->

                    </div>
                </div>
                <!-- /Monthly Price -->

                <!-- Yearly Price -->
                <div class="tab-pane fade" id="yearly-price" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div class="row justify-content-center">

                        <!-- Price Item -->
                        <div class="col-lg-4 col-md-6">
                            <div class="price-card">
                                <div class="price-title">
                                    <h3>Standard</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
                                        nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                                <div class="price-features">
                                    <h5>Key Features</h5>
                                    <ul>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>50 Listing per login
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>150+ Users</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Enquiry on listing
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>24 hrs Support</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Custom Review</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Impact Reporting</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Onboarding & Account
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>API Access</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Transaction tracking
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Branding</li>
                                    </ul>
                                </div>
                                <div class="price-btn">
                                    <router-link to="/" class="btn-primary">Get Quote</router-link>
                                </div>
                            </div>
                        </div>

                        <!-- Price Item -->
                        <div class="col-lg-4 col-md-6">
                            <div class="price-card">
                                <div class="price-title">
                                    <h3>Professional</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
                                        nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                                <div class="price-features professional">
                                    <h5>Key Features</h5>
                                    <ul>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>80 Listing per login
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>200+ Users</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Enquiry on listing
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>24 hrs Support</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Custom Review</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Impact Reporting</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Onboarding & Account
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>API Access</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Transaction tracking
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Branding</li>
                                    </ul>
                                </div>
                                <div class="price-btn">
                                    <router-link to="/" class="btn-primary">Get Quote</router-link>
                                </div>
                            </div>
                        </div>

                        <!-- Price Item -->
                        <div class="col-lg-4 col-md-6">
                            <div class="price-card">
                                <div class="price-title">
                                    <h3>Enterprise</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
                                        nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                                <div class="price-features enterprise">
                                    <h5>Key Features</h5>
                                    <ul>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>70 Listing per login
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>300+ Users</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Enquiry on listing
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>24 hrs Support</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Custom Review</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Impact Reporting</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Onboarding & Account
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>API Access</li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Transaction tracking
                                        </li>
                                        <li><span><i class="fa-regular fa-square-check"></i></span>Branding</li>
                                    </ul>
                                </div>
                                <div class="price-btn">
                                    <router-link to="/" class="btn-primary">Get Quote</router-link>
                                </div>
                            </div>
                        </div>
                        <!-- /Price Item -->

                    </div>
                </div>
                <!-- /Yearly Price -->

            </div>
        </div>
        <div class="bg-imgs">
            <img src="@/assets/img/bg/price-bg.png" class="bg-05" alt="icon">
        </div>
    </section>
    <!-- /Pricing -->
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import Testimonial from '@/assets/json/index-testimonial.json'
import "vue3-carousel/dist/carousel.css";

export default {
    data() {
        return {
            Testimonial: Testimonial,
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
        Navigation,
    },
}
</script>