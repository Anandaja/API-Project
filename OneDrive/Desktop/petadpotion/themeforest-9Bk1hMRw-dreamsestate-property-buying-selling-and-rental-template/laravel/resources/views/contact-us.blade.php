<?php $page = 'contact-us'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            Contact Us
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            Contact Us
        @endslot
    @endcomponent

    <!-- Contact us -->
    <section class="section contact-section">
        <div class="container">
            <div class="contact-content">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="row">
                            <div class="col-lg-12 d-flex">
                                <div class="card">
                                    <div class="card-body contact-info flex-fill">
                                        <h3>Talk to Member of Sales Team</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ligula eu
                                            lectus vulputate porttitor sed feugiat nunc. Mauris ac consectetur ante,</p>
                                        <a href="javascript:void(0);" class="btn-primary d-inline-block">Contact Sales</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 d-flex">
                                <div class="card">
                                    <div class="card-body contact-info flex-fill">
                                        <h3>Product & Account Support</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ligula eu
                                            lectus vulputate porttitor sed feugiat nunc. Mauris ac consectetur ante,</p>
                                        <a href="{{ url('faq') }}" class="btn-primary d-inline-block">Go to FAQ</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <img src="{{ URL::asset('/assets/img/contact.jpg') }}" alt="Image">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Contact us -->

    <!-- Contact Info Details -->
    <section class="section contact-info-sec">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <form action="#">
                        <div class="card">
                            <div class="card-header">
                                <h3>Get In Touch</h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-12 col-12">
                                        <div class="form-group">
                                            <label>Your Name</label>
                                            <input type="text" class="form-control" placeholder="Your Name">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-12">
                                        <div class="form-group">
                                            <label>Phone Number</label>
                                            <input type="text" class="form-control" placeholder="Enter Number">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-12">
                                        <div class="form-group">
                                            <label>Email Address</label>
                                            <input type="email" class="form-control" placeholder="Enter Email">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-12">
                                        <div class="form-group">
                                            <label>Country</label>
                                            <select class="select">
                                                <option value="0">Select </option>
                                                <option value="India">India</option>
                                                <option value="United States">United States</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Oman">Oman</option>
                                                <option value="Qatar">Qatar</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-12">
                                        <div class="form-group">
                                            <label>Subject</label>
                                            <input type="text" class="form-control" placeholder="Enter Subject">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Description</label>
                                            <textarea class="form-control" rows="14" placeholder="Comments"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn-primary">Submit Enquiry</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-6">
                    <h3>Contact Details</h3>
                    <div class="row">
                        <div class="col-lg-12 d-flex">
                            <div class="flex-fill">
                                <div class="contact-info-details d-flex align-items-center">
                                    <span><img src="{{ URL::asset('/assets/img/icons/phone.svg') }}" alt="Image"></span>
                                    <div>
                                        <h4>Call Us At</h4>
                                        <a href="tel:+16398098393">+1 63980 98393</a>,
                                        <a href="tel:+16398098393">+1 63980 98393</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 d-flex">
                            <div class="flex-fill">
                                <div class="contact-info-details d-flex align-items-center">
                                    <span><img src="{{ URL::asset('/assets/img/icons/mail.svg') }}" alt="Image"></span>
                                    <div>
                                        <h4>Email Us</h4>
                                        <a href="mailto:info@example.com">info@example.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 d-flex">
                            <div class="flex-fill">
                                <div class="contact-info-details d-flex align-items-center">
                                    <span><img src="{{ URL::asset('/assets/img/icons/map-pin.svg') }}"
                                            alt="Image"></span>
                                    <div>
                                        <h4>Location</h4>
                                        <p>Jl. Surabaya Jaya, No.10, Surabaya United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="map-location">
                        <h3>Find Us On</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.8862835683544!2d-73.98256668525309!3d41.93829486962529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd0ee3286615b7%3A0x42bfa96cc2ce4381!2s132%20Kingston%20St%2C%20Kingston%2C%20NY%2012401%2C%20USA!5e0!3m2!1sen!2sin!4v1670922579281!5m2!1sen!2sin"
                            height="359"></iframe>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <!-- /Contact Info Details -->
@endsection
