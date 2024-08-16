<?php $page = 'faq'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            Gallery
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            Gallery
        @endslot
    @endcomponent
    <!-- Gallery section-->
    <div class="gallery-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12 aos" data-aos="fade-down">
                    <div class="gallery-widget">
                        <a href="{{ URL::asset('/assets/img/gallery/gallery-01.jpg') }}" data-fancybox="gallery2">
                            <img class="img-fluid" alt="Image"
                                src="{{ URL::asset('/assets/img/gallery/gallery-thum-01.jpg') }}">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 aos" data-aos="fade-down">
                    <div class="gallery-widget">
                        <a href="{{ URL::asset('/assets/img/gallery/gallery-02.jpg') }}" data-fancybox="gallery2">
                            <img class="img-fluid" alt="Image"
                                src="{{ URL::asset('/assets/img/gallery/gallery-thum-02.jpg') }}">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 aos" data-aos="fade-down">
                    <div class="gallery-widget">
                        <a href="{{ URL::asset('/assets/img/gallery/gallery-03.jpg') }}" data-fancybox="gallery2">
                            <img class="img-fluid" alt="Image"
                                src="{{ URL::asset('/assets/img/gallery/gallery-thum-03.jpg') }}">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 aos" data-aos="fade-down">
                    <div class="gallery-widget">
                        <a href="{{ URL::asset('/assets/img/gallery/gallery-04.jpg') }}" data-fancybox="gallery2">
                            <img class="img-fluid" alt="Image"
                                src="{{ URL::asset('/assets/img/gallery/gallery-thum-04.jpg') }}">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 aos" data-aos="fade-down">
                    <div class="gallery-widget">
                        <a href="{{ URL::asset('/assets/img/gallery/gallery-05.jpg') }}" data-fancybox="gallery2">
                            <img class="img-fluid" alt="Image"
                                src="{{ URL::asset('/assets/img/gallery/gallery-thum-05.jpg') }}">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 aos" data-aos="fade-down">
                    <div class="gallery-widget">
                        <a href="{{ URL::asset('/assets/img/gallery/gallery-06.jpg') }}" data-fancybox="gallery2">
                            <img class="img-fluid" alt="Image"
                                src="{{ URL::asset('/assets/img/gallery/gallery-thum-06.jpg') }}">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 aos" data-aos="fade-down">
                    <div class="gallery-widget">
                        <a href="{{ URL::asset('/assets/img/gallery/gallery-07.jpg') }}" data-fancybox="gallery2">
                            <img class="img-fluid" alt="Image"
                                src="{{ URL::asset('/assets/img/gallery/gallery-thum-07.jpg') }}">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 aos" data-aos="fade-down">
                    <div class="gallery-widget">
                        <a href="{{ URL::asset('/assets/img/gallery/gallery-08.jpg') }}" data-fancybox="gallery2">
                            <img class="img-fluid" alt="Image"
                                src="{{ URL::asset('/assets/img/gallery/gallery-thum-08.jpg') }}">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 aos" data-aos="fade-down">
                    <div class="gallery-widget">
                        <a href="{{ URL::asset('/assets/img/gallery/gallery-09.jpg') }}" data-fancybox="gallery2">
                            <img class="img-fluid" alt="Image"
                                src="{{ URL::asset('/assets/img/gallery/gallery-thum-09.jpg') }}">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 aos" data-aos="fade-down">
                    <div class="gallery-widget">
                        <a href="{{ URL::asset('/assets/img/gallery/gallery-10.jpg') }}" data-fancybox="gallery2">
                            <img class="img-fluid" alt="Image"
                                src="{{ URL::asset('/assets/img/gallery/gallery-thum-10.jpg') }}">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 aos" data-aos="fade-down">
                    <div class="gallery-widget">
                        <a href="{{ URL::asset('/assets/img/gallery/gallery-11.jpg') }}" data-fancybox="gallery2">
                            <img class="img-fluid" alt="Image"
                                src="{{ URL::asset('/assets/img/gallery/gallery-thum-11.jpg') }}">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 aos" data-aos="fade-down">
                    <div class="gallery-widget">
                        <a href="{{ URL::asset('/assets/img/gallery/gallery-12.jpg') }}" data-fancybox="gallery2">
                            <img class="img-fluid" alt="Image"
                                src="{{ URL::asset('/assets/img/gallery/gallery-thum-12.jpg') }}">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 aos" data-aos="fade-down">
                    <div class="gallery-widget">
                        <a href="{{ URL::asset('/assets/img/gallery/gallery-13.jpg') }}" data-fancybox="gallery2">
                            <img class="img-fluid" alt="Image"
                                src="{{ URL::asset('/assets/img/gallery/gallery-thum-13.jpg') }}">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 aos" data-aos="fade-down">
                    <div class="gallery-widget">
                        <a href="{{ URL::asset('/assets/img/gallery/gallery-14.jpg') }}" data-fancybox="gallery2">
                            <img class="img-fluid" alt="Image"
                                src="{{ URL::asset('/assets/img/gallery/gallery-thum-14.jpg') }}">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 aos" data-aos="fade-down">
                    <div class="gallery-widget">
                        <a href="{{ URL::asset('/assets/img/gallery/gallery-15.jpg') }}" data-fancybox="gallery2">
                            <img class="img-fluid" alt="Image"
                                src="{{ URL::asset('/assets/img/gallery/gallery-thum-15.jpg') }}">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 aos" data-aos="fade-down">
                    <div class="gallery-widget">
                        <a href="{{ URL::asset('/assets/img/gallery/gallery-16.jpg') }}" data-fancybox="gallery2">
                            <img class="img-fluid" alt="Image"
                                src="{{ URL::asset('/assets/img/gallery/gallery-thum-16.jpg') }}">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 aos" data-aos="fade-down">
                    <div class="gallery-widget">
                        <a href="{{ URL::asset('/assets/img/gallery/gallery-17.jpg') }}" data-fancybox="gallery2">
                            <img class="img-fluid" alt="Image"
                                src="{{ URL::asset('/assets/img/gallery/gallery-thum-17.jpg') }}">
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 aos" data-aos="fade-down">
                    <div class="gallery-widget">
                        <a href="{{ URL::asset('/assets/img/gallery/gallery-18.jpg') }}" data-fancybox="gallery2">
                            <img class="img-fluid" alt="Image"
                                src="{{ URL::asset('/assets/img/gallery/gallery-thum-18.jpg') }}">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Gallery section-->
@endsection
