<?php $page = 'blog-list'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            Blog List
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            Blog List
        @endslot
    @endcomponent
    <!-- Blog List-->
    <div class="section blog-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 d-lg-flex">
                            <div class="blog grid-blog">
                                <div class="blog-image-list">
                                    <a href="{{ url('blog-details') }}"><img class="img-fluid"
                                            src="{{ URL::asset('/assets/img/blog/blog-list-01.jpg') }}"
                                            alt="Post Image"></a>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-list-date">
                                        <ul class="meta-item-list">
                                            <li class="blog-category mb-0">
                                                <a href="javascript:void(0)"><span>Property</span></a>
                                            </li>
                                            <li class="date-icon">
                                                <div class="post-author">
                                                    <div class="post-author-img">
                                                        <img src="{{ URL::asset('/assets/img/profiles/avatar-01.jpg') }}"
                                                            alt="author">
                                                    </div>
                                                    <a href="javascript:void(0)"> <span> Alphonsa Daniel </span></a>
                                                </div>
                                                <i class="fa-solid fa-calendar-days"></i> <span>Feb 6, 2023</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 class="blog-title"><a href="{{ url('blog-details') }}">The most popular cities for
                                            homebuyers</a></h3>
                                    <p class="blog-description border-0 mb-0 pb-0">There are many variations of passages of
                                        lorem ipsum available, but the majority have...</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 d-lg-flex">
                            <div class="blog grid-blog">
                                <div class="blog-image-list">
                                    <a href="{{ url('blog-details') }}"><img class="img-fluid"
                                            src="{{ URL::asset('/assets/img/blog/blog-list-02.jpg') }}"
                                            alt="Post Image"></a>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-list-date">
                                        <ul class="meta-item-list">
                                            <li class="blog-category mb-0">
                                                <a href="javascript:void(0)"><span>Villa</span></a>
                                            </li>
                                            <li class="date-icon">
                                                <div class="post-author">
                                                    <div class="post-author-img">
                                                        <img src="{{ URL::asset('/assets/img/profiles/avatar-02.jpg') }}"
                                                            alt="author">
                                                    </div>
                                                    <a href="javascript:void(0)"> <span>Francis </span></a>
                                                </div>
                                                <i class="fa-solid fa-calendar-days"></i> <span>Feb 8, 2023</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 class="blog-title"><a href="{{ url('blog-details') }}">How to achieve financial
                                            independence</a></h3>
                                    <p class="blog-description border-0 mb-0 pb-0">Omnis velit quia. Perspiciatis et
                                        cupiditate. Voluptatum beatae asperiores dolor magnam fuga. Sed fuga est harum quo
                                        nesciunt sint. Optio veniam...Omnis velit quia. Perspiciatis et cupiditate.
                                        Voluptatum beatae..</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 d-lg-flex">
                            <div class="blog grid-blog">
                                <div class="blog-image-list">
                                    <a href="{{ url('blog-details') }}"><img class="img-fluid"
                                            src="{{ URL::asset('/assets/img/blog/blog-list-03.jpg') }}"
                                            alt="Post Image"></a>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-list-date">
                                        <ul class="meta-item-list">
                                            <li class="blog-category mb-0">
                                                <a href="javascript:void(0)"><span>House</span></a>
                                            </li>
                                            <li class="date-icon">
                                                <div class="post-author">
                                                    <div class="post-author-img">
                                                        <img src="{{ URL::asset('/assets/img/profiles/avatar-03.jpg') }}"
                                                            alt="author">
                                                    </div>
                                                    <a href="javascript:void(0)"> <span> Eric Krok </span></a>
                                                </div>
                                                <i class="fa-solid fa-calendar-days"></i> <span>Feb 9, 2023</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 class="blog-title"><a href="{{ url('blog-details') }}">Learn how real estate really
                                            shapes our future</a></h3>
                                    <p class="blog-description border-0 mb-0 pb-0">There are many variations of passages of
                                        lorem ipsum available, but the majority have...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Pagination -->
                    <div class="grid-pagination">
                        <ul class="pagination justify-content-center">
                            <li class="page-item prev">
                                <a class="page-link" href="javascript:void(0);"><i class="fa-solid fa-arrow-left"></i>
                                    Prev</a>
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
                    <!-- /Pagination -->

                </div>
                <div class="col-lg-4 theiaStickySidebar">
                    <div class="rightsidebar">
                        <div class="card">
                            <h4>Filter</h4>
                            <div class="filter-content looking-input form-group mb-0">
                                <input type="text" class="form-control" placeholder="Search">
                            </div>
                        </div>
                        <div class="card">
                            <h4>Categories</h4>
                            <ul class="blogcategories-list">
                                <li><a href="javascript:void(0)">Property</a></li>
                                <li><a href="javascript:void(0)">Villa</a></li>
                                <li><a href="javascript:void(0)">House</a></li>
                                <li><a href="javascript:void(0)">Guest House</a></li>
                                <li><a href="javascript:void(0)">Factory</a></li>
                                <li><a href="javascript:void(0)">Godown</a></li>
                            </ul>
                        </div>
                        <div class="card">
                            <h4>Top Article</h4>
                            <div class="article">
                                <div class="article-blog">
                                    <a href="{{ url('blog-details') }}">
                                        <img class="img-fluid" src="{{ URL::asset('/assets/img/blog/blog-7.jpg') }}"
                                            alt="Blog">
                                    </a>
                                </div>
                                <div class="article-content">
                                    <h5><a href="{{ url('blog-details') }}">Great Business Tips in 2023</a></h5>
                                    <div class="article-date">
                                        <i class="fa-solid fa-calendar-days"></i>
                                        <span>Jan 6, 2023</span>
                                    </div>
                                </div>
                            </div>
                            <div class="article">
                                <div class="article-blog">
                                    <a href="{{ url('blog-details') }}">
                                        <img class="img-fluid" src="{{ URL::asset('/assets/img/blog/blog-8.jpg') }}"
                                            alt="Blog">
                                    </a>
                                </div>
                                <div class="article-content">
                                    <h5><a href="{{ url('blog-details') }}">Excited News About Buildings.</a></h5>
                                    <div class="article-date">
                                        <i class="fa-solid fa-calendar-days"></i>
                                        <span>Feb 5, 2023</span>
                                    </div>
                                </div>
                            </div>
                            <div class="article">
                                <div class="article-blog">
                                    <a href="{{ url('blog-details') }}">
                                        <img class="img-fluid" src="{{ URL::asset('/assets/img/blog/blog-9.jpg') }}"
                                            alt="Blog">
                                    </a>
                                </div>
                                <div class="article-content">
                                    <h5><a href="{{ url('blog-details') }}">8 Amazing Tricks About Build Dream..</a></h5>
                                    <div class="article-date">
                                        <i class="fa-solid fa-calendar-days"></i>
                                        <span>October 6, 2022</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Blog Grid-->
@endsection
