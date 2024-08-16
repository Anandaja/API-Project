<?php $page = 'login'; ?>
@extends('layout.mainlayout')
@section('content')
    <div class="login-wrapper">
        <div class="loginbox">
            <div class="login-auth">
                <div class="login-auth-wrap">
                    <h1>Hey There!!! Welcome Back.</h1>
                    <form action="{{ url('custom-login') }}" method="POST">
                        @csrf
                        <div class="form-group">
                            <label class="form-label">Email <span>*</span></label>
                            <input type="email" class="form-control" placeholder="Enter Email" name="email" id="email"
                                value="admin@example.com">
                            <div class="text-danger pt-2">
                                @error('0')
                                    {{ $message }}
                                @enderror
                                @error('email')
                                    {{ $message }}
                                @enderror
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Password <span>*</span></label>
                            <div class="pass-group">
                                <input type="password" class="form-control pass-input" placeholder="Enter Password"
                                    name="password" id="password" value="123456">
                                <span class="fas fa-eye toggle-password feather-eye-off"></span>
                            </div>
                            <div class="text-danger pt-2">
                                @error('0')
                                    {{ $message }}
                                @enderror
                                @error('password')
                                    {{ $message }}
                                @enderror
                            </div>
                        </div>
                        <div class="form-group mb-5">
                            <a class="forgot-link" href="{{ url('forgot-password') }}">Forgot Password ?</a>
                        </div>
                        <div class="form-group">
                            <label class="custom_check mt-0 mb-0"><span>Remember me</span>
                                <input type="checkbox" name="remeber">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <button class="btn btn-outline-light w-100 btn-size" type="submit">Sign In</button>
                        </div>
                        <div class="login-or">
                            <span class="span-or-log">Or, Sign in with your email</span>
                        </div>
                        <!-- Social Login -->
                        <div class="social-login">
                            <a href="javascript:void(0);"
                                class="d-flex align-items-center justify-content-center form-group btn google-login w-100"><span><img
                                        src="{{ URL::asset('/assets/img/icons/google.svg') }}" class="img-fluid"
                                        alt="Google"></span>Sign in
                                with Google</a>
                        </div>
                        <div class="social-login">
                            <a href="javascript:void(0);"
                                class="mb-0 d-flex align-items-center justify-content-center form-group btn google-login w-100"><span><img
                                        src="{{ URL::asset('/assets/img/icons/facebook.svg') }}" class="img-fluid"
                                        alt="Facebook"></span>Sign in
                                with Facebook</a>
                        </div>
                        <!-- /Social Login -->
                        <div class="text-center dont-have">Don't have an account ? <a href="{{ url('register') }}">Sign
                                Up</a></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
@endsection
