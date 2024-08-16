<?php $page = 'agent-grid'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            Agent Grid Without Sidebar
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            Agent Grid Without Sidebar
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
                <div class="col-lg-4 col-md-6 d-flex">
                    <div class="agent-card card flex-fill">
                        <div class="agent-img">
                            <a href="{{ url('agent-details') }}" class="property-img">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/agents/agent-01.jpg') }}">
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
                            <h6>
                                <a href="{{ url('agent-details') }}">Mike Rutter</a>
                            </h6>
                            <p><i class="bx bx-user-voice"></i>Selling Agent</p>
                        </div>
                    </div>
                </div>
                <!-- /Agent -->

                <!-- Agent -->
                <div class="col-lg-4 col-md-6 d-flex">
                    <div class="agent-card card flex-fill">
                        <div class="agent-img">
                            <a href="{{ url('agent-details') }}" class="property-img">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/agents/agent-02.jpg') }}">
                            </a>
                            <div class="list-feature">
                                <span>40 Listings</span>
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
                                <p class="rating-review"><span>5.0</span>(18 Reviews)</p>
                            </div>
                            <h6>
                                <a href="{{ url('agent-details') }}">Pamela</a>
                            </h6>
                            <p><i class="bx bx-user-voice"></i>Buying Agent</p>
                        </div>
                    </div>
                </div>
                <!-- /Agent -->

                <!-- Agent -->
                <div class="col-lg-4 col-md-6 d-flex">
                    <div class="agent-card card flex-fill">
                        <div class="agent-img">
                            <a href="{{ url('agent-details') }}" class="property-img">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/agents/agent-03.jpg') }}">
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
                                    <i class="fa-solid fa-star checked"></i>
                                    <i class="fa-solid fa-star checked"></i>
                                </span>
                                <p class="rating-review"><span>5.0</span>(12 Reviews)</p>
                            </div>
                            <h6>
                                <a href="{{ url('agent-details') }}">Enriquez</a>
                            </h6>
                            <p><i class="bx bx-user-voice"></i>Selling Agent</p>
                        </div>
                    </div>
                </div>
                <!-- /Agent -->

                <!-- Agent -->
                <div class="col-lg-4 col-md-6 d-flex">
                    <div class="agent-card card flex-fill">
                        <div class="agent-img">
                            <a href="{{ url('agent-details') }}" class="property-img">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/agents/agent-04.jpg') }}">
                            </a>
                            <div class="list-feature">
                                <span>45 Listings</span>
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
                                <p class="rating-review"><span>5.0</span>(22 Reviews)</p>
                            </div>
                            <h6>
                                <a href="{{ url('agent-details') }}">Lowe</a>
                            </h6>
                            <p><i class="bx bx-user-voice"></i>Selling Agent</p>
                        </div>
                    </div>
                </div>
                <!-- /Agent -->

                <!-- Agent -->
                <div class="col-lg-4 col-md-6 d-flex">
                    <div class="agent-card card flex-fill">
                        <div class="agent-img">
                            <a href="{{ url('agent-details') }}" class="property-img">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/agents/agent-05.jpg') }}">
                            </a>
                            <div class="list-feature">
                                <span>32 Listings</span>
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
                                <p class="rating-review"><span>5.0</span>(13 Reviews)</p>
                            </div>
                            <h6>
                                <a href="{{ url('agent-details') }}">Gregory</a>
                            </h6>
                            <p><i class="bx bx-user-voice"></i>Buying Agent</p>
                        </div>
                    </div>
                </div>
                <!-- /Agent -->

                <!-- Agent -->
                <div class="col-lg-4 col-md-6 d-flex">
                    <div class="agent-card card flex-fill">
                        <div class="agent-img">
                            <a href="{{ url('agent-details') }}" class="property-img">
                                <img class="img-fluid" alt="Property Image"
                                    src="{{ URL::asset('/assets/img/agents/agent-06.jpg') }}">
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
                                <p class="rating-review"><span>5.0</span>(10 Reviews)</p>
                            </div>
                            <h6>
                                <a href="{{ url('agent-details') }}">Lee</a>
                            </h6>
                            <p><i class="bx bx-user-voice"></i>Selling Agent</p>
                        </div>
                    </div>
                </div>
                <!-- /Agent -->
            </div>
        </div>
    </div>
    <!-- /Content -->
@endsection
