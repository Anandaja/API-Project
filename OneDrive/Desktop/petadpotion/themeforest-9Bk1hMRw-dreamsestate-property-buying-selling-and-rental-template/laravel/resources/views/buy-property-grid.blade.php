<?php $page = 'buy-property-grid'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            Buy property Grid without Sidebar
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            Buy property Grid without Sidebar
        @endslot
    @endcomponent

    <!-- Feature Property For Rent -->
    <div class="listing-section">
        <div class="container">

            @component('components.buy-sortresult')
            @endcomponent

            <div class=" for-rent p-0">
                <div class="row">

                    <!-- Buy grid -->
                    <div class="col-lg-4 col-md-6">
                        <div class="product-custom">
                            <div class="profile-widget">
                                <div class="doc-img">
                                    <a href="{{ url('buy-details') }}" class="property-img">
                                        <img class="img-fluid" alt="Property Image"
                                            src="{{ URL::asset('assets/img/product/product-1.jpg') }}">
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
                                        <img src="{{ URL::asset('assets/img/profiles/avatar-01.jpg') }}" alt="User">
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
                                        <p class="rating-review"><span>5.0</span>(20 Reviews)</p>
                                    </div>
                                    <h3 class="title">
                                        <a href="{{ url('buy-details') }}" tabindex="-1">Place perfect for nature</a>
                                    </h3>
                                    <p><i class="feather-map-pin"></i> 318-S Oakley Blvd, Chicago, IL 60612, USA</p>
                                    <ul class="d-flex details">
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/bed-icon.svg') }}" alt="bed-icon">
                                            4 Beds
                                        </li>
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/bath-icon.svg') }}" alt="bath-icon">
                                            4 Baths
                                        </li>
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/building-icon.svg') }}"
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
                    <div class="col-lg-4 col-md-6">
                        <div class="product-custom">
                            <div class="profile-widget">
                                <div class="doc-img">
                                    <a href="{{ url('buy-details') }}" class="property-img">
                                        <img class="img-fluid" alt="Property Image"
                                            src="{{ URL::asset('assets/img/product/product-2.jpg') }}">
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
                                            <div class="favourite  selected">
                                                <span><i class="fa-regular fa-heart"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="user-avatar">
                                        <img src="{{ URL::asset('assets/img/profiles/avatar-02.jpg') }}" alt="User">
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
                                        <p class="rating-review"><span>4.0</span>(12 Reviews)</p>
                                    </div>
                                    <h3 class="title">
                                        <a href="{{ url('buy-details') }}" tabindex="-1">Beautiful Condo Room</a>
                                    </h3>
                                    <p><i class="feather-map-pin"></i> 470 Park Ave S, New York, NY 10016</p>
                                    <ul class="d-flex details">
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/bed-icon.svg') }}" alt="bed-icon">
                                            3 Beds
                                        </li>
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/bath-icon.svg') }}" alt="bath-icon">
                                            2 Baths
                                        </li>
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/building-icon.svg') }}"
                                                alt="building-icon">
                                            16000 Sqft
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
                    <div class="col-lg-4 col-md-6">
                        <div class="product-custom">
                            <div class="profile-widget">
                                <div class="doc-img">
                                    <a href="{{ url('buy-details') }}" class="property-img">
                                        <img class="img-fluid" alt="Property Image"
                                            src="{{ URL::asset('assets/img/product/product-3.jpg') }}">
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
                                        <img src="{{ URL::asset('assets/img/profiles/avatar-03.jpg') }}" alt="User">
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
                                        <p class="rating-review"><span>3.0</span>(15 Reviews)</p>
                                    </div>
                                    <h3 class="title">
                                        <a href="{{ url('buy-details') }}" tabindex="-1">Summer house</a>
                                    </h3>
                                    <p><i class="feather-map-pin"></i> 82-25 Parsons Blvd, Jamaica, NY 11432, USA</p>
                                    <ul class="d-flex details">
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/bed-icon.svg') }}" alt="bed-icon">
                                            2 Beds
                                        </li>
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/bath-icon.svg') }}"
                                                alt="bath-icon">
                                            3 Baths
                                        </li>
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/building-icon.svg') }}"
                                                alt="building-icon">
                                            32000 Sqft
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
                    <div class="col-lg-4 col-sm-6 col-12">
                        <div class="product-custom">
                            <div class="profile-widget">
                                <div class="doc-img">
                                    <a href="{{ url('buy-details') }}" class="property-img">
                                        <img class="img-fluid" alt="Property Image"
                                            src="{{ URL::asset('assets/img/product/product-4.jpg') }}">
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
                                            <div class="favourite  selected">
                                                <span><i class="fa-regular fa-heart"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="user-avatar">
                                        <img src="{{ URL::asset('assets/img/profiles/avatar-04.jpg') }}" alt="User">
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
                                        <p class="rating-review"><span>4.0</span>(13 Reviews)</p>
                                    </div>
                                    <h3 class="title">
                                        <a href="{{ url('buy-details') }}" tabindex="-1">Minimalist and bright flat</a>
                                    </h3>
                                    <p><i class="feather-map-pin"></i> 518-520 8th Ave, New York, NY 10018, USA</p>
                                    <ul class="d-flex details">
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/bed-icon.svg') }}" alt="bed-icon">
                                            3 Beds
                                        </li>
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/bath-icon.svg') }}"
                                                alt="bath-icon">
                                            2 Baths
                                        </li>
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/building-icon.svg') }}"
                                                alt="building-icon">
                                            18000 Sqft
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

                    <!-- Buy grid -->
                    <div class="col-lg-4 col-sm-6 col-12">
                        <div class="product-custom">
                            <div class="profile-widget">
                                <div class="doc-img">
                                    <a href="{{ url('buy-details') }}" class="property-img">
                                        <img class="img-fluid" alt="Property Image"
                                            src="{{ URL::asset('assets/img/product/product-5.jpg') }}">
                                    </a>
                                    <div class="product-amount">
                                        <span>$29,000</span>
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
                                        <img src="{{ URL::asset('assets/img/profiles/avatar-05.jpg') }}" alt="User">
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
                                        <p class="rating-review"><span>5.0</span>(8 Reviews)</p>
                                    </div>
                                    <h3 class="title">
                                        <a href="{{ url('buy-details') }}" tabindex="-1">Two storey modern flat</a>
                                    </h3>
                                    <p><i class="feather-map-pin"></i> 470 Park Ave S, New York, NY 10016</p>
                                    <ul class="d-flex details">
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/bed-icon.svg') }}" alt="bed-icon">
                                            3 Beds
                                        </li>
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/bath-icon.svg') }}"
                                                alt="bath-icon">
                                            1 Bath
                                        </li>
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/building-icon.svg') }}"
                                                alt="building-icon">
                                            14000 Sqft
                                        </li>
                                    </ul>

                                    <ul class="property-category d-flex justify-content-between">
                                        <li>
                                            <span class="list">Listed on : </span>
                                            <span class="date">19 Jan 2023</span>
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
                    <!-- /Buy grid -->

                    <!-- Buy grid -->
                    <div class="col-lg-4 col-sm-6 col-12">
                        <div class="product-custom">
                            <div class="profile-widget">
                                <div class="doc-img">
                                    <a href="{{ url('buy-details') }}" class="property-img">
                                        <img class="img-fluid" alt="Property Image"
                                            src="{{ URL::asset('assets/img/product/product-2.jpg') }}">
                                    </a>
                                    <div class="product-amount">
                                        <span>80,000</span>
                                    </div>
                                    <div class="feature-rating">
                                        <div>
                                            <div class="featured">
                                                <span>Featured</span>
                                            </div>
                                        </div>
                                        <a href="javascript:void(0)">
                                            <div class="favourite  selected">
                                                <span><i class="fa-regular fa-heart"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="user-avatar">
                                        <img src="{{ URL::asset('assets/img/profiles/avatar-06.jpg') }}" alt="User">
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
                                        <p class="rating-review"><span>4.0</span>(13 Reviews)</p>
                                    </div>
                                    <h3 class="title">
                                        <a href="{{ url('buy-details') }}" tabindex="-1">Modern apartment</a>
                                    </h3>
                                    <p><i class="feather-map-pin"></i> 122 N Morgan St, Chicago, IL 60607, USA</p>
                                    <ul class="d-flex details">
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/bed-icon.svg') }}" alt="bed-icon">
                                            3 Beds
                                        </li>
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/bath-icon.svg') }}"
                                                alt="bath-icon">
                                            2 Baths
                                        </li>
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/building-icon.svg') }}"
                                                alt="building-icon">
                                            16000 Sqft
                                        </li>
                                    </ul>

                                    <ul class="property-category d-flex justify-content-between">
                                        <li>
                                            <span class="list">Listed on : </span>
                                            <span class="date">20 Jan 2023</span>
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
                    <div class="col-lg-4 col-sm-6 col-12">
                        <div class="product-custom">
                            <div class="profile-widget">
                                <div class="doc-img">
                                    <a href="{{ url('buy-details') }}" class="property-img">
                                        <img class="img-fluid" alt="Property Image"
                                            src="{{ URL::asset('assets/img/product/product-4.jpg') }}">
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
                                        <img src="{{ URL::asset('assets/img/profiles/avatar-07.jpg') }}" alt="User">
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
                                        <a href="{{ url('buy-details') }}" tabindex="-1">Mountain Cabin</a>
                                    </h3>
                                    <p><i class="feather-map-pin"></i> 518-520 8th Ave, New York, NY 10018, USA</p>
                                    <ul class="d-flex details">
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/bed-icon.svg') }}" alt="bed-icon">
                                            2 Beds
                                        </li>
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/bath-icon.svg') }}"
                                                alt="bath-icon">
                                            3 Baths
                                        </li>
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/building-icon.svg') }}"
                                                alt="building-icon">
                                            24000 Sqft
                                        </li>
                                    </ul>

                                    <ul class="property-category d-flex justify-content-between">
                                        <li>
                                            <span class="list">Listed on : </span>
                                            <span class="date">21 Jan 2023</span>
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

                    <!-- Buy grid -->
                    <div class="col-lg-4 col-sm-6 col-12">
                        <div class="product-custom">
                            <div class="profile-widget">
                                <div class="doc-img">
                                    <a href="{{ url('buy-details') }}" class="property-img">
                                        <img class="img-fluid" alt="Property Image"
                                            src="{{ URL::asset('assets/img/product/product-8.jpg') }}">
                                    </a>
                                    <div class="product-amount">
                                        <span>$41000</span>
                                    </div>
                                    <div class="feature-rating">
                                        <div>
                                            <div class="featured">
                                                <span>Featured</span>
                                            </div>
                                        </div>
                                        <a href="javascript:void(0)">
                                            <div class="favourite  selected">
                                                <span><i class="fa-regular fa-heart"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="user-avatar">
                                        <img src="{{ URL::asset('assets/img/profiles/avatar-05.jpg') }}" alt="User">
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
                                        <a href="{{ url('buy-details') }}" tabindex="-1">Park House</a>
                                    </h3>
                                    <p><i class="feather-map-pin"></i> 318-S Oakley Blvd, Chicago, IL 60612, USA</p>
                                    <ul class="d-flex details">
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/bed-icon.svg') }}" alt="bed-icon">
                                            2 Beds
                                        </li>
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/bath-icon.svg') }}"
                                                alt="bath-icon">
                                            3 Baths
                                        </li>
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/building-icon.svg') }}"
                                                alt="building-icon">
                                            15000 Sqft
                                        </li>
                                    </ul>

                                    <ul class="property-category d-flex justify-content-between">
                                        <li>
                                            <span class="list">Listed on : </span>
                                            <span class="date">11 Jan 2023</span>
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
                    <div class="col-lg-4 col-md-6">
                        <div class="product-custom">
                            <div class="profile-widget">
                                <div class="doc-img">
                                    <a href="{{ url('buy-details') }}" class="property-img">
                                        <img class="img-fluid" alt="Property Image"
                                            src="{{ URL::asset('assets/img/product/product-7.jpg') }}">
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
                                            <div class="favourite  selected">
                                                <span><i class="fa-regular fa-heart"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="user-avatar">
                                        <img src="{{ URL::asset('assets/img/profiles/avatar-03.jpg') }}" alt="User">
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
                                        <p class="rating-review"><span>4.0</span>(8 Reviews)</p>
                                    </div>
                                    <h3 class="title">
                                        <a href="{{ url('buy-details') }}" tabindex="-1">White Stylish Loft</a>
                                    </h3>
                                    <p><i class="feather-map-pin"></i> 82-25 Parsons Blvd, Jamaica, NY 11432, USA</p>
                                    <ul class="d-flex details">
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/bed-icon.svg') }}" alt="bed-icon">
                                            2 Beds
                                        </li>
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/bath-icon.svg') }}"
                                                alt="bath-icon">
                                            2 Baths
                                        </li>
                                        <li>
                                            <img src="{{ URL::asset('assets/img/icons/building-icon.svg') }}"
                                                alt="building-icon">
                                            23000 Sqft
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

                </div>
            </div>
        </div>
    </div>
    <!-- /Feature Property For Rent -->
@endsection
