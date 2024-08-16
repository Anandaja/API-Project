import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/img'
import BreadCrumb from '../../../../core/common/breadCrumb'
import { bathRoom, bedRoom, categories, customStyles, review, sortByTime } from '../../../../core/common/select'
import Select from 'react-select'
import { all_routes } from '../../../router/all_routes'
import ShowMap from '../../../pages/map'

const BuyListMap = () => {
    
    const routes = all_routes
    const [isClassAdded, setIsClassAdded] = useState([true]);
    const toggleClass = (index: any) => {
        const updatedClasses = [...isClassAdded];
        updatedClasses[index] = !updatedClasses[index];
        setIsClassAdded(updatedClasses);
    };
    return (
        <>
            {/* Breadcrumb */}
            <BreadCrumb title="Buy Property List with Map" pageTitle="Home" />
            {/* Breadcrumb */}
            {/* Content */}
            <div className="content p-0">
                <div className="container-fluid">
                    <div className="row">
                        {/* Map */}
                        <div className="col-xl-5 col-sm-12 map-right map-top ">
                        <ShowMap />
                           
                        </div>
                        {/* /Map */}
                        {/* Sidebar */}
                        <div className="col-xl-7 col-sm-12 map-content">
                            <div className="advanced-search">
                                <h3>Advanced Search</h3>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="review-form form-wrap ">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Location"
                                            />
                                            <span className="form-icon">
                                                <i className="bx bx-map" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-12">
                                        <div className="review-form form-wrap ">
                                            <Select options={categories} defaultValue={categories[0]} className="select" styles={customStyles} />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-12">
                                        <div className="review-form form-wrap ">

                                            <Select options={bedRoom} defaultValue={bedRoom[0]} className="select" styles={customStyles} />

                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-12">
                                        <div className="review-form form-wrap ">

                                            <Select options={bathRoom} defaultValue={bathRoom[0]} className="select" styles={customStyles} />

                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-12">
                                        <div className="review-form form-wrap ">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Min Sqft"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-12">
                                        <div className="review-form form-wrap ">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Min Price"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-12">
                                        <div className="review-form form-wrap ">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Max Price"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-12">
                                        <div className="review-form form-wrap ">
                                            <Select options={review} defaultValue={review[0]} className="select" styles={customStyles} />

                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-6 col-12">
                                        <div className="review-form form-wrap ">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Amenities"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="review-form-btn">
                                            <Link to="#;" className="btn btn-primary">
                                                Apply Filter
                                            </Link>
                                            <Link to="#;" className="reset-btn">
                                                Reset Selection
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Sidebar */}
                            {/* Result */}
                            <div className="result-map">
                                <div className="showing-result-head">
                                    <div className="row align-items-center">
                                        <div className="col-md-3">
                                            <div className="result-show">
                                                <h5>
                                                    Showing result <span>06</span> of <span>125</span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="row">
                                                <div className="col-md-12 d-flex justify-content-md-end flex-wrap">
                                                    <div className="sort-by grid-head">
                                                        <div>
                                                            <span>Sort By</span>
                                                        </div>
                                                        <div className="review-form">

                                                            <Select options={sortByTime} defaultValue={sortByTime[0]} className="select" styles={customStyles} />

                                                        </div>
                                                    </div>
                                                    <div className="grid-list-view">
                                                        <ul className="justify-content-end">
                                                            <li>
                                                                <Link to={routes.buyPropertyGrid}>
                                                                    <i className="bx bx-grid" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to={routes.buyPropertyList}>
                                                                    <i className="bx bx-list-ul" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to={routes.buyListWithMap} className="active">
                                                                    <i className="bx bxs-map" />
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Result */}
                            <div className="feature-property-sec rent-grid p-0 bg-white buy-list rental-map">
                                <div className="row ">
                                    {/* Buy List */}
                                    <div className="col-lg-12">
                                        <div className="product-custom">
                                            <div className="profile-widget rent-list-view">
                                                <div className="doc-img">
                                                    <Link to={routes.buyDetails} className="property-img">
                                                        <ImageWithBasePath
                                                            className="img-fluid"
                                                            alt='img'
                                                            src="assets/img/rent/rent-list-01.jpg"
                                                        />
                                                    </Link>
                                                    <div className="feature-rating">
                                                        <div>
                                                            <div className="featured">
                                                                <span>Featured</span>
                                                            </div>
                                                            <div className="new-featured">
                                                                <span>New</span>
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
                                                    <div className="list-head">
                                                        <div className="rating">
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <span className="me-1">5.0</span> (20 Reviews)
                                                            <div className="product-name-price">
                                                                <h3 className="title">
                                                                    <Link to={routes.buyDetails} tabIndex={-1}>
                                                                        Place perfect for nature
                                                                    </Link>
                                                                </h3>
                                                                <div className="product-amount">
                                                                    <h5>
                                                                        <span>$41,400 </span>
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <p>
                                                                <i className="feather-map-pin" /> 318-330 S Oakley
                                                                Blvd, Chicago, IL 60612, USA
                                                            </p>
                                                        </div>
                                                    </div>
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
                                                            7000 Sqft
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
                                    {/* /Buy List */}
                                    {/* Buy List */}
                                    <div className="col-lg-12">
                                        <div className="product-custom">
                                            <div className="profile-widget rent-list-view">
                                                <div className="doc-img">
                                                    <Link to={routes.buyDetails} className="property-img">
                                                        <ImageWithBasePath
                                                            className="img-fluid"
                                                            alt='img'
                                                            src="assets/img/rent/rent-list-02.jpg"
                                                        />
                                                    </Link>
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
                                                        <ImageWithBasePath src="assets/img/profiles/avatar-01.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="pro-content">
                                                    <div className="list-head">
                                                        <div className="rating">
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star" />
                                                            <span className="me-1">4.0</span> (12 Reviews)
                                                            <div className="product-name-price">
                                                                <h3 className="title">
                                                                    <Link to={routes.buyDetails} tabIndex={-1}>
                                                                        Modern Apartment
                                                                    </Link>
                                                                </h3>
                                                                <div className="product-amount">
                                                                    <h5>
                                                                        <span>$1,400 </span>
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <p>
                                                                <i className="feather-map-pin" /> 318-330 S Oakley
                                                                Blvd, Chicago, IL 60612, USA
                                                            </p>
                                                        </div>
                                                    </div>
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
                                                            35000 Sqft
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
                                    {/* /Buy List */}
                                    {/* Buy List */}
                                    <div className="col-lg-12">
                                        <div className="product-custom">
                                            <div className="profile-widget rent-list-view">
                                                <div className="doc-img">
                                                    <Link to={routes.buyDetails} className="property-img">
                                                        <ImageWithBasePath
                                                            className="img-fluid"
                                                            alt='img'
                                                            src="assets/img/rent/rent-list-03.jpg"
                                                        />
                                                    </Link>
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
                                                        <ImageWithBasePath src="assets/img/profiles/avatar-03.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="pro-content">
                                                    <div className="list-head">
                                                        <div className="rating">
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <span className="me-1">5.0</span> (3 Reviews)
                                                            <div className="product-name-price">
                                                                <h3 className="title">
                                                                    <Link to={routes.buyDetails} tabIndex={-1}>
                                                                        Two storey modern flat
                                                                    </Link>
                                                                </h3>
                                                                <div className="product-amount">
                                                                    <h5>
                                                                        <span>$21,400 </span>
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <p>
                                                                <i className="feather-map-pin" /> 470 Park Ave S,
                                                                New York, NY 10016
                                                            </p>
                                                        </div>
                                                    </div>
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
                                                            31000 Sqft
                                                        </li>
                                                    </ul>
                                                    <ul className="property-category d-flex justify-content-between">
                                                        <li>
                                                            <span className="list">Listed on : </span>
                                                            <span className="date">13 Jan 2023</span>
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
                                    {/* /Buy List */}
                                    {/* Buy List */}
                                    <div className="col-lg-12">
                                        <div className="product-custom">
                                            <div className="profile-widget rent-list-view">
                                                <div className="doc-img">
                                                    <Link to={routes.buyDetails} className="property-img">
                                                        <ImageWithBasePath
                                                            className="img-fluid"
                                                            alt='img'
                                                            src="assets/img/rent/rent-list-04.jpg"
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
                                                    <div className="user-avatar">
                                                        <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="pro-content">
                                                    <div className="list-head">
                                                        <div className="rating">
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star " />
                                                            <i className="fa fa-star " />
                                                            <span className="me-1">3.0</span> (3 Reviews)
                                                            <div className="product-name-price">
                                                                <h3 className="title">
                                                                    <Link to={routes.buyDetails} tabIndex={-1}>
                                                                        Beautiful Condo Room
                                                                    </Link>
                                                                </h3>
                                                                <div className="product-amount">
                                                                    <h5>
                                                                        <span>$12,400 </span>
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <p>
                                                                <i className="feather-map-pin" /> 470 Park Ave S,
                                                                New York, NY 10016
                                                            </p>
                                                        </div>
                                                    </div>
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
                                                            <span className="date">17 Jan 2023</span>
                                                        </li>
                                                        <li>
                                                            <span className="category list">Category : </span>
                                                            <span className="category-value date"> Home</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Buy List */}
                                    {/* Buy List */}
                                    <div className="col-lg-12">
                                        <div className="product-custom">
                                            <div className="profile-widget rent-list-view">
                                                <div className="doc-img">
                                                    <Link to={routes.buyDetails} className="property-img">
                                                        <ImageWithBasePath
                                                            className="img-fluid"
                                                            alt='img'
                                                            src="assets/img/rent/rent-list-05.jpg"
                                                        />
                                                    </Link>
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
                                                        <ImageWithBasePath src="assets/img/profiles/avatar-05.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="pro-content">
                                                    <div className="list-head">
                                                        <div className="rating">
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <i className="fa fa-star checked" />
                                                            <span className="me-1">5.0</span> (30 Reviews)
                                                            <div className="product-name-price">
                                                                <h3 className="title">
                                                                    <Link to={routes.buyDetails} tabIndex={-1}>
                                                                        Minimalist bright flat
                                                                    </Link>
                                                                </h3>
                                                                <div className="product-amount">
                                                                    <h5>
                                                                        <span>$48,400 </span>
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                            <p>
                                                                <i className="feather-map-pin" />
                                                                518-520 8th Ave, New York, NY 10018, USA
                                                            </p>
                                                        </div>
                                                    </div>
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
                                                            2 Baths
                                                        </li>
                                                        <li>
                                                            <ImageWithBasePath
                                                                src="assets/img/icons/building-icon.svg"
                                                                alt="building-icon"
                                                            />
                                                            31000 Sqft
                                                        </li>
                                                    </ul>
                                                    <ul className="property-category d-flex justify-content-between">
                                                        <li>
                                                            <span className="list">Listed on : </span>
                                                            <span className="date">27 Jan 2023</span>
                                                        </li>
                                                        <li>
                                                            <span className="category list">Category : </span>
                                                            <span className="category-value date"> Home</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Buy List */}
                                    {/* Pagination */}
                                    <div className="col-lg-12">
                                        <div className="grid-pagination grid-pagination-map">
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
                                                        15
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
                                    {/* /Pagination */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Content */}
        </>

    )
}

export default BuyListMap
