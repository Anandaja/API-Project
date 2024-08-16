<?php $page = 'reset-password'; ?>
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
                    <h1>Reset Password</h1>
                    <form action="{{ url('index') }}">
                        <div class="form-group">
                            <label class="form-label">Password <span>*</span></label>
                            <div class="pass-group">
                                <input type="password" class="form-control pass-input" placeholder="Enter Password">
                                <span class="fas fa-eye toggle-password"></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Confirm Password <span>*</span></label>
                            <div class="pass-group">
                                <input type="password" class="form-control" placeholder="Enter Confirm Password">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="custom_check mt-0 mb-0"><span>Remember me</span>
                                <input type="checkbox" name="remeber">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <a href="{{ url('login') }}" class="btn btn-outline-light w-100 btn-size">Reset</a>
                        <div class="text-center dont-have">Already have login ? <a href="{{ url('register') }}">Sign In</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
@endsection
