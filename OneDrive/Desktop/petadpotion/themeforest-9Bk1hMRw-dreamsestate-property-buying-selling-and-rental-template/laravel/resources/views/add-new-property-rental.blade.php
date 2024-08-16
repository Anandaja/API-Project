<?php $page = 'add-new-property-rental'; ?>
@extends('layout.mainlayout')
@section('content')
    @component('components.breadcrumb')
        @slot('title')
            Add New Property
        @endslot
        @slot('li_1')
            Home
        @endslot
        @slot('li_2')
            Add New Property
        @endslot
    @endcomponent

    <!-- Content -->
    <div class="content">
        <div class="container">
            <div class="property-tabs">
                <ul class="prop-tab">
                    <li>
                        <a href="#propertyinfo" class="active">Property Information</a>
                    </li>
                    <li>
                        <a href="#property-details">Property Details</a>
                    </li>
                    <li>
                        <a href="#amenities">Amenities</a>
                    </li>
                    <li>
                        <a href="#documents">Documents</a>
                    </li>
                    <li>
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li>
                        <a href="#videos">Videos</a>
                    </li>
                    <li>
                        <a href="#description">Description</a>
                    </li>
                    <li>
                        <a href="#location">Location</a>
                    </li>
                </ul>
            </div>

            <!-- Property Information -->
            <div class="row" id="propertyinfo">

                <div class="col-lg-4">
                    <div class="property-info">
                        <h4>Property Information</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's</p>
                    </div>
                </div>

                <div class="col-lg-8">
                    <div class="add-property-wrap">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="review-form">
                                    <label>Property Name</label>
                                    <input type="text" class="form-control" placeholder="Enter Name">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="review-form">
                                    <label>Property Type</label>
                                    <select class="select">
                                        <option>Buy</option>
                                        <option>Sale</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="review-form">
                                    <label>Property Category</label>
                                    <select class="select">
                                        <option>Select</option>
                                        <option>Apartment</option>
                                        <option>Vila</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="review-form">
                                    <label>Price ( per night)</label>
                                    <input type="text" class="form-control" placeholder="Enter  price">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Property Information -->

            <!-- Property Details -->
            <div class="row" id="property-details">

                <div class="col-lg-4">
                    <div class="property-info">
                        <h4>Property Details</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's</p>
                    </div>
                </div>

                <div class="col-lg-8">
                    <div class="add-property-wrap">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="review-form">
                                    <label>Property Id</label>
                                    <input type="text" class="form-control" placeholder="Enter Value">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="review-form">
                                    <label>Price per Sqft</label>
                                    <input type="text" class="form-control" placeholder="Enter  Price">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="review-form">
                                    <label>Structure type</label>
                                    <select class="select">
                                        <option>Select</option>
                                        <option>Square</option>
                                        <option>Rectangle</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="review-form">
                                    <label>No of Bedooms</label>
                                    <input type="text" class="form-control" placeholder="Enter Value">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="review-form">
                                    <label>No of Bathrooms</label>
                                    <input type="text" class="form-control" placeholder="Enter  Price">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="review-form">
                                    <label>Sqft</label>
                                    <input type="text" class="form-control" placeholder="Enter Value">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="review-form">
                                    <label>No of Floors</label>
                                    <input type="text" class="form-control" placeholder="Enter Value">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="review-form">
                                    <label>Garage size</label>
                                    <input type="text" class="form-control" placeholder="Enter Value">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="review-form">
                                    <label>Available From</label>
                                    <select class="select">
                                        <option>Select Year</option>
                                        <option>2023</option>
                                        <option>2022</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="review-form">
                                    <label>No of Garage</label>
                                    <input type="text" class="form-control" placeholder="Enter Value">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="review-form">
                                    <label>Year Constructed</label>
                                    <select class="select">
                                        <option>Select Date</option>
                                        <option>2023</option>
                                        <option>2022</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Property Details -->

            <!-- Amenities -->
            <div class="row" id="amenities">

                <div class="col-lg-4">
                    <div class="property-info">
                        <h4>Amenities</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's</p>
                    </div>
                </div>

                <div class="col-lg-8">
                    <div class="add-property-wrap">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="review-form">
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="amenity1" checked>
                                        <span class="checkmark"></span> Air Conditioning
                                    </label>
                                </div>
                                <div class="review-form">
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="amenity1" checked>
                                        <span class="checkmark"></span> Lawn
                                    </label>
                                </div>
                                <div class="review-form">
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="amenity1">
                                        <span class="checkmark"></span> Swimming Pool
                                    </label>
                                </div>
                                <div class="review-form">
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="amenity1">
                                        <span class="checkmark"></span> Barbeque
                                    </label>
                                </div>
                                <div class="review-form">
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="amenity1" checked>
                                        <span class="checkmark"></span> Microwave
                                    </label>
                                </div>
                                <div class="review-form">
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="amenity1">
                                        <span class="checkmark"></span> Wide-Open Spaces
                                    </label>
                                </div>
                                <div class="review-form">
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="amenity1" checked>
                                        <span class="checkmark"></span> Billiards Table
                                    </label>
                                </div>
                                <div class="review-form">
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="amenity1">
                                        <span class="checkmark"></span> Valet Trash
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="review-form">
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="amenity1">
                                        <span class="checkmark"></span> TV Cable
                                    </label>
                                </div>
                                <div class="review-form">
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="amenity1">
                                        <span class="checkmark"></span> Dryer
                                    </label>
                                </div>
                                <div class="review-form">
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="amenity1">
                                        <span class="checkmark"></span> Outdoor Shower
                                    </label>
                                </div>
                                <div class="review-form">
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="amenity1" checked>
                                        <span class="checkmark"></span> Washer
                                    </label>
                                </div>
                                <div class="review-form">
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="amenity1" checked>
                                        <span class="checkmark"></span> Gym
                                    </label>
                                </div>
                                <div class="review-form">
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="amenity1">
                                        <span class="checkmark"></span> Parks
                                    </label>
                                </div>
                                <div class="review-form">
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="amenity1" checked>
                                        <span class="checkmark"></span> Clubhouse
                                    </label>
                                </div>
                                <div class="review-form">
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="amenity1" checked>
                                        <span class="checkmark"></span> Sporting Facilities
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="review-form">
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="amenity1">
                                        <span class="checkmark"></span> Refrigerator
                                    </label>
                                </div>
                                <div class="review-form">
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="amenity1" checked>
                                        <span class="checkmark"></span> WiFi
                                    </label>
                                </div>
                                <div class="review-form">
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="amenity1">
                                        <span class="checkmark"></span> Laundry
                                    </label>
                                </div>
                                <div class="review-form">
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="amenity1" checked>
                                        <span class="checkmark"></span> Sauna
                                    </label>
                                </div>
                                <div class="review-form">
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="amenity1">
                                        <span class="checkmark"></span> Window Coverings
                                    </label>
                                </div>
                                <div class="review-form">
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="amenity1" checked>
                                        <span class="checkmark"></span> Rooftop Gardens
                                    </label>
                                </div>
                                <div class="review-form">
                                    <label class="custom_check mb-0">
                                        <input type="checkbox" name="amenity1">
                                        <span class="checkmark"></span> Spa
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Amenities -->

            <!-- Property gallery -->
            <div class="row" id="gallery">
                <div class="col-lg-4">
                    <div class="property-info">
                        <h4>Property Gallery</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's</p>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="add-property-wrap">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="gallery-property">
                                    <ul>
                                        <li>
                                            <img src="{{ URL::asset('/assets/img/gallery/gallery-01.jpg') }}"
                                                alt="Image">
                                            <a href="javascript:void(0);"><i class="bx bx-trash"></i></a>
                                        </li>
                                        <li>
                                            <img src="{{ URL::asset('/assets/img/gallery/gallery-02.jpg') }}"
                                                alt="Image">
                                            <a href="javascript:void(0);"><i class="bx bx-trash"></i></a>
                                        </li>
                                        <li>
                                            <img src="{{ URL::asset('/assets/img/gallery/gallery-03.jpg') }}"
                                                alt="Image">
                                            <a href="javascript:void(0);"><i class="bx bx-trash"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="review-form">
                                    <label>Photo</label>
                                    <div class="upload-file">
                                        <span>Select Photo</span>
                                        <input type="file" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="review-form">
                                    <label class="d-none d-md-block">&nbsp;</label>
                                    <button class="btn btn-primary btn-upload"><i class="bx bx-cloud-upload"></i>Upload
                                        Photos</button>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="upload-list">
                                    <ul>
                                        <li>The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the main picture
                                            first</li>
                                        <li>Maximum number of files upload will be 10 files.</li>
                                    </ul>
                                    <p><i class="bx bx-check-double"></i>Photo uploaded successfully</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Property gallery -->

            <!-- Property Video -->
            <div class="row" id="videos">
                <div class="col-lg-4">
                    <div class="property-info">
                        <h4>Property Video</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's</p>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="add-property-wrap">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="review-form">
                                    <label>Embed Video Link </label>
                                    <select class="select">
                                        <option>Youtube</option>
                                        <option>Vimeo</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="review-form">
                                    <label class="d-none d-md-block">&nbsp;</label>
                                    <input type="text" class="form-control" placeholder="Enter video link">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Property Video -->

            <!-- Property Description -->
            <div class="row" id="description">
                <div class="col-lg-4">
                    <div class="property-info">
                        <h4>Description</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's</p>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="add-property-wrap">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="review-form">
                                    <label>Enter Description of Property</label>
                                    <textarea class="form-control" rows="8" placeholder="Description"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Property Description -->

            <!-- Property location -->
            <div class="row" id="location">
                <div class="col-lg-4">
                    <div class="property-info">
                        <h4>Property Location</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's</p>
                    </div>
                </div>

                <div class="col-lg-8">
                    <div class="add-property-wrap">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="review-form">
                                    <label>Address</label>
                                    <input type="text" class="form-control" placeholder="Enter Address">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="review-form">
                                    <label>County / State</label>
                                    <select class="select">
                                        <option>Select Country</option>
                                        <option>UK</option>
                                        <option>Newyork</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="review-form">
                                    <label>City</label>
                                    <input type="text" class="form-control" placeholder="Enter City">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="review-form">
                                    <label>Landmark</label>
                                    <input type="text" class="form-control" placeholder="Enter Landmark">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="review-form">
                                    <label>Zip Code</label>
                                    <input type="text" class="form-control" placeholder="Enter Zip code">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="review-form google-maps">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.8862835683544!2d-73.98256668525309!3d41.93829486962529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd0ee3286615b7%3A0x42bfa96cc2ce4381!2s132%20Kingston%20St%2C%20Kingston%2C%20NY%2012401%2C%20USA!5e0!3m2!1sen!2sin!4v1670922579281!5m2!1sen!2sin"
                                        allowfullscreen loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Property location -->

            <!-- Property location -->
            <div class="row">
                <div class="col-md-12">
                    <div class="property-submit">
                        <a href="javascript:void(0);" class="btn btn-lightred">Reset</a>
                        <a href="{{ url('rent-property-grid') }}" class="btn btn-primary">Add property</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- /Content -->
@endsection
