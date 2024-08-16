import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/img'
import BreadCrumb from '../../../../core/common/breadCrumb'
import { bathRoom, bedRoom, categories, customStyles, review, sortByTime } from '../../../../core/common/select'
import Select from 'react-select'
import { Grid, List, MapPin } from 'react-feather'
import { all_routes } from '../../../router/all_routes'
import ShowMap from '../../../pages/map'

const BuyGridWithMap = () => {
    
    const routes = all_routes
    const [isClassAdded, setIsClassAdded] = useState([false]);
    const toggleClass = (index: any) => {
        const updatedClasses = [...isClassAdded];
        updatedClasses[index] = !updatedClasses[index];
        setIsClassAdded(updatedClasses);
    };
    // const apiKey = 'AIzaSyD6adZVdzTvBpE2yBRK8cDfsss8QXChK0I';
    // const locations: Location[] = [
    //     {
          
    //       lat: 53.470692,
    //       lng: -2.220328,
    //       rent_prize: '$1,100',
    //       rent_bed: '4',
    //       rent_baths: '4',
    //       rent_sqft: '1900',
    //       rent_listedon: '17 Jan 2023',
    //       rent_Category: 'Condos',
    //       rent_name: 'Place perfect for nature',
    //       total_review: '17',
    //       rent_address: '122-140 N Morgan St, Chicago, IL 60607, USA',
    //       image: 'assets/img/product/product-1.jpg',
    //       profile_image: 'assets/img/profiles/avatar-01.jpg',
    //     },
    //     // Add more locations as needed
    //   ];

    //   const defaultProps = {
    //     center: {
    //       lat: 10.99835602,
    //       lng: 77.01502627
    //     },
    //     zoom: 11
    //   };
    
    return (
        <>
            {/* Breadcrumb */}
            <BreadCrumb title="Buy Property Grid with Map" pageTitle="Home" />
            {/* Breadcrumb */}
            {/* Content */}
            <div className="content p-0">
                <div className="container-fluid">
                    <div className="row">
                        {/* Map */}
                        <div className="col-xl-5 col-sm-12 map-right grid-map map-top">
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
                                                                <Link to={routes.buyPropertyGridSidebar}>
                                                                    <Grid size={15} className='me-1' />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to={routes.buyPropertyListSidebar}>

                                                                    <List size={15} className='me-1' />
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to={routes.buyGridWithMap} className="active">

                                                                    <MapPin size={15} className='me-1' />
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
                            <div className="feature-property-sec rent-grid p-0 bg-white">
                                <div className="row ">
                                    {/* Buy grid */}
                                    <div className="col-lg-6 d-flex">
                                        <div className="product-custom flex-fill">
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
                                                        <Link to="#" onClick={() => toggleClass(4)}>
                                                            <div className={`favourite ${isClassAdded[4] ? 'favourite selected' : ''}`}>
                                                                <span>
                                                                    <i className="fa-regular fa-heart" />
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="user-avatar">
                                                        <ImageWithBasePath
                                                            src="assets/img/profiles/avatar-01.jpg"
                                                            alt="User"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="pro-content">
                                                    <div className="rating">
                                                        <span className="rating-count">
                                                            <i className="fa-solid fa-star checked" />
                                                            <i className="fa-solid fa-star checked" />
                                                            <i className="fa-solid fa-star checked" />
                                                            <i className="fa-solid fa-star checked" />
                                                            <i className="fa-solid fa-star" />
                                                        </span>
                                                        <p className="rating-review">
                                                            <span>4.0</span>(5 Reviews)
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
                                    {/* /Buy grid */}
                                    {/* Buy grid */}
                                    <div className="col-lg-6 d-flex">
                                        <div className="product-custom flex-fill">
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
                                                        <Link to="#" onClick={() => toggleClass(2)}>
                                                            <div className={`favourite ${isClassAdded[2] ? 'favourite selected' : ''}`}>
                                                                <span>
                                                                    <i className="fa-regular fa-heart" />
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="user-avatar">
                                                        <ImageWithBasePath
                                                            src="assets/img/profiles/avatar-02.jpg"
                                                            alt="User"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="pro-content">
                                                    <div className="rating">
                                                        <span className="rating-count">
                                                            <i className="fa-solid fa-star checked" />
                                                            <i className="fa-solid fa-star checked" />
                                                            <i className="fa-solid fa-star checked" />
                                                            <i className="fa-solid fa-star checked" />
                                                            <i className="fa-solid fa-star checked" />
                                                        </span>
                                                        <p className="rating-review">
                                                            <span>5.0</span>(12 Reviews)
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
                                    {/* /Buy grid */}
                                    {/* Buy grid */}
                                    <div className="col-lg-6 d-flex">
                                        <div className="product-custom flex-fill">
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
                                                        <Link to="#" onClick={() => toggleClass(3)}>
                                                            <div className={`favourite ${isClassAdded[3] ? 'favourite selected' : ''}`}>
                                                                <span>
                                                                    <i className="fa-regular fa-heart" />
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="user-avatar">
                                                        <ImageWithBasePath
                                                            src="assets/img/profiles/avatar-03.jpg"
                                                            alt="User"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="pro-content">
                                                    <div className="rating">
                                                        <span className="rating-count">
                                                            <i className="fa-solid fa-star checked" />
                                                            <i className="fa-solid fa-star checked" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                            <i className="fa-solid fa-star" />
                                                        </span>
                                                        <p className="rating-review">
                                                            <span>3.0</span>(8 Reviews)
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
                                    {/* /Buy grid */}
                                    {/* Buy grid */}
                                    <div className="col-lg-6 d-flex">
                                        <div className="product-custom flex-fill">
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
                                                        <ImageWithBasePath
                                                            src="assets/img/profiles/avatar-04.jpg"
                                                            alt="User"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="pro-content">
                                                    <div className="rating">
                                                        <span className="rating-count">
                                                            <i className="fa-solid fa-star checked" />
                                                            <i className="fa-solid fa-star checked" />
                                                            <i className="fa-solid fa-star checked" />
                                                            <i className="fa-solid fa-star checked" />
                                                            <i className="fa-solid fa-star checked" />
                                                        </span>
                                                        <p className="rating-review">
                                                            <span>5.0</span>(18 Reviews)
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
                                    {/* /Buy grid */}
                                    {/* Pagination */}
                                    <div className="col-lg-12">
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
                    </div>
                </div>
            </div>
            {/* /Content */}
        </>

    )
}

export default BuyGridWithMap
