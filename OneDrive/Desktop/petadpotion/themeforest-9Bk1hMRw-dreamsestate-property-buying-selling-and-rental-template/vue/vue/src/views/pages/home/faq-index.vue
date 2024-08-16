<template>
    <!-- Faq -->
    <section class="faq-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="faq-img">
                        <img src="@/assets/img/faq-img.jpg" alt="icon">
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="section-heading" data-aos="fade-down" data-aos-duration="2000">
                        <h2>Frequently Asked Questions</h2>
                        <div class="sec-line">
                            <span class="sec-line1"></span>
                            <span class="sec-line2"></span>
                        </div>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                    </div>
                    <div class="faq-card" data-aos="fade-down" data-aos-duration="2000">
                        <h4 class="faq-title">
                            <a class="collapsed" data-bs-toggle="collapse" href="#faqone" aria-expanded="false">1. What
                                are the costs to buy a house?</a>
                        </h4>
                        <div id="faqone" class="card-collapse collapse">
                            <div class="faq-info">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                        </div>
                    </div>
                    <div class="faq-card" data-aos="fade-down" data-aos-duration="2000">
                        <h4 class="faq-title">
                            <a class="collapsed" data-bs-toggle="collapse" href="#faqtwo" aria-expanded="false">2. What
                                are the steps to sell a house?</a>
                        </h4>
                        <div id="faqtwo" class="card-collapse collapse">
                            <div class="faq-info">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                        </div>
                    </div>
                    <div class="faq-card" data-aos="fade-down" data-aos-duration="2000">
                        <h4 class="faq-title">
                            <a class="" data-bs-toggle="collapse" href="#faqthree" aria-expanded="false">3. Do you have
                                loan consultants?</a>
                        </h4>
                        <div id="faqthree" class="card-collapse collapse show">
                            <div class="faq-info">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                        </div>
                    </div>
                    <div class="faq-card" data-aos="fade-down" data-aos-duration="2000">
                        <h4 class="faq-title">
                            <a class="collapsed" data-bs-toggle="collapse" href="#faqfour" aria-expanded="false">4. When
                                will the project be completed?</a>
                        </h4>
                        <div id="faqfour" class="card-collapse collapse">
                            <div class="faq-info">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                        </div>
                    </div>
                    <div class="faq-card" data-aos="fade-down" data-aos-duration="2000">
                        <h4 class="faq-title">
                            <a class="collapsed" data-bs-toggle="collapse" href="#faqfive" aria-expanded="false">5.What
                                are the steps to rent a house?</a>
                        </h4>
                        <div id="faqfive" class="card-collapse collapse">
                            <div class="faq-info">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Faq -->

    <!-- Agent Register -->
    <section class="agent-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-8">
                    <div class="section-heading" data-aos="fade-down" data-aos-duration="2000">
                        <h2>Become a Real Estate Agent</h2>
                        <div class="sec-line">
                            <span class="sec-line1"></span>
                            <span class="sec-line2"></span>
                        </div>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="register-btn" data-aos="fade-down" data-aos-duration="2000">
                        <router-link to="/register" class="btn-primary">Register Now</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-imgs">
            <img src="@/assets/img/icons/blue-circle.svg" class="bg-06" alt="icon">
            <img src="@/assets/img/icons/red-circle.svg" class="bg-07" alt="icon">
        </div>
    </section>
    <!-- /Agent Register -->

    <!-- Latest Blog -->
    <section class="latest-blog-sec">
        <div class="container">
            <div class="row">
                <div class="col-md-8 mx-auto">
                    <div class="section-heading text-center">
                        <h2>Latest Blog</h2>
                        <div class="sec-line">
                            <span class="sec-line1"></span>
                            <span class="sec-line2"></span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmodtempor incididunt</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="blog-slider owl-carousel">

                        <!-- Blog -->
                        <Carousel :wrap-around="true" :settings="settings" :breakpoints="breakpoints">
                            <Slide v-for="item in LatestBlog" :key="item.id">
                                <div class="blog-card">
                                    <div class="blog-img">
                                        <router-link to="/blogs/blog-details"><img :src="require(`@/assets/img/blog/${item.Image}`)" alt="Blog Image"></router-link>
                                    </div>
                                    <div class="blog-content text-start">
                                        <div class="blog-property">
                                            <span>{{item.Badge}}</span>
                                        </div>
                                        <div class="blog-title">
                                            <h3><router-link to="/blogs/blog-details">{{item.Title}}</router-link></h3>
                                            <p>{{item.Content}}</p>
                                        </div>
                                        <ul class="property-category d-flex justify-content-between align-items-center">
                                            <li class="user-info">
                                                <a href="javascript:void(0);"><img :src="require(`@/assets/img/profiles/${item.Avatar}`)"
                                                        class="img-fluid avatar" alt="User"></a>
                                                <div class="user-name">
                                                    <h6><a href="javascript:void(0);">{{item.Name}}</a></h6>
                                                    <p>Posted on : {{item.PostedDate}}</p>
                                                </div>
                                            </li>
                                            <li>
                                                <router-link to="/blogs/blog-details"><span>
                                                    <i class='fa-solid fa-arrow-right'></i></span>
                                                </router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Slide>
                            <template #addons>
                                <Pagination />
                            </template>
                        </Carousel>
                        <!-- /Blog -->

                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Latest Blog -->

    <!-- News Letter -->
    <section class="news-letter-sec">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="news-heading" data-aos="fade-down" data-aos-duration="2000">
                        <h2>Sign Up for Our Newsletter</h2>
                        <p>Lorem ipsum dolor sit amet, consecte tur cing elit. Suspe ndisse suscipit sagittis</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="email-form" data-aos="fade-down" data-aos-duration="2000">
                        <form action="#">
                            <input type="email" class="form-control" placeholder="Enter Email Address">
                            <button class="btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- News Letter -->
</template>

<script>
import { Carousel, Pagination, Slide } from "vue3-carousel";
import LatestBlog from '@/assets/json/index-latest-blog.json'
import "vue3-carousel/dist/carousel.css";

export default {
    data() {
        return {
            LatestBlog: LatestBlog,
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
        Pagination,
    },
}
</script>