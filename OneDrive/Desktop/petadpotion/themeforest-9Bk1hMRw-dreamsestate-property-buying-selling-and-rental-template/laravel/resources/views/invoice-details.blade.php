<?php $page = 'invoice-details'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            Invoice Details
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            Invoice Details
        @endslot
    @endcomponent
    <!-- Invoice -->
    <section class="invoice-section">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 offset-md-1 col-md-10 col-lg-10">
                    <div class="card">
                        <div class="head">
                            <a href="{{ url('index') }}" class="navbar-brand logo d-flex align-items-center">
                                <img src="{{ URL::asset('/assets/img/logo.svg') }}" class="img-fluid" alt="Logo">
                            </a>
                            <div class="head-info text-end">
                                <h4 class="text-uppercase">INVOICE</h4>
                                <h5>DreamsEstate</h5>
                                <p>REG: 123000123000</p>
                                <p class="mb-0">info@example.com | +64 123 1234 123</p>
                            </div>
                        </div>
                        <hr>
                        <div class="dull-bg from-to">
                            <div class="row">
                                <div class="col-12 col-sm-12 col-md-4 col-lg-4">
                                    <h5>From </h5>
                                    <p>Joseph</p>
                                    <p>45, 5th Street Newyork, USA</p>
                                    <p>LX6457</p>
                                </div>
                                <div class="col-12 col-sm-12 col-md-4 col-lg-4">
                                    <h5>To </h5>
                                    <p>Yaseer</p>
                                    <p>778 Mittal street, Germany</p>
                                    <p>454787</p>
                                </div>
                                <div class="col-12 col-sm-12 col-md-4 col-lg-4">
                                    <table class="short-info w-100">
                                        <tr>
                                            <td>Invoice Number:</td>
                                            <td class="float-end"><span>INV-0002</span></td>
                                        </tr>
                                        <tr>
                                            <td>Invoice Date:</td>
                                            <td class="float-end"><span>02 Jan 2023</span></td>
                                        </tr>
                                        <tr>
                                            <td>Due:</td>
                                            <td class="float-end"><span>20 Jan 2023</span></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="invoice-table table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Description</th>
                                        <th>Qty</th>
                                        <th>Price</th>
                                        <th>GST</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Product Name</td>
                                        <td>1</td>
                                        <td>2000.00</td>
                                        <td>0.00</td>
                                        <td>2,000.00</td>
                                    </tr>
                                    <tr>
                                        <td>Product Name</td>
                                        <td>1</td>
                                        <td>2000.00</td>
                                        <td>0.00</td>
                                        <td>2,000.00</td>
                                    </tr>
                                    <tr>
                                        <td>Product Name</td>
                                        <td>1</td>
                                        <td>2000.00</td>
                                        <td>0.00</td>
                                        <td>2,000.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- Total -->
                        <div class="row">
                            <div class="col-sm-12 col-md-7 col-xl-7 ms-auto">
                                <div class="dull-bg total-wrap">
                                    <table class="table-responsive table total">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h6>Sub Total (excl. GST)</h6>
                                                </td>
                                                <td class="total-price">
                                                    <h6><span>$6,000.00</span></h6>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6>Total GST:</h6>
                                                </td>
                                                <td class="total-price">
                                                    <h6><span>$0.00</span></h6>
                                                </td>
                                            </tr>
                                            <tr class="credit-amount">
                                                <td>
                                                    <h6>Credit card fee (if using):</h6>
                                                </td>
                                                <td class="total-price">
                                                    <h6><span>$92.00</span></h6>
                                                </td>
                                            </tr>
                                            <tr class="total-amount">
                                                <td>
                                                    <h6>Amount due on 20 Jan 2023:</h6>
                                                </td>
                                                <td class="total-price">
                                                    <h6><span>6,000.00 USD</span></h6>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <!-- /Total -->

                        <div class="payment-detail d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="text-uppercase text-primary">PAYMENT INSTRUCTIONS</h6>
                                <h5>DreamsEstate</h5>
                                <p>Bank Name: ABC Bank limited</p>
                                <p>SWIFT/IBAN: NZ0201230012</p>
                                <p>Account Number: 12-1234-123456-12</p>
                                <p class="mt-4">Please use as INV-0002 as a reference number</p>
                                <p class="mb-0">For any questions please contact us at info@example.com</p>
                            </div>
                            <div class="pay-online">
                                <h5>Pay Online</h5>
                                <a href="{{ url('index') }}" class="navbar-brand logo d-flex align-items-center">
                                    <img src="{{ URL::asset('/assets/img/pay-online.jpg') }}" class="img-fluid"
                                        alt="Image">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Invoice -->
@endsection
