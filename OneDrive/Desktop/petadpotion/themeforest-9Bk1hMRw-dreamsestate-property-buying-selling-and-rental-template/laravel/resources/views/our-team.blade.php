<?php $page = 'our-team'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            Our Team
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            Our Team
        @endslot
    @endcomponent

    <!-- Meet our Team -->
    <section class="our-team-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-12 aos" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="100">
                    <div class="our-team">
                        <div class="profile-pic">
                            <a href="javascript:void(0);">
                                <img src="{{ URL::asset('/assets/img/our-team/team-01.jpg') }}" alt="Our Team">
                            </a>
                        </div>
                        <div class="team-prof">
                            <h6><a href="javascript:void(0);">Joseph Evans</a></h6>
                            <span class="team-designation">CEO</span>
                            <div class="footer-social-links m-0">
                                <ul class="nav">
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i
                                                class="fa-brands fa-facebook-f fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i class="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i class="fa-brands fa-behance"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i class="fa-brands fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i
                                                class="fa-brands fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-12 aos" data-aos="fade-down" data-aos-duration="1200"
                    data-aos-delay="200">
                    <div class="our-team">
                        <div class="profile-pic">
                            <a href="javascript:void(0);">
                                <img src="{{ URL::asset('/assets/img/our-team/team-02.jpg') }}" alt="Our Team">
                            </a>
                        </div>

                        <div class="team-prof">
                            <h6><a href="javascript:void(0);">Thomas Stine</a></h6>
                            <span class="team-designation">COO</span>

                            <div class="footer-social-links m-0">
                                <ul class="nav">
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i
                                                class="fa-brands fa-facebook-f fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i class="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i class="fa-brands fa-behance"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i class="fa-brands fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i
                                                class="fa-brands fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-12 aos" data-aos="fade-down" data-aos-duration="1200"
                    data-aos-delay="300">
                    <div class="our-team">
                        <div class="profile-pic">
                            <a href="javascript:void(0);">
                                <img src="{{ URL::asset('/assets/img/our-team/team-03.jpg') }}" alt="Our Team">
                            </a>
                        </div>

                        <div class="team-prof">
                            <h6><a href="javascript:void(0);">Dawn Richardson</a></h6>
                            <span class="team-designation">Marketing Head</span>

                            <div class="footer-social-links m-0">
                                <ul class="nav">
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i
                                                class="fa-brands fa-facebook-f fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i class="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i class="fa-brands fa-behance"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i class="fa-brands fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i
                                                class="fa-brands fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-12 aos" data-aos="fade-down" data-aos-duration="1200"
                    data-aos-delay="400">
                    <div class="our-team">
                        <div class="profile-pic">
                            <a href="javascript:void(0);">
                                <img src="{{ URL::asset('/assets/img/our-team/team-04.jpg') }}" alt="Our Team">
                            </a>
                        </div>

                        <div class="team-prof">
                            <h6><a href="javascript:void(0);">Belva Gonzalez</a></h6>
                            <span class="team-designation">Designer</span>

                            <div class="footer-social-links m-0">
                                <ul class="nav">
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i
                                                class="fa-brands fa-facebook-f fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i
                                                class="fa-brands fa-instagram"></i> </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i
                                                class="fa-brands fa-behance"></i> </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i
                                                class="fa-brands fa-twitter"></i> </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i
                                                class="fa-brands fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-12 aos" data-aos="fade-down" data-aos-duration="1200"
                    data-aos-delay="500">
                    <div class="our-team">
                        <div class="profile-pic">
                            <a href="javascript:void(0);">
                                <img src="{{ URL::asset('/assets/img/our-team/team-05.jpg') }}" alt="Our Team">
                            </a>
                        </div>

                        <div class="team-prof">
                            <h6><a href="javascript:void(0);">Willie Cropper</a></h6>
                            <span class="team-designation">Developer</span>

                            <div class="footer-social-links m-0">
                                <ul class="nav">
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i
                                                class="fa-brands fa-facebook-f fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i
                                                class="fa-brands fa-instagram"></i> </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i
                                                class="fa-brands fa-behance"></i> </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i
                                                class="fa-brands fa-twitter"></i> </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i
                                                class="fa-brands fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-12 aos" data-aos="fade-down" data-aos-duration="1200"
                    data-aos-delay="600">
                    <div class="our-team">
                        <div class="profile-pic">
                            <a href="javascript:void(0);">
                                <img src="{{ URL::asset('/assets/img/our-team/team-06.jpg') }}" alt="Our Team">
                            </a>
                        </div>

                        <div class="team-prof">
                            <h6><a href="javascript:void(0);">Maria Steinke</a></h6>
                            <span class="team-designation">Lead Developer</span>

                            <div class="footer-social-links m-0">
                                <ul class="nav">
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i
                                                class="fa-brands fa-facebook-f fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i
                                                class="fa-brands fa-instagram"></i> </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i
                                                class="fa-brands fa-behance"></i> </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i
                                                class="fa-brands fa-twitter"></i> </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" target="_blank"><i
                                                class="fa-brands fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Meet our Team -->
@endsection
