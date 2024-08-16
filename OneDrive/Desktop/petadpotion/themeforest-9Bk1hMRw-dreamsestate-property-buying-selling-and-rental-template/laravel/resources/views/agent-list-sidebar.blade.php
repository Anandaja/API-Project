<?php $page = 'agent-list-sidebar'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            Agent List With Sidebar
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            Agent List With Sidebar
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
                                        <label>Agent Name</label>
                                        <input type="text" class="form-control" placeholder="Enter Name">
                                    </li>
                                    <li class="review-form">
                                        <label>Agent Type</label>
                                        <select class="select">
                                            <option>Select</option>
                                            <option>Selling Agent</option>
                                            <option>Buying Agent</option>
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
                                                <p class="rating-review"><span>5.0</span>(80 Reviews)</p>
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
                                        <p>We were referred to Eric through our close friends and are so happy with the
                                            service he provided!
                                            This was our first house, so we had a lot of questions and he was happy to
                                            answer them all!</p>
                                        <ul>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-facebook-f"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-behance"></i></a></li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-twitter"></i></a></li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-pinterest-p"></i></a>
                                            </li>
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
                                                <p class="rating-review"><span>5.0</span>(40 Reviews)</p>
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
                                        <p>We were referred to Eric through our close friends and are so happy with the
                                            service he provided!
                                            This was our first house, so we had a lot of questions and he was happy to
                                            answer them all!</p>
                                        <ul>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-facebook-f"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-behance"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-twitter"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-pinterest-p"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-linkedin"></i></a>
                                            </li>
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
                                        <p>We were referred to Eric through our close friends and are so happy with the
                                            service he provided!
                                            This was our first house, so we had a lot of questions and he was happy to
                                            answer them all!</p>
                                        <ul>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-facebook-f"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-behance"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-twitter"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-pinterest-p"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-linkedin"></i></a>
                                            </li>
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
                                                <p class="rating-review"><span>5.0</span>(25 Reviews)</p>
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
                                        <p>We were referred to Eric through our close friends and are so happy with the
                                            service he provided!
                                            This was our first house, so we had a lot of questions and he was happy to
                                            answer them all!</p>
                                        <ul>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-facebook-f"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-behance"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-twitter"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-pinterest-p"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-linkedin"></i></a>
                                            </li>
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
                                                <p class="rating-review"><span>5.0</span>(23 Reviews)</p>
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
                                        <p>We were referred to Eric through our close friends and are so happy with the
                                            service he provided!
                                            This was our first house, so we had a lot of questions and he was happy to
                                            answer them all!</p>
                                        <ul>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-facebook-f"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-behance"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-twitter"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-pinterest-p"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-linkedin"></i></a>
                                            </li>
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
                                                <p class="rating-review"><span>5.0</span>(67 Reviews)</p>
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
                                        <p>We were referred to Eric through our close friends and are so happy with the
                                            service he provided!
                                            This was our first house, so we had a lot of questions and he was happy to
                                            answer them all!</p>
                                        <ul>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-facebook-f"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-instagram"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-behance"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-twitter"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-pinterest-p"></i></a>
                                            </li>
                                            <li><a href="javascript:void(0);"><i class="fa-brands fa-linkedin"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /Agent -->

                        <!-- Pagination -->
                        <div class="col-lg-12">
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
                        </div>
                        <!-- /Pagination -->

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Content -->
@endsection
