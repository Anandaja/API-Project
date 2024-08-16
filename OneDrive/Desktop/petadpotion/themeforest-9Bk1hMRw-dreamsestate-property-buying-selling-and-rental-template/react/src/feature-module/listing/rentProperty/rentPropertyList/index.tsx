import React, { useState } from 'react'
import BreadCrumb from '../../../../core/common/breadCrumb'
import ImageWithBasePath from '../../../../core/img'
import { Link } from 'react-router-dom'
import { customStyles, lowToHigh, sortBy } from '../../../../core/common/select'
import Select from 'react-select'
import { all_routes } from '../../../router/all_routes'

const RentPropertyList = () => {
  const routes = all_routes
    const [isClassAdded, setIsClassAdded] = useState([false,true,false,true,false]);
  const toggleClass = (index: any) => {
    const updatedClasses = [...isClassAdded];
    updatedClasses[index] = !updatedClasses[index];
    setIsClassAdded(updatedClasses);
  };
  return (
    <>
  {/* Breadcrumb */}
  <BreadCrumb title="Rent Property List" pageTitle="Home" />
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
                    <Link to={routes.rentGrid}>
                      <i className="bx bx-grid" />
                    </Link>
                  </li>
                  <li>
                    <Link to={routes.rentPropertyList} className="active">
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
      <div className="row">
        {/* Rent List */}
        <div className="col-lg-12">
          <div className="product-custom">
            <div className="profile-widget rent-list-view">
              <div className="doc-img">
                <Link to={routes.rentDetails} className="property-img">
                  <ImageWithBasePath
                    className="img-fluid"
                    alt="Property Image"
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
                    <span>$4,500 </span> / Night
                  </h5>
                </div>
                <Link to="#"onClick={() => toggleClass(0)}>
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
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
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
                    <ImageWithBasePath src="assets/img/icons/bed-icon.svg" alt="bed-icon" />4
                    Beds
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/bath-icon.svg" alt="bath-icon" />
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
                    <Link to="#;">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-01.jpg"
                        className="img-fluid avatar"
                        alt="User"
                      />
                    </Link>
                    <div className="user-name">
                      <h6>
                        <Link to="#;">Marc Silva</Link>
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
                    alt="Property Image"
                    src="assets/img/rent/rent-list-06.jpg"
                  />
                </Link>
                <div className="product-amount">
                  <h5>
                    <span>$8,500 </span> / Night
                  </h5>
                </div>
                <Link to="#"onClick={() => toggleClass(1)}>
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
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
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
                    <ImageWithBasePath src="assets/img/icons/bed-icon.svg" alt="bed-icon" />2
                    Beds
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/bath-icon.svg" alt="bath-icon" />
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
                    <Link to="#;">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-02.jpg"
                        className="img-fluid avatar"
                        alt="User"
                      />
                    </Link>
                    <div className="user-name">
                      <h6>
                        <Link to="#;">Scott Gwin</Link>
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
                    alt="Property Image"
                    src="assets/img/rent/rent-list-05.jpg"
                  />
                </Link>
                <div className="featured">
                  <span>Featured</span>
                </div>
                <div className="product-amount">
                  <h5>
                    <span>$2,200 </span> / Night
                  </h5>
                </div>
                <Link to="#"onClick={() => toggleClass(2)}>
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
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
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
                    45000 Sqft
                  </li>
                </ul>
                <ul className="property-category d-flex justify-content-between align-items-center">
                  <li className="user-info">
                    <Link to="#;">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-03.jpg"
                        className="img-fluid avatar"
                        alt="User"
                      />
                    </Link>
                    <div className="user-name">
                      <h6>
                        <Link to="#;">Kell Robinson</Link>
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
                    alt="Property Image"
                    src="assets/img/rent/rent-list-02.jpg"
                  />
                </Link>
                <div className="featured">
                  <span>Featured</span>
                </div>
                <div className="product-amount">
                  <h5>
                    <span>$2,200 </span> / Night
                  </h5>
                </div>
                <Link to="#"onClick={() => toggleClass(3)}>
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
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
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
                    45000 Sqft
                  </li>
                </ul>
                <ul className="property-category d-flex justify-content-between align-items-center">
                  <li className="user-info">
                    <Link to="#;">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-04.jpg"
                        className="img-fluid avatar"
                        alt="User"
                      />
                    </Link>
                    <div className="user-name">
                      <h6>
                        <Link to="#;">Jeny Caps</Link>
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
                    alt="Property Image"
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
                    <span>$5,500 </span> / Night
                  </h5>
                </div>
                <Link to="#"onClick={() => toggleClass(4)}>
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
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
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
                    <ImageWithBasePath src="assets/img/icons/bed-icon.svg" alt="bed-icon" />7
                    Beds
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/bath-icon.svg" alt="bath-icon" />
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
                    <Link to="#;">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-05.jpg"
                        className="img-fluid avatar"
                        alt="User"
                      />
                    </Link>
                    <div className="user-name">
                      <h6>
                        <Link to="#;">Ronald Richards</Link>
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
        </div>
        {/* /Rent List */}
      </div>
    </div>
  </section>
  {/* /Feature Property For Rent */}
</>

  )
}

export default RentPropertyList