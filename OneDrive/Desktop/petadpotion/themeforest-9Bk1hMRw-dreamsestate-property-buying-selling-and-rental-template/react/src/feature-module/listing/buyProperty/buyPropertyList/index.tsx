import React, { useState } from 'react'
import BreadCrumb from '../../../../core/common/breadCrumb'
import { customStyles, lowToHigh, sortBy } from '../../../../core/common/select'
import Select from 'react-select'
import ImageWithBasePath from '../../../../core/img'
import { Link } from 'react-router-dom'
import { all_routes } from '../../../router/all_routes'

const BuyPropertyList = () => {
    const routes = all_routes
    const [isClassAdded, setIsClassAdded] = useState([false,true,false, false,true]);
    const toggleClass = (index: any) => {
      const updatedClasses = [...isClassAdded];
      updatedClasses[index] = !updatedClasses[index];
      setIsClassAdded(updatedClasses);
    };
    return (
        <div>
            {/* Breadcrumb */}
            <BreadCrumb title="Buy property List without Sidebar" pageTitle="Home" />
            {/* Breadcrumb */}
            {/* Feature Property For Rent */}
            <section className="feature-property-sec for-rent bg-white listing-section">
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
                                                <Link to={routes.buyPropertyGrid}>
                                                    <i className="bx bx-grid" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={routes.buyPropertyList} className="active">
                                                    <i className="bx bx-list-ul" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={routes.buyListWithMap}>
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
                    <div className="row justify-content-center buy-list">
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
                                        <div className="featured">
                                            <span>Featured</span>
                                        </div>
                                        <div className="new-featured">
                                            <span>New</span>
                                        </div>
                                        <Link to="#"onClick={() => toggleClass(1)}>
                                <div className={`favourite ${isClassAdded[1] ? 'favourite selected' : ''}`}>
                                  <span>
                                    <i className="fa-regular fa-heart" />
                                  </span>
                                </div>
                              </Link>
                                        <div className="user-avatar">
                                            <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="User" />
                                        </div>
                                    </div>
                                    <div className="pro-content">
                                        <div className="list-head">
                                            <div className="rating">
                                                <i className="fa-solid fa-star checked" />
                                                <i className="fa-solid fa-star checked" />
                                                <i className="fa-solid fa-star checked" />
                                                <i className="fa-solid fa-star checked" />
                                                <i className="fa-solid fa-star checked" />
                                                5.0 (20 Reviews)
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
                                                    <i className="feather-map-pin" /> 318-330 S Oakley Blvd,
                                                    Chicago, IL 60612, USA
                                                </p>
                                            </div>
                                        </div>
                                        <ul className="d-flex details">
                                            <li>
                                                <ImageWithBasePath src="assets/img/icons/bed-icon.svg" alt="bed-icon" />2
                                                Beds
                                            </li>
                                            <li>
                                                <ImageWithBasePath src="assets/img/icons/bath-icon.svg" alt="bath-icon" />
                                                3 Baths
                                            </li>
                                            <li>
                                                <ImageWithBasePath
                                                    src="assets/img/icons/building-icon.svg"
                                                    alt="building-icon"
                                                />
                                                10000 Sqft
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
                                        <div className="featured">
                                            <span>Featured</span>
                                        </div>
                                        <Link to="#"onClick={() => toggleClass(2)}>
                                <div className={`favourite ${isClassAdded[2] ? 'favourite selected' : ''}`}>
                                  <span>
                                    <i className="fa-regular fa-heart" />
                                  </span>
                                </div>
                              </Link>
                                        <div className="user-avatar">
                                            <ImageWithBasePath src="assets/img/profiles/avatar-01.jpg" alt="User" />
                                        </div>
                                    </div>
                                    <div className="pro-content">
                                        <div className="list-head">
                                            <div className="rating">
                                                <i className="fa-solid fa-star checked" />
                                                <i className="fa-solid fa-star checked" />
                                                <i className="fa-solid fa-star checked" />
                                                <i className="fa-solid fa-star checked" />
                                                <i className="fa-solid fa-star checked" />
                                                <span className="me-1">5.0</span> (12 Reviews)
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
                                                    <i className="feather-map-pin" /> 318-330 S Oakley Blvd,
                                                    Chicago, IL 60612, USA
                                                </p>
                                            </div>
                                        </div>
                                        <ul className="d-flex details">
                                            <li>
                                                <ImageWithBasePath src="assets/img/icons/bed-icon.svg" alt="bed-icon" />3
                                                Beds
                                            </li>
                                            <li>
                                                <ImageWithBasePath src="assets/img/icons/bath-icon.svg" alt="bath-icon" />
                                                2 Baths
                                            </li>
                                            <li>
                                                <ImageWithBasePath
                                                    src="assets/img/icons/building-icon.svg"
                                                    alt="building-icon"
                                                />
                                                14000 Sqft
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
                                        <div className="featured">
                                            <span>Featured</span>
                                        </div>
                                        <Link to="#" onClick={() => toggleClass(3)}>
                                <div className={`favourite ${isClassAdded[3] ? 'favourite selected' : ''}`}>
                                  <span>
                                    <i className="fa-regular fa-heart" />
                                  </span>
                                </div>
                              </Link>
                                        <div className="user-avatar">
                                            <ImageWithBasePath src="assets/img/profiles/avatar-03.jpg" alt="User" />
                                        </div>
                                    </div>
                                    <div className="pro-content">
                                        <div className="list-head">
                                            <div className="rating">
                                                <i className="fa-solid fa-star checked" />
                                                <i className="fa-solid fa-star checked" />
                                                <i className="fa-solid fa-star checked" />
                                                <i className="fa-solid fa-star checked" />
                                                <i className="fa-solid fa-star" />
                                                <span className="me-1">4.0</span> (3 Reviews)
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
                                                    <i className="feather-map-pin" /> 470 Park Ave S, New
                                                    York, NY 10016
                                                </p>
                                            </div>
                                        </div>
                                        <ul className="d-flex details">
                                            <li>
                                                <ImageWithBasePath src="assets/img/icons/bed-icon.svg" alt="bed-icon" />2
                                                Beds
                                            </li>
                                            <li>
                                                <ImageWithBasePath src="assets/img/icons/bath-icon.svg" alt="bath-icon" />
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
                                        <div className="featured">
                                            <span>Featured</span>
                                        </div>
                                        <Link to="#"onClick={() => toggleClass(4)}>
                                <div className={`favourite ${isClassAdded[4] ? 'favourite selected' : ''}`}>
                                  <span>
                                    <i className="fa-regular fa-heart" />
                                  </span>
                                </div>
                              </Link>
                                        <div className="user-avatar">
                                            <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="User" />
                                        </div>
                                    </div>
                                    <div className="pro-content">
                                        <div className="list-head">
                                            <div className="rating">
                                                <i className="fa-solid fa-star checked" />
                                                <i className="fa-solid fa-star checked" />
                                                <i className="fa-solid fa-star checked" />
                                                <i className="fa-solid fa-star " />
                                                <i className="fa-solid fa-star " />
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
                                                    <i className="feather-map-pin" /> 470 Park Ave S, New
                                                    York, NY 10016
                                                </p>
                                            </div>
                                        </div>
                                        <ul className="d-flex details">
                                            <li>
                                                <ImageWithBasePath src="assets/img/icons/bed-icon.svg" alt="bed-icon" />2
                                                Beds
                                            </li>
                                            <li>
                                                <ImageWithBasePath src="assets/img/icons/bath-icon.svg" alt="bath-icon" />
                                                2 Baths
                                            </li>
                                            <li>
                                                <ImageWithBasePath
                                                    src="assets/img/icons/building-icon.svg"
                                                    alt="building-icon"
                                                />
                                                18000 Sqft
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
                                                src="assets/img/rent/rent-list-01.jpg"
                                            />
                                        </Link>
                                        <div className="featured">
                                            <span>Featured</span>
                                        </div>
                                        <Link to="#"onClick={() => toggleClass(5)}>
                                <div className={`favourite ${isClassAdded[5] ? 'favourite selected' : ''}`}>
                                  <span>
                                    <i className="fa-regular fa-heart" />
                                  </span>
                                </div>
                              </Link>
                                        <div className="user-avatar">
                                            <ImageWithBasePath src="assets/img/profiles/avatar-05.jpg" alt="User" />
                                        </div>
                                    </div>
                                    <div className="pro-content">
                                        <div className="list-head">
                                            <div className="rating">
                                                <i className="fa-solid fa-star checked" />
                                                <i className="fa-solid fa-star checked" />
                                                <i className="fa-solid fa-star checked" />
                                                <i className="fa-solid fa-star checked" />
                                                <i className="fa-solid fa-star checked" />
                                                <span className="me-1">5.0</span> (30 Reviews)
                                                <div className="product-name-price">
                                                    <h3 className="title">
                                                        <Link to={routes.buyDetails} tabIndex={-1}>
                                                            Minimalist and bright flat
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
                                                <ImageWithBasePath src="assets/img/icons/bed-icon.svg" alt="bed-icon" />4
                                                Beds
                                            </li>
                                            <li>
                                                <ImageWithBasePath src="assets/img/icons/bath-icon.svg" alt="bath-icon" />
                                                1 Bath
                                            </li>
                                            <li>
                                                <ImageWithBasePath
                                                    src="assets/img/icons/building-icon.svg"
                                                    alt="building-icon"
                                                />
                                                25000 Sqft
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
                        {/* Buy List */}
                        <div className="col-lg-12">
                            <div className="product-custom">
                                <div className="profile-widget rent-list-view">
                                    <div className="doc-img">
                                        <Link to={routes.buyDetails} className="property-img">
                                            <ImageWithBasePath
                                                className="img-fluid"
                                               alt='img'
                                                src="assets/img/rent/rent-list-06.jpg"
                                            />
                                        </Link>
                                        <div className="featured">
                                            <span>Featured</span>
                                        </div>
                                        <Link to="#">
                                            <div className="favourite">
                                                <span>
                                                    <i className="fa-regular fa-heart" />
                                                </span>
                                            </div>
                                        </Link>
                                        <div className="user-avatar">
                                            <ImageWithBasePath src="assets/img/profiles/avatar-06.jpg" alt="User" />
                                        </div>
                                    </div>
                                    <div className="pro-content">
                                        <div className="list-head">
                                            <div className="rating">
                                                <i className="fa-solid fa-star checked" />
                                                <i className="fa-solid fa-star checked" />
                                                <i className="fa-solid fa-star checked" />
                                                <i className="fa-solid fa-star " />
                                                <i className="fa-solid fa-star " />
                                                <span className="me-1">3.0</span> (30 Reviews)
                                                <div className="product-name-price">
                                                    <h3 className="title">
                                                        <Link to={routes.buyDetails} tabIndex={-1}>
                                                            Summer house
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
                                                    122-140 N Morgan St, Chicago, IL 60607, USA
                                                </p>
                                            </div>
                                        </div>
                                        <ul className="d-flex details">
                                            <li>
                                                <ImageWithBasePath src="assets/img/icons/bed-icon.svg" alt="bed-icon" />4
                                                Beds
                                            </li>
                                            <li>
                                                <ImageWithBasePath src="assets/img/icons/bath-icon.svg" alt="bath-icon" />
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
                                                <span className="date">27 Jan 2023</span>
                                            </li>
                                            <li>
                                                <span className="category list">Category : </span>
                                                <span className="category-value date"> Apartments</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Buy List */}
                    </div>
                </div>
            </section>
            {/* /Feature Property For Rent */}
        </div>
    )
}

export default BuyPropertyList
