<?php $page = 'compare'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            Compare Properties
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            Compare Properties
        @endslot
    @endcomponent

    <!-- Blog Grid-->
    <div class="buy-detailview bg-white">
        <div class="container">
            <div class="row">
                <div class="compare-table">
                    <div class="table-responsive">
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td class="empty-cell"></td>
                                    <td>
                                        <div class="compare-head">
                                            <h4>Renovated Apartment</h4>
                                            <div class="compare-action">
                                                <img class="img-fluid" alt="Property Image"
                                                    src="{{ URL::asset('/assets/img/product/product-1.jpg') }}">
                                                <a href="javascript:void(0);">
                                                    <i class="bx bx-trash"></i>
                                                </a>
                                            </div>
                                            <span>1421 San Pedro St, Los Angeles</span>
                                            <h5>$1,250,000</h5>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="compare-head">
                                            <h4>Gorgeous Villa Bay View</h4>
                                            <div class="compare-action">
                                                <img class="img-fluid" alt="Property Image"
                                                    src="{{ URL::asset('/assets/img/product/product-2.jpg') }}">
                                                <a href="javascript:void(0);">
                                                    <i class="bx bx-trash"></i>
                                                </a>
                                            </div>
                                            <span>6 Bishop Ave. Perkasie, PA</span>
                                            <h5>$1,250,000</h5>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="compare-head">
                                            <h4>Luxury Family Home</h4>
                                            <div class="compare-action">
                                                <img class="img-fluid" alt="Property Image"
                                                    src="{{ URL::asset('/assets/img/product/product-3.jpg') }}">
                                                <a href="javascript:void(0);">
                                                    <i class="bx bx-trash"></i>
                                                </a>
                                            </div>
                                            <span>1421 San Pedro St, Los Angeles</span>
                                            <h5>$1,250,000</h5>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Type</th>
                                    <td>Apartment</td>
                                    <td>Apartment</td>
                                    <td>Apartment</td>
                                </tr>
                                <tr>
                                    <th>Rooms</th>
                                    <td>8</td>
                                    <td>8</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <th>Area</th>
                                    <td>2000 Sqft</td>
                                    <td>2000 Sqft</td>
                                    <td>2000 Sqft</td>
                                </tr>
                                <tr>
                                    <th>Swimming Pool</th>
                                    <td><i class="bx bx-x text-danger"></i></td>
                                    <td><i class="bx bx-x text-danger"></i></td>
                                    <td><i class="bx bx-x text-danger"></i></td>
                                </tr>
                                <tr>
                                    <th>Bed Rooms</th>
                                    <td>3</td>
                                    <td>3</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <th>Window Covering</th>
                                    <td><i class="bx bx-x text-danger"></i></td>
                                    <td><i class="bx bx-x text-danger"></i></td>
                                    <td><i class="bx bx-x text-danger"></i></td>
                                </tr>
                                <tr>
                                    <th>Air Conditioning</th>
                                    <td><i class="bx bx-check-double text-success"></i></td>
                                    <td><i class="bx bx-check-double text-success"></i></td>
                                    <td><i class="bx bx-check-double text-success"></i></td>
                                </tr>
                                <tr>
                                    <th>Garages</th>
                                    <td><i class="bx bx-check-double text-success"></i></td>
                                    <td><i class="bx bx-check-double text-success"></i></td>
                                    <td><i class="bx bx-check-double text-success"></i></td>
                                </tr>
                                <tr>
                                    <th>Laundry Room</th>
                                    <td><i class="bx bx-x text-danger"></i></td>
                                    <td><i class="bx bx-x text-danger"></i></td>
                                    <td><i class="bx bx-x text-danger"></i></td>
                                </tr>
                                <tr>
                                    <th>Internet</th>
                                    <td><i class="bx bx-check-double text-success"></i></td>
                                    <td><i class="bx bx-check-double text-success"></i></td>
                                    <td><i class="bx bx-check-double text-success"></i></td>
                                </tr>
                                <tr>
                                    <th>Gym </th>
                                    <td><i class="bx bx-check-double text-success"></i></td>
                                    <td><i class="bx bx-check-double text-success"></i></td>
                                    <td><i class="bx bx-check-double text-success"></i></td>
                                </tr>
                                <tr>
                                    <th>Bed Rooms</th>
                                    <td>3</td>
                                    <td>3</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Blog Grid-->
@endsection
