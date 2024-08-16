<template>
    <layouts-header></layouts-header>
    <page-header :title="title" :text="text" :text1="text1" />

    <!-- Feature Property For Rent -->
    <section class="feature-property-sec for-rent bg-white listing-section">
        <div class="container">
            <!-- Sort Result -->
            <div class="showing-result-head">
                <div class="row align-items-center">
                    <div class="col-lg-3">
                        <div class="result-show">
                            <h5>Showing result <span>06</span> of <span>125</span></h5>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="sort-result">
                            <div class="sort-by grid-head">
                                <div>
                                    <p>Sort By</p>
                                </div>
                                <div class="review-form">
                                    <vue-select 
                                        :options="Sort"
                                        id="rentlistsort"
                                        placeholder="Default"
                                    />
                                </div>
                            </div>
                            <div class="price-range grid-head">
                                <div>
                                    <p>Price Range</p>
                                </div>
                                <div class="review-form">
                                    <vue-select 
                                        :options="Pricerange"
                                        id="rentlistpricerange"
                                        placeholder="Low to High"
                                    />
                                </div>
                            </div>
                            <div class="grid-list-view">
                                <ul>
                                    <li><router-link to="/rent/rent-property-grid" ><i class="bx bx-grid"></i></router-link></li>
                                    <li><router-link to="/rent/rent-property-list" class="active"><i class="bx bx-list-ul"></i></router-link></li>
                                    <li><router-link to="/rent/rent-list-map"><i class="bx bxs-map"></i></router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Sort Result -->

            <div class="row">

                <!-- Rent List -->
                <div class="col-lg-12" v-for="record in RentPropertyList" :key="record.id">                            
                    <div class="product-custom">
                        <div class="profile-widget rent-list-view">
                            <div class="doc-img">
                                <router-link to="/rent/rent-details" class="property-img">
                                    <img class="img-fluid" alt="Property Image" :src="require(`@/assets/img/rent/${record.Image}`)">
                                </router-link>
                                <div :class="record.BadgeClass">
                                    <span>{{record.Badge}}</span>
                                </div>
                                <div :class="record.BadgeClass1">
                                    <span>{{record.Badge1}}</span>
                                </div>
                                <div class="product-amount">
                                    <h5><span>{{record.Price}} </span> / Night</h5>
                                </div>
                                <a href="javascript:void(0)">
                                    <div class="favourite" @click="toggleSelected(record)" :class="{ selected: record.isSelected }">
                                        <span><i class="fa-regular fa-heart"></i></span>
                                    </div>
                                </a>
                            </div>
                            <div class="pro-content">
                                <div class="list-head">
                                    <div class="rating">
                                        <span class="rating-count  d-inline-flex">
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                        </span>
                                        <span class="rating-review">Excellent</span>
                                    </div>
                                    <h3 class="title">
                                        <a href="javascript:void(0)" tabindex="-1">{{record.Title}}</a> 
                                    </h3>
                                    <p><i class="feather-map-pin"></i>{{record.Contact}}</p>
                                </div>
                                <ul class="d-flex details">
                                    <li>
                                        <img src="@/assets/img/icons/bed-icon.svg" alt="bed-icon" >
                                        {{record.Beds}}
                                    </li>
                                    <li>
                                        <img src="@/assets/img/icons/bath-icon.svg" alt="bath-icon">
                                        {{record.Baths}}
                                    </li>
                                    <li>
                                        <img src="@/assets/img/icons/building-icon.svg" alt="building-icon">
                                        {{record.Space}}
                                    </li>
                                </ul>
                                <ul class="property-category d-flex justify-content-between align-items-center">
                                    <li class="user-info">
                                        <a href="javascript:void(0);"><img :src="require(`@/assets/img/profiles/${record.Avatar}`)" class="img-fluid avatar" alt="User"></a>
                                        <div class="user-name">
                                            <h6><a href="javascript:void(0);">{{record.Name}}</a></h6>
                                            <p>{{record.City}}</p>
                                        </div>													
                                    </li>
                                    <li>
                                        <router-link to="/rental-order" class="btn-primary">Book Now</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>		
                    </div>
                </div>
                <!-- /Rent List -->

            </div>
        </div>
    </section>
    <!-- /Feature Property For Rent -->

    <layouts-footer></layouts-footer>

</template>

<script>
import RentPropertyList from '@/assets/json/rent-property-list.json'
export default {
    data() {
        return {
            RentPropertyList: RentPropertyList,
            title: "Rent Property List Without Sidebar",
            text: "Home",
            text1: "Rent Property List Without Sidebar",
            Sort: ["Default", "A-Z"],
            Pricerange: ["Low to High", "High to Low"],
            isSelected: false,
        };
    },
    methods: {
        toggleSelected(record) {
            record.isSelected = !record.isSelected;
        },
    },
};
</script>