<?php $page = 'buy-grid-map'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            Buy Property Grid With Map
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            Buy Property Grid With Map
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

                    @component('components.buy-sortresult')
                    @endcomponent

                    <div class="feature-property-sec rent-grid p-0 bg-white">
                        <div class="row ">

                            <!-- Buy grid -->
                            <div class="col-lg-6 d-flex">
                                <div class="product-custom flex-fill">
                                    <div class="profile-widget">
                                        <div class="doc-img">
                                            <a href="{{ url('buy-details') }}" class="property-img">
                                                <img class="img-fluid" alt="Property Image"
                                                    src="{{ URL::asset('/assets/img/product/product-1.jpg') }}">
                                            </a>
                                            <div class="product-amount">
                                                <span>$41,000</span>
                                            </div>
                                            <div class="feature-rating">
                                                <div>
                                                    <div class="featured">
                                                        <span>Featured</span>
                                                    </div>
                                                    <div class="new-featured">
                                                        <span>New</span>
                                                    </div>
                                                </div>
                                                <a href="javascript:void(0)">
                                                    <div class="favourite">
                                                        <span><i class="fa-regular fa-heart"></i></span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="user-avatar">
                                                <img src="{{ URL::asset('/assets/img/profiles/avatar-01.jpg') }}"
                                                    alt="User">
                                            </div>
                                        </div>
                                        <div class="pro-content">
                                            <div class="rating">
                                                <span class="rating-count">
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </span>
                                                <p class="rating-review"><span>4.0</span>(5 Reviews)</p>
                                            </div>
                                            <h3 class="title">
                                                <a href="{{ url('buy-details') }}" tabindex="-1">Place perfect for
                                                    nature</a>
                                            </h3>
                                            <p><i class="feather-map-pin"></i> 318-S Oakley Blvd, Chicago, IL 60612,
                                                USA</p>
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

                                            <ul class="property-category d-flex justify-content-between">
                                                <li>
                                                    <span class="list">Listed on : </span>
                                                    <span class="date">16 Jan 2023</span>
                                                </li>
                                                <li>
                                                    <span class="category list">Category : </span>
                                                    <span class="category-value date">Apartment</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /Buy grid -->

                            <!-- Buy grid -->
                            <div class="col-lg-6 d-flex">
                                <div class="product-custom flex-fill">
                                    <div class="profile-widget">
                                        <div class="doc-img">
                                            <a href="{{ url('buy-details') }}" class="property-img">
                                                <img class="img-fluid" alt="Property Image"
                                                    src="{{ URL::asset('/assets/img/product/product-2.jpg') }}">
                                            </a>
                                            <div class="product-amount">
                                                <span>$78,000</span>
                                            </div>
                                            <div class="feature-rating">
                                                <div>
                                                    <div class="featured">
                                                        <span>Featured</span>
                                                    </div>
                                                </div>
                                                <a href="javascript:void(0)">
                                                    <div class="favourite">
                                                        <span><i class="fa-regular fa-heart"></i></span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="user-avatar">
                                                <img src="{{ URL::asset('/assets/img/profiles/avatar-02.jpg') }}"
                                                    alt="User">
                                            </div>
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
                                                <p class="rating-review"><span>5.0</span>(12 Reviews)</p>
                                            </div>
                                            <h3 class="title">
                                                <a href="{{ url('buy-details') }}" tabindex="-1">Beautiful Condo
                                                    Room</a>
                                            </h3>
                                            <p><i class="feather-map-pin"></i> 470 Park Ave S, New York, NY 10016
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
                                                    1 Bath
                                                </li>
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                        alt="building-icon">
                                                    12000 Sqft
                                                </li>
                                            </ul>

                                            <ul class="property-category d-flex justify-content-between">
                                                <li>
                                                    <span class="list">Listed on : </span>
                                                    <span class="date">17 Jan 2023</span>
                                                </li>
                                                <li>
                                                    <span class="category list">Category : </span>
                                                    <span class="category-value date">Condos</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /Buy grid -->

                            <!-- Buy grid -->
                            <div class="col-lg-6 d-flex">
                                <div class="product-custom flex-fill">
                                    <div class="profile-widget">
                                        <div class="doc-img">
                                            <a href="{{ url('buy-details') }}" class="property-img">
                                                <img class="img-fluid" alt="Property Image"
                                                    src="{{ URL::asset('/assets/img/product/product-3.jpg') }}">
                                            </a>
                                            <div class="product-amount">
                                                <span>$63,000</span>
                                            </div>
                                            <div class="feature-rating">
                                                <div>
                                                    <div class="featured">
                                                        <span>Featured</span>
                                                    </div>
                                                </div>
                                                <a href="javascript:void(0)">
                                                    <div class="favourite">
                                                        <span><i class="fa-regular fa-heart"></i></span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="user-avatar">
                                                <img src="{{ URL::asset('/assets/img/profiles/avatar-03.jpg') }}"
                                                    alt="User">
                                            </div>
                                        </div>
                                        <div class="pro-content">
                                            <div class="rating">
                                                <span class="rating-count">
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </span>
                                                <p class="rating-review"><span>3.0</span>(8 Reviews)</p>
                                            </div>
                                            <h3 class="title">
                                                <a href="{{ url('buy-details') }}" tabindex="-1">Summer house</a>
                                            </h3>
                                            <p><i class="feather-map-pin"></i> 82-25 Parsons Blvd, Jamaica, NY
                                                11432, USA</p>
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
                                                    2300 Sqft
                                                </li>
                                            </ul>

                                            <ul class="property-category d-flex justify-content-between">
                                                <li>
                                                    <span class="list">Listed on : </span>
                                                    <span class="date">13 Jan 2023</span>
                                                </li>
                                                <li>
                                                    <span class="category list">Category : </span>
                                                    <span class="category-value date">House</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /Buy grid -->

                            <!-- Buy grid -->
                            <div class="col-lg-6 d-flex">
                                <div class="product-custom flex-fill">
                                    <div class="profile-widget">
                                        <div class="doc-img">
                                            <a href="{{ url('buy-details') }}" class="property-img">
                                                <img class="img-fluid" alt="Property Image"
                                                    src="{{ URL::asset('/assets/img/product/product-4.jpg') }}">
                                            </a>
                                            <div class="product-amount">
                                                <span>$51,000</span>
                                            </div>
                                            <div class="feature-rating">
                                                <div>
                                                    <div class="featured">
                                                        <span>Featured</span>
                                                    </div>
                                                </div>
                                                <a href="javascript:void(0)">
                                                    <div class="favourite">
                                                        <span><i class="fa-regular fa-heart"></i></span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="user-avatar">
                                                <img src="{{ URL::asset('/assets/img/profiles/avatar-04.jpg') }}"
                                                    alt="User">
                                            </div>
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
                                                <p class="rating-review"><span>5.0</span>(18 Reviews)</p>
                                            </div>
                                            <h3 class="title">
                                                <a href="{{ url('buy-details') }}" tabindex="-1">Minimalist and bright
                                                    flat</a>
                                            </h3>
                                            <p><i class="feather-map-pin"></i> 518-520 8th Ave, New York, NY 10018,
                                                USA</p>
                                            <ul class="d-flex details">
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                        alt="bed-icon">
                                                    3 Beds
                                                </li>
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                        alt="bath-icon">
                                                    3 Baths
                                                </li>
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                        alt="building-icon">
                                                    12000 Sqft
                                                </li>
                                            </ul>

                                            <ul class="property-category d-flex justify-content-between">
                                                <li>
                                                    <span class="list">Listed on : </span>
                                                    <span class="date">18 Jan 2023</span>
                                                </li>
                                                <li>
                                                    <span class="category list">Category : </span>
                                                    <span class="category-value date">Flats</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /Buy grid -->

                            <!-- Pagination -->
                            <div class="col-lg-12">
                                <div class="col-lg-12">
                                    <div class="grid-pagination grid-pagination-map">
                                        <ul class="pagination justify-content-center">
                                            <li class="page-item prev">
                                                <a class="page-link" href="javascript:void(0);"><i
                                                        class="fa-solid fa-arrow-left"></i> Prev</a>
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
                                                <a class="page-link" href="javascript:void(0);">4</a>
                                            </li>
                                            <li class="page-item next">
                                                <a class="page-link" href="javascript:void(0);">Next <i
                                                        class="fa-solid fa-arrow-right"></i></a>
                                            </li>
                                        </ul>
                                    </div>
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
