import React, { useState } from 'react'
import BreadCrumb from '../../../../core/common/breadCrumb'
import ImageWithBasePath from '../../../../core/img'
import { Link } from 'react-router-dom'
import { customStyles, lowToHigh, sortBy } from '../../../../core/common/select'
import Select from 'react-select';
import { MapPin } from 'react-feather'
import { all_routes } from '../../../router/all_routes'
const RentPropertyGrid = () => {
  const routes = all_routes

  const [isClassAdded, setIsClassAdded] = useState([false, true, false, false, true, true, false, true, true]); // Set the second button as initially selected

  const toggleClass = (index: any) => {
    const updatedClasses = [...isClassAdded];
    updatedClasses[index] = !updatedClasses[index];
    setIsClassAdded(updatedClasses);
  }; 
  return (
    <>
    {/* Breadcrumb */}
    <BreadCrumb title="Rent Property Grid without Sidebar" pageTitle="Home" />
    {/* Breadcrumb */}
    {/* Feature Property For Rent */}
    <div className="listing-section">
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
                      <Link to={routes.rentGrid} className="active">
                        <i className="bx bx-grid" />
                      </Link>
                    </li>
                    <li>
                      <Link to={routes.rentPropertyList}>
                        <i className="bx bx-list-ul" />
                      </Link>
                    </li>
                    <li>
                      <Link to={routes.rentGridMap}>
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
        <div className="feature-property-sec for-rent for-rent p-0 bg-transparent">
          <div className="row">
            {/* Rent grid */}
            <div className="col-lg-4 col-md-6">
              <div className="product-custom">
                <div className="profile-widget">
                  <div className="doc-img">
                    <Link to={routes.rentDetails} className="property-img">
                      <ImageWithBasePath
                        className="img-fluid"
                       alt='img'
                        src="assets/img/product/product-6.jpg"
                      />
                    </Link>
                    <div className="product-amount">
                      <h5>
                        <span>$2,200 </span> / Night
                      </h5>
                    </div>
                    <div className="featured">
                      <span>Featured</span>
                    </div>
                    <div className="new-featured">
                      <span>New</span>
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
                    <div className="rating">
                      <span className="rating-count">
                        <i className="fa-solid fa-star checked" />
                        <i className="fa-solid fa-star checked" />
                        <i className="fa-solid fa-star checked" />
                        <i className="fa-solid fa-star checked" />
                        <i className="fa-solid fa-star checked" />
                      </span>
                      <span className="rating-review">Excellent</span>
                    </div>
                    <h3 className="title">
                      <Link to={routes.rentDetails}>Beautiful Condo Room</Link>
                    </h3>
                    <p>
                      <MapPin size={15} className='me-1'/> 318-S Oakley Blvd,
                      Chicago, IL 60612, USA
                    </p>
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
                        <Link to={routes.agentGrid}>
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-01.jpg"
                            className="img-fluid avatar"
                            alt="User"
                          />
                        </Link>
                        <div className="user-name">
                          <Link to={routes.agentGrid}>Marc Silva</Link>
                          <p>Newyork</p>
                        </div>
                      </li>
                      <li>
                        <Link to={routes.rentDetails} className="btn-primary">
                          Book Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* /Rent grid */}
            {/* Rent grid */}
            <div className="col-lg-4 col-md-6">
              <div className="product-custom">
                <div className="profile-widget">
                  <div className="doc-img">
                    <Link to={routes.rentDetails} className="property-img">
                      <ImageWithBasePath
                        className="img-fluid"
                       alt='img'
                        src="assets/img/product/product-7.jpg"
                      />
                    </Link>
                    <div className="product-amount">
                      <h5>
                        <span>$1,400 </span> / Night
                      </h5>
                    </div>
                    <div className="featured">
                      <span>Featured</span>
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
                    <div className="rating">
                      <span className="rating-count">
                        <i className="fa-solid fa-star checked" />
                        <i className="fa-solid fa-star checked" />
                        <i className="fa-solid fa-star checked" />
                        <i className="fa-solid fa-star checked" />
                        <i className="fa-solid fa-star checked" />
                      </span>
                      <span className="rating-review">Excellent</span>
                    </div>
                    <h3 className="title">
                      <Link to={routes.rentDetails}>Grand Mahaka</Link>
                    </h3>
                    <p>
                      <MapPin size={15} className='me-1'/> 470 Park Ave S, New York,
                      NY 10016
                    </p>
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
                        5000 Sqft
                      </li>
                    </ul>
                    <ul className="property-category d-flex justify-content-between align-items-center">
                      <li className="user-info">
                        <Link to={routes.agentGrid}>
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            className="img-fluid avatar"
                            alt="User"
                          />
                        </Link>
                        <div className="user-name">
                          <Link to={routes.agentGrid}>Karen Maria</Link>
                          <p>South Dokata</p>
                        </div>
                      </li>
                      <li>
                        <Link to={routes.rentDetails} className="btn-primary">
                          Book Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* /Rent grid */}
            {/* Rent grid */}
            <div className="col-lg-4 col-md-6">
              <div className="product-custom">
                <div className="profile-widget">
                  <div className="doc-img">
                    <Link to={routes.rentDetails} className="property-img">
                      <ImageWithBasePath
                        className="img-fluid"
                       alt='img'
                        src="assets/img/product/product-8.jpg"
                      />
                    </Link>
                    <div className="product-amount">
                      <h5>
                        <span>$1,500 </span> / Night
                      </h5>
                    </div>
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
                      <span className="rating-review">Excellent</span>
                    </div>
                    <h3 className="title">
                      <Link to={routes.rentDetails}>Royal Apartment</Link>
                    </h3>
                    <p>
                      <MapPin size={15} className='me-1'/> 82-25 Parsons Blvd,
                      Jamaica, NY 11432, USA
                    </p>
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
                    <ul className="property-category d-flex justify-content-between align-items-center">
                      <li className="user-info">
                        <Link to={routes.agentGrid}>
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            className="img-fluid avatar"
                            alt="User"
                          />
                        </Link>
                        <div className="user-name">
                          <Link to={routes.agentGrid}>Scott Gwin</Link>
                          <p>Minipoliies</p>
                        </div>
                      </li>
                      <li>
                        <Link to={routes.rentDetails} className="btn-primary">
                          Book Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* /Rent grid */}
            {/* Rent grid */}
            <div className="col-lg-4 col-md-6">
              <div className="product-custom">
                <div className="profile-widget">
                  <div className="doc-img">
                    <Link to={routes.rentDetails} className="property-img">
                      <ImageWithBasePath
                        className="img-fluid"
                       alt='img'
                        src="assets/img/product/product-9.jpg"
                      />
                    </Link>
                    <div className="product-amount">
                      <h5>
                        <span>$3,500 </span> / Night
                      </h5>
                    </div>
                    <div className="featured">
                      <span>Featured</span>
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
                    <div className="rating">
                      <span className="rating-count">
                        <i className="fa-solid fa-star checked" />
                        <i className="fa-solid fa-star checked" />
                        <i className="fa-solid fa-star checked" />
                        <i className="fa-solid fa-star checked" />
                        <i className="fa-solid fa-star" />
                      </span>
                      <span className="rating-review">Excellent</span>
                    </div>
                    <h3 className="title">
                      <Link to={routes.rentDetails} tabIndex={-1}>
                        Lunaria Residence
                      </Link>
                    </h3>
                    <p>
                      <MapPin size={15} className='me-1'/> 518-520 8th Ave, New York,
                      NY 10018, USA
                    </p>
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
                    <ul className="property-category d-flex justify-content-between align-items-center">
                      <li className="user-info">
                        <Link to={routes.agentGrid}>
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-04.jpg"
                            className="img-fluid avatar"
                            alt="User"
                          />
                        </Link>
                        <div className="user-name">
                          <Link to={routes.agentGrid}>Burdette</Link>
                          <p>Cambridge</p>
                        </div>
                      </li>
                      <li>
                        <Link to={routes.rentDetails} className="btn-primary">
                          Book Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* /Rent grid */}
            {/* Rent grid */}
            <div className="col-lg-4 col-md-6">
              <div className="product-custom">
                <div className="profile-widget">
                  <div className="doc-img">
                    <Link to={routes.rentDetails} className="property-img">
                      <ImageWithBasePath
                        className="img-fluid"
                       alt='img'
                        src="assets/img/product/product-10.jpg"
                      />
                    </Link>
                    <div className="product-amount">
                      <h5>
                        <span>$4,500 </span> / Night
                      </h5>
                    </div>
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
                      <span className="rating-review">Excellent</span>
                    </div>
                    <h3 className="title">
                      <Link to={routes.rentDetails}>Grand Villa house</Link>
                    </h3>
                    <p>
                      <MapPin size={15} className='me-1'/> 470 Park Ave S, New York,
                      NY 10016
                    </p>
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
                        <Link to={routes.agentGrid}>
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-05.jpg"
                            className="img-fluid avatar"
                            alt="User"
                          />
                        </Link>
                        <div className="user-name">
                          <Link to={routes.agentGrid}>Kell Robinson</Link>
                          <p>USA</p>
                        </div>
                      </li>
                      <li>
                        <Link to={routes.rentDetails} className="btn-primary">
                          Book Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* /Rent grid */}
            {/* Rent grid */}
            <div className="col-lg-4 col-md-6">
              <div className="product-custom">
                <div className="profile-widget">
                  <div className="doc-img">
                    <Link to={routes.rentDetails} className="property-img">
                      <ImageWithBasePath
                        className="img-fluid"
                       alt='img'
                        src="assets/img/product/product-11.jpg"
                      />
                    </Link>
                    <div className="product-amount">
                      <h5>
                        <span>$2,400 </span> / Night
                      </h5>
                    </div>
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
                      <span className="rating-review">Excellent</span>
                    </div>
                    <h3 className="title">
                      <Link to={routes.rentDetails}>Stephen Alexander Homes</Link>
                    </h3>
                    <p>
                      <MapPin size={15} className='me-1'/> 122 N Morgan St, Chicago,
                      IL 60607, USA
                    </p>
                    <ul className="d-flex details">
                      <li>
                        <ImageWithBasePath src="assets/img/icons/bed-icon.svg" alt="bed-icon" />
                        1 Beds
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
                        7000 Sqft
                      </li>
                    </ul>
                    <ul className="property-category d-flex justify-content-between align-items-center">
                      <li className="user-info">
                        <Link to={routes.agentGrid}>
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-07.jpg"
                            className="img-fluid avatar"
                            alt="User"
                          />
                        </Link>
                        <div className="user-name">
                          <Link to={routes.agentGrid}>Pittman</Link>
                          <p>Cambridge</p>
                        </div>
                      </li>
                      <li>
                        <Link to={routes.rentDetails} className="btn-primary">
                          Book Now
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* /Rent grid */}
          </div>
        </div>
      </div>
    </div>
    {/* /Feature Property For Rent */}
  </>
  
  )
}

export default RentPropertyGrid
