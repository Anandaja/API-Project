<?php $page = 'error-404'; ?>
@extends('layout.mainlayout')
@section('content')
    <div class="error-box">
        <img src="{{ URL::asset('/assets/img/404.png') }}" class="img-fluid" alt="Page not found">
        <h1>Oops! Page Not Found!</h1>
        <p>The page you requested was not found.</p>
        <div class="back-button">
            <a href="{{ url('index') }}" class="btn">Back to Home</a>
        </div>
    </div>
    </div>
@endsection
