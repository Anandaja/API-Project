<?php $page = 'rental-order'; ?>
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
                    <div class="details-time">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="arrival-div">
                                    <h5>Arrival Time</h5>
                                    <ul>
                                        <li>
                                            <input type="radio" id="radio1" name="Arrival">
                                            <label for="radio1">Tue<span>21</span>Feb</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="radio2" name="Arrival" checked>
                                            <label for="radio2">Wed<span>22</span>Feb</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="radio3" name="Arrival">
                                            <label for="radio3">Thur<span>23</span>Feb</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="radio4" name="Arrival">
                                            <label for="radio4">Feb<span>24</span>Feb</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="radio5" name="Arrival">
                                            <label for="radio5">Sat<span>25</span>Feb</label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="review-form mb-0">
                                    <select class="select">
                                        <option value="0">Select Time</option>
                                        <option value="1">10 AM - 12 PM</option>
                                        <option value="2">12 PM - 2 PM</option>
                                        <option value="2">02 PM - 04 PM</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="arrival-div arrival-dept">
                                    <h5>Departure Time</h5>
                                    <ul>
                                        <li>
                                            <input type="radio" id="Departure1" name="Departure">
                                            <label for="Departure1">Tue<span>21</span>Feb</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="Departure2" name="Departure" checked>
                                            <label for="Departure2">Wed<span>22</span>Feb</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="Departure3" name="Departure">
                                            <label for="Departure3">Thur<span>23</span>Feb</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="Departure4" name="Departure">
                                            <label for="Departure4">Feb<span>24</span>Feb</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="Departure5" name="Departure">
                                            <label for="Departure5">Sat<span>25</span>Feb</label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="review-form mb-0">
                                    <select class="select">
                                        <option value="0">Select Time</option>
                                        <option value="1">10 AM - 12 PM</option>
                                        <option value="2">12 PM - 2 PM</option>
                                        <option value="2">02 PM - 04 PM</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="booking-details">
                        <div class="row">
                            <div class="col-lg-12">
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
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="booking-details-price">
                        <div class="row">
                            <div class="col-lg-12">
                                <ul>
                                    <li>
                                        <h5>Booking Price </h5>
                                        <h6>$300</h6>
                                    </li>
                                    <li>
                                        <h5>Service Charge</h5>
                                        <h6>$10</h6>
                                    </li>
                                    <li>
                                        <h5>Tax</h5>
                                        <h6>$5</h6>
                                    </li>
                                </ul>
                                <ul class="booking-details-total">
                                    <li>
                                        <h5>Grand Total</h5>
                                        <h6>$315</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="booking-details-btn">
                        <a href="javascript:void(0);" class="btn btn-lightred me-2">Previous</a>
                        <a href="{{ url('rental-order-step1') }}" class="btn btn-primary">Go to Details</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Detail View Section -->
@endsection
