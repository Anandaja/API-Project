import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/img'
import BreadCrumb from '../../../../core/common/breadCrumb'
import { bathRoom, bedRoom, categories, customStyles, review, sortByTime } from '../../../../core/common/select'
import Select from 'react-select'
import { MapPin } from 'react-feather'
import { all_routes } from '../../../router/all_routes'
import ShowMap from '../../../pages/map'

const RentListMap = () => {
    const routes = all_routes
    const [isClassAdded, setIsClassAdded] = useState([false , true, false, true]); // Set the second button as initially selected

    const toggleClass = (index: any) => {
      const updatedClasses = [...isClassAdded];
      updatedClasses[index] = !updatedClasses[index];
      setIsClassAdded(updatedClasses);
    };
    return (
        <div>
            {/* Breadcrumb */}
            <BreadCrumb title="Rent Property List with Map" pageTitle="Home" />
            {/* Breadcrumb */}
            {/* Content */}
            <div className="content p-0">
                <div className="container-fluid">
                    <div className="row">
                        {/* Map */}
                        <div className="col-xl-5 col-sm-12 map-right map-top">
                            {/* <div id="map" className="map-listing" /> */}
                            <ShowMap />
                        </div>
                        {/* /Map */}
                        <div className="col-xl-7 col-sm-12 map-content">
                            {/* Sidebar */}
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
                                            <Link to="#" className="btn btn-primary">
                                                Apply Filter
                                            </Link>
                                            <Link to="#" className="reset-btn">
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
                                                                <Link to={routes.rentGrid}>
                                                                    <i className="bx bx-grid" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to={routes.rentPropertyList}>
                                                                    <i className="bx bx-list-ul" />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to={routes.rentGridMap} className="active">
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
                            <div className="feature-property-sec for-rent rent-grid p-0 bg-white rental-map">
                                <div className="row ">
                                    {/* Rent List */}
                                    <div className="col-lg-12">
                                        <div className="product-custom">
                                            <div className="profile-widget rent-list-view">
                                                <div className="doc-img">
                                                    <Link to={routes.rentDetails} className="property-img">
                                                        <ImageWithBasePath
                                                            className="img-fluid"
                                                           alt='img'
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
                                                    <Link to="#" onClick={() => toggleClass(0)}>
                          <div className={`favourite ${isClassAdded[0] ? 'favourite selected' : ''}`}>
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
                                                                Royal Apartment
                                                            </Link>
                                                        </h3>
                                                        <p>
                                                            <MapPin size={15} className='me-1'/>
                                                            Jl. Seminyak Asri, No.4, Kuta
                                                        </p>
                                                    </div>
                                                    <ul className="d-flex details">
                                                        <li>
                                                            <ImageWithBasePath
                                                                src="assets/img/icons/bed-icon.svg"
                                                                alt="bed-icon"
                                                            />
                                                            5 Beds
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
                                                            11000 Sqft
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
                                                                <Link to="#">Marc Silva</Link>
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
                                    </div>
                                    {/* /Rent List */}
                                    {/* Rent List */}
                                    <div className="col-lg-12">
                                        <div className="product-custom">
                                            <div className="profile-widget rent-list-view">
                                                <div className="doc-img">
                                                    <Link to={routes.rentDetails} className="property-img">
                                                        <ImageWithBasePath
                                                            className="img-fluid"
                                                           alt='img'
                                                            src="assets/img/rent/rent-list-02.jpg"
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
                                                            <Link to={routes.rentDetails} tabIndex={-1}>
                                                                Grand Mahaka
                                                            </Link>
                                                        </h3>
                                                        <p>
                                                            <MapPin size={15} className='me-1'/>
                                                            Jl. Bandung Permai, No.6, Bandung
                                                        </p>
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
                                                            9000 Sqft
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
                                                                <Link to="#">Scott Gwin</Link>
                                                                <p>Minipoliies</p>
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
                                    </div>
                                    {/* /Rent List */}
                                    {/* Rent List */}
                                    <div className="col-lg-12">
                                        <div className="product-custom">
                                            <div className="profile-widget rent-list-view">
                                                <div className="doc-img">
                                                    <Link to={routes.rentDetails} className="property-img">
                                                        <ImageWithBasePath
                                                            className="img-fluid"
                                                           alt='img'
                                                            src="assets/img/rent/rent-list-03.jpg"
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
                                                                Lunaria Residence
                                                            </Link>
                                                        </h3>
                                                        <p>
                                                            <MapPin size={15} className='me-1'/>
                                                            Jl. Surabaya Jaya, No.10, Surabaya
                                                        </p>
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
                                                            12000 Sqft
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
                                                                <Link to="#">Kell Robinson</Link>
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
                                    </div>
                                    {/* /Rent List */}
                                    {/* Rent List */}
                                    <div className="col-lg-12">
                                        <div className="product-custom">
                                            <div className="profile-widget rent-list-view">
                                                <div className="doc-img">
                                                    <Link to={routes.rentDetails} className="property-img">
                                                        <ImageWithBasePath
                                                            className="img-fluid"
                                                           alt='img'
                                                            src="assets/img/rent/rent-list-04.jpg"
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
                                                                Grand Mahaka
                                                            </Link>
                                                        </h3>
                                                        <p>
                                                            <MapPin size={15} className='me-1'/>
                                                            Jl. Bandung Permai, No.6, Bandung
                                                        </p>
                                                    </div>
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
                                                            3500 Sqft
                                                        </li>
                                                    </ul>
                                                    <ul className="property-category d-flex justify-content-between align-items-center">
                                                        <li className="user-info">
                                                            <Link to="#">
                                                                <ImageWithBasePath
                                                                    src="assets/img/profiles/avatar-07.jpg"
                                                                    className="img-fluid avatar"
                                                                    alt=""
                                                                />
                                                            </Link>
                                                            <div className="user-name">
                                                                <Link to="#">Silya Reckz</Link>
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
                                    </div>
                                    {/* /Rent List */}
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
        </div>
    )
}

export default RentListMap
