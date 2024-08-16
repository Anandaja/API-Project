<?php $page = 'rental-order-step2'; ?>
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
                        <h4>Information</h4>
                        <ul class="information-details">
                            <li>
                                <h5>Name</h5>
                                <p>Roudrigez</p>
                            </li>
                            <li>
                                <h5>Email</h5>
                                <p>info@example.com</p>
                            </li>
                            <li>
                                <h5>Phone Number </h5>
                                <p>+1 4985005 9404840</p>
                            </li>
                        </ul>
                        <ul class="information-details">
                            <li>
                                <h5>Name</h5>
                                <p>318-330 S Oakley Bl vd, Chicago, IL 60612, USA</p>
                            </li>
                        </ul>
                        <ul class="information-details mb-0">
                            <li class="me-0">
                                <h5>Comments</h5>
                                <p>This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River
                                    Valley. Located right in the heart Upstate NYs Amish farm Country, this land is
                                    certified organic making it extremely rare! </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-12">
                    <div class="booking-details-btn">
                        <a href="{{ url('rental-order-step1') }}" class="btn btn-lightred me-2">Back to Order Details</a>
                        <a href="{{ url('rental-order-step3') }}" class="btn btn-primary">Go to Payment</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Detail View Section -->
@endsection
