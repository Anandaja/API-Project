<template>
    <layouts-header></layouts-header>
    <page-header :title="title" :text="text" :text1="text1" />

    <!-- Detail View Section -->
    <section class="content inner-content bg-white">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="details-div">
                        <div class="details-div-content">
                            <h5>Details</h5>
                            <p>Modern Apartment in the city centre</p>
                            <h5>Location </h5>
                            <p class="mb-0">318-330 S Oakley Blvd, Chicago, IL 60612, USA</p>
                        </div>
                        <div class="details-div-price">
                            <h5>Booking Amount</h5>
                            <h6>$300 <span>/ Day</span></h6>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="booking-details mb-0 pb-lg-3 pb-0">
                        <h4>Choose Payment Method</h4>
                        <div class="payment-icon">
                            <ul>
                                <li v-for="(image, index) in themeImages" :key="index" class="theme-image"
                                    @click="selectTheme(index)" :class="{ active: image.isActive }">
                                    <span><img :src="require(`@/assets/img/payment/${image.src}`)" alt="img"></span>
                                </li>
                            </ul>
                        </div>
                        <h4>Add New Card</h4>
                        <div class="row">
                            <div class="col-lg-6 col-sm-12">
                                <div class="review-form">
                                    <label>Card Number</label>
                                    <input type="text" class="form-control" placeholder="+1 3940 9404">
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div class="review-form">
                                    <label>Card Holder Name<span class="manitory">*</span></label>
                                    <input type="text" class="form-control" placeholder="Roudrigez">
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-12">
                                <div class="review-form">
                                    <label>Select Date</label>
                                    <date-picker v-model="startdate" class="form-control datetimepicker" :editable="true"
                                        :clearable="false" :input-format="dateFormat" placeholder="Select Date" />
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-12">
                                <div class="review-form">
                                    <label>&nbsp;</label>
                                    <vue-select :options="Select" id="selectyear" placeholder="Select Year" />
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="review-form">
                                    <label>CVV</label>
                                    <input type="text" class="form-control" placeholder="Enter Security Number">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="booking-details-btn">
                        <router-link to="/rental-order" class="btn btn-lightred me-2">Go Back</router-link>
                        <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#success">Book
                            Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Detail View Section -->

    <layouts-footer></layouts-footer>

    <rental-order-modal></rental-order-modal>
</template>

<script>
import { ref } from "vue";
const currentDate = ref(new Date());

export default {
    data() {
        return {
            title: "Rental Booking",
            text: "Home",
            text1: "Rental Booking",
            Select: ["Select Year", "2012", "2013", "2014", "2015"],
            startdate: currentDate,
            dateFormat: "dd-MM-yyyy",
            themeImages: [
                { src: "paypal.png", isActive: true },
                { src: "stripe.png", isActive: false },
                { src: "card.png", isActive: false },
                { src: "wallet.png", isActive: false },
            ],
        }
    },
    methods: {
        selectTheme(index) {
            this.selectedThemeIndex = index;
            // You can also update the isActive property here if needed
            this.themeImages.forEach((image, i) => {
                image.isActive = i === index;
            });
        },
    },
}
</script>