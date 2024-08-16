<?php $page = 'forgot-password'; ?>
@extends('layout.mainlayout')
@section('content')
    <div class="login-wrapper">
        <div class="loginbox">
            <div class="login-auth">
                <div class="login-auth-wrap">
                    <div class="sign-group">
                        <a href="{{ url('index') }}" class="btn sign-up"><span><i class="fe feather-corner-down-left"
                                    aria-hidden="true"></i></span> Back To Home</a>
                    </div>
                    <h1>Forgot Password</h1>
                    <form action="{{ url('index') }}">
                        <div class="form-group">
                            <label class="form-label">Email <span>*</span></label>
                            <input type="email" class="form-control" placeholder="Enter Email">
                        </div>
                        <a href="{{ url('reset-password') }}" class="btn btn-outline-light w-100 btn-size">Sign Up</a>
                        <div class="text-center dont-have">Remember login ? <a href="{{ url('login') }}">Sign In</a></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
@endsection
