<?php $page = 'agent-list'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            Agent List Without Sidebar
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            Agent List Without Sidebar
        @endslot
    @endcomponent
    <!-- Content -->
    <div class="listing-section">
        <div class="container">

            <!-- show Result -->
            <div class="showing-result-head show-list">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="review-form">
                            <label>Agent Type</label>
                            <select class="select">
                                <option>Select</option>
                                <option>Selling Agent</option>
                                <option>Buying Agent</option>
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
            <!-- /Show Result -->

            <div class="row">

                <!-- Agent -->
                <div class="col-lg-12 d-flex">
                    <div class="agent-list flex-fill">
                        <div class="agent-img">
                            <a href="{{ url('agent-details') }}" class="property-img">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/agents/agent-list-01.jpg') }}">
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
                                    <h6>
                                        <a href="{{ url('agent-details') }}">Mike Rutter</a>
                                    </h6>
                                    <h5><i class="bx bx-user-voice"></i>Selling Agent</h5>
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
                </div>
                <!-- /Agent -->

                <!-- Agent -->
                <div class="col-lg-12 d-flex">
                    <div class="agent-list flex-fill">
                        <div class="agent-img">
                            <a href="{{ url('agent-details') }}" class="property-img">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/agents/agent-list-02.jpg') }}">
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
                                    <h6>
                                        <a href="{{ url('agent-details') }}">Pamela</a>
                                    </h6>
                                    <h5><i class="bx bx-user-voice"></i>Buying Agent</h5>
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
                </div>
                <!-- /Agent -->

                <!-- Agent -->
                <div class="col-lg-12 d-flex">
                    <div class="agent-list flex-fill">
                        <div class="agent-img">
                            <a href="{{ url('agent-details') }}" class="property-img">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/agents/agent-list-03.jpg') }}">
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
                                        <p class="rating-review"><span>5.0</span>(25 Reviews)</p>
                                    </div>
                                    <h6>
                                        <a href="{{ url('agent-details') }}">Enriquez</a>
                                    </h6>
                                    <h5><i class="bx bx-user-voice"></i>Selling Agent</h5>
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
                </div>
                <!-- /Agent -->

                <!-- Agent -->
                <div class="col-lg-12 d-flex">
                    <div class="agent-list flex-fill">
                        <div class="agent-img">
                            <a href="{{ url('agent-details') }}" class="property-img">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/agents/agent-list-04.jpg') }}">
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
                                        <p class="rating-review"><span>5.0</span>(35 Reviews)</p>
                                    </div>
                                    <h6>
                                        <a href="{{ url('agent-details') }}">Lowe</a>
                                    </h6>
                                    <h5><i class="bx bx-user-voice"></i>Selling Agent</h5>
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
                </div>
                <!-- /Agent -->

                <!-- Agent -->
                <div class="col-lg-12 d-flex">
                    <div class="agent-list flex-fill">
                        <div class="agent-img">
                            <a href="{{ url('agent-details') }}" class="property-img">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/agents/agent-list-05.jpg') }}">
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
                                        <p class="rating-review"><span>5.0</span>(50 Reviews)</p>
                                    </div>
                                    <h6>
                                        <a href="{{ url('agent-details') }}">Gregory</a>
                                    </h6>
                                    <h5><i class="bx bx-user-voice"></i>Buying Agent</h5>
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
                </div>
                <!-- /Agent -->

                <!-- Agent -->
                <div class="col-lg-12 d-flex">
                    <div class="agent-list flex-fill">
                        <div class="agent-img">
                            <a href="{{ url('agent-details') }}" class="property-img">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/agents/agent-list-06.jpg') }}">
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
                                        <p class="rating-review"><span>5.0</span>(80 Reviews)</p>
                                    </div>
                                    <h6>
                                        <a href="{{ url('agent-details') }}">Lee Rutter</a>
                                    </h6>
                                    <h5><i class="bx bx-user-voice"></i>Selling Agent</h5>
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
                </div>
                <!-- /Agent -->
            </div>
        </div>
    </div>
    <!-- /Content -->
@endsection
