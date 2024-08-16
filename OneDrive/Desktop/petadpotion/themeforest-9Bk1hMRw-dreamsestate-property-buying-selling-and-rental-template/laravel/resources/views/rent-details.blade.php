<?php $page = 'rent-details'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            Rent Details
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            Rent Details
        @endslot
    @endcomponent

    <!-- Detail View Section -->
    <section class="buy-detailview">
        <div class="container">

            <!-- Details -->
            <div class="row align-items-center page-head">
                <div class="col-lg-8">
                    <div class="buy-btn">
                        <span class="buy">Buy</span>
                        <span class="appartment">Appartment</span>
                    </div>
                    <div class="page-title">
                        <h3>Modern Apartment in the City Center<span><img
                                    src="{{ URL::asset('/assets/img/icons/location-icon.svg') }}" alt="Image"></span>
                        </h3>
                        <p><i class="feather-map-pin"></i> 318-330 S Oakley Blvd, Chicago, IL 60612, USA</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="latest-update">
                        <h5>Last Updated on : 15 Jan 2023</h5>
                        <p>$4,000</p>
                        <ul class="other-pages">
                            <li><a href="javascript:void(0);"><i class="feather-share-2"></i>Share</a></li>
                            <li><a href="{{ url('compare') }}"><i class="feather-git-pull-request"></i>Add to Compare</a>
                            </li>
                            <li><a href="javascript:void(0);"><i class="feather-heart"></i>Wishlist</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- /Details -->

            <div class="row">
                <div class="col-lg-8">

                    <!-- Slider -->
                    <div class="buy-details-col">
                        <div class="rental-card">
                            <div class="slider rental-slider">
                                <div class="product-img">
                                    <img src="{{ URL::asset('/assets/img/rent/rent-detail-01.jpg') }}" alt="Slider">
                                </div>
                                <div class="product-img">
                                    <img src="{{ URL::asset('/assets/img/rent/rent-detail-02.jpg') }}" alt="Slider">
                                </div>
                                <div class="product-img">
                                    <img src="{{ URL::asset('/assets/img/rent/rent-detail-03.jpg') }}" alt="Slider">
                                </div>
                                <div class="product-img">
                                    <img src="{{ URL::asset('/assets/img/rent/rent-detail-04.jpg') }}" alt="Slider">
                                </div>
                                <div class="product-img">
                                    <img src="{{ URL::asset('/assets/img/rent/rent-detail-05.jpg') }}" alt="Slider">
                                </div>
                            </div>
                            <div class="slider slider-nav-thumbnails">
                                <div><img src="{{ URL::asset('/assets/img/rent/rent-detail-01.jpg') }}" alt="product image">
                                </div>
                                <div><img src="{{ URL::asset('/assets/img/rent/rent-detail-02.jpg') }}" alt="product image">
                                </div>
                                <div><img src="{{ URL::asset('/assets/img/rent/rent-detail-03.jpg') }}" alt="product image">
                                </div>
                                <div><img src="{{ URL::asset('/assets/img/rent/rent-detail-04.jpg') }}"
                                        alt="product image"></div>
                                <div><img src="{{ URL::asset('/assets/img/rent/rent-detail-05.jpg') }}"
                                        alt="product image"></div>
                            </div>
                        </div>
                    </div>
                    <!-- /Slider -->

                    <!-- Overview -->
                    <div class="collapse-card">
                        <h4 class="card-title">
                            <a class="collapsed" data-bs-toggle="collapse" href="#overview"
                                aria-expanded="false">Overview</a>
                        </h4>
                        <div id="overview" class="card-collapse collapse show">
                            <ul class="property-overview  collapse-view">
                                <li>
                                    <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}" alt="Image">
                                    <p>4 Beds</p>
                                </li>
                                <li>
                                    <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}" alt="Image">
                                    <p>4 Baths</p>
                                </li>
                                <li>
                                    <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}" alt="Image">
                                    <p>35000 Sqft</p>
                                </li>
                                <li>
                                    <img src="{{ URL::asset('/assets/img/icons/garage-icon.svg') }}" alt="Image">
                                    <p>2 Garages</p>
                                </li>
                                <li>
                                    <img src="{{ URL::asset('/assets/img/icons/calender-icon.svg') }}" alt="Image">
                                    <p>Year Built: 2005</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- /Overview -->

                    <!-- Overview -->
                    <div class="collapse-card">
                        <h4 class="card-title">
                            <a class="collapsed" data-bs-toggle="collapse" href="#about"
                                aria-expanded="false">Description</a>
                        </h4>
                        <div id="about" class="card-collapse collapse show">
                            <div class="about-agent collapse-view">
                                <p> Good road frontage on a paved county road with utilities make it an amazing setting for
                                    yourdream country getaway! If you like views, you must see this property!,
                                <p>
                                <p>This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River
                                    Valley.Located right in the heart of Upstate NYs Amish farm Country, this land is
                                    certified organic makingit extremely rare! Good road frontage on a paved county road
                                    with utilities make it an amazingsetting for your dream country getaway! If you like
                                    views, you must see this property!This propertyis mostly wooded and sits high on a
                                    hilltop overlooking the Mohawk River Valley. Located right inthe heart of Upstate NYs
                                    Amish farm Country, this land is certified organic making it extremelyrare! Good road
                                    frontage on a paved county road with utilities make it an amazing setting for yourdream
                                    country getaway! If you like views, you must see this property!</p>
                            </div>
                        </div>
                    </div>
                    <!-- /Overview -->

                    <!-- Property Address -->
                    <div class="collapse-card">
                        <h4 class="card-title">
                            <a class="collapsed" data-bs-toggle="collapse" href="#address" aria-expanded="false">Property
                                Address</a>
                        </h4>
                        <div id="address" class="card-collapse collapse show  collapse-view">
                            <ul class="property-address">
                                <li>Address : <span> Ferris Park</span></li>
                                <li>City : <span> Jersey City </span></li>
                                <li>State/County : <span> New Jersey State</span></li>
                                <li>Country : <span> United States</span></li>
                                <li>Zip : <span> 07305</span></li>
                                <li>Area : <span> Greenville</span></li>
                            </ul>
                        </div>
                    </div>
                    <!-- /Property Address -->

                    <!-- Property Details -->
                    <div class="collapse-card">
                        <h4 class="card-title">
                            <a class="collapsed" data-bs-toggle="collapse" href="#details" aria-expanded="false">Property
                                Details</a>
                        </h4>
                        <div id="details" class="card-collapse collapse show  collapse-view">
                            <div class="row">
                                <div class="col-md-4">
                                    <ul class="property-details">
                                        <li>Property Id : <span> 22972</span></li>
                                        <li>Price : <span> $ 860,000 </span></li>
                                        <li>Price Info: <span> $ 1,098 /sq ft</span></li>
                                        <li>Property Size : <span> 190 ft2</span></li>
                                        <li>Property Lot Size : <span> 1,200 ft2</span></li>
                                    </ul>
                                </div>
                                <div class="col-md-4">
                                    <ul class="property-details">
                                        <li>Rooms : <span> 10</span></li>
                                        <li>Bedrooms : <span> 5</span></li>
                                        <li>Bathrooms : <span> 6</span></li>
                                        <li>Custom Id : <span> 68</span></li>
                                        <li>Garages : <span> 2</span></li>
                                    </ul>
                                </div>
                                <div class="col-md-4">
                                    <ul class="property-details">
                                        <li>Year Built : <span> 2005</span></li>
                                        <li>Garage Size : <span> 2 cars </span></li>
                                        <li>Available From : <span> 2023-11-18</span></li>
                                        <li>Structure Type : <span> Brick</span></li>
                                        <li>Floors No : <span> 3</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Property Details -->

                    <!-- Amenities -->
                    <div class="collapse-card">
                        <h4 class="card-title">
                            <a class="collapsed" data-bs-toggle="collapse" href="#amenities"
                                aria-expanded="false">Amenities</a>
                        </h4>
                        <div id="amenities" class="card-collapse collapse show  collapse-view">
                            <div class="row">
                                <div class="col-md-4">
                                    <ul class="amenities-list">
                                        <li><img src="{{ URL::asset('/assets/img/icons/amenities-icon-1.svg') }}"
                                                alt="Image">Air Conditioning</li>
                                        <li><img src="{{ URL::asset('/assets/img/icons/amenities-icon-2.svg') }}"
                                                alt="Image">Swimming Pools</li>
                                        <li><img src="{{ URL::asset('/assets/img/icons/amenities-icon-3.svg') }}"
                                                alt="Image">Sporting Facilities</li>
                                        <li><img src="{{ URL::asset('/assets/img/icons/amenities-icon-4.svg') }}"
                                                alt="Image">Gym</li>
                                        <li><img src="{{ URL::asset('/assets/img/icons/amenities-icon-5.svg') }}"
                                                alt="Image">Clubhouse</li>
                                    </ul>
                                </div>
                                <div class="col-md-4">
                                    <ul class="amenities-list">
                                        <li><img src="{{ URL::asset('/assets/img/icons/amenities-icon-6.svg') }}"
                                                alt="Image">Landscaped Gardens</li>
                                        <li><img src="{{ URL::asset('/assets/img/icons/amenities-icon-7.svg') }}"
                                                alt="Image">Wide-Open Spaces</li>
                                        <li><img src="{{ URL::asset('/assets/img/icons/amenities-icon-8.svg') }}"
                                                alt="Image">Parks </li>
                                        <li><img src="{{ URL::asset('/assets/img/icons/amenities-icon-9.svg') }}"
                                                alt="Image">Package Lockers</li>
                                        <li><img src="{{ URL::asset('/assets/img/icons/amenities-icon-10.svg') }}"
                                                alt="Image">Spa</li>
                                    </ul>
                                </div>
                                <div class="col-md-4">
                                    <ul class="amenities-list">
                                        <li><img src="{{ URL::asset('/assets/img/icons/amenities-icon-11.svg') }}"
                                                alt="Image">Surveillance Cameras</li>
                                        <li><img src="{{ URL::asset('/assets/img/icons/amenities-icon-12.svg') }}"
                                                alt="Image">Billiards Table</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Amenities -->

                    <!-- Video -->
                    <div class="collapse-card">
                        <h4 class="card-title">
                            <a class="collapsed" data-bs-toggle="collapse" href="#video"
                                aria-expanded="false">Video</a>
                        </h4>
                        <div id="video" class="card-collapse collapse show  collapse-view">
                            <div class="sample-video">
                                <img src="{{ URL::asset('/assets/img/video-img.jpg') }}" alt="Image">
                                <a class="play-icon" data-fancybox="" href="https://www.youtube.com/embed/AWovHEZcpQU"><i
                                        class="bx bx-play"></i></a>
                            </div>
                        </div>
                    </div>
                    <!-- /Video -->

                    <!-- Map -->
                    <div class="collapse-card">
                        <h4 class="card-title">
                            <a class="collapsed" data-bs-toggle="collapse" href="#map" aria-expanded="false">Map</a>
                        </h4>
                        <div id="map" class="card-collapse collapse show  collapse-view">
                            <div class="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509170.989457427!2d-12380081967108484!3d37.192957227641294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v166911581381!5m2!1sen!2sin"
                                    style="border:0;" allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade" class="contact-map"></iframe>
                            </div>
                        </div>
                    </div>
                    <!-- /Map -->

                    <!-- Reviews -->
                    <div class="collapse-card sidebar-card">
                        <h4 class="card-title">
                            <a class="collapsed" data-bs-toggle="collapse" href="#review" aria-expanded="false">Reviews
                                (25)</a>
                        </h4>
                        <div id="review" class="card-collapse collapse show  collapse-view">
                            <div class="review-card">
                                <div class="customer-review">
                                    <div class="customer-info">
                                        <div class="customer-name">
                                            <a href="javascript:void(0);"><img
                                                    src="{{ URL::asset('/assets/img/profiles/avatar-01.jpg') }}"
                                                    alt="User"></a>
                                            <div>
                                                <h5><a href="javascript:void(0);">Johnson</a></h5>
                                                <p>02 Jan 2023</p>
                                            </div>
                                        </div>
                                        <div class="rating">
                                            <span class="rating-count">
                                                <i class="fa-solid fa-star checked"></i>
                                                <i class="fa-solid fa-star checked"></i>
                                                <i class="fa-solid fa-star checked"></i>
                                                <i class="fa-solid fa-star checked"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </span>
                                            <p class="rating-review"><span>4.0</span>(20 Reviews)</p>
                                        </div>
                                    </div>
                                    <div class="review-para">
                                        <p>It was popularised in the 1960s with the release of Letraset sheets containing
                                            LoremIpsum passages, and more recently with desktop publishing software like
                                            Aldus PageMakerincluding versions of Lorem Ipsum.It was popularised in the 1960s
                                        </p>
                                    </div>
                                </div>
                                <div class="customer-review">
                                    <div class="customer-info">
                                        <div class="customer-name">
                                            <a href="javascript:void(0);"><img
                                                    src="{{ URL::asset('/assets/img/profiles/avatar-02.jpg') }}"
                                                    alt="User"></a>
                                            <div>
                                                <h5><a href="javascript:void(0);">Casandra</a></h5>
                                                <p>01 Jan 2023</p>
                                            </div>
                                        </div>
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
                                    </div>
                                    <div class="review-para">
                                        <p>It was popularised in the 1960s with the release of Letraset sheets containing
                                            LoremIpsum passages, and more recently with desktop publishing software like
                                            Aldus PageMakerincluding versions of Lorem Ipsum.It was popularised in the 1960s
                                            with the elease ofLetraset sheets containing Lorem Ipsum passages, and more
                                            recently with desktop publishingsoftware like Aldus Page Maker including
                                            versions.</p>
                                    </div>
                                </div>
                                <div class="property-review">
                                    <h5 class="card-title">Property Reviews</h5>
                                    <form action="#">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="review-form">
                                                    <input type="text" class="form-control" placeholder="Your Name">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="review-form">
                                                    <input type="email" class="form-control" placeholder="Your Email">
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="review-form">
                                                    <textarea rows="5" placeholder="Enter Your Comments"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="review-form submit-btn">
                                                    <button type="submit" class="btn-primary">Submit Review</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Reviews -->

                </div>

                <!-- Sidebar -->
                <div class="col-lg-4 theiaStickySidebar">
                    <div class="right-sidebar">
                        <a href="{{ url('rental-order') }}" class="btn btn-primary prop-book"><i
                                class="bx bx-calendar"></i>Book Property</a>

                        <!-- Enquiry -->
                        <div class="sidebar-card">
                            <div class="sidebar-card-title">
                                <h5>Request Info</h5>
                            </div>
                            <div class="user-active">
                                <div class="user-img">
                                    <a href="javascript:void(0);"><img class="avatar"
                                            src="{{ URL::asset('/assets/img/profiles/avatar-03.jpg') }}"
                                            alt="Image"></a>
                                    <span class="avatar-online"></span>
                                </div>
                                <div class="user-name">
                                    <h4><a href="javascript:void(0);">John Collins</a></h4>
                                    <p> Company Agent</p>
                                </div>
                            </div>
                            <form action="#">
                                <div class="review-form">
                                    <input type="text" class="form-control" placeholder="Your Name">
                                </div>
                                <div class="review-form">
                                    <input type="email" class="form-control" placeholder="Your Email">
                                </div>
                                <div class="review-form">
                                    <input type="text" class="form-control" placeholder="Your Phone Number">
                                </div>
                                <div class="review-form">
                                    <textarea rows="5" placeholder="Yes, I'm Interested"></textarea>
                                </div>
                                <div class="review-form submit-btn">
                                    <button type="submit" class="btn-primary">Send Email</button>
                                </div>
                            </form>
                            <ul class="connect-us">
                                <li><a href="javascript:void(0);"><i class="feather-phone"></i>Call Us</a></li>
                                <li><a href="javascript:void(0);"><i class="fa-brands fa-whatsapp"></i>Whatsapp</a></li>
                            </ul>
                        </div>
                        <!-- /Enquiry -->

                        <!-- Listing Owner Details -->
                        <div class="sidebar-card">
                            <div class="sidebar-card-title">
                                <h5>Listing Owner Details</h5>
                            </div>
                            <div class="user-active bg-white p-0">
                                <div class="user-img">
                                    <a href="javascript:void(0);"><img class="avatar"
                                            src="{{ URL::asset('/assets/img/profiles/avatar-03.jpg') }}"
                                            alt="Image"></a>
                                </div>
                                <div class="user-name">
                                    <h4><a href="javascript:void(0);">John Collins</a></h4>
                                    <div class="rating">
                                        <span class="rating-count d-inline-flex">
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                            <i class="fa-solid fa-star checked"></i>
                                        </span>
                                        <span class="rating-review">5.0 (20 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                            <ul class="list-details">
                                <li>No of Listings <span>05</span></li>
                                <li>No of Bookings<span>225</span></li>
                                <li>Memeber on<span>15 Jan 2023</span></li>
                                <li>Verification<span>Verified</span></li>
                            </ul>
                        </div>
                        <!-- /Listing Owner Details -->

                        <!-- Share Property -->
                        <div class="sidebar-card">
                            <div class="sidebar-card-title">
                                <h5>Share Property</h5>
                            </div>
                            <div class="social-links">
                                <ul class="sidebar-social-links">
                                    <li><a href="javascript:void(0);" class="fb-icon"><i
                                                class="fa-brands fa-facebook-f hi-icon"></i></a></li>
                                    <li><a href="javascript:void(0);" class="ins-icon"><i
                                                class="fa-brands fa-instagram hi-icon"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-behance hi-icon"></i></a>
                                    </li>
                                    <li><a href="javascript:void(0);" class="twitter-icon"><i
                                                class="fa-brands fa-twitter hi-icon"></i></a></li>
                                    <li><a href="javascript:void(0);" class="ins-icon"><i
                                                class="fa-brands fa-pinterest-p hi-icon"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-linkedin hi-icon"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- /Share Property -->

                    </div>
                </div>
                <!-- /Sidebar -->

            </div>

            <!-- Similar Listings -->
            <div class="similar-list">
                <div class="section-heading">
                    <h2>Similar Listings</h2>
                    <div class="sec-line">
                        <span class="sec-line1"></span>
                        <span class="sec-line2"></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmodtempor incididunt</p>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="feature-property-sec for-rent p-0">
                            <div class="rentfeature-slider owl-carousel">
                                <div class="product-custom">
                                    <div class="profile-widget">
                                        <div class="doc-img">
                                            <a href="{{ url('rent-details') }}" class="property-img">
                                                <img class="img-fluid" alt="Property Image"
                                                    src="{{ URL::asset('/assets/img/product/product-6.jpg') }}">
                                            </a>
                                            <div class="product-amount">
                                                <h5><span>$2,200 </span> / Night</h5>
                                            </div>
                                            <div class="featured">
                                                <span>Featured</span>
                                            </div>
                                            <div class="new-featured">
                                                <span>New</span>
                                            </div>
                                            <a href="javascript:void(0)">
                                                <div class="favourite">
                                                    <span><i class="fa-regular fa-heart"></i></span>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="pro-content">
                                            <div class="rating">
                                                <span class="rating-count">
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                </span>
                                                <span class="rating-review">Excellent</span>
                                            </div>
                                            <h3 class="title">
                                                <a href="{{ url('rent-details') }}">Beautiful Condo Room</a>
                                            </h3>
                                            <p><i class="feather-map-pin"></i> 318-S Oakley Blvd, Chicago, IL 60612, USA
                                            </p>
                                            <ul class="d-flex details">
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                        alt="bed-icon">
                                                    3 Beds
                                                </li>
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                        alt="bath-icon">
                                                    2 Baths
                                                </li>
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                        alt="building-icon">
                                                    15000 Sqft
                                                </li>
                                            </ul>
                                            <ul
                                                class="property-category d-flex justify-content-between align-items-center">
                                                <li class="user-info">
                                                    <a href="javascript:void(0);"><img
                                                            src="{{ URL::asset('/assets/img/profiles/avatar-01.jpg') }}"
                                                            class="img-fluid avatar" alt="User"></a>
                                                    <div class="user-name">
                                                        <h6><a href="javascript:void(0);">Marc Silva</a></h6>
                                                        <p>Newyork</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="{{ url('rent-details') }}" class="btn-primary">Book Now</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-custom">
                                    <div class="profile-widget">
                                        <div class="doc-img">
                                            <a href="{{ url('rent-details') }}" class="property-img">
                                                <img class="img-fluid" alt="Property Image"
                                                    src="{{ URL::asset('/assets/img/product/product-7.jpg') }}">
                                            </a>
                                            <div class="product-amount">
                                                <h5><span>$1,400 </span> / Night</h5>
                                            </div>
                                            <div class="featured">
                                                <span>Featured</span>
                                            </div>
                                            <a href="javascript:void(0)">
                                                <div class="favourite">
                                                    <span><i class="fa-regular fa-heart"></i></span>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="pro-content">
                                            <div class="rating">
                                                <span class="rating-count">
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                </span>
                                                <span class="rating-review">Excellent</span>
                                            </div>
                                            <h3 class="title">
                                                <a href="{{ url('rent-details') }}">Grand Mahaka</a>
                                            </h3>
                                            <p><i class="feather-map-pin"></i> 470 Park Ave S, New York, NY 10016</p>
                                            <ul class="d-flex details">
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                        alt="bed-icon">
                                                    3 Beds
                                                </li>
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                        alt="bath-icon">
                                                    3 Baths
                                                </li>
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                        alt="building-icon">
                                                    30100 Sqft
                                                </li>
                                            </ul>
                                            <ul
                                                class="property-category d-flex justify-content-between align-items-center">
                                                <li class="user-info">
                                                    <a href="javascript:void(0);"><img
                                                            src="{{ URL::asset('/assets/img/profiles/avatar-02.jpg') }}"
                                                            class="img-fluid avatar" alt="User"></a>
                                                    <div class="user-name">
                                                        <h6><a href="javasript:void(0);">Karen Maria</a></h6>
                                                        <p>South Dokata</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="{{ url('rent-details') }}" class="btn-primary">Book Now</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-custom">
                                    <div class="profile-widget">
                                        <div class="doc-img">
                                            <a href="{{ url('rent-details') }}" class="property-img">
                                                <img class="img-fluid" alt="Property Image"
                                                    src="{{ URL::asset('/assets/img/product/product-8.jpg') }}">
                                            </a>
                                            <div class="product-amount">
                                                <h5><span>$1,500 </span> / Night</h5>
                                            </div>
                                            <div class="featured">
                                                <span>Featured</span>
                                            </div>
                                            <a href="javascript:void(0)">
                                                <div class="favourite">
                                                    <span><i class="fa-regular fa-heart"></i></span>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="pro-content">
                                            <div class="rating">
                                                <span class="rating-count">
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                </span>
                                                <span class="rating-review">Excellent</span>
                                            </div>
                                            <h3 class="title">
                                                <a href="{{ url('rent-details') }}">Royal Apartment</a>
                                            </h3>
                                            <p><i class="feather-map-pin"></i> 82-25 Parsons Blvd, Jamaica, NY 11432, USA
                                            </p>
                                            <ul class="d-flex details">
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                        alt="bed-icon">
                                                    2 Beds
                                                </li>
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                        alt="bath-icon">
                                                    1 Bath
                                                </li>
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                        alt="building-icon">
                                                    2500 Sqft
                                                </li>
                                            </ul>
                                            <ul
                                                class="property-category d-flex justify-content-between align-items-center">
                                                <li class="user-info">
                                                    <a href="javascript:void(0);"><img
                                                            src="{{ URL::asset('/assets/img/profiles/avatar-03.jpg') }}"
                                                            class="img-fluid avatar" alt="User"></a>
                                                    <div class="user-name">
                                                        <h6><a href="javascript:void(0)">Scott Gwin</a></h6>
                                                        <p>Minipoliies</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="{{ url('rent-details') }}" class="btn-primary">Book Now</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="product-custom">
                                    <div class="profile-widget">
                                        <div class="doc-img">
                                            <a href="{{ url('rent-details') }}" class="property-img">
                                                <img class="img-fluid" alt="Property Image"
                                                    src="{{ URL::asset('/assets/img/product/product-10.jpg') }}">
                                            </a>
                                            <div class="product-amount">
                                                <h5><span>$4,500 </span> / Night</h5>
                                            </div>
                                            <div class="featured">
                                                <span>Featured</span>
                                            </div>
                                            <a href="javascript:void(0)">
                                                <div class="favourite">
                                                    <span><i class="fa-regular fa-heart"></i></span>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="pro-content">
                                            <div class="rating">
                                                <span class="rating-count">
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                    <i class="fa-solid fa-star checked"></i>
                                                </span>
                                                <span class="rating-review">Excellent</span>
                                            </div>
                                            <h3 class="title">
                                                <a href="{{ url('rent-details') }}">Grand Villa house</a>
                                            </h3>
                                            <p><i class="feather-map-pin"></i> 470 Park Ave S, New York, NY 10016</p>
                                            <ul class="d-flex details">
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/bed-icon.svg') }}"
                                                        alt="bed-icon">
                                                    4 Beds
                                                </li>
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/bath-icon.svg') }}"
                                                        alt="bath-icon">
                                                    3 Baths
                                                </li>
                                                <li>
                                                    <img src="{{ URL::asset('/assets/img/icons/building-icon.svg') }}"
                                                        alt="building-icon">
                                                    11000 Sqft
                                                </li>
                                            </ul>
                                            <ul
                                                class="property-category d-flex justify-content-between align-items-center">
                                                <li class="user-info">
                                                    <a href="javascript:void(0);"><img
                                                            src="{{ URL::asset('/assets/img/profiles/avatar-05.jpg') }}"
                                                            class="img-fluid avatar" alt="User"></a>
                                                    <div class="user-name">
                                                        <h6><a href="javascript:void(0);">Kell Robinson</a></h6>
                                                        <p>USA</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="{{ url('rent-details') }}" class="btn-primary">Book Now</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Similar Listings -->

        </div>
    </section>
    <!-- /Detail View Section -->
@endsection
