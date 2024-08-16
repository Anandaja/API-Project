<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomAuthController;

Route::get('index', [CustomAuthController::class, 'dashboard']); 
Route::get('login', [CustomAuthController::class, 'index'])->name('login');
Route::post('custom-login', [CustomAuthController::class, 'customLogin'])->name('login.custom'); 
Route::get('register', [CustomAuthController::class, 'registration'])->name('register');
Route::post('custom-registration', [CustomAuthController::class, 'customRegistration'])->name('register.custom'); 
Route::get('signout', [CustomAuthController::class, 'signOut'])->name('signout');

Route::get('/', function () {
    return view('index');
})->name('index');

Route::get('/index', function () {
    return view('index');
})->name('index');

Route::get('/rent-property-grid', function () {
    return view('rent-property-grid');
})->name('rent-property-grid');

Route::get('/rent-property-list', function () {
    return view('rent-property-list');
})->name('rent-property-list');

Route::get('/rent-property-grid-sidebar', function () {
    return view('rent-property-grid-sidebar');
})->name('rent-property-grid-sidebar');

Route::get('/rent-property-list-sidebar', function () {
    return view('rent-property-list-sidebar');
})->name('rent-property-list-sidebar');

Route::get('/rent-grid-map', function () {
    return view('rent-grid-map');
})->name('rent-grid-map');

Route::get('/rent-list-map', function () {
    return view('rent-list-map');
})->name('rent-list-map');

Route::get('/rent-details', function () {
    return view('rent-details');
})->name('rent-details');

Route::get('/rental-order-step1', function () {
    return view('rental-order-step1');
})->name('rental-order-step1');

Route::get('/rental-order-step2', function () {
    return view('rental-order-step2');
})->name('rental-order-step2');

Route::get('/rental-order-step3', function () {
    return view('rental-order-step3');
})->name('rental-order-step3');

Route::get('/rental-order', function () {
    return view('rental-order');
})->name('rental-order');

Route::get('/reset-password', function () {
    return view('reset-password');
})->name('reset-password');

Route::get('/forgot-password', function () {
    return view('forgot-password');
})->name('forgot-password');

Route::get('/login', function () {
    return view('login');
})->name('login');

Route::get('/register', function () {
    return view('register');
})->name('register');

Route::get('/contact-us', function () {
    return view('contact-us');
})->name('contact-us');

Route::get('/buy-property-grid', function () {
    return view('buy-property-grid');
})->name('buy-property-grid');

Route::get('/buy-property-list', function () {
    return view('buy-property-list');
})->name('buy-property-list');

Route::get('/buy-property-list-sidebar', function () {
    return view('buy-property-list-sidebar');
})->name('buy-property-list-sidebar');

Route::get('/buy-property-grid-sidebar', function () {
    return view('buy-property-grid-sidebar');
})->name('buy-property-grid-sidebar');

Route::get('/buy-grid-map', function () {
    return view('buy-grid-map');
})->name('buy-grid-map');

Route::get('/buy-list-map', function () {
    return view('buy-list-map');
})->name('buy-list-map');

Route::get('/buy-details', function () {
    return view('buy-details');
})->name('buy-details');

Route::get('/agent-grid', function () {
    return view('agent-grid');
})->name('agent-grid');

Route::get('/agent-list', function () {
    return view('agent-list');
})->name('agent-list');

Route::get('/agent-grid-sidebar', function () {
    return view('agent-grid-sidebar');
})->name('agent-grid-sidebar');

Route::get('/agent-list-sidebar', function () {
    return view('agent-list-sidebar');
})->name('agent-list-sidebar');

Route::get('/agent-details', function () {
    return view('agent-details');
})->name('agent-details');

Route::get('/buy-detail-view', function () {
    return view('buy-detail-view');
})->name('buy-detail-view');
Route::get('/blog-list', function () {
    return view('blog-list');
})->name('blog-list');

Route::get('/blog-grid', function () {
    return view('blog-grid');
})->name('blog-grid');
Route::get('/blog-details', function () {
    return view('blog-details');
})->name('blog-details');
Route::get('/agency-details', function () {
    return view('agency-details');
})->name('agency-details');

Route::get('/agency-grid-sidebar', function () {
    return view('agency-grid-sidebar');
})->name('agency-grid-sidebar');

Route::get('/agency-grid', function () {
    return view('agency-grid');
})->name('agency-grid');

Route::get('/agency-list-sidebar', function () {
    return view('agency-list-sidebar');
})->name('agency-list-sidebar');

Route::get('/agency-list', function () {
    return view('agency-list');
})->name('agency-list');

Route::get('/coming-soon', function () {
    return view('coming-soon');
})->name('coming-soon');

Route::get('/compare', function () {
    return view('compare');
})->name('compare');

Route::get('/error-404', function () {
    return view('error-404');
})->name('error-404');

Route::get('/error-500', function () {
    return view('error-500');
})->name('error-500');

Route::get('/faq', function () {
    return view('faq');
})->name('faq');

Route::get('/gallery', function () {
    return view('gallery');
})->name('gallery');

Route::get('/invoice-details', function () {
    return view('invoice-details');
})->name('invoice-details');

Route::get('/maintenance', function () {
    return view('maintenance');
})->name('maintenance');

Route::get('/our-team', function () {
    return view('our-team');
})->name('our-team');

Route::get('/pricing', function () {
    return view('pricing');
})->name('pricing');

Route::get('/privacy-policy', function () {
    return view('privacy-policy');
})->name('privacy-policy');

Route::get('/terms-condition', function () {
    return view('terms-condition');
})->name('terms-condition');

Route::get('/testimonial', function () {
    return view('testimonial');
})->name('testimonial');

Route::get('/about-us', function () {
    return view('about-us');
})->name('about-us');

Route::get('/add-new-property-rental', function () {
    return view('add-new-property-rental');
})->name('add-new-property-rental');

Route::get('/add-new-property', function () {
    return view('add-new-property');
})->name('add-new-property');

