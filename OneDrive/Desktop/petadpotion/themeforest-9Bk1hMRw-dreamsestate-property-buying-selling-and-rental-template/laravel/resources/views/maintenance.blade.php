<?php $page = 'maintenance'; ?>
@extends('layout.mainlayout')
@section('content')
    <div class="error-box">
        <img src="{{ URL::asset('/assets/img/maintenance.png') }}" class="img-fluid" alt="Maintenance">
        <h1 class="coming-soon mb-2">We're Down for Maintenance</h1>
        <p>Our website is currently undergoing scheduled maintenance, will be right back in a few minutes.</p>
        <h6>We'll Be Back Shortly</h6>
        <div class="footer-social-links">
            <ul class="nav">
                <li>
                    <a href="javascript:void(0);" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                </li>
                <li>
                    <a href="javascript:void(0);" target="_blank"><i class="fa-brands fa-twitter"></i> </a>
                </li>
                <li>
                    <a href="javascript:void(0);" target="_blank"><i class="fab fa-youtube"></i></a>
                </li>
                <li>
                    <a href="javascript:void(0);" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                </li>
            </ul>
        </div>
        <a href="{{ url('index') }}" class="btn-maintance btn btn-primary">Back to Home</a>
    </div>
    </div>
@endsection
