<?php $page = 'rent-property-grid-sidebar'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            Rent property Grid with Sidebar
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            Rent property Grid with Sidebar
        @endslot
    @endcomponent

    <!-- Feature Property For Rent -->
    <section class="feature-property-sec for-rent content">
        <div class="container">

            @component('components.rent-sortresult')
            @endcomponent

            <div class="row">

                @component('components.search')
                @endcomponent

                <div class="col-lg-8">
                    <div class="row">

                        <!-- Rent grid -->
                        <div class="col-lg-6 col-md-6">
                            <div class="product-custom">
                                <div class="profile-widget">
                                    <div class="doc-img">
                                        <a href="{{ url('rent-details') }}" class="property-img">
                                            <img class="img-fluid" alt="Property Image"
                                                src="{{ URL::asset('/assets/img/product/product-6.jpg') }}">
                                        </a>
                                        <div class="product-amount">
                                            <h5><span>$2,200 </span> / Night</h5>
                                        </div>
                                        <div class="featured">
                                            <span>Featured</span>
                                        </div>
                                        <div class="new-featured">
                                            <span>New</span>
                                        </div>
                                        <a href="javascript:void(0)">
                                            <div class="favourite selected">
                                                <i class="fa-regular fa-heart"></i>
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
                                            <a href="{{ url('rent-details') }}">Beautiful Condo Room</a>
                                        </h3>
                                        <p><i class="feather-map-pin"></i> 318-S Oakley Blvd, Chicago, IL 60612, USA</p>
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
                                        <ul class="property-category d-flex justify-content-between align-items-center">
                                            <li class="user-info">
                                                <a href="{{ url('agent-grid') }}"><img
                                                        src="{{ URL::asset('/assets/img/profiles/avatar-01.jpg') }}"
                                                        class="img-fluid avatar" alt="User"></a>
                                                <div class="user-name">
                                                    <a href="{{ url('agent-grid') }}">Marc Silva</a>
                                                    <p>Newyork</p>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="{{ url('rent-details') }}" class="btn-primary">Book Now</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Rent grid -->

                        <!-- Rent grid -->
                        <div class="col-lg-6 col-md-6">
                            <div class="product-custom">
                                <div class="profile-widget">
                                    <div class="doc-img">
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
                                            <div class="favourite selected">
                                                <i class="fa-regular fa-heart"></i>
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
                                                1 Baths
                                            </li>
                                            <li>
                                                <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                    alt="building-icon">
                                                5000 Sqft
                                            </li>
                                        </ul>
                                        <ul class="property-category d-flex justify-content-between align-items-center">
                                            <li class="user-info">
                                                <a href="{{ url('agent-grid') }}"><img
                                                        src="{{ URL::asset('/assets/img/profiles/avatar-02.jpg') }}"
                                                        class="img-fluid avatar" alt="User"></a>
                                                <div class="user-name">
                                                    <a href="{{ url('agent-grid') }}">Karen Maria</a>
                                                    <p>South Dokata</p>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="{{ url('rent-details') }}" class="btn-primary">Book Now</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Rent grid -->

                        <!-- Rent grid -->
                        <div class="col-lg-6 col-md-6">
                            <div class="product-custom">
                                <div class="profile-widget">
                                    <div class="doc-img">
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
                                                <i class="fa-regular fa-heart"></i>
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
                                        <p><i class="feather-map-pin"></i> 82-25 Parsons Blvd, Jamaica, NY 11432, USA</p>
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
                                        <ul class="property-category d-flex justify-content-between align-items-center">
                                            <li class="user-info">
                                                <a href="{{ url('agent-grid') }}"><img
                                                        src="{{ URL::asset('/assets/img/profiles/avatar-03.jpg') }}"
                                                        class="img-fluid avatar" alt="User"></a>
                                                <div class="user-name">
                                                    <a href="{{ url('agent-grid') }}">Scott Gwin</a>
                                                    <p>Minipoliies</p>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="{{ url('rent-details') }}" class="btn-primary">Book Now</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Rent grid -->

                        <!-- Rent grid -->
                        <div class="col-lg-6 col-md-6">
                            <div class="product-custom">
                                <div class="profile-widget">
                                    <div class="doc-img">
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
                                                <i class="fa-regular fa-heart"></i>
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
                                                <i class="fa-solid fa-star"></i>
                                            </span>
                                            <span class="rating-review">Excellent</span>
                                        </div>
                                        <h3 class="title">
                                            <a href="{{ url('rent-details') }}">Lunaria Residence</a>
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
                                                2 Baths
                                            </li>
                                            <li>
                                                <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                    alt="building-icon">
                                                31000 Sqft
                                            </li>
                                        </ul>
                                        <ul class="property-category d-flex justify-content-between align-items-center">
                                            <li class="user-info">
                                                <a href="{{ url('agent-grid') }}"><img
                                                        src="{{ URL::asset('/assets/img/profiles/avatar-04.jpg') }}"
                                                        class="img-fluid avatar" alt="User"></a>
                                                <div class="user-name">
                                                    <a href="{{ url('agent-grid') }}">Burdette</a>
                                                    <p>Cambridge</p>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="{{ url('rent-details') }}" class="btn-primary">Book Now</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Rent grid -->

                        <!-- Rent grid -->
                        <div class="col-lg-6 col-md-6">
                            <div class="product-custom">
                                <div class="profile-widget">
                                    <div class="doc-img">
                                        <a href="{{ url('rent-details') }}" class="property-img">
                                            <img class="img-fluid" alt="Property Image"
                                                src="{{ URL::asset('/assets/img/product/product-10.jpg') }}">
                                        </a>
                                        <div class="product-amount">
                                            <h5><span>$4,500 </span> / Night</h5>
                                        </div>
                                        <div class="featured">
                                            <span>Featured</span>
                                        </div>
                                        <a href="javascript:void(0)">
                                            <div class="favourite selected">
                                                <i class="fa-regular fa-heart"></i>
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
                                            <a href="{{ url('rent-details') }}">Grand Villa house</a>
                                        </h3>
                                        <p><i class="feather-map-pin"></i> 470 Park Ave S, New York, NY 10016</p>
                                        <ul class="d-flex details">
                                            <li>
                                                <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                    alt="bed-icon">
                                                4 Beds
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
                                                <a href="{{ url('agent-grid') }}"><img
                                                        src="{{ URL::asset('/assets/img/profiles/avatar-05.jpg') }}"
                                                        class="img-fluid avatar" alt="User"></a>
                                                <div class="user-name">
                                                    <a href="{{ url('agent-grid') }}">Kell Robinson</a>
                                                    <p>USA</p>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="{{ url('rent-details') }}" class="btn-primary">Book Now</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Rent grid -->

                        <!-- Rent grid -->
                        <div class="col-lg-6 col-md-6">
                            <div class="product-custom">
                                <div class="profile-widget">
                                    <div class="doc-img">
                                        <a href="{{ url('rent-details') }}" class="property-img">
                                            <img class="img-fluid" alt="Property Image"
                                                src="{{ URL::asset('/assets/img/product/product-11.jpg') }}">
                                        </a>
                                        <div class="product-amount">
                                            <h5><span>$2,400 </span> / Night</h5>
                                        </div>
                                        <div class="featured">
                                            <span>Featured</span>
                                        </div>
                                        <a href="javascript:void(0)">
                                            <div class="favourite">
                                                <i class="fa-regular fa-heart"></i>
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
                                            <a href="{{ url('rent-details') }}">Stephen Alexander Homes</a>
                                        </h3>
                                        <p><i class="feather-map-pin"></i> 122 N Morgan St, Chicago, IL 60607, USA</p>
                                        <ul class="d-flex details">
                                            <li>
                                                <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                    alt="bed-icon">
                                                1 Beds
                                            </li>
                                            <li>
                                                <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                    alt="bath-icon">
                                                1 Baths
                                            </li>
                                            <li>
                                                <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                    alt="building-icon">
                                                7000 Sqft
                                            </li>
                                        </ul>
                                        <ul class="property-category d-flex justify-content-between align-items-center">
                                            <li class="user-info">
                                                <a href="{{ url('agent-grid') }}"><img
                                                        src="{{ URL::asset('/assets/img/profiles/avatar-07.jpg') }}"
                                                        class="img-fluid avatar" alt="User"></a>
                                                <div class="user-name">
                                                    <a href="{{ url('agent-grid') }}">Pittman</a>
                                                    <p>Cambridge</p>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="{{ url('rent-details') }}" class="btn-primary">Book Now</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Rent grid -->

                    </div>

                    <!-- Pagination -->
                    <div class="col-lg-12">
                        <div class="grid-pagination">
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
                    <!-- /Pagination -->

                </div>

            </div>
        </div>
    </section>
    <!-- /Feature Property For Rent -->
@endsection
