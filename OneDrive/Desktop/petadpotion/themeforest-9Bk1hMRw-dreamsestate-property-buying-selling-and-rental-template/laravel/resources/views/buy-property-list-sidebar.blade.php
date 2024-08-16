<?php $page = 'buy-property-list-sidebar'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            Buy Property List With Sidebar
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            Buy Property List With Sidebar
        @endslot
    @endcomponent

    <!-- Feature Property For Rent -->
    <div class="property-sidebar">
        <section class="feature-property-sec for-rent content">
            <div class="container">
                @component('components.buy-sortresult')
                @endcomponent
                <div class="row">

                    @component('components.search')
                    @endcomponent

                    <div class="col-xl-9">

                        <div class="row justify-content-center buy-list">

                            <!-- Buy List -->
                            <div class="col-lg-12">
                                <div class="product-custom">
                                    <div class="profile-widget rent-list-view">
                                        <div class="doc-img">
                                            <a href="{{ url('buy-details') }}" class="property-img">
                                                <img class="img-fluid" alt="Product image"
                                                    src="{{ URL::asset('/assets/img/rent/rent-list-01.jpg') }}">
                                            </a>
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
                                                    15000 Sqft
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
                                            <div class="featured">
                                                <span>Featured</span>
                                            </div>
                                            <a href="javascript:void(0)">
                                                <div class="favourite">
                                                    <span><i class="fa-regular fa-heart"></i></span>
                                                </div>
                                            </a>
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
                                            <div class="featured">
                                                <span>Featured</span>
                                            </div>
                                            <a href="javascript:void(0)">
                                                <div class="favourite">
                                                    <span><i class="fa-regular fa-heart"></i></span>
                                                </div>
                                            </a>
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
                                                    15000 Sqft
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
                                                    src="{{ URL::asset('/assets/img/rent/rent-list-03.jpg') }}">
                                            </a>
                                            <div class="featured">
                                                <span>Featured</span>
                                            </div>
                                            <a href="javascript:void(0)">
                                                <div class="favourite">
                                                    <span><i class="fa-regular fa-heart"></i></span>
                                                </div>
                                            </a>
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
                                                    src="{{ URL::asset('/assets/img/rent/rent-list-04.jpg') }}">
                                            </a>
                                            <div class="featured">
                                                <span>Featured</span>
                                            </div>
                                            <a href="javascript:void(0)">
                                                <div class="favourite">
                                                    <span><i class="fa-regular fa-heart"></i></span>
                                                </div>
                                            </a>
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
                                                                and bright flat</a>
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

                            <!-- Buy List -->
                            <div class="col-lg-12">
                                <div class="product-custom">
                                    <div class="profile-widget rent-list-view">
                                        <div class="doc-img">
                                            <a href="{{ url('buy-details') }}" class="property-img">
                                                <img class="img-fluid" alt="Product image"
                                                    src="{{ URL::asset('/assets/img/rent/rent-list-05.jpg') }}">
                                            </a>
                                            <div class="featured">
                                                <span>Featured</span>
                                            </div>
                                            <a href="javascript:void(0)">
                                                <div class="favourite">
                                                    <span><i class="fa-regular fa-heart"></i></span>
                                                </div>
                                            </a>
                                            <div class="user-avatar">
                                                <img src="{{ URL::asset('/assets/img/profiles/avatar-06.jpg') }}"
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
                                                    <span class="me-1">3.0</span> (30 Reviews)
                                                    <div class="product-name-price">
                                                        <h3 class="title">
                                                            <a href="{{ url('buy-details') }}" tabindex="-1">Modern
                                                                apartment</a>
                                                        </h3>
                                                        <div class="product-amount">
                                                            <h5><span>$48,400 </span></h5>
                                                        </div>
                                                    </div>
                                                    <p><i class="feather-map-pin"></i>122-140 N Morgan St, Chicago, IL
                                                        60607, USA</p>
                                                </div>
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
                                                    35000 Sqft
                                                </li>
                                            </ul>
                                            <ul class="property-category d-flex justify-content-between">
                                                <li>
                                                    <span class="list">Listed on : </span>
                                                    <span class="date">27 Jan 2023</span>
                                                </li>
                                                <li>
                                                    <span class="category list">Category : </span>
                                                    <span class="category-value date"> Apartments</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /Buy List -->

                            <!-- Pagination -->
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
                            <!-- /Pagination -->

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- /Feature Property For Rent -->
@endsection
