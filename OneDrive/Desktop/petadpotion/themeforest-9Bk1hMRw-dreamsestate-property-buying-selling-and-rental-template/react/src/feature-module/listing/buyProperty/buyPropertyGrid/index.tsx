import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/img'
import BreadCrumb from '../../../../core/common/breadCrumb'
import { customStyles, lowToHigh, sortBy } from '../../../../core/common/select'
import Select from 'react-select'
import { MapPin } from 'react-feather'
import { all_routes } from '../../../router/all_routes'

const BuyPropertyGrid = () => {
  const routes = all_routes
  const [isClassAdded, setIsClassAdded] = useState([false, true, false, true, false, true, false, true, true]); // Set the second button as initially selected

  const toggleClass = (index: any) => {
    const updatedClasses = [...isClassAdded];
    updatedClasses[index] = !updatedClasses[index];
    setIsClassAdded(updatedClasses);
  };
  return (
    <>
      {/* Breadcrumb */}
      <BreadCrumb title="Buy property Grid without Sidebar" pageTitle="Home" />
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
                        <Link to={routes.buyPropertyGrid} className="active">
                          <i className="bx bx-grid" />
                        </Link>
                      </li>
                      <li>
                        <Link to={routes.buyPropertyList}>
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
          <div className=" for-rent p-0">
            <div className="row">
              {/* Buy grid */}
              <div className="col-lg-4 col-md-6">
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
                        
                        <Link to="#"onClick={() => toggleClass(0)}>
                                <div className={`favourite ${isClassAdded[0] ? 'favourite selected' : ''}`}>
                                  <span>
                                    <i className="fa-regular fa-heart" />
                                  </span>
                                </div>
                              </Link>
                      </div>
                      <div className="user-avatar">
                        <ImageWithBasePath src="assets/img/profiles/avatar-01.jpg" alt="User" />
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
                          <span>5.0</span>(20 Reviews)
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
                            alt='img'
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
              <div className="col-lg-4 col-md-6">
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
                       
                        <Link to="#"onClick={() => toggleClass(1)}>
                               
                                  <div className={`favourite ${isClassAdded[1] ? 'selected' : ''}`}>
                                  <span>
                                    <i className="fa-regular fa-heart" />
                                  </span>
                                </div>
                              </Link>
                      </div>
                      <div className="user-avatar">
                        <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="User" />
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
                          <span>4.0</span>(12 Reviews)
                        </p>
                      </div>
                      <h3 className="title">
                        <Link to={routes.buyDetails} tabIndex={-1}>
                          Beautiful Condo Room
                        </Link>
                      </h3>
                      <p>
                        <MapPin size={15} className='me-1'/> 470 Park Ave S, New York,
                        NY 10016
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
                          2 Baths
                        </li>
                        <li>
                          <ImageWithBasePath
                            src="assets/img/icons/building-icon.svg"
                            alt='img'
                          />
                          16000 Sqft
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
              <div className="col-lg-4 col-md-6">
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
                        <Link to="#"onClick={() => toggleClass(2)}>
                                <div className={`favourite ${isClassAdded[2] ? 'favourite selected' : ''}`}>
                                  <span>
                                    <i className="fa-regular fa-heart" />
                                  </span>
                                </div>
                              </Link>
                      </div>
                      <div className="user-avatar">
                        <ImageWithBasePath src="assets/img/profiles/avatar-03.jpg" alt="User" />
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
                          <span>3.0</span>(15 Reviews)
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
                          <ImageWithBasePath src="assets/img/icons/bed-icon.svg" alt="bed-icon" />
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
                            alt='img'
                          />
                          32000 Sqft
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
              <div className="col-lg-4 col-sm-6 col-12">
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
                        <Link to="#"onClick={() => toggleClass(3)}>
                               
                               <div className={`favourite ${isClassAdded[3] ? 'selected' : ''}`}>
                               <span>
                                 <i className="fa-regular fa-heart" />
                               </span>
                             </div>
                           </Link>
                      </div>
                      <div className="user-avatar">
                        <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="User" />
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
                          <span>4.0</span>(13 Reviews)
                        </p>
                      </div>
                      <h3 className="title">
                        <Link to={routes.buyDetails} tabIndex={-1}>
                          Minimalist and bright flat
                        </Link>
                      </h3>
                      <p>
                        <MapPin size={15} className='me-1'/> 518-520 8th Ave, New York,
                        NY 10018, USA
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
                          2 Baths
                        </li>
                        <li>
                          <ImageWithBasePath
                            src="assets/img/icons/building-icon.svg"
                            alt='img'
                          />
                          18000 Sqft
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
              {/* Buy grid */}
              <div className="col-lg-4 col-sm-6 col-12">
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
                      <div className="product-amount">
                        <span>$29,000</span>
                      </div>
                      <div className="feature-rating">
                        <div>
                          <div className="featured">
                            <span>Featured</span>
                          </div>
                        </div>
                        <Link to="#"onClick={() => toggleClass(4)}>
                               
                               <div className={`favourite ${isClassAdded[4] ? 'selected' : ''}`}>
                               <span>
                                 <i className="fa-regular fa-heart" />
                               </span>
                             </div>
                           </Link>
                      </div>
                      <div className="user-avatar">
                        <ImageWithBasePath src="assets/img/profiles/avatar-05.jpg" alt="User" />
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
                          <span>5.0</span>(8 Reviews)
                        </p>
                      </div>
                      <h3 className="title">
                        <Link to={routes.buyDetails} tabIndex={-1}>
                          Two storey modern flat
                        </Link>
                      </h3>
                      <p>
                        <MapPin size={15} className='me-1'/> 470 Park Ave S, New York,
                        NY 10016
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
                          1 Bath
                        </li>
                        <li>
                          <ImageWithBasePath
                            src="assets/img/icons/building-icon.svg"
                            alt='img'
                          />
                          14000 Sqft
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
              {/* /Buy grid */}
              {/* Buy grid */}
              <div className="col-lg-4 col-sm-6 col-12">
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
                        <span>80,000</span>
                      </div>
                      <div className="feature-rating">
                        <div>
                          <div className="featured">
                            <span>Featured</span>
                          </div>
                        </div>
                        <Link to="#"onClick={() => toggleClass(5)}>
                                <div className={`favourite ${isClassAdded[5] ? 'favourite selected' : ''}`}>
                                  <span>
                                    <i className="fa-regular fa-heart" />
                                  </span>
                                </div>
                              </Link>
                      </div>
                      <div className="user-avatar">
                        <ImageWithBasePath src="assets/img/profiles/avatar-06.jpg" alt="User" />
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
                          <span>4.0</span>(13 Reviews)
                        </p>
                      </div>
                      <h3 className="title">
                        <Link to={routes.buyDetails} tabIndex={-1}>
                          Modern apartment
                        </Link>
                      </h3>
                      <p>
                        <MapPin size={15} className='me-1'/> 122 N Morgan St, Chicago,
                        IL 60607, USA
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
                          2 Baths
                        </li>
                        <li>
                          <ImageWithBasePath
                            src="assets/img/icons/building-icon.svg"
                            alt='img'
                          />
                          16000 Sqft
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
              {/* /Buy grid */}
              {/* Buy grid */}
              <div className="col-lg-4 col-sm-6 col-12">
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
                        <Link to="#"onClick={() => toggleClass(6)}>
                                <div className={`favourite ${isClassAdded[6] ? 'favourite selected' : ''}`}>
                                  <span>
                                    <i className="fa-regular fa-heart" />
                                  </span>
                                </div>
                              </Link>
                      </div>
                      <div className="user-avatar">
                        <ImageWithBasePath src="assets/img/profiles/avatar-07.jpg" alt="User" />
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
                          Mountain Cabin
                        </Link>
                      </h3>
                      <p>
                        <MapPin size={15} className='me-1'/> 518-520 8th Ave, New York,
                        NY 10018, USA
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
                          3 Baths
                        </li>
                        <li>
                          <ImageWithBasePath
                            src="assets/img/icons/building-icon.svg"
                            alt='img'
                          />
                          24000 Sqft
                        </li>
                      </ul>
                      <ul className="property-category d-flex justify-content-between">
                        <li>
                          <span className="list">Listed on : </span>
                          <span className="date">21 Jan 2023</span>
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
              {/* Buy grid */}
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="product-custom">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to={routes.buyDetails} className="property-img">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt='img'
                          src="assets/img/product/product-8.jpg"
                        />
                      </Link>
                      <div className="product-amount">
                        <span>$41000</span>
                      </div>
                      <div className="feature-rating">
                        <div>
                          <div className="featured">
                            <span>Featured</span>
                          </div>
                        </div>
                        <Link to="#"onClick={() => toggleClass(7)}>
                                <div className={`favourite ${isClassAdded[7] ? 'favourite selected' : ''}`}>
                                  <span>
                                    <i className="fa-regular fa-heart" />
                                  </span>
                                </div>
                              </Link>
                      </div>
                      <div className="user-avatar">
                        <ImageWithBasePath src="assets/img/profiles/avatar-05.jpg" alt="User" />
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
                          Park House
                        </Link>
                      </h3>
                      <p>
                        <MapPin size={15} className='me-1'/> 318-S Oakley Blvd,
                        Chicago, IL 60612, USA
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
                          3 Baths
                        </li>
                        <li>
                          <ImageWithBasePath
                            src="assets/img/icons/building-icon.svg"
                            alt='img'
                          />
                          15000 Sqft
                        </li>
                      </ul>
                      <ul className="property-category d-flex justify-content-between">
                        <li>
                          <span className="list">Listed on : </span>
                          <span className="date">11 Jan 2023</span>
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
              <div className="col-lg-4 col-md-6">
                <div className="product-custom">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <Link to={routes.buyDetails} className="property-img">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt='img'
                          src="assets/img/product/product-7.jpg"
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
                        <Link to="#"onClick={() => toggleClass(8)}>
                                <div className={`favourite ${isClassAdded[8] ? 'favourite selected' : ''}`}>
                                  <span>
                                    <i className="fa-regular fa-heart" />
                                  </span>
                                </div>
                              </Link>
                      </div>
                      <div className="user-avatar">
                        <ImageWithBasePath src="assets/img/profiles/avatar-03.jpg" alt="User" />
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
                          <span>4.0</span>(8 Reviews)
                        </p>
                      </div>
                      <h3 className="title">
                        <Link to={routes.buyDetails} tabIndex={-1}>
                          White Stylish Loft
                        </Link>
                      </h3>
                      <p>
                        <MapPin size={15} className='me-1'/> 82-25 Parsons Blvd,
                        Jamaica, NY 11432, USA
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
                          2 Baths
                        </li>
                        <li>
                          <ImageWithBasePath
                            src="assets/img/icons/building-icon.svg"
                            alt='img'
                          />
                          23000 Sqft
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
            </div>
          </div>
        </div>
      </div>
      {/* /Feature Property For Rent */}
    </>

  )
}

export default BuyPropertyGrid
