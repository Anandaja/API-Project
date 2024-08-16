<?php $page = 'coming-soon'; ?>
@extends('layout.mainlayout')
@section('content')
    <div class="error-box come-box">
        <h1>Coming Soon</h1>
        <p>We'll be here soon with our new awesome site, subscribe to be notified.</p>
        <h6>We'll Be Back Shortly</h6>
        <div class="footer-social-links">
            <ul class="nav">
                <li>
                    <a href="javascript:void(0);" target="_blank"><i class="fa-brands fa-instagram hi-icon"></i></a>
                </li>
                <li>
                    <a href="javascript:void(0);" target="_blank"><i class="fa-brands fa-twitter hi-icon"></i> </a>
                </li>
                <li>
                    <a href="javascript:void(0);" target="_blank"><i class="fab fa-youtube hi-icon"></i></a>
                </li>
                <li>
                    <a href="javascript:void(0);" target="_blank"><i class="fa-brands fa-facebook-f hi-icon"></i></a>
                </li>
                <li>
                    <a href="javascript:void(0);" target="_blank"><i class="fa-brands fa-linkedin hi-icon"></i></a>
                </li>
            </ul>
        </div>
        <div class="serve-form">
            <form action="#">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Enter Email">
                    <button type="submit" class="btn button-notific btn-primary d-flex align-items-center">
                        <span>Notify Me</span>
                    </button>
                </div>
            </form>
        </div>
        <div class="back-button">
            <a href="{{ url('index') }}" class="btn-maintance btn">Back to Home</a>
        </div>
    </div>
    </div>
@endsection
