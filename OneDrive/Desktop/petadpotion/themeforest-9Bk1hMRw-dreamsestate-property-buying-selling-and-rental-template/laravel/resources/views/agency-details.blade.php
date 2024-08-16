<?php $page = 'agency-details'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            Agency Details
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            Agency Details
        @endslot
    @endcomponent

    <!-- Detail View Section -->
    <section class="content inner-content">
        <div class="container">

            <!-- Details -->
            <div class="details-wrap agency">
                <div class="detail-user-wrap">
                    <div class="detail-user-img">
                        <img src="{{ URL::asset('/assets/img/property/property-02.png') }}" class="img-fluid" alt="Image">
                    </div>
                    <div class="user-wrap">
                        <div class="user-info-wrap">
                            <div class="detail-user-info">
                                <div class="rating">
                                    <span class="rating-count">
                                        <i class="fa-solid fa-star checked"></i>
                                        <i class="fa-solid fa-star checked"></i>
                                        <i class="fa-solid fa-star checked"></i>
                                        <i class="fa-solid fa-star checked"></i>
                                        <i class="fa-solid fa-star checked"></i>
                                    </span>
                                    <span class="rating-review">5.0 (20 Reviews)</span>
                                </div>
                                <h3>Country House Real Estate <i class="fa-solid fa-circle-check"></i></h3>
                                <p><i class="bx bx-map"></i>1611 Michigan Ave, Miami Beach, FL 33139</p>
                            </div>
                            <div class="detail-action">
                                <a href="javascript:void(0);" class="btn btn-primary"><i class="bx bx-phone"></i>Contact
                                    Us</a>
                                <a href="javascript:void(0);" class="btn btn-secondary"><i
                                        class="bx bxl-whatsapp"></i>WhatsApp</a>
                            </div>
                        </div>
                        <ul class="mem-list">
                            <li><span>Member Since : </span>15 May 2011</li>
                            <li><span>Agent License : </span>090-0348-8346</li>
                            <li><span>Tax Number : </span>090-0348-8346</li>
                            <li><span>Opening Hours : </span>08:00 AM - 09:00 PM</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- /Details -->

            <div class="row">
                <div class="col-lg-8">
                    <div class="agent-views">

                        <!-- About -->
                        <div class="collapse-card spl-card">
                            <h4 class="card-title">
                                <a class="collapsed" data-bs-toggle="collapse" href="#about" aria-expanded="false">About
                                    Country House Real Estate</a>
                            </h4>
                            <div id="about" class="card-collapse collapse show">
                                <div class="about-agent collapse-view">
                                    <p>This property is mostly wooded and sits high on a hilltop overlooking the Mohawk
                                        River Valley. Located right in the heart of Upstate NYs Amish farm Country, this
                                        land is certified organic making it extremely rare! Good road frontage on a paved
                                        county road with utilities make it an amazing setting for your dream country
                                        getaway! If you like views, you must see this property!, </p>
                                    <p>This property is mostly wooded and sits high on a hilltop overlooking the Mohawk
                                        River Valley. Located right in the heart of Upstate NYs Amish farm Country, this
                                        land is certified organic making it extremely rare! Good road frontage on a paved
                                        county road with utilities make it an amazing setting for your dream country
                                        getaway! If you like views, you must see this property!This property is mostly
                                        wooded and sits high on a hilltop overlooking the Mohawk River </p>
                                    <p>Valley. Located right in the heart of Upstate NYs Amish farm Country, this land is
                                        certified organic making it extremely rare! Good road frontage on a paved county
                                        road with utilities make it an amazing setting for your dream country getaway! If
                                        you like views, you must see this property!</p>
                                </div>
                                <ul class="specialities-list collapse-view">
                                    <li>Property Management</li>
                                    <li>Real Estate Development</li>
                                    <li>Real Estate Appraising</li>
                                    <li>Apartment Brokerage</li>
                                </ul>
                            </div>
                        </div>
                        <!-- /About -->

                        <!-- Service Areas -->
                        <div class="collapse-card">
                            <h4 class="card-title">
                                <a class="collapsed" data-bs-toggle="collapse" href="#service-area"
                                    aria-expanded="false">Service Areas</a>
                            </h4>
                            <div id="service-area" class="card-collapse collapse show">
                                <ul class="service-area collapse-view">
                                    <li>Chicago</li>
                                    <li>Los Angeles</li>
                                    <li>Miami Beach</li>
                                    <li>New York</li>
                                </ul>
                            </div>
                        </div>
                        <!-- /Service Areas -->

                        <!-- My Listings -->
                        <h5 class="sub-title">My Listings</h5>
                        <div class="list-card">
                            <ul class="my-list nav">
                                <li>
                                    <a href="javascript:void(0);" class="active" data-bs-toggle="tab"
                                        data-bs-target="#property">All
                                        Properties ( 25 )</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" data-bs-toggle="tab"
                                        data-bs-target="#apartment">Apartments ( 15 )</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#condos">Condos ( 5
                                        )</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#home">Home ( 5 )</a>
                                </li>
                            </ul>
                        </div>
                        <!-- /My Listings -->

                        <div class="tab-content">

                            <!-- Property -->
                            <div class="tab-pane active" id="property">
                                <!-- Rent Listings -->
                                <div class="agentpro-list">
                                    <div class="agentview-slider owl-carousel feature-property-sec for-rent">
                                        <div class="product-custom">
                                            <div class="profile-widget">
                                                <div class="pro-img">
                                                    <a href="{{ url('rent-details') }}" class="property-img">
                                                        <img class="img-fluid" alt="Property Image"
                                                            src="{{ URL::asset('/assets/img/product/product-7.jpg') }}">
                                                    </a>
                                                    <div class="product-amount">
                                                        <h5><span>$1,400 </span> / Night</h5>
                                                    </div>
                                                    <div class="featured">
                                                        <span>Featured</span>
                                                    </div>
                                                    <a href="javascript:void(0)">
                                                        <div class="favourite">
                                                            <span><i class="fa-regular fa-heart"></i></span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="pro-content">
                                                    <div class="rating">
                                                        <span class="rating-count">
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                        </span>
                                                        <span class="rating-review">Excellent</span>
                                                    </div>
                                                    <h3 class="title">
                                                        <a href="{{ url('rent-details') }}">Grand Mahaka</a>
                                                    </h3>
                                                    <p><i class="feather-map-pin"></i> 470 Park Ave S, New York, NY 10016
                                                    </p>
                                                    <ul class="d-flex details">
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                                alt="bed-icon">
                                                            2 Beds
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                                alt="bath-icon">
                                                            1 Baths
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                                alt="building-icon">
                                                            1200 Sqft
                                                        </li>
                                                    </ul>
                                                    <ul
                                                        class="property-category d-flex justify-content-between align-items-center">
                                                        <li class="user-info">
                                                            <a href="javascript:void(0);"><img
                                                                    src="{{ URL::asset('/assets/img/profiles/avatar-02.jpg') }}"
                                                                    class="img-fluid avatar" alt="User"></a>
                                                            <div class="user-name">
                                                                <h6><a href="javascript:void(0);">Karen Maria</a></h6>
                                                                <p>South Dokata</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="{{ url('rent-details') }}" class="btn-primary">Book
                                                                Now</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-custom">
                                            <div class="profile-widget">
                                                <div class="pro-img">
                                                    <a href="{{ url('rent-details') }}" class="property-img">
                                                        <img class="img-fluid" alt="Property Image"
                                                            src="{{ URL::asset('/assets/img/product/product-8.jpg') }}">
                                                    </a>
                                                    <div class="product-amount">
                                                        <h5><span>$1,500 </span> / Night</h5>
                                                    </div>
                                                    <div class="featured">
                                                        <span>Featured</span>
                                                    </div>
                                                    <a href="javascript:void(0)">
                                                        <div class="favourite">
                                                            <span><i class="fa-regular fa-heart"></i></span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="pro-content">
                                                    <div class="rating">
                                                        <span class="rating-count">
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                        </span>
                                                        <span class="rating-review">Excellent</span>
                                                    </div>
                                                    <h3 class="title">
                                                        <a href="{{ url('rent-details') }}">Royal Apartment</a>
                                                    </h3>
                                                    <p><i class="feather-map-pin"></i> 82-25 Parsons Blvd, Jamaica, NY
                                                        11432, USA</p>
                                                    <ul class="d-flex details">
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                                alt="bed-icon">
                                                            3 Beds
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                                alt="bath-icon">
                                                            2 Baths
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                                alt="building-icon">
                                                            15000 Sqft
                                                        </li>
                                                    </ul>
                                                    <ul
                                                        class="property-category d-flex justify-content-between align-items-center">
                                                        <li class="user-info">
                                                            <a href="javascript:void(0);"><img
                                                                    src="{{ URL::asset('/assets/img/profiles/avatar-03.jpg') }}"
                                                                    class="img-fluid avatar" alt="User"></a>
                                                            <div class="user-name">
                                                                <h6><a href="javascript:void(0);">Scott Gwin</a></h6>
                                                                <p>Minipoliies</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="{{ url('rent-details') }}" class="btn-primary">Book
                                                                Now</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-custom">
                                            <div class="profile-widget">
                                                <div class="pro-img">
                                                    <a href="{{ url('rent-details') }}" class="property-img">
                                                        <img class="img-fluid" alt="Property Image"
                                                            src="{{ URL::asset('/assets/img/product/product-9.jpg') }}">
                                                    </a>
                                                    <div class="product-amount">
                                                        <h5><span>$3,500 </span> / Night</h5>
                                                    </div>
                                                    <div class="featured">
                                                        <span>Featured</span>
                                                    </div>
                                                    <a href="javascript:void(0)">
                                                        <div class="favourite">
                                                            <span><i class="fa-regular fa-heart"></i></span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="pro-content">
                                                    <div class="rating">
                                                        <span class="rating-count">
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                        </span>
                                                        <span class="rating-review">Excellent</span>
                                                    </div>
                                                    <h3 class="title">
                                                        <a href="{{ url('rent-details') }}">Lunaria Residence</a>
                                                    </h3>
                                                    <p><i class="feather-map-pin"></i> 518-520 8th Ave, New York, NY 10018,
                                                        USA</p>
                                                    <ul class="d-flex details">
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                                alt="bed-icon">
                                                            2 Beds
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                                alt="bath-icon">
                                                            1 Baths
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                                alt="building-icon">
                                                            5000 Sqft
                                                        </li>
                                                    </ul>
                                                    <ul
                                                        class="property-category d-flex justify-content-between align-items-center">
                                                        <li class="user-info">
                                                            <a href="javascript:void(0);"><img
                                                                    src="{{ URL::asset('/assets/img/profiles/avatar-04.jpg') }}"
                                                                    class="img-fluid avatar" alt="User"></a>
                                                            <div class="user-name">
                                                                <h6><a href="javascript:void(0);">Burdette</a></h6>
                                                                <p>Cambridge</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="{{ url('rent-details') }}" class="btn-primary">Book
                                                                Now</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <!-- /Rent Listings -->
                            </div>
                            <!-- /Property -->

                            <!-- Apartments -->
                            <div class="tab-pane fade" id="apartment">
                                <!-- Rent Listings -->
                                <div class="agentpro-list">
                                    <div class="agentview-slider owl-carousel feature-property-sec for-rent">
                                        <div class="product-custom">
                                            <div class="profile-widget">
                                                <div class="pro-img">
                                                    <a href="{{ url('rent-details') }}" class="property-img">
                                                        <img class="img-fluid" alt="Property Image"
                                                            src="{{ URL::asset('/assets/img/product/product-9.jpg') }}">
                                                    </a>
                                                    <div class="product-amount">
                                                        <h5><span>$3,500 </span> / Night</h5>
                                                    </div>
                                                    <div class="featured">
                                                        <span>Featured</span>
                                                    </div>
                                                    <a href="javascript:void(0)">
                                                        <div class="favourite">
                                                            <span><i class="fa-regular fa-heart"></i></span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="pro-content">
                                                    <div class="rating">
                                                        <span class="rating-count">
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                        </span>
                                                        <span class="rating-review">Excellent</span>
                                                    </div>
                                                    <h3 class="title">
                                                        <a href="{{ url('rent-details') }}">Lunaria Residence</a>
                                                    </h3>
                                                    <p><i class="feather-map-pin"></i> 518-520 8th Ave, New York, NY 10018,
                                                        USA</p>
                                                    <ul class="d-flex details">
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                                alt="bed-icon">
                                                            2 Beds
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                                alt="bath-icon">
                                                            1 Baths
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                                alt="building-icon">
                                                            5000 Sqft
                                                        </li>
                                                    </ul>
                                                    <ul
                                                        class="property-category d-flex justify-content-between align-items-center">
                                                        <li class="user-info">
                                                            <a href="javascript:void(0);"><img
                                                                    src="{{ URL::asset('/assets/img/profiles/avatar-04.jpg') }}"
                                                                    class="img-fluid avatar" alt="User"></a>
                                                            <div class="user-name">
                                                                <h6><a href="javascript:void(0);">Burdette</a></h6>
                                                                <p>Cambridge</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="{{ url('rent-details') }}" class="btn-primary">Book
                                                                Now</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-custom">
                                            <div class="profile-widget">
                                                <div class="pro-img">
                                                    <a href="{{ url('rent-details') }}" class="property-img">
                                                        <img class="img-fluid" alt="Property Image"
                                                            src="{{ URL::asset('/assets/img/product/product-7.jpg') }}">
                                                    </a>
                                                    <div class="product-amount">
                                                        <h5><span>$1,400 </span> / Night</h5>
                                                    </div>
                                                    <div class="featured">
                                                        <span>Featured</span>
                                                    </div>
                                                    <a href="javascript:void(0)">
                                                        <div class="favourite">
                                                            <span><i class="fa-regular fa-heart"></i></span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="pro-content">
                                                    <div class="rating">
                                                        <span class="rating-count">
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                        </span>
                                                        <span class="rating-review">Excellent</span>
                                                    </div>
                                                    <h3 class="title">
                                                        <a href="{{ url('rent-details') }}">Grand Mahaka</a>
                                                    </h3>
                                                    <p><i class="feather-map-pin"></i> 470 Park Ave S, New York, NY 10016
                                                    </p>
                                                    <ul class="d-flex details">
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                                alt="bed-icon">
                                                            2 Beds
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                                alt="bath-icon">
                                                            1 Baths
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                                alt="building-icon">
                                                            1200 Sqft
                                                        </li>
                                                    </ul>
                                                    <ul
                                                        class="property-category d-flex justify-content-between align-items-center">
                                                        <li class="user-info">
                                                            <a href="javascript:void(0);"><img
                                                                    src="{{ URL::asset('/assets/img/profiles/avatar-02.jpg') }}"
                                                                    class="img-fluid avatar" alt="User"></a>
                                                            <div class="user-name">
                                                                <h6><a href="javascript:void(0);">Karen Maria</a></h6>
                                                                <p>South Dokata</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="{{ url('rent-details') }}" class="btn-primary">Book
                                                                Now</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-custom">
                                            <div class="profile-widget">
                                                <div class="pro-img">
                                                    <a href="{{ url('rent-details') }}" class="property-img">
                                                        <img class="img-fluid" alt="Property Image"
                                                            src="{{ URL::asset('/assets/img/product/product-8.jpg') }}">
                                                    </a>
                                                    <div class="product-amount">
                                                        <h5><span>$1,500 </span> / Night</h5>
                                                    </div>
                                                    <div class="featured">
                                                        <span>Featured</span>
                                                    </div>
                                                    <a href="javascript:void(0)">
                                                        <div class="favourite">
                                                            <span><i class="fa-regular fa-heart"></i></span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="pro-content">
                                                    <div class="rating">
                                                        <span class="rating-count">
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                        </span>
                                                        <span class="rating-review">Excellent</span>
                                                    </div>
                                                    <h3 class="title">
                                                        <a href="{{ url('rent-details') }}">Royal Apartment</a>
                                                    </h3>
                                                    <p><i class="feather-map-pin"></i> 82-25 Parsons Blvd, Jamaica, NY
                                                        11432, USA</p>
                                                    <ul class="d-flex details">
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                                alt="bed-icon">
                                                            3 Beds
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                                alt="bath-icon">
                                                            2 Baths
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                                alt="building-icon">
                                                            15000 Sqft
                                                        </li>
                                                    </ul>
                                                    <ul
                                                        class="property-category d-flex justify-content-between align-items-center">
                                                        <li class="user-info">
                                                            <a href="javascript:void(0);"><img
                                                                    src="{{ URL::asset('/assets/img/profiles/avatar-03.jpg') }}"
                                                                    class="img-fluid avatar" alt="User"></a>
                                                            <div class="user-name">
                                                                <h6><a href="javascript:void(0);">Scott Gwin</a></h6>
                                                                <p>Minipoliies</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="{{ url('rent-details') }}" class="btn-primary">Book
                                                                Now</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <!-- /Rent Listings -->
                            </div>
                            <!-- /Apartments -->

                            <!-- Condos -->
                            <div class="tab-pane fade" id="condos">
                                <!-- Rent Listings -->
                                <div class="agentpro-list">
                                    <div class="agentview-slider owl-carousel feature-property-sec for-rent">
                                        <div class="product-custom">
                                            <div class="profile-widget">
                                                <div class="pro-img">
                                                    <a href="{{ url('rent-details') }}" class="property-img">
                                                        <img class="img-fluid" alt="Property Image"
                                                            src="{{ URL::asset('/assets/img/product/product-7.jpg') }}">
                                                    </a>
                                                    <div class="product-amount">
                                                        <h5><span>$1,400 </span> / Night</h5>
                                                    </div>
                                                    <div class="featured">
                                                        <span>Featured</span>
                                                    </div>
                                                    <a href="javascript:void(0)">
                                                        <div class="favourite">
                                                            <span><i class="fa-regular fa-heart"></i></span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="pro-content">
                                                    <div class="rating">
                                                        <span class="rating-count">
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                        </span>
                                                        <span class="rating-review">Excellent</span>
                                                    </div>
                                                    <h3 class="title">
                                                        <a href="{{ url('rent-details') }}">Grand Mahaka</a>
                                                    </h3>
                                                    <p><i class="feather-map-pin"></i> 470 Park Ave S, New York, NY 10016
                                                    </p>
                                                    <ul class="d-flex details">
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                                alt="bed-icon">
                                                            2 Beds
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                                alt="bath-icon">
                                                            1 Baths
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                                alt="building-icon">
                                                            1200 Sqft
                                                        </li>
                                                    </ul>
                                                    <ul
                                                        class="property-category d-flex justify-content-between align-items-center">
                                                        <li class="user-info">
                                                            <a href="javascript:void(0);"><img
                                                                    src="{{ URL::asset('/assets/img/profiles/avatar-02.jpg') }}"
                                                                    class="img-fluid avatar" alt="User"></a>
                                                            <div class="user-name">
                                                                <h6><a href="javascript:void(0);">Karen Maria</a></h6>
                                                                <p>South Dokata</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="{{ url('rent-details') }}" class="btn-primary">Book
                                                                Now</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-custom">
                                            <div class="profile-widget">
                                                <div class="pro-img">
                                                    <a href="{{ url('rent-details') }}" class="property-img">
                                                        <img class="img-fluid" alt="Property Image"
                                                            src="{{ URL::asset('/assets/img/product/product-9.jpg') }}">
                                                    </a>
                                                    <div class="product-amount">
                                                        <h5><span>$3,500 </span> / Night</h5>
                                                    </div>
                                                    <div class="featured">
                                                        <span>Featured</span>
                                                    </div>
                                                    <a href="javascript:void(0)">
                                                        <div class="favourite">
                                                            <span><i class="fa-regular fa-heart"></i></span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="pro-content">
                                                    <div class="rating">
                                                        <span class="rating-count">
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                        </span>
                                                        <span class="rating-review">Excellent</span>
                                                    </div>
                                                    <h3 class="title">
                                                        <a href="{{ url('rent-details') }}">Lunaria Residence</a>
                                                    </h3>
                                                    <p><i class="feather-map-pin"></i> 518-520 8th Ave, New York, NY 10018,
                                                        USA</p>
                                                    <ul class="d-flex details">
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                                alt="bed-icon">
                                                            2 Beds
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                                alt="bath-icon">
                                                            1 Baths
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                                alt="building-icon">
                                                            5000 Sqft
                                                        </li>
                                                    </ul>
                                                    <ul
                                                        class="property-category d-flex justify-content-between align-items-center">
                                                        <li class="user-info">
                                                            <a href="javascript:void(0);"><img
                                                                    src="{{ URL::asset('/assets/img/profiles/avatar-04.jpg') }}"
                                                                    class="img-fluid avatar" alt="User"></a>
                                                            <div class="user-name">
                                                                <h6><a href="javascript:void(0);">Burdette</a></h6>
                                                                <p>Cambridge</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="{{ url('rent-details') }}" class="btn-primary">Book
                                                                Now</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-custom">
                                            <div class="profile-widget">
                                                <div class="pro-img">
                                                    <a href="{{ url('rent-details') }}" class="property-img">
                                                        <img class="img-fluid" alt="Property Image"
                                                            src="{{ URL::asset('/assets/img/product/product-8.jpg') }}">
                                                    </a>
                                                    <div class="product-amount">
                                                        <h5><span>$1,500 </span> / Night</h5>
                                                    </div>
                                                    <div class="featured">
                                                        <span>Featured</span>
                                                    </div>
                                                    <a href="javascript:void(0)">
                                                        <div class="favourite">
                                                            <span><i class="fa-regular fa-heart"></i></span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="pro-content">
                                                    <div class="rating">
                                                        <span class="rating-count">
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                        </span>
                                                        <span class="rating-review">Excellent</span>
                                                    </div>
                                                    <h3 class="title">
                                                        <a href="{{ url('rent-details') }}">Royal Apartment</a>
                                                    </h3>
                                                    <p><i class="feather-map-pin"></i> 82-25 Parsons Blvd, Jamaica, NY
                                                        11432, USA</p>
                                                    <ul class="d-flex details">
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                                alt="bed-icon">
                                                            3 Beds
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                                alt="bath-icon">
                                                            2 Baths
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                                alt="building-icon">
                                                            15000 Sqft
                                                        </li>
                                                    </ul>
                                                    <ul
                                                        class="property-category d-flex justify-content-between align-items-center">
                                                        <li class="user-info">
                                                            <a href="javascript:void(0);"><img
                                                                    src="{{ URL::asset('/assets/img/profiles/avatar-03.jpg') }}"
                                                                    class="img-fluid avatar" alt="User"></a>
                                                            <div class="user-name">
                                                                <h6><a href="javascript:void(0);">Scott Gwin</a></h6>
                                                                <p>Minipoliies</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="{{ url('rent-details') }}" class="btn-primary">Book
                                                                Now</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <!-- /Rent Listings -->
                            </div>
                            <!-- /Condos -->

                            <!-- Home -->
                            <div class="tab-pane fade" id="home">
                                <!-- Rent Listings -->
                                <div class="agentpro-list">
                                    <div class="agentview-slider owl-carousel feature-property-sec for-rent">
                                        <div class="product-custom">
                                            <div class="profile-widget">
                                                <div class="pro-img">
                                                    <a href="{{ url('rent-details') }}" class="property-img">
                                                        <img class="img-fluid" alt="Property Image"
                                                            src="{{ URL::asset('/assets/img/product/product-9.jpg') }}">
                                                    </a>
                                                    <div class="product-amount">
                                                        <h5><span>$3,500 </span> / Night</h5>
                                                    </div>
                                                    <div class="featured">
                                                        <span>Featured</span>
                                                    </div>
                                                    <a href="javascript:void(0)">
                                                        <div class="favourite">
                                                            <span><i class="fa-regular fa-heart"></i></span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="pro-content">
                                                    <div class="rating">
                                                        <span class="rating-count">
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                        </span>
                                                        <span class="rating-review">Excellent</span>
                                                    </div>
                                                    <h3 class="title">
                                                        <a href="{{ url('rent-details') }}">Lunaria Residence</a>
                                                    </h3>
                                                    <p><i class="feather-map-pin"></i> 518-520 8th Ave, New York, NY 10018,
                                                        USA</p>
                                                    <ul class="d-flex details">
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                                alt="bed-icon">
                                                            2 Beds
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                                alt="bath-icon">
                                                            1 Baths
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                                alt="building-icon">
                                                            5000 Sqft
                                                        </li>
                                                    </ul>
                                                    <ul
                                                        class="property-category d-flex justify-content-between align-items-center">
                                                        <li class="user-info">
                                                            <a href="javascript:void(0);"><img
                                                                    src="{{ URL::asset('/assets/img/profiles/avatar-04.jpg') }}"
                                                                    class="img-fluid avatar" alt="User"></a>
                                                            <div class="user-name">
                                                                <h6><a href="javascript:void(0);">Burdette</a></h6>
                                                                <p>Cambridge</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="{{ url('rent-details') }}" class="btn-primary">Book
                                                                Now</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-custom">
                                            <div class="profile-widget">
                                                <div class="pro-img">
                                                    <a href="{{ url('rent-details') }}" class="property-img">
                                                        <img class="img-fluid" alt="Property Image"
                                                            src="{{ URL::asset('/assets/img/product/product-7.jpg') }}">
                                                    </a>
                                                    <div class="product-amount">
                                                        <h5><span>$1,400 </span> / Night</h5>
                                                    </div>
                                                    <div class="featured">
                                                        <span>Featured</span>
                                                    </div>
                                                    <a href="javascript:void(0)">
                                                        <div class="favourite">
                                                            <span><i class="fa-regular fa-heart"></i></span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="pro-content">
                                                    <div class="rating">
                                                        <span class="rating-count">
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                        </span>
                                                        <span class="rating-review">Excellent</span>
                                                    </div>
                                                    <h3 class="title">
                                                        <a href="{{ url('rent-details') }}">Grand Mahaka</a>
                                                    </h3>
                                                    <p><i class="feather-map-pin"></i> 470 Park Ave S, New York, NY 10016
                                                    </p>
                                                    <ul class="d-flex details">
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                                alt="bed-icon">
                                                            2 Beds
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                                alt="bath-icon">
                                                            1 Baths
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                                alt="building-icon">
                                                            1200 Sqft
                                                        </li>
                                                    </ul>
                                                    <ul
                                                        class="property-category d-flex justify-content-between align-items-center">
                                                        <li class="user-info">
                                                            <a href="javascript:void(0);"><img
                                                                    src="{{ URL::asset('/assets/img/profiles/avatar-02.jpg') }}"
                                                                    class="img-fluid avatar" alt="User"></a>
                                                            <div class="user-name">
                                                                <a href="javascript:void(0);">Karen Maria</a>
                                                                <p>South Dokata</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="{{ url('rent-details') }}" class="btn-primary">Book
                                                                Now</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-custom">
                                            <div class="profile-widget">
                                                <div class="pro-img">
                                                    <a href="{{ url('rent-details') }}" class="property-img">
                                                        <img class="img-fluid" alt="Property Image"
                                                            src="{{ URL::asset('/assets/img/product/product-8.jpg') }}">
                                                    </a>
                                                    <div class="product-amount">
                                                        <h5><span>$1,500 </span> / Night</h5>
                                                    </div>
                                                    <div class="featured">
                                                        <span>Featured</span>
                                                    </div>
                                                    <a href="javascript:void(0)">
                                                        <div class="favourite">
                                                            <span><i class="fa-regular fa-heart"></i></span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div class="pro-content">
                                                    <div class="rating">
                                                        <span class="rating-count">
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                            <i class="fa-solid fa-star checked"></i>
                                                        </span>
                                                        <span class="rating-review">Excellent</span>
                                                    </div>
                                                    <h3 class="title">
                                                        <a href="{{ url('rent-details') }}">Royal Apartment</a>
                                                    </h3>
                                                    <p><i class="feather-map-pin"></i> 82-25 Parsons Blvd, Jamaica, NY
                                                        11432, USA</p>
                                                    <ul class="d-flex details">
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                                alt="bed-icon">
                                                            3 Beds
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                                alt="bath-icon">
                                                            2 Baths
                                                        </li>
                                                        <li>
                                                            <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                                alt="building-icon">
                                                            15000 Sqft
                                                        </li>
                                                    </ul>
                                                    <ul
                                                        class="property-category d-flex justify-content-between align-items-center">
                                                        <li class="user-info">
                                                            <a href="javascript:void(0);"><img
                                                                    src="{{ URL::asset('/assets/img/profiles/avatar-03.jpg') }}"
                                                                    class="img-fluid avatar" alt="User"></a>
                                                            <div class="user-name">
                                                                <h6><a href="javascript:void(0);">Scott Gwin</a></h6>
                                                                <p>Minipoliies</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="{{ url('rent-details') }}" class="btn-primary">Book
                                                                Now</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <!-- /Rent Listings -->
                            </div>
                            <!-- /Home -->

                        </div>

                        <!-- Review -->
                        <div class="collapse-card">
                            <h4 class="card-title">
                                <a class="collapsed" data-bs-toggle="collapse" href="#review"
                                    aria-expanded="false">Reviews (25)</a>
                            </h4>
                            <div id="review" class="card-collapse collapse show  collapse-view">
                                <div class="review-card">
                                    <div class="customer-review">
                                        <div class="customer-info">
                                            <div class="customer-name">
                                                <a href="javascript:void(0);"><img
                                                        src="{{ URL::asset('/assets/img/profiles/avatar-01.jpg') }}"
                                                        alt="User"></a>
                                                <div>
                                                    <h5><a href="javascript:void(0);">Johnson</a></h5>
                                                    <p>02 Jan 2023</p>
                                                </div>
                                            </div>
                                            <div class="rating">
                                                <span class="rating-count">
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </span>
                                                <p class="rating-review"><span>4.0</span>(20 Reviews)</p>
                                            </div>
                                        </div>
                                        <div class="review-para">
                                            <p>It was popularised in the 1960s with the release of Letraset sheets
                                                containing Lorem Ipsum passages, and more recently with desktop publishing
                                                software like Aldus PageMaker including versions of Lorem Ipsum.It was
                                                popularised in the 1960s </p>
                                        </div>
                                    </div>
                                    <div class="customer-review">
                                        <div class="customer-info">
                                            <div class="customer-name">
                                                <a href="javascript:void(0);"><img
                                                        src="{{ URL::asset('/assets/img/profiles/avatar-02.jpg') }}"
                                                        alt="User"></a>
                                                <div>
                                                    <h5><a href="javascript:void(0);">Casandra</a></h5>
                                                    <p>01 Jan 2023</p>
                                                </div>
                                            </div>
                                            <div class="rating">
                                                <span class="rating-count">
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                </span>
                                                <p class="rating-review"><span>5.0</span>(20 Reviews)</p>
                                            </div>
                                        </div>
                                        <div class="review-para">
                                            <p>It was popularised in the 1960s with the release of Letraset sheets
                                                containing Lorem Ipsum passages, and more recently with desktop publishing
                                                software like Aldus PageMaker including versions of Lorem Ipsum.It was
                                                popularised in the 1960s with the elease of Letraset sheets containing Lorem
                                                Ipsum passages, and more recently with desktop publishing software like
                                                Aldus Page Maker including versions.</p>
                                        </div>
                                    </div>
                                    <div class="property-review">
                                        <h5 class="card-title">Property Reviews</h5>
                                        <form action="#">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="review-form">
                                                        <input type="text" class="form-control"
                                                            placeholder="Your Name">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="review-form">
                                                        <input type="email" class="form-control"
                                                            placeholder="Your Email">
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="review-form">
                                                        <textarea rows="5" placeholder="Enter Your Comments"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="review-form submit-btn">
                                                        <button type="submit" class="btn-primary">Submit Review</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Review -->

                    </div>
                </div>

                <!-- Sidebar -->
                <div class="col-lg-4 theiaStickySidebar">
                    <div class="right-sidebar">
                        <div class="sidebar-card">
                            <form action="#">
                                <div class="sidebar-card-title">
                                    <h5>Enquire Agency</h5>
                                </div>
                                <div class="review-form">
                                    <input type="text" class="form-control" placeholder="Your Name">
                                </div>
                                <div class="review-form">
                                    <input type="email" class="form-control" placeholder="Your Email">
                                </div>
                                <div class="review-form">
                                    <input type="text" class="form-control" placeholder="Your Phone Number">
                                </div>
                                <div class="review-form">
                                    <select class="select">
                                        <option>Select Property</option>
                                        <option>Apartment</option>
                                        <option>Villa</option>
                                    </select>
                                </div>
                                <div class="review-form">
                                    <textarea rows="5" placeholder="Yes, I'm Interested"></textarea>
                                </div>
                                <div class="review-form submit-btn">
                                    <button type="submit" class="btn-primary">Send Email</button>
                                </div>
                            </form>
                        </div>
                        <div class="sidebar-card">
                            <div class="sidebar-card-title">
                                <h5>Our Agents</h5>
                            </div>
                            <div class="our-agent">
                                <div class="user-img">
                                    <a href="javascript:void(0);"><img class="avatar"
                                            src="{{ URL::asset('/assets/img/profiles/avatar-03.jpg') }}"
                                            alt="Image"></a>
                                </div>
                                <div class="agent-name">
                                    <h6><a href="javascript:void(0);">Lowe</a> </h6>
                                    <p><i class="bx bx-user-voice"></i>Selling Agent</p>
                                    <div class="rating">
                                        <span class="rating-count">
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                        </span>
                                        <span class="rating-review">5.0 (20 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sidebar-card">
                            <div class="sidebar-card-title">
                                <h5>Contact</h5>
                            </div>
                            <ul class="list-details con-list">
                                <li><span><i class="bx bx-buildings"></i>Office</span> +1 321 456 9874</li>
                                <li><span><i class="bx bx-mobile-alt"></i>Mobile</span> +1 897 654 1258</li>
                                <li><span><i class="bx bx-phone-call"></i>Fax</span> 4616561461</li>
                                <li><span><i class="bx bx-globe"></i>Website</span> example.com</li>
                                <li><span><i class="bx bx-phone-call"></i>Address</span> 7698 Creekwood Blvd</li>
                                <li><span><i class="bx bx-mail-send"></i>Email</span> richard@example.com</li>
                            </ul>
                        </div>
                        <div class="sidebar-card">
                            <div class="sidebar-card-title">
                                <h5>Share Property</h5>
                            </div>
                            <div class="social-links">
                                <ul class="sidebar-social-links">
                                    <li><a href="javascript:void(0);" class="fb-icon"><i
                                                class="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="javascript:void(0);" class="ins-icon"><i
                                                class="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-behance"></i></a></li>
                                    <li><a href="javascript:void(0);" class="twitter-icon"><i
                                                class="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="javascript:void(0);" class="ins-icon"><i
                                                class="fa-brands fa-pinterest-p"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Sidebar -->

            </div>

        </div>
    </section>
    <!-- /Detail View -->
@endsection
