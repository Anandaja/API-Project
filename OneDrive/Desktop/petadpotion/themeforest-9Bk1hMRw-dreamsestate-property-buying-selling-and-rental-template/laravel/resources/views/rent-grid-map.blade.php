<?php $page = 'rent-grid-map'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            Rent Property Grid With Map
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            Rent Property Grid With Map
        @endslot
    @endcomponent

    <!-- Content -->
    <div class="content p-0">
        <div class="container-fluid">
            <div class="row">

                <!-- Map -->
                <div class="col-xl-5 col-sm-12 map-right grid-map">
                    <div id="map" class="map-listing"></div>
                </div>
                <!-- /Map -->

                <!-- Rent -->
                <div class="col-xl-7 col-sm-12 no-map map-content">

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

                    <div class="feature-property-sec for-rent rent-grid p-0 bg-white">
                        <div class="row ">

                            <!-- Rent Grid -->
                            <div class="col-lg-6 col-12 d-flex">
                                <div class="product-custom flex-fill">
                                    <div class="profile-widget">
                                        <div class="doc-img">
                                            <a href="{{ url('rent-details') }}" class="property-img">
                                                <img class="img-fluid" alt="Product image"
                                                    src="{{ URL::asset('/assets/img/product/product-6.jpg') }}">
                                            </a>
                                            <div class="product-amount">
                                                <h5><span>$2,200 </span> / night</h5>
                                            </div>
                                            <div class="featured">
                                                <span>Featured</span>
                                            </div>
                                            <div class="new-featured">
                                                <span>New</span>
                                            </div>
                                            <a href="javascript:void(0)">
                                                <div class="favourite">
                                                    <span><i class="fa-regular fa-heart"></i></span>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="pro-content">
                                            <div class="rating">
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star checked"></i>
                                                Excellent
                                            </div>
                                            <h3 class="title">
                                                <a href="{{ url('rent-details') }}" tabindex="-1">Beautiful Condo Room</a>
                                            </h3>
                                            <p><i class="feather-map-pin"></i> 318-S Oakley Blvd, Chicago, IL 60612, USA</p>
                                            <ul class="d-flex details">
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                        alt="bed-icon">
                                                    2 Beds
                                                </li>
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                        alt="bath-icon">
                                                    2 Baths
                                                </li>
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                        alt="building-icon">
                                                    13000 Sqft
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
                            <!-- /Rent Grid -->

                            <!-- Rent Grid -->
                            <div class="col-lg-6 col-12 d-flex">
                                <div class="product-custom flex-fill">
                                    <div class="profile-widget">
                                        <div class="doc-img">
                                            <a href="{{ url('rent-details') }}" class="property-img">
                                                <img class="img-fluid" alt="Product image"
                                                    src="{{ URL::asset('/assets/img/product/product-8.jpg') }}">
                                            </a>
                                            <div class="product-amount">
                                                <h5><span>$1,500 </span> / night</h5>
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
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star checked"></i>
                                                Excellent
                                            </div>
                                            <h3 class="title">
                                                <a href="{{ url('rent-details') }}" tabindex="-1">Royal Apartment</a>
                                            </h3>
                                            <p><i class="feather-map-pin"></i> 82-25 Parsons Blvd, Jamaica, NY 11432, USA
                                            </p>
                                            <ul class="d-flex details">
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                        alt="bed-icon">
                                                    3 Beds
                                                </li>
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                        alt="bath-icon">
                                                    4 Baths
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
                                                            src="{{ URL::asset('/assets/img/profiles/avatar-03.jpg') }}"
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
                            <!-- /Rent Grid -->

                            <!-- Rent Grid -->
                            <div class="col-lg-6 col-12 d-flex">
                                <div class="product-custom flex-fill">
                                    <div class="profile-widget">
                                        <div class="doc-img">
                                            <a href="{{ url('rent-details') }}" class="property-img">
                                                <img class="img-fluid" alt="Product image"
                                                    src="{{ URL::asset('/assets/img/product/product-7.jpg') }}">
                                            </a>
                                            <div class="product-amount">
                                                <h5><span>$1,400 </span> / night</h5>
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
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star checked"></i>
                                                Excellent
                                            </div>
                                            <h3 class="title">
                                                <a href="{{ url('rent-details') }}" tabindex="-1">Grand Mahaka</a>
                                            </h3>
                                            <p><i class="feather-map-pin"></i> 470 Park Ave S, New York, NY 10016</p>
                                            <ul class="d-flex details">
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                        alt="bed-icon">
                                                    2 Beds
                                                </li>
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                        alt="bath-icon">
                                                    3 Baths
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
                                                            src="{{ URL::asset('/assets/img/profiles/avatar-02.jpg') }}"
                                                            class="img-fluid avatar" alt=""></a>
                                                    <div class="user-name">
                                                        <a href="javascript:void(0);">karen Maria</a>
                                                        <p>South Dokata</p>
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
                            <!-- /Rent Grid -->

                            <!-- Rent Grid -->
                            <div class="col-lg-6 col-12 d-flex">
                                <div class="product-custom flex-fill">
                                    <div class="profile-widget">
                                        <div class="doc-img">
                                            <a href="{{ url('rent-details') }}" class="property-img">
                                                <img class="img-fluid" alt="Product image"
                                                    src="{{ URL::asset('/assets/img/product/product-9.jpg') }}">
                                            </a>
                                            <div class="product-amount">
                                                <h5><span>$3,500 </span> / night</h5>
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
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star checked"></i>
                                                <i class="fa fa-star checked"></i>
                                                Excellent
                                            </div>
                                            <h3 class="title">
                                                <a href="{{ url('rent-details') }}" tabindex="-1">Lunaria Residence</a>
                                            </h3>
                                            <p><i class="feather-map-pin"></i> 518-520 8th Ave, New York, NY 10018, USA</p>
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
                                                    35000 Sqft
                                                </li>
                                            </ul>
                                            <ul
                                                class="property-category d-flex justify-content-between align-items-center">
                                                <li class="user-info">
                                                    <a href="javascript:void(0);"><img
                                                            src="{{ URL::asset('/assets/img/profiles/avatar-04.jpg') }}"
                                                            class="img-fluid avatar" alt=""></a>
                                                    <div class="user-name">
                                                        <a href="javascript:void(0);">Burdette</a>
                                                        <p>Cambridge</p>
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
                            <!-- /Rent Grid -->

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
                                            <a class="page-link" href="javascript:void(0);">.3</a>
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
                <!-- /Rent -->

            </div>
        </div>
    </div>
    <!-- /Content -->
@endsection
