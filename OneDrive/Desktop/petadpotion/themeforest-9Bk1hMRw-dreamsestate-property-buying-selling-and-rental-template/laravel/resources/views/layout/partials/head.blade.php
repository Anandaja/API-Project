<!-- Bootstrap CSS -->
<link rel="stylesheet" href="{{ url('assets/css/bootstrap.min.css') }}">

<!-- Fontawesome CSS -->
<link rel="stylesheet" href="{{ url('assets/plugins/fontawesome/css/fontawesome.min.css') }}">
<link rel="stylesheet" href="{{ url('assets/plugins/fontawesome/css/all.min.css') }}">

<!-- Feathericon CSS -->
<link rel="stylesheet" href="{{ url('assets/css/feather.css') }}">

<!-- Boxicons CSS -->
<link rel="stylesheet" href="{{ url('assets/plugins/boxicons/css/boxicons.min.css') }}">

@if (Route::is(['index', 'rent-property-grid-sidebar', 'rent-property-list-sidebar', 'rent-details','buy-details','blog-details']))
    <!-- Owl Carousel CSS -->
    <link rel="stylesheet" href="{{ url('assets/css/owl.carousel.min.css') }}">
@endif
@if (Route::is(['index','blog-grid']))
    <!-- Animation CSS -->
    <link rel="stylesheet" href="{{ url('assets/css/aos.css') }}">
@endif
@if (Route::is(['agent-details','buy-detail-view']))
<!-- Owl Carousel CSS -->
<link rel="stylesheet" href="{{ url('assets/css/owl.carousel.min.css') }}">
@endif


@if (Route::is(['rent-property-grid-sidebar', 'rent-property-list-sidebar','buy-property-grid-sidebar','buy-property-list-sidebar']))
    <!-- Slider Range CSS -->
    <link rel="stylesheet" href="{{url('assets/plugins/range-slider/slider-range.css') }}">
@endif

@if (Route::is(['rent-details','buy-details']))
    <!-- Fancybox CSS -->
    <link rel="stylesheet" href="{{url('assets/plugins/fancybox/jquery.fancybox.min.css') }}">
@endif

@if (Route::is(['rental-order-step3']))
<!-- Bootstrap Datetimepicker CSS -->
<link rel="stylesheet" href="{{url('assets/css/bootstrap-datetimepicker.min.css') }}">
@endif

<!-- Select2 CSS -->
<link rel="stylesheet" href="{{url('assets/plugins/select2/css/select2.min.css') }}">

<!-- Main CSS -->
<link rel="stylesheet" href="{{url('assets/css/style.css') }}">
@if (Route::is([
        'index',
        'rent-property-grid-sidebar',
        'rent-property-list-sidebar',
        'rent-details',
        'buy-details',
        'agency-details',
        'about-us'
    ]))
    <!-- Owl Carousel CSS -->
    <link rel="stylesheet" href="{{ url('assets/css/owl.carousel.min.css') }}">
@endif
@if (Route::is(['index','pricing','faq','gallery','our-team','testimonial','terms-condition','privacy-policy']))
    <!-- Animation CSS -->
    <link rel="stylesheet" href="{{ url('assets/css/aos.css') }}">
@endif

@if (Route::is([
        'rent-property-grid-sidebar',
        'rent-property-list-sidebar',
        'buy-property-grid-sidebar',
        'buy-property-list-sidebar',
    ]))
    <!-- Slider Range CSS -->
    <link rel="stylesheet" href="{{ url('assets/plugins/range-slider/slider-range.css') }}">
@endif

@if (Route::is(['rent-details', 'buy-details', 'gallery']))
    <!-- Fancybox CSS -->
    <link rel="stylesheet" href="{{ url('assets/plugins/fancybox/jquery.fancybox.min.css') }}">
@endif

@if (Route::is(['rental-order-step3']))
    <!-- Bootstrap Datetimepicker CSS -->
    <link rel="stylesheet" href="{{ url('assets/css/bootstrap-datetimepicker.min.css') }}">
@endif

<!-- Select2 CSS -->
<link rel="stylesheet" href="{{ url('assets/plugins/select2/css/select2.min.css') }}">

<!-- Main CSS -->
<link rel="stylesheet" href="{{ url('assets/css/style.css') }}">
