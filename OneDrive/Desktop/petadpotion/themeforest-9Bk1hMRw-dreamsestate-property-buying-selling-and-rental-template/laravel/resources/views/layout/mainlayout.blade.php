<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
    <title>DreamsEstate</title>

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ URL::asset('/assets/img/favicon.png') }}" type="image/x-icon">

    @include('layout.partials.head')
</head>

@if (!Route::is(['coming-soon', 'error-404', 'error-500', 'maintenance']))

    <body>
@endif
@if (Route::is(['coming-soon', 'error-404', 'error-500', 'maintenance']))

    <body class="error-page login-body p-0">
@endif
@component('components.loader')
@endcomponent
<!-- Main Wrapper -->
@if (!Route::is(['reset-password', 'forgot-password', 'login', 'register', 'about-us']))
    <div class="main-wrapper">
@endif
@if (Route::is(['about-us']))
    <div class="main-wrapper aboutus-page">
@endif
@if (Route::is(['reset-password', 'forgot-password', 'login', 'register']))
    <div class="main-wrapper login-body">
        <div class="container">
@endif
@if (Route::is(['coming-soon', 'error-404', 'error-500', 'maintenance']))
    <div class="container">
@endif
@include('layout.partials.header')
@yield('content')
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
    @include('layout.partials.footer')
@endif
@component('components.modal-popup')
@endcomponent
</div>
<!-- /Main Wrapper -->
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
    @component('components.scrolltotop')
    @endcomponent
@endif
@include('layout.partials.footer-scripts')
</body>

</html>
