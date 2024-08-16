<?php $page = 'rent-list-map'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            Rent Property List With Map
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            Rent Property List With Map
        @endslot
    @endcomponent

    <!-- Content -->
    <div class="content p-0">
        <div class="container-fluid">
            <div class="row">

                <!-- Map -->
                <div class="col-xl-5 col-sm-12 map-right ">
                    <div id="map" class="map-listing"></div>
                </div>
                <!-- /Map -->

                <div class="col-xl-7 col-sm-12 map-content">

                    <!-- Sidebar -->
                    <div class="advanced-search">
                        <h3>Advanced Search</h3>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="review-form form-wrap ">
                                    <input type="text" class="form-control" placeholder="Location">
                                    <span class="form-icon">
                                        <i class="bx bx-map"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 col-12">
                                <div class="review-form form-wrap ">
                                    <select class="select form-control">
                                        <option>Categories</option>
                                        <option>Apartments</option>
                                        <option>Condos </option>
                                        <option>Houses </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 col-12">
                                <div class="review-form form-wrap ">
                                    <select class="select form-control">
                                        <option>Bedrooms</option>
                                        <option>4 Bedrooms</option>
                                        <option>2 Bedrooms </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 col-12">
                                <div class="review-form form-wrap ">
                                    <select class="select form-control">
                                        <option>Bathrooms</option>
                                        <option>1 Bathrooms</option>
                                        <option>2 Bathrooms </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 col-12">
                                <div class="review-form form-wrap ">
                                    <input type="text" class="form-control" placeholder="Min Sqft">
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 col-12">
                                <div class="review-form form-wrap ">
                                    <input type="text" class="form-control" placeholder="Min Price">
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 col-12">
                                <div class="review-form form-wrap ">
                                    <input type="text" class="form-control" placeholder="Max Price">
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 col-12">
                                <div class="review-form form-wrap ">
                                    <select class="select form-control">
                                        <option>Reviews</option>
                                        <option>1 Review</option>
                                        <option>2 Review</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 col-12">
                                <div class="review-form form-wrap ">
                                    <input type="text" class="form-control" placeholder="Amenities">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="review-form-btn">
                                    <a href="javascript:void(0);" class="btn btn-primary">Apply Filter</a>
                                    <a href="javascript:void(0);" class="reset-btn">Reset Selection</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Sidebar -->

                    @component('components.rent-sortresult')
                    @endcomponent

                    <div class="feature-property-sec for-rent rent-grid p-0 bg-white rental-map">
                        <div class="row ">

                            <!-- Rent List -->
                            <div class="col-lg-12">
                                <div class="product-custom">
                                    <div class="profile-widget rent-list-view">
                                        <div class="doc-img">
                                            <a href="{{ url('rent-details') }}" class="property-img">
                                                <img class="img-fluid" alt="Product image"
                                                    src="{{ URL::asset('/assets/img/rent/rent-list-01.jpg') }}">
                                            </a>
                                            <div class="featured">
                                                <span>Featured</span>
                                            </div>
                                            <div class="new-featured">
                                                <span>New</span>
                                            </div>
                                            <div class="product-amount">
                                                <h5><span>$4,500 </span> / night</h5>
                                            </div>
                                            <a href="javascript:void(0)">
                                                <div class="favourite">
                                                    <span><i class="fa-regular fa-heart"></i></span>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="pro-content">
                                            <div class="list-head">
                                                <div class="rating">
                                                    <span class="rating-count  d-inline-flex">
                                                        <i class="fa fa-star checked"></i>
                                                        <i class="fa fa-star checked"></i>
                                                        <i class="fa fa-star checked"></i>
                                                        <i class="fa fa-star checked"></i>
                                                        <i class="fa fa-star checked"></i>
                                                    </span>
                                                    <span class="rating-review">Excellent</span>
                                                </div>
                                                <h3 class="title">
                                                    <a href="{{ url('rent-details') }}" tabindex="-1">Royal Apartment</a>
                                                </h3>
                                                <p><i class="feather-map-pin"></i>Jl. Seminyak Asri, No.4, Kuta</p>
                                            </div>
                                            <ul class="d-flex details">
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                        alt="bed-icon">
                                                    5 Beds
                                                </li>
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                        alt="bath-icon">
                                                    2 Baths
                                                </li>
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                        alt="building-icon">
                                                    11000 Sqft
                                                </li>
                                            </ul>
                                            <ul class="property-category d-flex justify-content-between align-items-center">
                                                <li class="user-info">
                                                    <a href="javascript:void(0);"><img
                                                            src="{{ URL::asset('/assets/img/profiles/avatar-01.jpg') }}"
                                                            class="img-fluid avatar" alt=""></a>
                                                    <div class="user-name">
                                                        <a href="javascript:void(0);">Marc Silva</a>
                                                        <p>Newyork</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="{{ url('rental-order') }}" class="btn-primary">Book Now</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /Rent List -->

                            <!-- Rent List -->
                            <div class="col-lg-12">
                                <div class="product-custom">
                                    <div class="profile-widget rent-list-view">
                                        <div class="doc-img">
                                            <a href="{{ url('rent-details') }}" class="property-img">
                                                <img class="img-fluid" alt="Product image"
                                                    src="{{ URL::asset('/assets/img/rent/rent-list-02.jpg') }}">
                                            </a>
                                            <div class="product-amount">
                                                <h5><span>$8,500 </span> / night</h5>
                                            </div>
                                            <a href="javascript:void(0)">
                                                <div class="favourite selected">
                                                    <span><i class="fa-regular fa-heart"></i></span>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="pro-content">
                                            <div class="list-head">
                                                <div class="rating">
                                                    <span class="rating-count  d-inline-flex">
                                                        <i class="fa fa-star checked"></i>
                                                        <i class="fa fa-star checked"></i>
                                                        <i class="fa fa-star checked"></i>
                                                        <i class="fa fa-star checked"></i>
                                                        <i class="fa fa-star checked"></i>
                                                    </span>
                                                    <span class="rating-review">Excellent</span>
                                                </div>
                                                <h3 class="title">
                                                    <a href="{{ url('rent-details') }}" tabindex="-1">Grand Mahaka</a>
                                                </h3>
                                                <p><i class="feather-map-pin"></i>Jl. Bandung Permai, No.6, Bandung</p>
                                            </div>
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
                                                    9000 Sqft
                                                </li>
                                            </ul>
                                            <ul
                                                class="property-category d-flex justify-content-between align-items-center">
                                                <li class="user-info">
                                                    <a href="javascript:void(0);"><img
                                                            src="{{ URL::asset('/assets/img/profiles/avatar-02.jpg') }}"
                                                            class="img-fluid avatar" alt=""></a>
                                                    <div class="user-name">
                                                        <a href="javascript:void(0);">Scott Gwin</a>
                                                        <p>Minipoliies</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="{{ url('rental-order') }}" class="btn-primary">Book Now</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /Rent List -->

                            <!-- Rent List -->
                            <div class="col-lg-12">
                                <div class="product-custom">
                                    <div class="profile-widget rent-list-view">
                                        <div class="doc-img">
                                            <a href="{{ url('rent-details') }}" class="property-img">
                                                <img class="img-fluid" alt="Product image"
                                                    src="{{ URL::asset('/assets/img/rent/rent-list-03.jpg') }}">
                                            </a>
                                            <div class="featured">
                                                <span>Featured</span>
                                            </div>
                                            <div class="product-amount">
                                                <h5><span>$2,200 </span> / night</h5>
                                            </div>
                                            <a href="javascript:void(0)">
                                                <div class="favourite">
                                                    <span><i class="fa-regular fa-heart"></i></span>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="pro-content">
                                            <div class="list-head">
                                                <div class="rating">
                                                    <span class="rating-count  d-inline-flex">
                                                        <i class="fa fa-star checked"></i>
                                                        <i class="fa fa-star checked"></i>
                                                        <i class="fa fa-star checked"></i>
                                                        <i class="fa fa-star checked"></i>
                                                        <i class="fa fa-star checked"></i>
                                                    </span>
                                                    <span class="rating-review">Excellent</span>
                                                </div>
                                                <h3 class="title">
                                                    <a href="{{ url('rent-details') }}" tabindex="-1">Lunaria
                                                        Residence</a>
                                                </h3>
                                                <p><i class="feather-map-pin"></i>Jl. Surabaya Jaya, No.10, Surabaya</p>
                                            </div>
                                            <ul class="d-flex details">
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                        alt="bed-icon">
                                                    2 Beds
                                                </li>
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                        alt="bath-icon">
                                                    4 Baths
                                                </li>
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                        alt="building-icon">
                                                    12000 Sqft
                                                </li>
                                            </ul>
                                            <ul
                                                class="property-category d-flex justify-content-between align-items-center">
                                                <li class="user-info">
                                                    <a href="javascript:void(0);"><img
                                                            src="{{ URL::asset('/assets/img/profiles/avatar-03.jpg') }}"
                                                            class="img-fluid avatar" alt=""></a>
                                                    <div class="user-name">
                                                        <a href="javascript:void(0);">Kell Robinson</a>
                                                        <p>USA</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="{{ url('rental-order') }}" class="btn-primary">Book Now</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /Rent List -->

                            <!-- Rent List -->
                            <div class="col-lg-12">
                                <div class="product-custom">
                                    <div class="profile-widget rent-list-view">
                                        <div class="doc-img">
                                            <a href="{{ url('rent-details') }}" class="property-img">
                                                <img class="img-fluid" alt="Product image"
                                                    src="{{ URL::asset('/assets/img/rent/rent-list-04.jpg') }}">
                                            </a>
                                            <div class="featured">
                                                <span>Featured</span>
                                            </div>
                                            <div class="product-amount">
                                                <h5><span>$2,200 </span> / night</h5>
                                            </div>
                                            <a href="javascript:void(0)">
                                                <div class="favourite selected">
                                                    <span><i class="fa-regular fa-heart"></i></span>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="pro-content">
                                            <div class="list-head">
                                                <div class="rating">
                                                    <span class="rating-count  d-inline-flex">
                                                        <i class="fa fa-star checked"></i>
                                                        <i class="fa fa-star checked"></i>
                                                        <i class="fa fa-star checked"></i>
                                                        <i class="fa fa-star checked"></i>
                                                        <i class="fa fa-star checked"></i>
                                                    </span>
                                                    <span class="rating-review">Excellent</span>
                                                </div>
                                                <h3 class="title">
                                                    <a href="{{ url('rent-details') }}" tabindex="-1">Grand Mahaka</a>
                                                </h3>
                                                <p><i class="feather-map-pin"></i>Jl. Bandung Permai, No.6, Bandung</p>
                                            </div>
                                            <ul class="d-flex details">
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                        alt="bed-icon">
                                                    4 Beds
                                                </li>
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                        alt="bath-icon">
                                                    4 Baths
                                                </li>
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                        alt="building-icon">
                                                    3500 Sqft
                                                </li>
                                            </ul>
                                            <ul
                                                class="property-category d-flex justify-content-between align-items-center">
                                                <li class="user-info">
                                                    <a href="javascript:void(0);"><img
                                                            src="{{ URL::asset('/assets/img/profiles/avatar-07.jpg') }}"
                                                            class="img-fluid avatar" alt=""></a>
                                                    <div class="user-name">
                                                        <a href="javascript:void(0);">Silya Reckz</a>
                                                        <p>Newyork</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="{{ url('rental-order') }}" class="btn-primary">Book Now</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /Rent List -->

                            <!-- Pagination -->
                            <div class="col-lg-12">
                                <div class="grid-pagination grid-pagination-map">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item prev">
                                            <a class="page-link" href="javascript:void(0);"><i
                                                    class="fa-solid fa-arrow-left"></i>
                                                Prev</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="javascript:void(0);">1</a>
                                        </li>
                                        <li class="page-item active">
                                            <a class="page-link" href="javascript:void(0);">2</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="javascript:void(0);">3</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="javascript:void(0);">15</a>
                                        </li>
                                        <li class="page-item next">
                                            <a class="page-link" href="javascript:void(0);">Next <i
                                                    class="fa-solid fa-arrow-right"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- /Pagination -->

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Content -->
@endsection
