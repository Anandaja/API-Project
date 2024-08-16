<?php $page = 'agency-list-sidebar'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            Agency List With Sidebar
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            Agency List With Sidebar
        @endslot
    @endcomponent

    <!-- Content -->
    <div class="content">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 theiaStickySidebar">

                    <!-- Sidebar -->
                    <div class="left-sidebar-widget">
                        <div class="collapse-card">
                            <h4 class="card-title">
                                <a class="collapsed" data-bs-toggle="collapse" href="#search" aria-expanded="false">Search</a>
                            </h4>
                            <div id="search" class="card-collapse collapse show">
                                <ul class="show-list">
                                    <li class="review-form">
                                        <label>Agency Name</label>
                                        <input type="text" class="form-control" placeholder="Enter Name">
                                    </li>
                                    <li class="review-form">
                                        <label>Agency Type</label>
                                        <select class="select">
                                            <option>Select</option>
                                            <option>Selling Agency</option>
                                            <option>Buying Agency</option>
                                        </select>
                                    </li>
                                    <li class="review-form">
                                        <label>Select City</label>
                                        <select class="select">
                                            <option>Select</option>
                                            <option>Texas</option>
                                            <option>New York</option>
                                        </select>
                                    </li>
                                    <li class="review-form">
                                        <label>Select Area</label>
                                        <select class="select">
                                            <option>Select</option>
                                            <option>Oakley</option>
                                            <option>Park Ave</option>
                                        </select>
                                    </li>
                                    <li class="review-form">
                                        <label>Select Category</label>
                                        <select class="select">
                                            <option>Select</option>
                                            <option>Villa</option>
                                            <option>Apartment</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="collapse-card">
                            <h4 class="card-title">
                                <a class="collapsed" data-bs-toggle="collapse" href="#categiries"
                                    aria-expanded="false">Categories</a>
                            </h4>
                            <div id="categiries" class="card-collapse collapse show">
                                <ul class="checkbox-list">
                                    <li>
                                        <label class="custom_check">
                                            <input type="checkbox" name="username">
                                            <span class="checkmark"></span> Rental (41)
                                        </label>
                                    </li>
                                    <li>
                                        <label class="custom_check">
                                            <input type="checkbox" name="username">
                                            <span class="checkmark"></span> Sales (15)
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- /Sidebar -->

                </div>
                <div class="col-lg-9">

                    <!-- Agency List -->
                    <div class="agent-list agency">
                        <div class="agent-img">
                            <a href="{{ url('agency-details') }}" class="property-img">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/property/property-01.png') }}">
                            </a>
                        </div>
                        <div class="agent-content">
                            <div class="agent-info">
                                <div class="agent-rating">
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
                                    <div class="agency-user">
                                        <div class="agency-user-info">
                                            <h6>
                                                <a href="{{ url('agency-details') }}">Luxurios Estate</a>
                                            </h6>
                                            <p><i class="bx bx-map"></i>New York, Queens</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-feature">
                                    <span>60 Listings</span>
                                </div>
                            </div>
                            <div>
                                <p>We were referred to Eric through our close friends and are so happy with the service he
                                    provided!
                                    This was our first house, so we had a lot of questions and he was happy to answer them
                                    all!</p>
                                <ul>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-behance"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-pinterest-p"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- /Agency List -->

                    <!-- Agency List -->
                    <div class="agent-list agency">
                        <div class="agent-img">
                            <a href="{{ url('agency-details') }}">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/property/property-02.png') }}">
                            </a>
                        </div>
                        <div class="agent-content">
                            <div class="agent-info">
                                <div class="agent-rating">
                                    <div class="rating">
                                        <span class="rating-count">
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                        </span>
                                        <p class="rating-review"><span>5.0</span>(40 Reviews)</p>
                                    </div>
                                    <div class="agency-user">
                                        <div class="agency-user-info">
                                            <h6>
                                                <a href="{{ url('agency-details') }}">Green Reality</a>
                                            </h6>
                                            <p><i class="bx bx-map"></i>City Center, Manhattan</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-feature">
                                    <span>30 Listings</span>
                                </div>
                            </div>
                            <div>
                                <p>We were referred to Eric through our close friends and are so happy with the service he
                                    provided!
                                    This was our first house, so we had a lot of questions and he was happy to answer them
                                    all!</p>
                                <ul>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-behance"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-pinterest-p"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- /Agency List -->

                    <!-- Agency List -->
                    <div class="agent-list agency">
                        <div class="agent-img">
                            <a href="{{ url('agency-details') }}">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/property/property-03.png') }}">
                            </a>
                        </div>
                        <div class="agent-content">
                            <div class="agent-info">
                                <div class="agent-rating">
                                    <div class="rating">
                                        <span class="rating-count">
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                        </span>
                                        <p class="rating-review"><span>5.0</span>(10 Reviews)</p>
                                    </div>
                                    <div class="agency-user">
                                        <div class="agency-user-info">
                                            <h6>
                                                <a href="{{ url('agency-details') }}">Homes</a>
                                            </h6>
                                            <p><i class="bx bx-map"></i>Las Vegas</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-feature">
                                    <span>40 Listings</span>
                                </div>
                            </div>
                            <div>
                                <p>We were referred to Eric through our close friends and are so happy with the service he
                                    provided!
                                    This was our first house, so we had a lot of questions and he was happy to answer them
                                    all!</p>
                                <ul>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-behance"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-pinterest-p"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- /Agency List -->

                    <!-- Agency List -->
                    <div class="agent-list agency">
                        <div class="agent-img">
                            <a href="{{ url('agency-details') }}">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/property/property-04.png') }}">
                            </a>
                        </div>
                        <div class="agent-content">
                            <div class="agent-info">
                                <div class="agent-rating">
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
                                    <div class="agency-user">
                                        <div class="agency-user-info">
                                            <h6>
                                                <a href="{{ url('agency-details') }}">Queen Estate</a>
                                            </h6>
                                            <p><i class="bx bx-map"></i>Pawnee City, NE</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-feature">
                                    <span>55 Listings</span>
                                </div>
                            </div>
                            <div>
                                <p>We were referred to Eric through our close friends and are so happy with the service he
                                    provided!
                                    This was our first house, so we had a lot of questions and he was happy to answer them
                                    all!</p>
                                <ul>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-behance"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-pinterest-p"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- /Agency List -->

                    <!-- Agency List -->
                    <div class="agent-list agency">
                        <div class="agent-img">
                            <a href="{{ url('agency-details') }}">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/property/property-05.png') }}">
                            </a>
                        </div>
                        <div class="agent-content">
                            <div class="agent-info">
                                <div class="agent-rating">
                                    <div class="rating">
                                        <span class="rating-count">
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                        </span>
                                        <p class="rating-review"><span>5.0</span>(14 Reviews)</p>
                                    </div>
                                    <div class="agency-user">
                                        <div class="agency-user-info">
                                            <h6>
                                                <a href="{{ url('agency-details') }}">Rent a Home</a>
                                            </h6>
                                            <p><i class="bx bx-map"></i>Barron, WI</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-feature">
                                    <span>45 Listings</span>
                                </div>
                            </div>
                            <div>
                                <p>We were referred to Eric through our close friends and are so happy with the service he
                                    provided!
                                    This was our first house, so we had a lot of questions and he was happy to answer them
                                    all!</p>
                                <ul>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-behance"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-pinterest-p"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- /Agency List -->

                    <!-- Agency List -->
                    <div class="agent-list agency">
                        <div class="agent-img">
                            <a href="{{ url('agency-details') }}">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/property/property-06.png') }}">
                            </a>
                        </div>
                        <div class="agent-content">
                            <div class="agent-info">
                                <div class="agent-rating">
                                    <div class="rating">
                                        <span class="rating-count">
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                        </span>
                                        <p class="rating-review"><span>5.0</span>(16 Reviews)</p>
                                    </div>
                                    <div class="agency-user">
                                        <div class="agency-user-info">
                                            <h6>
                                                <a href="{{ url('agency-details') }}">Louis Realtors</a>
                                            </h6>
                                            <p><i class="bx bx-map"></i>Correll, MN</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-feature">
                                    <span>50 Listings</span>
                                </div>
                            </div>
                            <div>
                                <p>We were referred to Eric through our close friends and are so happy with the service he
                                    provided!
                                    This was our first house, so we had a lot of questions and he was happy to answer them
                                    all!</p>
                                <ul>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-behance"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-pinterest-p"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- /Agency List -->

                    <!-- Pagination -->
                    <div class="grid-pagination">
                        <ul class="pagination justify-content-center">
                            <li class="page-item prev">
                                <a class="page-link" href="javascript:void(0);"><i class="fa-solid fa-arrow-left"></i>
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
    <!-- /Content -->
@endsection
