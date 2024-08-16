import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/img'
import BreadCrumb from '../../../../core/common/breadCrumb'
import Select from 'react-select'
import { bathRoom, bedRoom, customStyles, location, lowToHigh, sortBy } from '../../../../core/common/select'
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { MapPin } from 'react-feather'
import { all_routes } from '../../../router/all_routes'

const BuyPropertyGridWithSideBar = () => {
    const routes = all_routes
    const [isClassAdded, setIsClassAdded] = useState([false, false, true, false, false, true]); // Set the second button as initially selected

    const toggleClass = (index: any) => {
        const updatedClasses = [...isClassAdded];
        updatedClasses[index] = !updatedClasses[index];
        setIsClassAdded(updatedClasses);
    };


    return (
        <>
            {/* Breadcrumb */}
            <BreadCrumb title="Buy Property Grid with Sidebar" pageTitle="Home" />
            {/* Breadcrumb */}
            {/* Feature Property For Rent */}
            <div className="content inner-content bg-white">
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
                                                <Link to={routes.buyPropertyGridSidebar} className="active">
                                                    <i className="bx bx-grid" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={routes.buyPropertyListSidebar}>
                                                    <i className="bx bx-list-ul" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={routes.buyGridWithMap}>
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
                    <div className="row">
                        {/* Sidebar */}
                        <div className="col-lg-4 theiaStickySidebar">
                            <div className="left-sidebar-widget">
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
                                    <div id="advance-search" className="card-collapse collapse show">
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
                                                        <h5>Price Range:</h5>
                                                        <span id="slider-range-value1"> </span> to
                                                        <span id="slider-range-value2"> </span>$0 to $1948
                                                    </div>
                                                </li>
                                                <li className="price-filter-inner">
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
                                    <Link to="#;" className="reset-btn">
                                        Reset Selection
                                    </Link>
                                </div>
                                {/* /Apply filter */}
                            </div>
                        </div>
                        {/* /Sidebar */}
                        <div className="col-lg-8">
                            <div className=" for-rent p-0">
                                <div className="row">
                                    {/* Rent grid */}
                                    <div className="col-lg-6">
                                        <div className="product-custom">
                                            <div className="profile-widget">
                                                <div className="doc-img">
                                                    <Link to={routes.buyDetails} className="property-img">
                                                        <ImageWithBasePath
                                                            className="img-fluid"
                                                            alt='img'
                                                            src="assets/img/product/product-1.jpg"
                                                        />
                                                    </Link>
                                                    <div className="product-amount">
                                                        <span>$41,000</span>
                                                    </div>
                                                    <div className="feature-rating">
                                                        <div>
                                                            <div className="featured">
                                                                <span>Featured</span>
                                                            </div>
                                                            <div className="new-featured">
                                                                <span>New</span>
                                                            </div>
                                                        </div>
                                                        <Link to="#" onClick={() => toggleClass(0)}>
                                                            <div className={`favourite ${isClassAdded[0] ? 'favourite selected' : ''}`}>
                                                                <span>
                                                                    <i className="fa-regular fa-heart" />
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="user-avatar">
                                                        <ImageWithBasePath src="assets/img/profiles/avatar-01.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="pro-content">
                                                    <div className="rating">
                                                        <span className="rating-count">
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                        </span>
                                                        <p className="rating-review">
                                                            <span>5.0</span>(40 Reviews)
                                                        </p>
                                                    </div>
                                                    <h3 className="title">
                                                        <Link to={routes.buyDetails} tabIndex={-1}>
                                                            Place perfect for nature
                                                        </Link>
                                                    </h3>
                                                    <p>
                                                        <MapPin size={15} className='me-1'/> 318-S Oakley Blvd,
                                                        Chicago, IL 60612, USA
                                                    </p>
                                                    <ul className="d-flex details">
                                                        <li>
                                                            <ImageWithBasePath
                                                                src="assets/img/icons/bed-icon.svg"
                                                                alt="bed-icon"
                                                            />
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
                                                    <ul className="property-category d-flex justify-content-between">
                                                        <li>
                                                            <span className="list">Listed on : </span>
                                                            <span className="date">16 Jan 2023</span>
                                                        </li>
                                                        <li>
                                                            <span className="category list">Category : </span>
                                                            <span className="category-value date">Apartment</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Rent grid */}
                                    {/* Rent grid */}
                                    <div className="col-lg-6">
                                        <div className="product-custom">
                                            <div className="profile-widget">
                                                <div className="doc-img">
                                                    <Link to={routes.buyDetails} className="property-img">
                                                        <ImageWithBasePath
                                                            className="img-fluid"
                                                            alt='img'
                                                            src="assets/img/product/product-2.jpg"
                                                        />
                                                    </Link>
                                                    <div className="product-amount">
                                                        <span>$78,000</span>
                                                    </div>
                                                    <div className="feature-rating">
                                                        <div>
                                                            <div className="featured">
                                                                <span>Featured</span>
                                                            </div>
                                                        </div>
                                                        <Link to="#" onClick={() => toggleClass(1)}>
                                                            <div className={`favourite ${isClassAdded[1] ? 'favourite selected' : ''}`}>
                                                                <span>
                                                                    <i className="fa-regular fa-heart" />
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="user-avatar">
                                                        <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="pro-content">
                                                    <div className="rating">
                                                        <span className="rating-count">
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                        <p className="rating-review">
                                                            <span>4.0</span>(8 Reviews)
                                                        </p>
                                                    </div>
                                                    <h3 className="title">
                                                        <Link to={routes.buyDetails} tabIndex={-1}>
                                                            Beautiful Condo Room
                                                        </Link>
                                                    </h3>
                                                    <p>
                                                        <MapPin size={15} className='me-1'/> 470 Park Ave S, New
                                                        York, NY 10016
                                                    </p>
                                                    <ul className="d-flex details">
                                                        <li>
                                                            <ImageWithBasePath
                                                                src="assets/img/icons/bed-icon.svg"
                                                                alt="bed-icon"
                                                            />
                                                            3 Beds
                                                        </li>
                                                        <li>
                                                            <ImageWithBasePath
                                                                src="assets/img/icons/bath-icon.svg"
                                                                alt="bath-icon"
                                                            />
                                                            1 Bath
                                                        </li>
                                                        <li>
                                                            <ImageWithBasePath
                                                                src="assets/img/icons/building-icon.svg"
                                                                alt="building-icon"
                                                            />
                                                            12000 Sqft
                                                        </li>
                                                    </ul>
                                                    <ul className="property-category d-flex justify-content-between">
                                                        <li>
                                                            <span className="list">Listed on : </span>
                                                            <span className="date">17 Jan 2023</span>
                                                        </li>
                                                        <li>
                                                            <span className="category list">Category : </span>
                                                            <span className="category-value date">Condos</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Rent grid */}
                                    {/* Rent grid */}
                                    <div className="col-lg-6">
                                        <div className="product-custom">
                                            <div className="profile-widget">
                                                <div className="doc-img">
                                                    <Link to={routes.buyDetails} className="property-img">
                                                        <ImageWithBasePath
                                                            className="img-fluid"
                                                            alt='img'
                                                            src="assets/img/product/product-3.jpg"
                                                        />
                                                    </Link>
                                                    <div className="product-amount">
                                                        <span>$63,000</span>
                                                    </div>
                                                    <div className="feature-rating">
                                                        <div>
                                                            <div className="featured">
                                                                <span>Featured</span>
                                                            </div>
                                                        </div>
                                                        <Link to="#" onClick={() => toggleClass(2)}>
                                                            <div className={`favourite ${isClassAdded[2] ? 'favourite selected' : ''}`}>
                                                                <span>
                                                                    <i className="fa-regular fa-heart" />
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="user-avatar">
                                                        <ImageWithBasePath src="assets/img/profiles/avatar-03.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="pro-content">
                                                    <div className="rating">
                                                        <span className="rating-count">
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                        </span>
                                                        <p className="rating-review">
                                                            <span>5.0</span>(18 Reviews)
                                                        </p>
                                                    </div>
                                                    <h3 className="title">
                                                        <Link to={routes.buyDetails} tabIndex={-1}>
                                                            Summer house
                                                        </Link>
                                                    </h3>
                                                    <p>
                                                        <MapPin size={15} className='me-1'/> 82-25 Parsons Blvd,
                                                        Jamaica, NY 11432, USA
                                                    </p>
                                                    <ul className="d-flex details">
                                                        <li>
                                                            <ImageWithBasePath
                                                                src="assets/img/icons/bed-icon.svg"
                                                                alt="bed-icon"
                                                            />
                                                            2 Beds
                                                        </li>
                                                        <li>
                                                            <ImageWithBasePath
                                                                src="assets/img/icons/bath-icon.svg"
                                                                alt="bath-icon"
                                                            />
                                                            3 Baths
                                                        </li>
                                                        <li>
                                                            <ImageWithBasePath
                                                                src="assets/img/icons/building-icon.svg"
                                                                alt="building-icon"
                                                            />
                                                            2300 Sqft
                                                        </li>
                                                    </ul>
                                                    <ul className="property-category d-flex justify-content-between">
                                                        <li>
                                                            <span className="list">Listed on : </span>
                                                            <span className="date">13 Jan 2023</span>
                                                        </li>
                                                        <li>
                                                            <span className="category list">Category : </span>
                                                            <span className="category-value date">House</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Rent grid */}
                                    {/* Rent grid */}
                                    <div className="col-lg-6">
                                        <div className="product-custom">
                                            <div className="profile-widget">
                                                <div className="doc-img">
                                                    <Link to={routes.buyDetails} className="property-img">
                                                        <ImageWithBasePath
                                                            className="img-fluid"
                                                            alt='img'
                                                            src="assets/img/product/product-4.jpg"
                                                        />
                                                    </Link>
                                                    <div className="product-amount">
                                                        <span>$51,000</span>
                                                    </div>
                                                    <div className="feature-rating">
                                                        <div>
                                                            <div className="featured">
                                                                <span>Featured</span>
                                                            </div>
                                                        </div>
                                                        <Link to="#" onClick={() => toggleClass(3)}>
                                                            <div className={`favourite ${isClassAdded[3] ? 'favourite selected' : ''}`}>
                                                                <span>
                                                                    <i className="fa-regular fa-heart" />
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="user-avatar">
                                                        <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="pro-content">
                                                    <div className="rating">
                                                        <span className="rating-count">
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                        <p className="rating-review">
                                                            <span>3.0</span>(8 Reviews)
                                                        </p>
                                                    </div>
                                                    <h3 className="title">
                                                        <Link to={routes.buyDetails} tabIndex={-1}>
                                                            Minimalist and bright flat
                                                        </Link>
                                                    </h3>
                                                    <p>
                                                        <MapPin size={15} className='me-1'/> 518-520 8th Ave, New
                                                        York, NY 10018, USA
                                                    </p>
                                                    <ul className="d-flex details">
                                                        <li>
                                                            <ImageWithBasePath
                                                                src="assets/img/icons/bed-icon.svg"
                                                                alt="bed-icon"
                                                            />
                                                            3 Beds
                                                        </li>
                                                        <li>
                                                            <ImageWithBasePath
                                                                src="assets/img/icons/bath-icon.svg"
                                                                alt="bath-icon"
                                                            />
                                                            3 Baths
                                                        </li>
                                                        <li>
                                                            <ImageWithBasePath
                                                                src="assets/img/icons/building-icon.svg"
                                                                alt="building-icon"
                                                            />
                                                            12000 Sqft
                                                        </li>
                                                    </ul>
                                                    <ul className="property-category d-flex justify-content-between">
                                                        <li>
                                                            <span className="list">Listed on : </span>
                                                            <span className="date">18 Jan 2023</span>
                                                        </li>
                                                        <li>
                                                            <span className="category list">Category : </span>
                                                            <span className="category-value date">Flats</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Rent grid */}
                                    {/* Rent grid */}
                                    <div className="col-lg-6">
                                        <div className="product-custom">
                                            <div className="profile-widget">
                                                <div className="doc-img">
                                                    <Link to={routes.buyDetails} className="property-img">
                                                        <ImageWithBasePath
                                                            className="img-fluid"
                                                            alt='img'
                                                            src="assets/img/product/product-5.jpg"
                                                        />
                                                    </Link>
                                                    <div className="feature-rating">
                                                        <div>
                                                            <div className="featured">
                                                                <span>Featured</span>
                                                            </div>
                                                        </div>
                                                        <Link to="#" onClick={() => toggleClass(4)}>
                                                            <div className={`favourite ${isClassAdded[4] ? 'favourite selected' : ''}`}>
                                                                <span>
                                                                    <i className="fa-regular fa-heart" />
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="product-amount">
                                                        <span>$70,000</span>
                                                    </div>
                                                    <div className="user-avatar">
                                                        <ImageWithBasePath src="assets/img/profiles/avatar-05.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="pro-content">
                                                    <div className="rating">
                                                        <span className="rating-count">
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                        </span>
                                                        <p className="rating-review">
                                                            <span>5.0</span>(12 Reviews)
                                                        </p>
                                                    </div>
                                                    <h3 className="title">
                                                        <Link to={routes.buyDetails} tabIndex={-1}>
                                                            Two storey modern flat
                                                        </Link>
                                                    </h3>
                                                    <p>
                                                        <MapPin size={15} className='me-1'/> 470 Park Ave S, New
                                                        York, NY 10016
                                                    </p>
                                                    <ul className="d-flex details">
                                                        <li>
                                                            <ImageWithBasePath
                                                                src="assets/img/icons/bed-icon.svg"
                                                                alt="bed-icon"
                                                            />
                                                            3 Beds
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
                                                            5000 Sqft
                                                        </li>
                                                    </ul>
                                                    <ul className="property-category d-flex justify-content-between">
                                                        <li>
                                                            <span className="list">Listed on : </span>
                                                            <span className="date">19 Jan 2023</span>
                                                        </li>
                                                        <li>
                                                            <span className="category list">Category : </span>
                                                            <span className="category-value date">Flat</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Rent grid */}
                                    {/* Rent grid */}
                                    <div className="col-lg-6">
                                        <div className="product-custom">
                                            <div className="profile-widget">
                                                <div className="doc-img">
                                                    <Link to={routes.buyDetails} className="property-img">
                                                        <ImageWithBasePath
                                                            className="img-fluid"
                                                            alt='img'
                                                            src="assets/img/product/product-6.jpg"
                                                        />
                                                    </Link>
                                                    <div className="product-amount">
                                                        <span>$80,000</span>
                                                    </div>
                                                    <div className="feature-rating">
                                                        <div>
                                                            <div className="featured">
                                                                <span>Featured</span>
                                                            </div>
                                                        </div>
                                                        <Link to="#" onClick={() => toggleClass(5)}>
                                                            <div className={`favourite ${isClassAdded[5] ? 'favourite selected' : ''}`}>
                                                                <span>
                                                                    <i className="fa-regular fa-heart" />
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="user-avatar">
                                                        <ImageWithBasePath src="assets/img/profiles/avatar-06.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="pro-content">
                                                    <div className="rating">
                                                        <span className="rating-count">
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star" />
                                                        </span>
                                                        <p className="rating-review">
                                                            <span>4.0</span>(5 Reviews)
                                                        </p>
                                                    </div>
                                                    <h3 className="title">
                                                        <Link to={routes.buyDetails} tabIndex={-1}>
                                                            Modern apartment
                                                        </Link>
                                                    </h3>
                                                    <p>
                                                        <MapPin size={15} className='me-1'/> 122 N Morgan St,
                                                        Chicago, IL 60607, USA
                                                    </p>
                                                    <ul className="d-flex details">
                                                        <li>
                                                            <ImageWithBasePath
                                                                src="assets/img/icons/bed-icon.svg"
                                                                alt="bed-icon"
                                                            />
                                                            2 Beds
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
                                                            15000 Sqft
                                                        </li>
                                                    </ul>
                                                    <ul className="property-category d-flex justify-content-between">
                                                        <li>
                                                            <span className="list">Listed on : </span>
                                                            <span className="date">20 Jan 2023</span>
                                                        </li>
                                                        <li>
                                                            <span className="category list">Category : </span>
                                                            <span className="category-value date">Apartment</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Rent grid */}
                                </div>
                                {/* Pagination */}
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
                                {/* /Pagination */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Feature Property For Rent */}
        </>

    )
}

export default BuyPropertyGridWithSideBar
