<?php $page = 'rental-order-step1'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            Rental Booking
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            Rental Booking
        @endslot
    @endcomponent

    <!-- Detail View Section -->
    <section class="content inner-content bg-white">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="success-div">
                        <span><i class="bx bx-check-circle me-1"></i>Modern apartment in the city centre is available for
                            rental</span>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="details-div">
                        <div class="details-div-content">
                            <h5>Details</h5>
                            <p>Modern Apartment in the city centre</p>
                            <h5>Location </h5>
                            <p class="mb-0">318-330 S Oakley Blvd, Chicago, IL 60612, USA</p>
                        </div>
                        <div class="details-div-price">
                            <h5>Booking Amount</h5>
                            <h6>$300 <span>/ Day</span></h6>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="booking-details">
                        <h4>Property Booking Details</h4>
                        <ul>
                            <li>
                                <h5>Arrival Time</h5>
                                <p>318-330 S Oakley Blvd, Chicago, IL 60612, USA</p>
                            </li>
                            <li>
                                <h5>Departure Time</h5>
                                <p>318-330 S Oakley Blvd, Chicago, IL 60612, USA</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="booking-details">
                        <h4>Booking Details</h4>
                        <ul>
                            <li>
                                <h5>Arrival Time</h5>
                                <p>318-330 S Oakley Blvd, Chicago, IL 60612, USA</p>
                            </li>
                            <li>
                                <h5>Departure Time</h5>
                                <p>318-330 S Oakley Blvd, Chicago, IL 60612, USA</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="booking-details mb-0">
                        <h4>Fill out this quick form</h4>
                        <div class="row">
                            <div class="col-lg-6 col-sm-12">
                                <div class="review-form">
                                    <label>Name<span class="manitory">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter Name">
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div class="review-form">
                                    <label>Phone Number <span class="manitory">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter Phone Number">
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div class="review-form">
                                    <label>Email Address</label>
                                    <input type="text" class="form-control" placeholder="Enter Email">
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div class="review-form">
                                    <label>Full Address</label>
                                    <input type="text" class="form-control" placeholder="Enter Address">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="review-form mb-0">
                                    <label>Special Requests / Questions / Comments</label>
                                    <textarea rows="5" placeholder="Enter Comments"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="booking-details-btn">
                        <a href="{{ url('rental-order-step1') }}" class="btn btn-lightred me-2">Back to Booking Details</a>
                        <a href="{{ url('rental-order-step2') }}" class="btn btn-primary">Go to Order Confirmation</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Detail View Section -->
@endsection
