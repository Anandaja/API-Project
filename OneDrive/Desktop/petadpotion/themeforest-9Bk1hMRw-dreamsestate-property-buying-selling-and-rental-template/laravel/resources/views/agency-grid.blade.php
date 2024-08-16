<?php $page = 'agency-grid'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            Agency Grid without Sidebar
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            Agency Grid without Sidebar
        @endslot
    @endcomponent

    <!-- Content -->
    <div class="listing-section">
        <div class="container">

            <!-- Show Result -->
            <div class="showing-result-head show-list">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="review-form">
                            <label>Agency Type</label>
                            <select class="select">
                                <option>Select</option>
                                <option>Luxurios Estate</option>
                                <option>Green Reality</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="review-form">
                            <label>Select City</label>
                            <select class="select">
                                <option>Select</option>
                                <option>Texas</option>
                                <option>New York</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="review-form">
                            <label>Select Area</label>
                            <select class="select">
                                <option>Select</option>
                                <option>Oakley</option>
                                <option>Park Ave</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="review-form">
                            <label>Select Category</label>
                            <select class="select">
                                <option>Select</option>
                                <option>Villa</option>
                                <option>Apartment</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Show Result -->

            <div class="row">

                <!-- Agency -->
                <div class="col-lg-4 col-md-6 d-flex">
                    <div class="agent-card agency card flex-fill">
                        <div class="agent-img">
                            <a href="{{ url('agency-details') }}">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/property/property-01.png') }}">
                            </a>
                            <div class="list-feature">
                                <span>30 Listings</span>
                            </div>
                        </div>
                        <div class="agent-content">
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
                    </div>
                </div>
                <!-- /Agency -->

                <!-- Agent -->
                <div class="col-lg-4 col-md-6 d-flex">
                    <div class="agent-card agency card flex-fill">
                        <div class="agent-img">
                            <a href="{{ url('agency-details') }}">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/property/property-02.png') }}">
                            </a>
                            <div class="list-feature">
                                <span>70 Listings</span>
                            </div>
                        </div>
                        <div class="agent-content">
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
                            <div class="agency-user">
                                <div class="agency-user-info">
                                    <h6>
                                        <a href="{{ url('agency-details') }}">Green Reality</a>
                                    </h6>
                                    <p><i class="bx bx-map"></i>City Center, Manhattan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Agent -->

                <!-- Agent -->
                <div class="col-lg-4 col-md-6 d-flex">
                    <div class="agent-card agency card flex-fill">
                        <div class="agent-img">
                            <a href="{{ url('agency-details') }}">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/property/property-03.png') }}">
                            </a>
                            <div class="list-feature">
                                <span>50 Listings</span>
                            </div>
                        </div>
                        <div class="agent-content">
                            <div class="rating">
                                <span class="rating-count">
                                    <i class="fa-solid fa-star checked"></i>
                                    <i class="fa-solid fa-star checked"></i>
                                    <i class="fa-solid fa-star checked"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                                <p class="rating-review"><span>3.0</span>(10 Reviews)</p>
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
                    </div>
                </div>
                <!-- /Agent -->

                <!-- Agent -->
                <div class="col-lg-4 col-md-6 d-flex">
                    <div class="agent-card agency card flex-fill">
                        <div class="agent-img">
                            <a href="{{ url('agency-details') }}">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/property/property-05.png') }}">
                            </a>
                            <div class="list-feature">
                                <span>55 Listings</span>
                            </div>
                        </div>
                        <div class="agent-content">
                            <div class="rating">
                                <span class="rating-count">
                                    <i class="fa-solid fa-star checked"></i>
                                    <i class="fa-solid fa-star checked"></i>
                                    <i class="fa-solid fa-star checked"></i>
                                    <i class="fa-solid fa-star checked"></i>
                                    <i class="fa-solid fa-star checked"></i>
                                </span>
                                <p class="rating-review"><span>5.0</span>(15 Reviews)</p>
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
                    </div>
                </div>
                <!-- /Agent -->

                <!-- Agent -->
                <div class="col-lg-4 col-md-6 d-flex">
                    <div class="agent-card agency card flex-fill">
                        <div class="agent-img">
                            <a href="{{ url('agency-details') }}">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/property/property-04.png') }}">
                            </a>
                            <div class="list-feature">
                                <span>44 Listings</span>
                            </div>
                        </div>
                        <div class="agent-content">
                            <div class="rating">
                                <span class="rating-count">
                                    <i class="fa-solid fa-star checked"></i>
                                    <i class="fa-solid fa-star checked"></i>
                                    <i class="fa-solid fa-star checked"></i>
                                    <i class="fa-solid fa-star checked"></i>
                                    <i class="fa-solid fa-star checked"></i>
                                </span>
                                <p class="rating-review"><span>5.0</span>(23 Reviews)</p>
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
                    </div>
                </div>
                <!-- /Agent -->

                <!-- Agent -->
                <div class="col-lg-4 col-md-6 d-flex">
                    <div class="agent-card agency card flex-fill">
                        <div class="agent-img">
                            <a href="{{ url('agency-details') }}">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/property/property-06.png') }}">
                            </a>
                            <div class="list-feature">
                                <span>60 Listings</span>
                            </div>
                        </div>
                        <div class="agent-content">
                            <div class="rating">
                                <span class="rating-count">
                                    <i class="fa-solid fa-star checked"></i>
                                    <i class="fa-solid fa-star checked"></i>
                                    <i class="fa-solid fa-star checked"></i>
                                    <i class="fa-solid fa-star checked"></i>
                                    <i class="fa-solid fa-star checked"></i>
                                </span>
                                <p class="rating-review"><span>5.0</span>(25 Reviews)</p>
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
                    </div>
                </div>
                <!-- /Agent -->
            </div>
        </div>
    </div>
    <!-- /Content -->
@endsection
