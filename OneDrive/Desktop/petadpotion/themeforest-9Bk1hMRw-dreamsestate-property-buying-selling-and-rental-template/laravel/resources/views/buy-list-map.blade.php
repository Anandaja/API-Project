<?php $page = 'buy-list-map'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            Buy Property List With Map
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            Buy Property List With Map
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

                <!-- Sidebar -->
                <div class="col-xl-7 col-sm-12 map-content">
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

                    <div class="feature-property-sec rent-grid p-0 bg-white buy-list rental-map">
                        <div class="row ">

                            <!-- Buy List -->
                            <div class="col-lg-12">
                                <div class="product-custom">
                                    <div class="profile-widget rent-list-view">
                                        <div class="doc-img">
                                            <a href="{{ url('buy-details') }}" class="property-img">
                                                <img class="img-fluid" alt="Product image"
                                                    src="{{ URL::asset('/assets/img/rent/rent-list-01.jpg') }}">
                                            </a>
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
                                                    <div class="favourite selected">
                                                        <span><i class="fa-regular fa-heart"></i></span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="user-avatar">
                                                <img src="{{ URL::asset('/assets/img/profiles/avatar-02.jpg') }}"
                                                    alt="">
                                            </div>
                                        </div>
                                        <div class="pro-content">
                                            <div class="list-head">
                                                <div class="rating">
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <span class="me-1">5.0</span> (20 Reviews)
                                                    <div class="product-name-price">
                                                        <h3 class="title">
                                                            <a href="{{ url('buy-details') }}" tabindex="-1">Place perfect
                                                                for nature</a>
                                                        </h3>
                                                        <div class="product-amount">
                                                            <h5><span>$41,400 </span></h5>
                                                        </div>
                                                    </div>
                                                    <p><i class="feather-map-pin"></i> 318-330 S Oakley Blvd, Chicago, IL
                                                        60612, USA</p>
                                                </div>

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
                                                    2 Baths
                                                </li>
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                        alt="building-icon">
                                                    7000 Sqft
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
                            <!-- /Buy List -->

                            <!-- Buy List -->
                            <div class="col-lg-12">
                                <div class="product-custom">
                                    <div class="profile-widget rent-list-view">
                                        <div class="doc-img">
                                            <a href="{{ url('buy-details') }}" class="property-img">
                                                <img class="img-fluid" alt="Product image"
                                                    src="{{ URL::asset('/assets/img/rent/rent-list-02.jpg') }}">
                                            </a>
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
                                                <img src="{{ URL::asset('/assets/img/profiles/avatar-01.jpg') }}"
                                                    alt="">
                                            </div>
                                        </div>
                                        <div class="pro-content">
                                            <div class="list-head">
                                                <div class="rating">
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star"></i>
                                                    <span class="me-1">4.0</span> (12 Reviews)
                                                    <div class="product-name-price">
                                                        <h3 class="title">
                                                            <a href="{{ url('buy-details') }}" tabindex="-1">Modern
                                                                Apartment</a>
                                                        </h3>
                                                        <div class="product-amount">
                                                            <h5><span>$1,400 </span></h5>
                                                        </div>
                                                    </div>
                                                    <p><i class="feather-map-pin"></i> 318-330 S Oakley Blvd, Chicago, IL
                                                        60612, USA</p>
                                                </div>
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
                            <!-- /Buy List -->

                            <!-- Buy List -->
                            <div class="col-lg-12">
                                <div class="product-custom">
                                    <div class="profile-widget rent-list-view">
                                        <div class="doc-img">
                                            <a href="{{ url('buy-details') }}" class="property-img">
                                                <img class="img-fluid" alt="Product image"
                                                    src="{{ URL::asset('/assets/img/rent/rent-list-03.jpg') }}">
                                            </a>
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
                                                    alt="">
                                            </div>
                                        </div>
                                        <div class="pro-content">
                                            <div class="list-head">
                                                <div class="rating">
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <span class="me-1">5.0</span> (3 Reviews)
                                                    <div class="product-name-price">
                                                        <h3 class="title">
                                                            <a href="{{ url('buy-details') }}" tabindex="-1">Two storey
                                                                modern flat</a>
                                                        </h3>
                                                        <div class="product-amount">
                                                            <h5><span>$21,400 </span></h5>
                                                        </div>
                                                    </div>
                                                    <p><i class="feather-map-pin"></i> 470 Park Ave S, New York, NY 10016
                                                    </p>
                                                </div>
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
                                                    2 Baths
                                                </li>
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                        alt="building-icon">
                                                    31000 Sqft
                                                </li>
                                            </ul>
                                            <ul class="property-category d-flex justify-content-between">
                                                <li>
                                                    <span class="list">Listed on : </span>
                                                    <span class="date">13 Jan 2023</span>
                                                </li>
                                                <li>
                                                    <span class="category list">Category : </span>
                                                    <span class="category-value date">Flat</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /Buy List -->

                            <!-- Buy List -->
                            <div class="col-lg-12">
                                <div class="product-custom">
                                    <div class="profile-widget rent-list-view">
                                        <div class="doc-img">
                                            <a href="{{ url('buy-details') }}" class="property-img">
                                                <img class="img-fluid" alt="Product image"
                                                    src="{{ URL::asset('/assets/img/rent/rent-list-04.jpg') }}">
                                            </a>
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
                                                    alt="">
                                            </div>
                                        </div>
                                        <div class="pro-content">
                                            <div class="list-head">
                                                <div class="rating">
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star "></i>
                                                    <i class="fa fa-star "></i>
                                                    <span class="me-1">3.0</span> (3 Reviews)
                                                    <div class="product-name-price">
                                                        <h3 class="title">
                                                            <a href="{{ url('buy-details') }}" tabindex="-1">Beautiful
                                                                Condo Room</a>
                                                        </h3>
                                                        <div class="product-amount">
                                                            <h5><span>$12,400 </span></h5>
                                                        </div>
                                                    </div>

                                                    <p><i class="feather-map-pin"></i> 470 Park Ave S, New York, NY 10016
                                                    </p>
                                                </div>
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
                                                    5000 Sqft
                                                </li>
                                            </ul>
                                            <ul class="property-category d-flex justify-content-between">
                                                <li>
                                                    <span class="list">Listed on : </span>
                                                    <span class="date">17 Jan 2023</span>
                                                </li>
                                                <li>
                                                    <span class="category list">Category : </span>
                                                    <span class="category-value date"> Home</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /Buy List -->

                            <!-- Buy List -->
                            <div class="col-lg-12">
                                <div class="product-custom">
                                    <div class="profile-widget rent-list-view">
                                        <div class="doc-img">
                                            <a href="{{ url('buy-details') }}" class="property-img">
                                                <img class="img-fluid" alt="Product image"
                                                    src="{{ URL::asset('/assets/img/rent/rent-list-05.jpg') }}">
                                            </a>
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
                                                <img src="{{ URL::asset('/assets/img/profiles/avatar-05.jpg') }}"
                                                    alt="">
                                            </div>
                                        </div>
                                        <div class="pro-content">
                                            <div class="list-head">
                                                <div class="rating">
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <i class="fa fa-star checked"></i>
                                                    <span class="me-1">5.0</span> (30 Reviews)
                                                    <div class="product-name-price">
                                                        <h3 class="title">
                                                            <a href="{{ url('buy-details') }}" tabindex="-1">Minimalist
                                                                bright flat</a>
                                                        </h3>
                                                        <div class="product-amount">
                                                            <h5><span>$48,400 </span></h5>
                                                        </div>
                                                    </div>
                                                    <p><i class="feather-map-pin"></i>518-520 8th Ave, New York, NY 10018,
                                                        USA</p>
                                                </div>

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
                                                    31000 Sqft
                                                </li>
                                            </ul>
                                            <ul class="property-category d-flex justify-content-between">
                                                <li>
                                                    <span class="list">Listed on : </span>
                                                    <span class="date">27 Jan 2023</span>
                                                </li>
                                                <li>
                                                    <span class="category list">Category : </span>
                                                    <span class="category-value date"> Home</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /Buy List -->

                            <!-- Pagination -->
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
