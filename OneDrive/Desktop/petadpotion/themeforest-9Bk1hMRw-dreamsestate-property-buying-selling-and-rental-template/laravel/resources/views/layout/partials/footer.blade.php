<!-- Footer -->
<footer class="footer">
    <!-- Footer Top -->
    <div class="footer-top">
        <div class="footer-border-img">
            <img src="{{ URL::asset('/assets/img/bg/line-bg.png') }}" alt="image">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-8">
                    <div class="footer-widget footer-about">
                        <div class="footer-app-content">
                            <div class="footer-content-heading">
                                <h4>Get Our App </h4>
                                <p>Download the app and book your property</p>
                            </div>
                            <div class="download-app">
                                <a href="javascript:void(0);"><img src="{{ URL::asset('/assets/img/google-pay.png') }}"
                                        alt="google play"></a>
                                <a href="javascript:void(0);"><img src="{{ URL::asset('/assets/img/app-store.png') }}"
                                        alt="app store"></a>
                            </div>
                            <div class="social-links">
                                <h4>Connect with us</h4>
                                <ul>
                                    <li><a href="javascript:void(0);"><i
                                                class="fa-brands fa-facebook-f hi-icon"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-instagram hi-icon"></i></a>
                                    </li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-behance hi-icon"></i></a>
                                    </li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-twitter hi-icon"></i></a>
                                    </li>
                                    <li><a href="javascript:void(0);"><i
                                                class="fa-brands fa-pinterest-p hi-icon"></i></a></li>
                                    <li><a href="javascript:void(0);"><i class="fa-brands fa-linkedin hi-icon"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4">
                    <div class="footer-widget-list">
                        <div class="footer-content-heading">
                            <h4>Explore</h4>
                        </div>
                        <ul>
                            <li><a href="{{ url('rent-property-list') }}">Listings</a></li>
                            <li><a href="{{ url('register') }}">Register</a></li>
                            <li><a href="{{ url('login') }}">Login</a></li>
                            <li><a href="{{ url('blog-grid') }}">Blogs</a></li>
                            <li><a href="{{ url('agency-grid') }}">Agency</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-4">
                    <div class="footer-widget-list">
                        <div class="footer-content-heading">
                            <h4>Categories</h4>
                        </div>
                        <ul>
                            <li><a href="javascript:void(0);">Apartments</a></li>
                            <li><a href="javascript:void(0);">Home</a></li>
                            <li><a href="javascript:void(0);">Office</a></li>
                            <li><a href="javascript:void(0);">Villas</a></li>
                            <li><a href="javascript:void(0);">Flat</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-4">
                    <div class="footer-widget-list">
                        <div class="footer-content-heading">
                            <h4>Locations</h4>
                        </div>
                        <ul>
                            <li><a href="javascript:void(0);">United States</a></li>
                            <li><a href="javascript:void(0);">Canada</a></li>
                            <li><a href="javascript:void(0);">India</a></li>
                            <li><a href="javascript:void(0);">UK</a></li>
                            <li><a href="javascript:void(0);">Australia</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-4">
                    <div class="footer-widget-list">
                        <div class="footer-content-heading">
                            <h4>Quick Links</h4>
                        </div>
                        <ul>
                            <li><a href="{{ url('about-us') }}">About</a></li>
                            <li><a href="{{ url('faq') }}">Faq</a></li>
                            <li><a href="{{ url('terms-condition') }}">Terms & Conditions</a></li>
                            <li><a href="{{ url('privacy-policy') }}">Privacy Policy</a></li>
                            <li><a href="{{ url('gallery') }}">Gallery</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Footer Top -->

    <!-- Footer Bottom -->
    <div class="footer-bottom">
        <div class="container">
            <div class="footer-bottom-content">
                <div class="copyright">
                    <p>Copyright <script>
                        document.write(new Date().getFullYear())
                  
                        </script> - All right reserved DreamsEstate</p>
                </div>
                <div class="company-logo">
                    <p>a product of</p>
                    <a href="https://dreamstechnologies.com/" target="_blank"><img
                            src="{{ URL::asset('/assets/img/company-logo.png') }}" alt="Logo"></a>
                </div>
            </div>
        </div>
    </div>
    <!-- /Footer Bottom -->

</footer>
<!-- /Footer -->

<!-- Search -->
<div class="search-popup js-search-popup ">
    <a href="javascript:void(0);" class="close-button" id="search-close" aria-label="Close search">
        <i class="fa fa-close"></i>
    </a>
    <div class="popup-inner">
        <div class="inner-container">
            <form class="search-form" id="search-form" action="rent-property-grid">
                <h3>What Are You Looking for?</h3>
                <div class="search-form-box flex">
                    <input type="text" class="search-input" placeholder="Type a  Keyword...." id="search-input"
                        aria-label="Type to search" role="searchbox" autocomplete="off">
                    <button type="submit" class="search-icon"><i class="bx bx-search"></i></button>
                </div>
                <h5>Popular Properties</h5>
                <ul>
                    <li><a href="{{ url('rent-property-grid') }}">Beautiful Condo Room</a></li>
                    <li><a href="{{ url('rent-property-grid') }}">Royal Apartment</a></li>
                    <li><a href="{{ url('rent-property-grid') }}">Grand Villa House</a></li>
                    <li><a href="{{ url('rent-property-grid') }}">Grand Mahaka</a></li>
                    <li><a href="{{ url('rent-property-grid') }}">Lunaria Residence</a></li>
                    <li><a href="{{ url('rent-property-grid') }}">Stephen Alexander Homes</a></li>
                </ul>
            </form>
        </div>
    </div>
</div>
<!-- /Search -->
