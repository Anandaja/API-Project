<?php $page = 'error-500'; ?>
@extends('layout.mainlayout')
@section('content')
    <div class="error-box">
        <img src="{{ URL::asset('/assets/img/500.png') }}" class="img-fluid" alt="Unexpected error">
        <h1>500 Unexpected Error</h1>
        <p class="error-content">We’re having some issuesat the moment. we’ll have it fixed in no time.</p>
        <div class="back-button">
            <a href="{{ url('index') }}" class="btn">Back to Home</a>
        </div>
    </div>
    </div>
@endsection
