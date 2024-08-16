@if (
    !Route::is([
        'reset-password',
        'forgot-password',
        'login',
        'register',
        'coming-soon',
        'error-404',
        'error-500',
        'maintenance',
    ]))
    <!-- Header -->
    <header class="header header-fix">
        @if (Route::is(['index']))
            <div class="header-top">
                <div class="template-ad">
                    <img src="{{ URL::asset('/assets/img/icons/badge-icon.svg') }}" alt="icon">
                    <h5>No 1, Realestate Website to Buy / Sell Your Place <span>First Listing Free!!!</span></h5>
                </div>
            </div>
        @endif
        <nav class="navbar navbar-expand-lg header-nav">
            <div class="navbar-header">
                <a id="mobile_btn" href="javascript:void(0);">
                    <span class="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </a>
                <a href="{{ url('index') }}" class="navbar-brand logo">
                    <img src="{{ URL::asset('/assets/img/logo.svg') }}" class="img-fluid" alt="Logo">
                </a>
            </div>
            <div class="main-menu-wrapper">
                <div class="menu-header">
                    <a href="{{ url('index') }}" class="menu-logo">
                        <img src="{{ URL::asset('/assets/img/logo.svg') }}" class="img-fluid" alt="Logo">
                    </a>

                    <a id="menu_close" class="menu-close" href="javascript:void(0);">
                        <i class="fas fa-times"></i>
                    </a>
                </div>
                <ul class="main-nav">
                    <li class="{{ Request::is('index', '/') ? 'active' : '' }}">
                        <a href="{{ url('index') }}">Home</a>
                    </li>
                    <li
                        class="has-submenu {{ Request::is('buy-property-grid', 'buy-property-list', 'buy-property-grid-sidebar', 'buy-property-list-sidebar', 'buy-grid-map', 'buy-list-map', 'buy-details', 'rent-property-grid', 'rent-property-list', 'rent-property-grid-sidebar', 'rent-property-list-sidebar', 'rent-grid-map', 'rent-list-map', 'rent-details') ? 'active' : '' }}">
                        <a href="javascript:void(0);">Listing <i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li class="has-submenu">
                                <a href="javascript:void(0);"
                                    class=" {{ Request::is('buy-property-grid', 'buy-property-list', 'buy-property-grid-sidebar', 'buy-property-list-sidebar', 'buy-grid-map', 'buy-list-map', 'buy-details') ? 'active' : '' }}">Buy
                                    Property</a>
                                <ul class="submenu">
                                    <li><a href="{{ url('buy-property-grid') }}"
                                            class="{{ Request::is('buy-property-grid') ? 'active' : '' }}">Buy Grid</a>
                                    </li>
                                    <li><a href="{{ url('buy-property-list') }}"
                                            class="{{ Request::is('buy-property-list') ? 'active' : '' }}">Buy List</a>
                                    </li>
                                    <li><a href="{{ url('buy-property-grid-sidebar') }}"
                                            class="{{ Request::is('buy-property-grid-sidebar') ? 'active' : '' }}">Buy
                                            Grid With Sidebar</a></li>
                                    <li><a href="{{ url('buy-property-list-sidebar') }}"
                                            class="{{ Request::is('buy-property-list-sidebar') ? 'active' : '' }}">Buy
                                            List With Sidebar</a></li>
                                    <li><a href="{{ url('buy-grid-map') }}"
                                            class="{{ Request::is('buy-grid-map') ? 'active' : '' }}">Buy Grid with
                                            map</a></li>
                                    <li><a href="{{ url('buy-list-map') }}"
                                            class="{{ Request::is('buy-list-map') ? 'active' : '' }}">Buy List with
                                            map</a></li>
                                    <li><a href="{{ url('buy-details') }}"
                                            class="{{ Request::is('buy-details') ? 'active' : '' }}">Buy Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="has-submenu">
                                <a href="javascript:void(0);"
                                    class=" {{ Request::is('rent-property-grid', 'rent-property-list', 'rent-property-grid-sidebar', 'rent-property-list-sidebar', 'rent-grid-map', 'rent-list-map', 'rent-details') ? 'active' : '' }}">Rent
                                    Property</a>
                                <ul class="submenu">
                                    <li><a href="{{ url('rent-property-grid') }}"
                                            class="{{ Request::is('rent-property-grid') ? 'active' : '' }}">Rent
                                            Grid</a></li>
                                    <li><a href="{{ url('rent-property-list') }}"
                                            class="{{ Request::is('rent-property-list') ? 'active' : '' }}">Rent
                                            List</a></li>
                                    <li><a href="{{ url('rent-property-grid-sidebar') }}"
                                            class="{{ Request::is('rent-property-grid-sidebar') ? 'active' : '' }}">Rent
                                            Grid With Sidebar</a>
                                    </li>
                                    <li><a href="{{ url('rent-property-list-sidebar') }}"
                                            class="{{ Request::is('rent-property-list-sidebar') ? 'active' : '' }}">Rent
                                            List With Sidebar</a>
                                    </li>
                                    <li><a href="{{ url('rent-grid-map') }}"
                                            class="{{ Request::is('rent-grid-map') ? 'active' : '' }}">Rent Grid with
                                            map</a></li>
                                    <li><a href="{{ url('rent-list-map') }}"
                                            class="{{ Request::is('rent-list-map') ? 'active' : '' }}">Rent List with
                                            map</a></li>
                                    <li><a href="{{ url('rent-details') }}"
                                            class="{{ Request::is('rent-details') ? 'active' : '' }}">Rent Details</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li
                        class="has-submenu  {{ Request::is('agent-grid', 'agent-list', 'agent-grid-sidebar', 'agent-list-sidebar', 'agent-details') ? 'active' : '' }}">
                        <a href="javascript:void(0);">Agent <i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li><a href="{{ url('agent-grid') }}"
                                    class="{{ Request::is('agent-grid') ? 'active' : '' }}">Agent Grid</a></li>
                            <li><a href="{{ url('agent-list') }}"
                                    class="{{ Request::is('agent-list') ? 'active' : '' }}">Agent List</a></li>
                            <li><a href="{{ url('agent-grid-sidebar') }}"
                                    class="{{ Request::is('agent-grid-sidebar') ? 'active' : '' }}">Agent Grid With
                                    Sidebar</a></li>
                            <li><a href="{{ url('agent-list-sidebar') }}"
                                    class="{{ Request::is('agent-list-sidebar') ? 'active' : '' }}">Agent List With
                                    Sidebar</a></li>
                            <li><a href="{{ url('agent-details') }}"
                                    class="{{ Request::is('agent-details') ? 'active' : '' }}">Agent Details</a></li>
                        </ul>
                    </li>
                    <li
                        class="has-submenu {{ Request::is('agency-grid', 'agency-list', 'agency-grid-sidebar', 'agency-list-sidebar', 'agency-details') ? 'active' : '' }}">
                        <a href="javascript:void(0);">Agency <i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li><a href="{{ url('agency-grid') }}"
                                    class="{{ Request::is('agency-grid') ? 'active' : '' }}">Agency Grid</a></li>
                            <li><a href="{{ url('agency-list') }}"
                                    class="{{ Request::is('agency-list') ? 'active' : '' }}">Agency List</a></li>
                            <li><a href="{{ url('agency-grid-sidebar') }}"
                                    class="{{ Request::is('agency-grid-sidebar') ? 'active' : '' }}">Agency Grid With
                                    Sidebar</a></li>
                            <li><a href="{{ url('agency-list-sidebar') }}"
                                    class="{{ Request::is('agency-list-sidebar') ? 'active' : '' }}">Agency List With
                                    Sidebar</a></li>
                            <li><a href="{{ url('agency-details') }}"
                                    class="{{ Request::is('agency-details') ? 'active' : '' }}">Agency Details</a></li>
                        </ul>
                    </li>
                    <li
                        class="has-submenu {{ Request::is('about-us', 'register', 'login', 'forgot-password', 'reset-password', 'invoice-details', 'error-404', 'error-500', 'pricing', 'faq', 'gallery', 'our-team', 'testimonial', 'terms-condition', 'privacy-policy', 'maintenance', 'coming-soon') ? 'active' : '' }}">
                        <a href="javascript:void(0);">Pages <i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li><a href="{{ url('about-us') }}"
                                    class="{{ Request::is('about-us') ? 'active' : '' }}">About Us</a></li>
                            <li class="has-submenu">
                                <a href="javascript:void(0);"
                                    class=" {{ Request::is('register', 'login', 'forgot-password', 'reset-password') ? 'active' : '' }}">Authentication</a>
                                <ul class="submenu">
                                    <li><a href="{{ url('register') }}"
                                            class="{{ Request::is('register') ? 'active' : '' }}">Signup</a></li>
                                    <li><a href="{{ url('login') }}"
                                            class="{{ Request::is('login') ? 'active' : '' }}">Signin</a></li>
                                    <li><a href="{{ url('forgot-password') }}"
                                            class="{{ Request::is('forgot-password') ? 'active' : '' }}">Forgot
                                            Password</a></li>
                                    <li><a href="{{ url('reset-password') }}"
                                            class="{{ Request::is('reset-password') ? 'active' : '' }}">Reset
                                            Password</a></li>
                                </ul>
                            </li>
                            <li><a href="{{ url('invoice-details') }}"
                                    class="{{ Request::is('invoice-details') ? 'active' : '' }}">Invoice Details</a>
                            </li>
                            <li class="has-submenu {{ Request::is('errpr-404', 'error-500') ? 'active' : '' }}">
                                <a href="javascript:void(0);">Error Page</a>
                                <ul class="submenu">
                                    <li><a href="{{ url('error-404') }}"
                                            class="{{ Request::is('error-404') ? 'active' : '' }}">404 Error</a></li>
                                    <li><a href="{{ url('error-500') }}"
                                            class="{{ Request::is('error-500') ? 'active' : '' }}">500 Error</a></li>
                                </ul>
                            </li>
                            <li><a href="{{ url('pricing') }}"
                                    class="{{ Request::is('pricing') ? 'active' : '' }}">Pricing</a></li>
                            <li><a href="{{ url('faq') }}"
                                    class="{{ Request::is('faq') ? 'active' : '' }}">FAQ</a></li>
                            <li><a href="{{ url('gallery') }}"
                                    class="{{ Request::is('gallery') ? 'active' : '' }}">Gallery</a></li>
                            <li><a href="{{ url('our-team') }}"
                                    class="{{ Request::is('our-team') ? 'active' : '' }}">Our Team</a></li>
                            <li><a href="{{ url('testimonial') }}"
                                    class="{{ Request::is('testimonial') ? 'active' : '' }}">Testimonials</a></li>
                            <li><a href="{{ url('terms-condition') }}"
                                    class="{{ Request::is('terms-condition') ? 'active' : '' }}">Terms &
                                    Conditions</a></li>
                            <li><a href="{{ url('privacy-policy') }}"
                                    class="{{ Request::is('privacy-policy') ? 'active' : '' }}">Privacy Policy</a>
                            </li>
                            <li><a href="{{ url('maintenance') }}"
                                    class="{{ Request::is('maintenance') ? 'active' : '' }}">Maintenance</a></li>
                            <li><a href="{{ url('coming-soon') }}"
                                    class="{{ Request::is('coming-soon') ? 'active' : '' }}">Coming Soon</a></li>
                        </ul>
                    </li>
                    <li class="has-submenu {{ Request::is('blog-list', 'blog-grid', 'blog-details') ? 'active' : '' }}">
                        <a href="javascript:void(0);">Blog <i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li><a href="{{ url('blog-list') }}"
                                    class="{{ Request::is('blog-list') ? 'active' : '' }}">Blog List</a></li>
                            <li><a href="{{ url('blog-grid') }}"
                                    class="{{ Request::is('blog-grid') ? 'active' : '' }}">Blog Grid</a></li>
                            <li><a href="{{ url('blog-details') }}"
                                    class="{{ Request::is('blog-details') ? 'active' : '' }}">Blog Details</a></li>
                        </ul>
                    </li>
                    <li class="{{ Request::is('contact-us') ? 'active' : '' }}"><a
                            href="{{ url('contact-us') }}">Contact Us</a></li>
                    <li class="searchbar">
                        <a href="javascript:void(0);">
                            <img src="{{ URL::asset('/assets/img/icons/search-icon.svg') }}" alt="img">
                        </a>
                    </li>
                    <li class="login-link"><a href="{{ url('login') }}">Sign Up</a></li>
                    <li class="login-link"><a href="{{ url('register') }}">Sign In</a></li>
                </ul>
            </div>
            <ul class="nav header-navbar-rht">
                <li class="new-property-btn">
                    <a href="{{ url('add-new-property') }}"
                        class="{{ Request::is('add-new-property') ? 'active' : '' }}">
                        <i class="bx bxs-plus-circle"></i> Add New Property
                    </a>
                </li>
                <li class="{{ Request::is('register') ? 'active' : '' }}">
                    <a href="{{ url('register') }}" class="btn btn-primary"><i class="feather-user-plus"></i>Sign
                        Up</a>
                </li>
                <li class="{{ Request::is('login') ? 'active' : '' }}">
                    <a href="{{ url('login') }}" class="btn sign-btn"><i class="feather-unlock"></i>Sign In</a>
                </li>
            </ul>
        </nav>
    </header>
    <!-- /Header -->
@endif

@if (Route::is([
        'reset-password',
        'forgot-password',
        'login',
        'register',
        'coming-soon',
        'error-404',
        'error-500',
        'maintenance',
    ]))
    <!-- Header -->
    <header class="log-header">
        <a href="{{ url('index') }}"><img class="img-fluid logo-dark"
                src="{{ URL::asset('/assets/img/logo.svg') }}" alt="Logo"></a>
    </header>
    <!-- /Header -->
@endif
