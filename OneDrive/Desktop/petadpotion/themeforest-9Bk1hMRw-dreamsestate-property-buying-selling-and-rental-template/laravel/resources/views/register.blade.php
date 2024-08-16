<?php $page = 'register'; ?>
@extends('layout.mainlayout')
@section('content')
    <div class="login-wrapper">
        <div class="loginbox">
            <div class="login-auth">
                <div class="login-auth-wrap">
                    <h1>Signup! <span class="d-block"> New Account.</span></h1>
                    <form action="{{ route('register.custom') }}" method="POST">
                        @csrf
                        <div class="form-group">
                            <label class="form-label">Name <span>*</span></label>
                            <input type="text" class="form-control" placeholder="Enter Name" name="name"
                                id="name">
                            <div class="text-danger pt-2">
                                @error('name')
                                    {{ $message }}
                                @enderror
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Email <span>*</span></label>
                            <input type="email" class="form-control" placeholder="Enter Email" name="email"
                                id="email">
                            <div class="text-danger pt-2">
                                @error('email')
                                    {{ $message }}
                                @enderror
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Password <span>*</span></label>
                            <div class="pass-group">
                                <input type="password" class="form-control pass-input" placeholder="Enter Password"
                                    name="password" id="password">
                                <span class="fas fa-eye toggle-password feather-eye-off"></span>
                            </div>
                            <div class="text-danger pt-2">
                                @error('password')
                                    {{ $message }}
                                @enderror
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Confirm Password <span>*</span></label>
                            <div class="pass-group">
                                <input type="password" class="form-control pass-new-input"
                                    placeholder="Enter Confirm Password" name="confirm_password" id="confirm_password">
                                <span class="fas fa-eye toggle-password1 feather-eye-off"></span>
                            </div>
                            <div class="text-danger pt-2">
                                @error('password')
                                    {{ $message }}
                                @enderror
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="custom_check mt-0 mb-0"><span>Remember me</span>
                                <input type="checkbox" name="remeber">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <button class="btn btn-outline-light w-100 btn-size" type="submit">Sign Up</button>
                        </div>
                        <div class="login-or">
                            <span class="span-or-log">Or, Sign up with your email</span>
                        </div>
                        <!-- Social Login -->
                        <div class="social-login">
                            <a href="javascript:void(0);"
                                class="d-flex align-items-center justify-content-center form-group btn google-login w-100"><span><img
                                        src="{{ URL::asset('/assets/img/icons/google.svg') }}" class="img-fluid"
                                        alt="Google"></span>Sign up
                                with Google</a>
                        </div>
                        <div class="social-login">
                            <a href="javascript:void(0);"
                                class="mb-0 d-flex align-items-center justify-content-center form-group btn google-login w-100"><span><img
                                        src="{{ URL::asset('/assets/img/icons/facebook.svg') }}" class="img-fluid"
                                        alt="Facebook"></span>Sign up
                                with Facebook</a>
                        </div>
                        <!-- /Social Login -->
                        <div class="text-center dont-have">Already have login ? <a href="{{ url('login') }}">Sign In</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
@endsection
