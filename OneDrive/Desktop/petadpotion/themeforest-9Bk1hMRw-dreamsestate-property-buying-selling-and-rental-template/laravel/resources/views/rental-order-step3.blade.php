<?php $page = 'rental-order-step3'; ?>
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
                    <div class="booking-details mb-0 pb-lg-3 pb-0">
                        <h4>Choose Payment Method</h4>
                        <div class="payment-icon">
                            <ul>
                                <li>
                                    <span><img src="{{ URL::asset('/assets/img/payment/paypal.png') }}"
                                            alt="img"></span>
                                </li>
                                <li>
                                    <span><img src="{{ URL::asset('/assets/img/payment/stripe.png') }}"
                                            alt="img"></span>
                                </li>
                                <li class="active">
                                    <span><img src="{{ URL::asset('/assets/img/payment/card.png') }}" alt="img"></span>
                                </li>
                                <li class="mb-0">
                                    <span><img src="{{ URL::asset('/assets/img/payment/wallet.png') }}"
                                            alt="img"></span>
                                </li>
                            </ul>
                        </div>
                        <h4>Add New Card</h4>
                        <div class="row">
                            <div class="col-lg-6 col-sm-12">
                                <div class="review-form">
                                    <label>Card Number</label>
                                    <input type="text" class="form-control" placeholder="+1 3940 9404">
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div class="review-form">
                                    <label>Card Holder Name<span class="manitory">*</span></label>
                                    <input type="text" class="form-control" placeholder="Roudrigez">
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-12">
                                <div class="review-form">
                                    <label>Select Date</label>
                                    <input type="text" class="form-control datetimepicker" placeholder="Select Date">
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-12">
                                <div class="review-form">
                                    <label>&nbsp;</label>
                                    <select class="form-control select">
                                        <option>Select Year</option>
                                        <option>2012</option>
                                        <option>2013</option>
                                        <option>2014</option>
                                        <option>2015</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="review-form">
                                    <label>CVV</label>
                                    <input type="text" class="form-control" placeholder="Enter Security Number">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="booking-details-btn">
                        <a href="{{ url('rental-order') }}" class="btn btn-lightred me-2">Go Back</a>
                        <a href="javascript:void(0);" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#success">Book
                            Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Detail View Section -->
@endsection
