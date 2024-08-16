<?php $page = 'testimonial'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            Testimonials
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            Testimonials
        @endslot
    @endcomponent

    <!-- Testimonials-->
    <div class="listing-section">
        <div class="container">
            <div class="testimonial-group m-0">
                <div class="row">
                    <!-- Col -->
                    <div class="col-lg-4 col-12 d-flex aos" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="100">
                        <div class="card testimonial-card flex-fill">
                            <div class="user-icon">
                                <a href="javascript:void(0);"><img
                                        src="{{ URL::asset('/assets/img/profiles/avatar-01.jpg') }}" alt="User"></a>
                            </div>
                            <p>Omnis velit quia. Perspiciatis et cupiditate. Voluptatum beatae asperiores dolor magnam fuga.
                                Sed fuga est harum quo nesciunt sint. Optio veniam...Omnis velit quia. Perspiciatis et
                                cupiditate. Voluptatum beatae asperiores dolor magnam fuga. Sed fuga est harum quo nesciunt
                                sint. Optio veniam...</p>
                            <h4><a href="javascript:void(0);">Horace Cole</a></h4>
                            <div class="rating">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <div class="quotes-head"></div>
                        </div>
                    </div>
                    <!-- /Col -->

                    <!-- Col -->
                    <div class="col-lg-4 col-12 d-flex aos" data-aos="fade-down" data-aos-duration="1200"
                        data-aos-delay="200">
                        <div class="card testimonial-card flex-fill">
                            <div class="user-icon">
                                <a href="javascript:void(0);"><img
                                        src="{{ URL::asset('/assets/img/profiles/avatar-02.jpg') }}" alt="User"></a>
                            </div>
                            <p>Omnis velit quia. Perspiciatis et cupiditate. Voluptatum beatae asperiores dolor magnam fuga.
                                Sed fuga est harum quo nesciunt sint. Optio veniam...Omnis velit quia. Perspiciatis et
                                cupiditate. Voluptatum beatae asperiores dolor magnam fuga. Sed fuga est harum quo nesciunt
                                sint. Optio veniam...</p>
                            <h4><a href="javascript:void(0);">Karen Maria</a></h4>
                            <div class="rating">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <div class="quotes-head"></div>
                        </div>
                    </div>
                    <!-- /Col -->

                    <!-- Col -->
                    <div class="col-lg-4 col-12 d-flex aos" data-aos="fade-down" data-aos-duration="1200"
                        data-aos-delay="300">
                        <div class="card testimonial-card flex-fill">
                            <div class="user-icon">
                                <a href="javascript:void(0);"><img
                                        src="{{ URL::asset('/assets/img/profiles/avatar-03.jpg') }}" alt="User"></a>
                            </div>
                            <p>Omnis velit quia. Perspiciatis et cupiditate. Voluptatum beatae asperiores dolor magnam fuga.
                                Sed fuga est harum quo nesciunt sint. Optio veniam...Omnis velit quia. Perspiciatis et
                                cupiditate. Voluptatum beatae asperiores dolor magnam fuga. Sed fuga est harum quo nesciunt
                                sint. Optio veniam...</p>
                            <h4><a href="javascript:void(0);">Jack Nitzsche</a></h4>
                            <div class="rating">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <div class="quotes-head"></div>
                        </div>
                    </div>
                    <!-- /Col -->

                    <!-- Col -->
                    <div class="col-lg-4 col-12 d-flex aos" data-aos="fade-down" data-aos-duration="1200"
                        data-aos-delay="400">
                        <div class="card testimonial-card flex-fill">
                            <div class="user-icon">
                                <a href="javascript:void(0);"><img
                                        src="{{ URL::asset('/assets/img/profiles/avatar-04.jpg') }}" alt="User"></a>
                            </div>
                            <p>Omnis velit quia. Perspiciatis et cupiditate. Voluptatum beatae asperiores dolor magnam fuga.
                                Sed fuga est harum quo nesciunt sint. Optio veniam...Omnis velit quia. Perspiciatis et
                                cupiditate. Voluptatum beatae asperiores dolor magnam fuga. Sed fuga est harum quo nesciunt
                                sint. Optio veniam...</p>
                            <h4><a href="javascript:void(0);">Sofia Retz</a></h4>
                            <div class="rating">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <div class="quotes-head"></div>
                        </div>
                    </div>
                    <!-- /Col -->

                    <!-- Col -->
                    <div class="col-lg-4 col-12 d-flex aos" data-aos="fade-down" data-aos-duration="1200"
                        data-aos-delay="500">
                        <div class="card testimonial-card flex-fill">
                            <div class="user-icon">
                                <a href="javascript:void(0);"><img
                                        src="{{ URL::asset('/assets/img/profiles/avatar-05.jpg') }}" alt="User"></a>
                            </div>
                            <p>Omnis velit quia. Perspiciatis et cupiditate. Voluptatum beatae asperiores dolor magnam fuga.
                                Sed fuga est harum quo nesciunt sint. Optio veniam...Omnis velit quia. Perspiciatis et
                                cupiditate. Voluptatum beatae asperiores dolor magnam fuga. Sed fuga est harum quo nesciunt
                                sint. Optio veniam...</p>
                            <h4><a href="javascript:void(0);">John Doe</a></h4>
                            <div class="rating">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <div class="quotes-head"></div>
                        </div>
                    </div>
                    <!-- /Col -->

                    <!-- Col -->
                    <div class="col-lg-4 col-12 d-flex aos" data-aos="fade-down" data-aos-duration="1200"
                        data-aos-delay="500">
                        <div class="card testimonial-card flex-fill">
                            <div class="user-icon">
                                <a href="javascript:void(0);"><img
                                        src="{{ URL::asset('/assets/img/profiles/avatar-06.jpg') }}" alt="User"></a>
                            </div>
                            <p>Omnis velit quia. Perspiciatis et cupiditate. Voluptatum beatae asperiores dolor magnam fuga.
                                Sed fuga est harum quo nesciunt sint. Optio veniam...Omnis velit quia. Perspiciatis et
                                cupiditate. Voluptatum beatae asperiores dolor magnam fuga. Sed fuga est harum quo nesciunt
                                sint. Optio veniam...</p>
                            <h4><a href="javascript:void(0);">Valerie L. Ellis</a></h4>
                            <div class="rating">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <div class="quotes-head"></div>
                        </div>
                    </div>
                    <!-- /Col -->

                    <!-- Col -->
                    <div class="col-lg-4 col-12 d-flex aos" data-aos="fade-down" data-aos-duration="1200"
                        data-aos-delay="500">
                        <div class="card testimonial-card flex-fill">
                            <div class="user-icon">
                                <a href="javascript:void(0);"><img
                                        src="{{ URL::asset('/assets/img/profiles/avatar-07.jpg') }}" alt="User"></a>
                            </div>
                            <p>Omnis velit quia. Perspiciatis et cupiditate. Voluptatum beatae asperiores dolor magnam fuga.
                                Sed fuga est harum quo nesciunt sint. Optio veniam...Omnis velit quia. Perspiciatis et
                                cupiditate. Voluptatum beatae asperiores dolor magnam fuga. Sed fuga est harum quo nesciunt
                                sint. Optio veniam...</p>
                            <h4><a href="javascript:void(0);">Courtland Artois</a></h4>
                            <div class="rating">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <div class="quotes-head"></div>
                        </div>
                    </div>
                    <!-- /Col -->

                    <!-- Col -->
                    <div class="col-lg-4 col-12 d-flex aos" data-aos="fade-down" data-aos-duration="1200"
                        data-aos-delay="500">
                        <div class="card testimonial-card flex-fill">
                            <div class="user-icon">
                                <a href="javascript:void(0);"><img
                                        src="{{ URL::asset('/assets/img/profiles/avatar-08.jpg') }}" alt="Image"></a>
                            </div>
                            <p>Omnis velit quia. Perspiciatis et cupiditate. Voluptatum beatae asperiores dolor magnam fuga.
                                Sed fuga est harum quo nesciunt sint. Optio veniam...Omnis velit quia. Perspiciatis et
                                cupiditate. Voluptatum beatae asperiores dolor magnam fuga. Sed fuga est harum quo nesciunt
                                sint. Optio veniam...</p>
                            <h4><a href="javascript:void(0);">Rabien Ustoc</a></h4>
                            <div class="rating">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <div class="quotes-head"></div>
                        </div>
                    </div>
                    <!-- /Col -->

                    <!-- Col -->
                    <div class="col-lg-4 col-12 d-flex aos" data-aos="fade-down" data-aos-duration="1200"
                        data-aos-delay="500">
                        <div class="card testimonial-card flex-fill">
                            <div class="user-icon">
                                <a href="javascript:void(0);"><img
                                        src="{{ URL::asset('/assets/img/profiles/avatar-09.jpg') }}" alt="Image"></a>
                            </div>
                            <p>Omnis velit quia. Perspiciatis et cupiditate. Voluptatum beatae asperiores dolor magnam fuga.
                                Sed fuga est harum quo nesciunt sint. Optio veniam...Omnis velit quia. Perspiciatis et
                                cupiditate. Voluptatum beatae asperiores dolor magnam fuga. Sed fuga est harum quo nesciunt
                                sint. Optio veniam...</p>
                            <h4><a href="javascript:void(0);">Laverne Marier</a></h4>
                            <div class="rating">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <div class="quotes-head"></div>
                        </div>
                    </div>
                    <!-- /Col -->

                    <!-- Col -->
                    <div class="col-lg-4 col-12 d-flex aos" data-aos="fade-down" data-aos-duration="1200"
                        data-aos-delay="500">
                        <div class="card testimonial-card flex-fill">
                            <div class="user-icon">
                                <a href="javascript:void(0);"><img
                                        src="{{ URL::asset('/assets/img/profiles/avatar-10.jpg') }}" alt="Image"></a>
                            </div>
                            <p>Omnis velit quia. Perspiciatis et cupiditate. Voluptatum beatae asperiores dolor magnam fuga.
                                Sed fuga est harum quo nesciunt sint. Optio veniam...Omnis velit quia. Perspiciatis et
                                cupiditate. Voluptatum beatae asperiores dolor magnam fuga. Sed fuga est harum quo nesciunt
                                sint. Optio veniam...</p>
                            <h4><a href="javascript:void(0);">Doe Biden</a></h4>
                            <div class="rating">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <div class="quotes-head"></div>
                        </div>
                    </div>
                    <!-- /Col -->

                    <!-- Col -->
                    <div class="col-lg-4 col-12 d-flex aos" data-aos="fade-down" data-aos-duration="1200"
                        data-aos-delay="500">
                        <div class="card testimonial-card flex-fill">
                            <div class="user-icon">
                                <a href="javascript:void(0);"><img
                                        src="{{ URL::asset('/assets/img/profiles/avatar-11.jpg') }}" alt="Image"></a>
                            </div>
                            <p>Omnis velit quia. Perspiciatis et cupiditate. Voluptatum beatae asperiores dolor magnam fuga.
                                Sed fuga est harum quo nesciunt sint. Optio veniam...Omnis velit quia. Perspiciatis et
                                cupiditate. Voluptatum beatae asperiores dolor magnam fuga. Sed fuga est harum quo nesciunt
                                sint. Optio veniam...</p>
                            <h4><a href="javascript:void(0);">Sofie Retza</a></h4>
                            <div class="rating">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <div class="quotes-head"></div>
                        </div>
                    </div>
                    <!-- /Col -->

                    <!-- Col -->
                    <div class="col-lg-4 col-12 d-flex aos" data-aos="fade-down" data-aos-duration="1200"
                        data-aos-delay="500">
                        <div class="card testimonial-card flex-fill">
                            <div class="user-icon">
                                <a href="javascript:void(0);"><img
                                        src="{{ URL::asset('/assets/img/profiles/avatar-12.jpg') }}" alt="Image"></a>
                            </div>
                            <p>Omnis velit quia. Perspiciatis et cupiditate. Voluptatum beatae asperiores dolor magnam fuga.
                                Sed fuga est harum quo nesciunt sint. Optio veniam...Omnis velit quia. Perspiciatis et
                                cupiditate. Voluptatum beatae asperiores dolor magnam fuga. Sed fuga est harum quo nesciunt
                                sint. Optio veniam...</p>
                            <h4><a href="javascript:void(0);">Nick Joe</a></h4>
                            <div class="rating">
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                                <span><i class="fa-solid fa-star"></i></span>
                            </div>
                            <div class="quotes-head"></div>
                        </div>
                    </div>
                    <!-- /Col -->
                </div>
            </div>
        </div>
    </div>
    <!-- /Testimonials-->
@endsection
