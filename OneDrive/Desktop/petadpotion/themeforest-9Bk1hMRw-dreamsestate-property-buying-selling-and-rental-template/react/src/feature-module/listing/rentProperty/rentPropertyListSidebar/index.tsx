import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/img'
import BreadCrumb from '../../../../core/common/breadCrumb'
import { bathRoom, bedRoom, customStyles, location, lowToHigh, sortBy } from '../../../../core/common/select'
import Select from 'react-select'
import Slider from 'rc-slider'
import { all_routes } from '../../../router/all_routes'

const RentPropertyListSidebar = () => {
    const routes = all_routes
    const [isClassAdded, setIsClassAdded] = useState([false]);
    const toggleClass = (index: any) => {
        const updatedClasses = [...isClassAdded];
        updatedClasses[index] = !updatedClasses[index];
        setIsClassAdded(updatedClasses);
    };
    return (
        <>
            {/* Breadcrumb */}
            <BreadCrumb title="Rent Property List with Sidebar" pageTitle="Home" />
            {/* Breadcrumb */}
            {/* Feature Property For Rent */}
            <div className="property-sidebar">
                <section className="feature-property-sec for-rent content">
                    <div className="container">
                        {/* Sort Result */}
                        <div className="showing-result-head">
                            <div className="row align-items-center">
                                <div className="col-lg-3">
                                    <div className="result-show">
                                        <h5>
                                            Showing result <span>06</span> of <span>125</span>
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="sort-result">
                                        <div className="sort-by grid-head">
                                            <div>
                                                <p>Sort By</p>
                                            </div>
                                            <div className="review-form">

                                                <Select options={sortBy} defaultValue={sortBy[0]} className="select" styles={customStyles} />
                                            </div>
                                        </div>
                                        <div className="price-range grid-head">
                                            <div>
                                                <p>Price Range</p>
                                            </div>
                                            <div className="review-form">

                                                <Select options={lowToHigh} defaultValue={lowToHigh[0]} className="select" styles={customStyles} />

                                            </div>
                                        </div>
                                        <div className="grid-list-view">
                                            <ul>
                                                <li>
                                                    <Link to={routes.rentGrid}>
                                                        <i className="bx bx-grid" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to={routes.rentPropertyList}
                                                        className="active"
                                                    >
                                                        <i className="bx bx-list-ul" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={routes.rentListMap}>
                                                        <i className="bx bxs-map" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Sort Result */}
                        <div className="row justify-content-center">
                            {/* Sidebar */}
                            <div className="col-xl-4 theiaStickySidebar">
                                <div className="left-sidebar-widget list-sidebar">
                                    {/* Advanced Search */}
                                    <div className="collapse-card">
                                        <h4 className="card-title">
                                            <Link
                                                className="collapsed"
                                                data-bs-toggle="collapse"
                                                to="#advance-search"
                                                aria-expanded="false"
                                            >
                                                Advanced Search
                                            </Link>
                                        </h4>
                                        <div
                                            id="advance-search"
                                            className="card-collapse collapse show"
                                        >
                                            <ul className="show-list">
                                                <li className="review-form form-wrap">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Type Keywords"
                                                    />
                                                    <span className="form-icon">
                                                        <i className="bx bx-search-alt" />
                                                    </span>
                                                </li>
                                                <li className="review-form">

                                                    <Select options={location} defaultValue={location[0]} className="select" styles={customStyles} />

                                                </li>
                                                <li className="review-form">

                                                    <Select options={bedRoom} defaultValue={bedRoom[0]} className="select" styles={customStyles} />

                                                </li>
                                                <li className="review-form">

                                                    <Select options={bathRoom} defaultValue={bathRoom[0]} className="select" styles={customStyles} />

                                                </li>
                                                <li className="review-form">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Min Sqft"
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /Advanced Search */}
                                    {/* Categories */}
                                    <div className="collapse-card">
                                        <h4 className="card-title">
                                            <Link
                                                className="collapsed"
                                                data-bs-toggle="collapse"
                                                to="#categiries"
                                                aria-expanded="false"
                                            >
                                                Categories
                                            </Link>
                                        </h4>
                                        <div id="categiries" className="card-collapse collapse show">
                                            <ul className="checkbox-list term-list">
                                                <li>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark" /> Apartments (45)
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark" /> Condos (32)
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark" /> Houses (24)
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark" /> Industrial (41)
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark" /> Land (15)
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark" /> Offices (11)
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /Categories */}
                                    {/* Amenities */}
                                    <div className="collapse-card">
                                        <h4 className="card-title">
                                            <Link
                                                className="collapsed"
                                                data-bs-toggle="collapse"
                                                to="#amenities"
                                                aria-expanded="false"
                                            >
                                                Amenities
                                            </Link>
                                        </h4>
                                        <div id="amenities" className="card-collapse collapse show">
                                            <ul className="checkbox-list amene-list">
                                                <li>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark" /> Back Yard (35)
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark" /> Central Air (32)
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark" /> Chair Accessible (24)
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark" /> Elevator (41)
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark" /> Fireplace (15)
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark" /> Front Yard (11)
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /Amenities */}
                                    {/* Pricing */}
                                    <div className="collapse-card">
                                        <h4 className="card-title">
                                            <Link
                                                className="collapsed"
                                                data-bs-toggle="collapse"
                                                to="#pricing"
                                                aria-expanded="false"
                                            >
                                                Pricing
                                            </Link>
                                        </h4>
                                        <div id="pricing" className="card-collapse collapse show">
                                            <ul className="price-filter">
                                                <li className="d-flex justify-content-between">
                                                    <div className="caption">
                                                        <h5>Price Range : </h5>
                                                        <span id="slider-range-value2"> </span>$0 to $1948
                                                    </div>
                                                </li>
                                                <li className="price-filter-inner">
                                                    <div id="slider-range" className="range-bottom" />
                                                    <Slider
                                                        min={0}
                                                        max={1948}
                                                        defaultValue={[0, 50]}
                                                    />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /Pricing */}
                                    {/* Reviews */}
                                    <div className="collapse-card">
                                        <h4 className="card-title">
                                            <Link
                                                className="collapsed"
                                                data-bs-toggle="collapse"
                                                to="#review"
                                                aria-expanded="false"
                                            >
                                                Reviews
                                            </Link>
                                        </h4>
                                        <div id="review" className="card-collapse collapse show">
                                            <ul className="price-filter">
                                                <li>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="custom_check">
                                                        <input type="checkbox" name="username" />
                                                        <span className="checkmark" />
                                                        <i className="fa fa-star" />
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /Reviews */}
                                    {/* Apply filter */}
                                    <div className="apply-btn">
                                        <button type="submit" className="btn btn-primary">
                                            Apply Filter
                                        </button>
                                        <Link to="#" className="reset-btn">
                                            Reset Selection
                                        </Link>
                                    </div>
                                    {/* /Apply filter */}
                                </div>
                            </div>
                            {/* /Sidebar */}
                            <div className="col-xl-8 product-sidebarview">
                                {/* Rent List */}
                                <div className="product-custom">
                                    <div className="profile-widget rent-list-view">
                                        <div className="doc-img">
                                            <Link to={routes.rentDetails} className="property-img">
                                                <ImageWithBasePath
                                                    className="img-fluid"
                                                    alt="img"
                                                    src="assets/img/rent/rent-list-06.jpg"
                                                />
                                            </Link>
                                            <div className="product-amount">
                                                <h5>
                                                    <span>$8,500 </span> / night
                                                </h5>
                                            </div>
                                            <Link to="#" onClick={() => toggleClass(1)}>
                                                <div className={`favourite ${isClassAdded[1] ? 'favourite selected' : ''}`}>
                                                    <span>
                                                        <i className="fa-regular fa-heart" />
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="pro-content">
                                            <div className="list-head">
                                                <div className="rating">
                                                    <span className="rating-count  d-inline-flex">
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                    </span>
                                                    <span className="rating-review">Excellent</span>
                                                </div>
                                                <h3 className="title">
                                                    <Link to="#" tabIndex={-1}>
                                                        Royal Apartment
                                                    </Link>
                                                </h3>
                                                <p>
                                                    <i className="feather-map-pin" />
                                                    Jl. Bandung Permai, No.6, Bandung
                                                </p>
                                            </div>
                                            <ul className="d-flex details">
                                                <li>
                                                    <ImageWithBasePath src="assets/img/icons/bed-icon.svg" alt="bed-icon" />
                                                    2 Beds
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/bath-icon.svg"
                                                        alt="bath-icon"
                                                    />
                                                    1 Baths
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/building-icon.svg"
                                                        alt="building-icon"
                                                    />
                                                    12000 Sqft
                                                </li>
                                            </ul>
                                            <ul className="property-category d-flex justify-content-between align-items-center">
                                                <li className="user-info">
                                                    <Link to="#">
                                                        <ImageWithBasePath
                                                            src="assets/img/profiles/avatar-02.jpg"
                                                            className="img-fluid avatar"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <div className="user-name">
                                                        <h6>
                                                            <Link to="#">Scott Gwin</Link>
                                                        </h6>
                                                        <p>Minneapolis</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <Link to={routes.rentalOrder} className="btn-primary">
                                                        Book Now
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* /Rent List */}
                                {/* Rent List */}
                                <div className="product-custom">
                                    <div className="profile-widget rent-list-view">
                                        <div className="doc-img">
                                            <Link to={routes.rentDetails} className="property-img">
                                                <ImageWithBasePath
                                                    className="img-fluid"
                                                    alt="img"
                                                    src="assets/img/rent/rent-list-02.jpg"
                                                />
                                            </Link>
                                            <div className="featured">
                                                <span>Featured</span>
                                            </div>
                                            <div className="product-amount">
                                                <h5>
                                                    <span>$2,200 </span> / night
                                                </h5>
                                            </div>
                                            <Link to="#" onClick={() => toggleClass(2)}>
                                                <div className={`favourite ${isClassAdded[2] ? 'favourite selected' : ''}`}>
                                                    <span>
                                                        <i className="fa-regular fa-heart" />
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="pro-content">
                                            <div className="list-head">
                                                <div className="rating">
                                                    <span className="rating-count  d-inline-flex">
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                    </span>
                                                    <span className="rating-review">Excellent</span>
                                                </div>
                                                <h3 className="title">
                                                    <Link to={routes.rentDetails} tabIndex={-1}>
                                                        Grand Mahaka
                                                    </Link>
                                                </h3>
                                                <p>
                                                    <i className="feather-map-pin" />
                                                    Jl. Bandung Permai, No.6, Bandung
                                                </p>
                                            </div>
                                            <ul className="d-flex details">
                                                <li>
                                                    <ImageWithBasePath src="assets/img/icons/bed-icon.svg" alt="bed-icon" />
                                                    3 Beds
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/bath-icon.svg"
                                                        alt="bath-icon"
                                                    />
                                                    2 Baths
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/building-icon.svg"
                                                        alt="building-icon"
                                                    />
                                                    45000 Sqft
                                                </li>
                                            </ul>
                                            <ul className="property-category d-flex justify-content-between align-items-center">
                                                <li className="user-info">
                                                    <Link to="#">
                                                        <ImageWithBasePath
                                                            src="assets/img/profiles/avatar-04.jpg"
                                                            className="img-fluid avatar"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <div className="user-name">
                                                        <h6>
                                                            <Link to="#">Marc Silva</Link>
                                                        </h6>
                                                        <p>Newyork</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <Link to={routes.rentalOrder} className="btn-primary">
                                                        Book Now
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* /Rent List */}
                                {/* Rent List */}
                                <div className="product-custom">
                                    <div className="profile-widget rent-list-view">
                                        <div className="doc-img">
                                            <Link to={routes.rentDetails} className="property-img">
                                                <ImageWithBasePath
                                                    className="img-fluid"
                                                    alt="img"
                                                    src="assets/img/rent/rent-list-03.jpg"
                                                />
                                            </Link>
                                            <div className="featured">
                                                <span>Featured</span>
                                            </div>
                                            <div className="new-featured">
                                                <span>New</span>
                                            </div>
                                            <div className="product-amount">
                                                <h5>
                                                    <span>$5,500 </span> / night
                                                </h5>
                                            </div>
                                            <Link to="#" onClick={() => toggleClass(3)}>
                                                <div className={`favourite ${isClassAdded[3] ? 'favourite selected' : ''}`}>
                                                    <span>
                                                        <i className="fa-regular fa-heart" />
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="pro-content">
                                            <div className="list-head">
                                                <div className="rating">
                                                    <span className="rating-count  d-inline-flex">
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                    </span>
                                                    <span className="rating-review">Excellent</span>
                                                </div>
                                                <h3 className="title">
                                                    <Link to={routes.rentDetails} tabIndex={-1}>
                                                        Lunaria Residence
                                                    </Link>
                                                </h3>
                                                <p>
                                                    <i className="feather-map-pin" />
                                                    470 Park Ave S, New York, NY 10016
                                                </p>
                                            </div>
                                            <ul className="d-flex details">
                                                <li>
                                                    <ImageWithBasePath src="assets/img/icons/bed-icon.svg" alt="bed-icon" />
                                                    7 Beds
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/bath-icon.svg"
                                                        alt="bath-icon"
                                                    />
                                                    5 Baths
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/building-icon.svg"
                                                        alt="building-icon"
                                                    />
                                                    35000 Sqft
                                                </li>
                                            </ul>
                                            <ul className="property-category d-flex justify-content-between align-items-center">
                                                <li className="user-info">
                                                    <Link to="#">
                                                        <ImageWithBasePath
                                                            src="assets/img/profiles/avatar-05.jpg"
                                                            className="img-fluid avatar"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <div className="user-name">
                                                        <h6>
                                                            <Link to="#">Ronald Richards</Link>
                                                        </h6>
                                                        <p>South Dokata</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <Link to={routes.rentalOrder} className="btn-primary">
                                                        Book Now
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* /Rent List */}
                                {/* Rent List */}
                                <div className="product-custom">
                                    <div className="profile-widget rent-list-view">
                                        <div className="doc-img">
                                            <Link to={routes.rentDetails} className="property-img">
                                                <ImageWithBasePath
                                                    className="img-fluid"
                                                    alt="img"
                                                    src="assets/img/rent/rent-list-02.jpg"
                                                />
                                            </Link>
                                            <div className="featured">
                                                <span>Featured</span>
                                            </div>
                                            <div className="product-amount">
                                                <h5>
                                                    <span>$2,200 </span> / night
                                                </h5>
                                            </div>
                                            <Link to="#" onClick={() => toggleClass(4)}>
                                                <div className={`favourite ${isClassAdded[4] ? 'favourite selected' : ''}`}>
                                                    <span>
                                                        <i className="fa-regular fa-heart" />
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="pro-content">
                                            <div className="list-head">
                                                <div className="rating">
                                                    <span className="rating-count  d-inline-flex">
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                    </span>
                                                    <span className="rating-review">Excellent</span>
                                                </div>
                                                <h3 className="title">
                                                    <Link to={routes.rentDetails} tabIndex={-1}>
                                                        Grand Mahaka
                                                    </Link>
                                                </h3>
                                                <p>
                                                    <i className="feather-map-pin" />
                                                    Jl. Bandung Permai, No.6, Bandung
                                                </p>
                                            </div>
                                            <ul className="d-flex details">
                                                <li>
                                                    <ImageWithBasePath src="assets/img/icons/bed-icon.svg" alt="bed-icon" />
                                                    3 Beds
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/bath-icon.svg"
                                                        alt="bath-icon"
                                                    />
                                                    2 Baths
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/building-icon.svg"
                                                        alt="building-icon"
                                                    />
                                                    45000 Sqft
                                                </li>
                                            </ul>
                                            <ul className="property-category d-flex justify-content-between align-items-center">
                                                <li className="user-info">
                                                    <Link to="#">
                                                        <ImageWithBasePath
                                                            src="assets/img/profiles/avatar-08.jpg"
                                                            className="img-fluid avatar"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <div className="user-name">
                                                        <h6>
                                                            <Link to="#">Burdette</Link>
                                                        </h6>
                                                        <p>France</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <Link to={routes.rentalOrder} className="btn-primary">
                                                        Book Now
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* /Rent List */}
                                {/* Rent List */}
                                <div className="product-custom">
                                    <div className="profile-widget rent-list-view">
                                        <div className="doc-img">
                                            <Link to={routes.rentDetails} className="property-img">
                                                <ImageWithBasePath
                                                    className="img-fluid"
                                                    alt="img"
                                                    src="assets/img/rent/rent-list-05.jpg"
                                                />
                                            </Link>
                                            <div className="featured">
                                                <span>Featured</span>
                                            </div>
                                            <div className="product-amount">
                                                <h5>
                                                    <span>$2,200 </span> / night
                                                </h5>
                                            </div>
                                            <Link to="#" onClick={() => toggleClass(5)}>
                                                <div className={`favourite ${isClassAdded[5] ? 'favourite selected' : ''}`}>
                                                    <span>
                                                        <i className="fa-regular fa-heart" />
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="pro-content">
                                            <div className="list-head">
                                                <div className="rating">
                                                    <span className="rating-count  d-inline-flex">
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                    </span>
                                                    <span className="rating-review">Excellent</span>
                                                </div>
                                                <h3 className="title">
                                                    <Link to={routes.rentDetails} tabIndex={-1}>
                                                        Lunaria Residence
                                                    </Link>
                                                </h3>
                                                <p>
                                                    <i className="feather-map-pin" />
                                                    Grand Villa house
                                                </p>
                                            </div>
                                            <ul className="d-flex details">
                                                <li>
                                                    <ImageWithBasePath src="assets/img/icons/bed-icon.svg" alt="bed-icon" />
                                                    3 Beds
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/bath-icon.svg"
                                                        alt="bath-icon"
                                                    />
                                                    2 Baths
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/building-icon.svg"
                                                        alt="building-icon"
                                                    />
                                                    45000 Sqft
                                                </li>
                                            </ul>
                                            <ul className="property-category d-flex justify-content-between align-items-center">
                                                <li className="user-info">
                                                    <Link to="#">
                                                        <ImageWithBasePath
                                                            src="assets/img/profiles/avatar-03.jpg"
                                                            className="img-fluid avatar"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <div className="user-name">
                                                        <h6>
                                                            <Link to="#">Kell Robinson</Link>
                                                        </h6>
                                                        <p>USA</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <Link to={routes.rentalOrder} className="btn-primary">
                                                        Book Now
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* /Rent List */}
                                {/* Rent List */}
                                <div className="product-custom">
                                    <div className="profile-widget rent-list-view">
                                        <div className="doc-img">
                                            <Link to={routes.rentDetails} className="property-img">
                                                <ImageWithBasePath
                                                    className="img-fluid"
                                                    alt="img"
                                                    src="assets/img/rent/rent-list-01.jpg"
                                                />
                                            </Link>
                                            <div className="featured">
                                                <span>Featured</span>
                                            </div>
                                            <div className="new-featured">
                                                <span>New</span>
                                            </div>
                                            <div className="product-amount">
                                                <h5>
                                                    <span>$4,500 </span> / night
                                                </h5>
                                            </div>
                                            <Link to="#" onClick={() => toggleClass(6)}>
                                                <div className={`favourite ${isClassAdded[6] ? 'favourite selected' : ''}`}>
                                                    <span>
                                                        <i className="fa-regular fa-heart" />
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="pro-content">
                                            <div className="list-head">
                                                <div className="rating">
                                                    <span className="rating-count  d-inline-flex">
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                        <i className="fa fa-star checked" />
                                                    </span>
                                                    <span className="rating-review">Excellent</span>
                                                </div>
                                                <h3 className="title">
                                                    <Link to="#" tabIndex={-1}>
                                                        Beautiful Condo Room
                                                    </Link>
                                                </h3>
                                                <p>
                                                    <i className="feather-map-pin" />
                                                    470 Park Ave S, New York, NY 10016
                                                </p>
                                            </div>
                                            <ul className="d-flex details">
                                                <li>
                                                    <ImageWithBasePath src="assets/img/icons/bed-icon.svg" alt="bed-icon" />
                                                    4 Beds
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/bath-icon.svg"
                                                        alt="bath-icon"
                                                    />
                                                    4 Baths
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/building-icon.svg"
                                                        alt="building-icon"
                                                    />
                                                    35000 Sqft
                                                </li>
                                            </ul>
                                            <ul className="property-category d-flex justify-content-between align-items-center">
                                                <li className="user-info">
                                                    <Link to="#">
                                                        <ImageWithBasePath
                                                            src="assets/img/profiles/avatar-01.jpg"
                                                            className="img-fluid avatar"
                                                            alt=""
                                                        />
                                                    </Link>
                                                    <div className="user-name">
                                                        <h6>
                                                            <Link to="#">John Doe</Link>
                                                        </h6>
                                                        <p>UK</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <Link to={routes.rentalOrder} className="btn-primary">
                                                        Book Now
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* /Rent List */}
                                {/* Pagination */}
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="grid-pagination">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item prev">
                                                    <Link className="page-link" to="#">
                                                        <i className="fa-solid fa-arrow-left" /> Prev
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#">
                                                        1
                                                    </Link>
                                                </li>
                                                <li className="page-item active">
                                                    <Link className="page-link" to="#">
                                                        2
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#">
                                                        3
                                                    </Link>
                                                </li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="#">
                                                        4
                                                    </Link>
                                                </li>
                                                <li className="page-item next">
                                                    <Link className="page-link" to="#">
                                                        Next <i className="fa-solid fa-arrow-right" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* /Pagination */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* /Feature Property For Rent */}
        </>

    )
}

export default RentPropertyListSidebar
