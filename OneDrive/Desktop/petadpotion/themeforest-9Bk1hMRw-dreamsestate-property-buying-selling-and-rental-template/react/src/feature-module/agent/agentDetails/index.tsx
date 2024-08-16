import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../core/img'
import { customStyles, propertCategory1 } from '../../../core/common/select'
import Select from 'react-select'
import Slider from 'react-slick'
import BreadCrumb from '../../../core/common/breadCrumb'
import { MapPin } from 'react-feather'
import { all_routes } from '../../router/all_routes'


const AgentDetails = () => {
  const routes = all_routes

  const [isClassAdded, setIsClassAdded] = useState([false]);
  const toggleClass = (index: any) => {
    const updatedClasses = [...isClassAdded];
    updatedClasses[index] = !updatedClasses[index];
    setIsClassAdded(updatedClasses);
  };

  const settings = {
    dots: true,
    arrow:false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <>
      {/* Breadcrumb */}
      <BreadCrumb title="Agent Details" pageTitle="Home" />
      {/* Breadcrumb */}
      {/* Detail View Section */}
      <section className="content inner-content">
        <div className="container">
          {/* Details */}
          <div className="details-wrap">
            <div className="detail-user-wrap">
              <div className="detail-user-img">
                <ImageWithBasePath
                  src="assets/img/agents/agent-01.jpg"
                  className="img-fluid"
                  alt='img'
                />
              </div>
              <div className="user-wrap">
                <div className="user-info-wrap">
                  <div className="detail-user-info">
                    <div className="rating">
                      <span className="rating-count">
                        <i className="fa-solid fa-star checked" />
                        <i className="fa-solid fa-star checked" />
                        <i className="fa-solid fa-star checked" />
                        <i className="fa-solid fa-star checked" />
                        <i className="fa-solid fa-star checked" />
                      </span>
                      <span className="rating-review">5.0 (20 Reviews)</span>
                    </div>
                    <h3>
                      Richard R. Roy <i className="fa-solid fa-circle-check" />
                    </h3>
                    <p>
                      <i className="bx bx-user-voice" />
                      Seller Agent at <span>Lux Realestate</span>
                    </p>
                  </div>
                  <div className="detail-action">
                    <Link to="#" className="btn btn-primary">
                      <i className="bx bx-phone" />
                      Call Me
                    </Link>
                    <Link to="#" className="btn btn-secondary">
                      <i className="bx bxl-whatsapp" />
                      WhatsApp
                    </Link>
                  </div>
                </div>
                <ul className="mem-list">
                  <li>
                    <span>Member Since : </span>12 May 2011
                  </li>
                  <li>
                    <span>Agent License : </span>090-0348-8346
                  </li>
                  <li>
                    <span>Tax Number : </span>090-0348-8346
                  </li>
                  <li>
                    <span>Language : </span>English, Spanish, French
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Details */}
          <div className="row">
            <div className="col-lg-8">
              <div className="agent-views">
                {/* About */}
                <div className="collapse-card">
                  <h4 className="card-title">
                    <Link
                      className="collapsed"
                      data-bs-toggle="collapse"
                      to="#about"
                      aria-expanded="false"
                    >
                      About Richard R. Roy
                    </Link>
                  </h4>
                  <div id="about" className="card-collapse collapse show">
                    <div className="about-agent collapse-view">
                      <p>
                        This property is mostly wooded and sits high on a hilltop
                        overlooking the Mohawk River Valley. Located right in the
                        heart of Upstate NYs Amish farm Country, this land is
                        certified organic making it extremely rare! Good road
                        frontage on a paved county road with utilities make it an
                        amazing setting for your dream country getaway! If you like
                        views, you must see this property!,{" "}
                      </p>
                      <p>
                        This property is mostly wooded and sits high on a hilltop
                        overlooking the Mohawk River Valley. Located right in the
                        heart of Upstate NYs Amish farm Country, this land is
                        certified organic making it extremely rare! Good road
                        frontage on a paved county road with utilities make it an
                        amazing setting for your dream country getaway! If you like
                        views, you must see this property!This property is mostly
                        wooded and sits high on a hilltop overlooking the Mohawk
                        River{" "}
                      </p>
                      <p>
                        Valley. Located right in the heart of Upstate NYs Amish farm
                        Country, this land is certified organic making it extremely
                        rare! Good road frontage on a paved county road with
                        utilities make it an amazing setting for your dream country
                        getaway! If you like views, you must see this property!
                      </p>
                    </div>
                  </div>
                </div>
                {/* /About */}
                {/* Service Areas */}
                <div className="collapse-card">
                  <h4 className="card-title">
                    <Link
                      className="collapsed"
                      data-bs-toggle="collapse"
                      to="#service-area"
                      aria-expanded="false"
                    >
                      Service Areas
                    </Link>
                  </h4>
                  <div id="service-area" className="card-collapse collapse show">
                    <ul className="service-area collapse-view">
                      <li>Chicago</li>
                      <li>Los Angeles</li>
                      <li>Miami Beach</li>
                      <li>New York</li>
                    </ul>
                  </div>
                </div>
                {/* /Service Areas */}
                {/* Specialities */}
                <div className="collapse-card spl-card">
                  <h4 className="card-title">
                    <Link
                      className="collapsed"
                      data-bs-toggle="collapse"
                      to="#specialities"
                      aria-expanded="false"
                    >
                      Specialities
                    </Link>
                  </h4>
                  <div id="specialities" className="card-collapse collapse show">
                    <ul className="specialities-list collapse-view">
                      <li>Property Management</li>
                      <li>Real Estate Development</li>
                      <li>Real Estate Appraising</li>
                      <li>Apartment Brokerage</li>
                    </ul>
                  </div>
                </div>
                {/* /Specialities */}
                {/* My Listings */}
                <h5 className="sub-title">My Listings</h5>
                <div className="list-card">
                  <ul className="my-list nav">
                    <li>
                      <Link
                        to="#"
                        className="active"
                        data-bs-toggle="tab"
                        data-bs-target="#property"
                      >
                        All Properties ( 25 )
                      </Link>
                    </li>
                    <li>
                      <Link to="#" data-bs-toggle="tab" data-bs-target="#apartment">
                        Apartments ( 15 )
                      </Link>
                    </li>
                    <li>
                      <Link to="#" data-bs-toggle="tab" data-bs-target="#condos">
                        Condos ( 5 )
                      </Link>
                    </li>
                    <li>
                      <Link to="#" data-bs-toggle="tab" data-bs-target="#home">
                        Home ( 5 )
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* /My Listings */}
                <div className="tab-content">
                  {/* Property */}
                  <div className="tab-pane active" id="property">
                    {/* Rent Listings */}
                    <div className="agentpro-list">
                      <div className="agentview-slider owl-carousel feature-property-sec for-rent">
                      <Slider {...settings}>
                        <div className="product-custom">
                          <div className="profile-widget">
                            <div className="pro-img">
                              <Link to={routes.rentDetails} className="property-img">
                                <ImageWithBasePath
                                  className="img-fluid"
                                  alt="Property Image"
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
                                <MapPin size={15} className='me-1'/> 470 Park Ave S,
                                New York, NY 10016
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
                                  1 Baths
                                </li>
                                <li>
                                  <ImageWithBasePath
                                    src="assets/img/icons/building-icon.svg"
                                    alt="building-icon"
                                  />
                                  1200 Sqft
                                </li>
                              </ul>
                              <ul className="property-category d-flex justify-content-between align-items-center">
                                <li className="user-info">
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="assets/img/profiles/avatar-02.jpg"
                                      className="img-fluid avatar"
                                      alt="User"
                                    />
                                  </Link>
                                  <div className="user-name">
                                    <h6>
                                      <Link to="#">Karen Maria</Link>
                                    </h6>
                                    <p>South Dokata</p>
                                  </div>
                                </li>
                                <li>
                                  <Link
                                    to={routes.rentDetails}
                                    className="btn-primary"
                                  >
                                    Book Now
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="product-custom">
                          <div className="profile-widget">
                            <div className="pro-img">
                              <Link to={routes.rentDetails} className="property-img">
                                <ImageWithBasePath
                                  className="img-fluid"
                                  alt="Property Image"
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
                                <MapPin size={15} className='me-1'/> 82-25 Parsons
                                Blvd, Jamaica, NY 11432, USA
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
                                  2 Baths
                                </li>
                                <li>
                                  <ImageWithBasePath
                                    src="assets/img/icons/building-icon.svg"
                                    alt="building-icon"
                                  />
                                  1500 Sqft
                                </li>
                              </ul>
                              <ul className="property-category d-flex justify-content-between align-items-center">
                                <li className="user-info">
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="assets/img/profiles/avatar-03.jpg"
                                      className="img-fluid avatar"
                                      alt="User"
                                    />
                                  </Link>
                                  <div className="user-name">
                                    <h6>
                                      <Link to="#">Scott Gwin</Link>
                                    </h6>
                                    <p>Minipoliies</p>
                                  </div>
                                </li>
                                <li>
                                  <Link
                                    to={routes.rentDetails}
                                    className="btn-primary"
                                  >
                                    Book Now
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="product-custom">
                          <div className="profile-widget">
                            <div className="pro-img">
                              <Link to={routes.rentDetails} className="property-img">
                                <ImageWithBasePath
                                  className="img-fluid"
                                  alt="Property Image"
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
                                  <i className="fa-solid fa-star checked" />
                                </span>
                                <span className="rating-review">Excellent</span>
                              </div>
                              <h3 className="title">
                                <Link to={routes.rentDetails}>Lunaria Residence</Link>
                              </h3>
                              <p>
                                <MapPin size={15} className='me-1'/> 518-520 8th Ave,
                                New York, NY 10018, USA
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
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="assets/img/profiles/avatar-04.jpg"
                                      className="img-fluid avatar"
                                      alt="User"
                                    />
                                  </Link>
                                  <div className="user-name">
                                    <h6>
                                      <Link to="#">Burdette</Link>
                                    </h6>
                                    <p>Cambridge</p>
                                  </div>
                                </li>
                                <li>
                                  <Link
                                    to={routes.rentDetails}
                                    className="btn-primary"
                                  >
                                    Book Now
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        </Slider>
                      </div>
                    </div>
                    {/* /Rent Listings */}
                  </div>
                  {/* /Property */}
                  {/* Apartments */}
                  <div className="tab-pane fade" id="apartment">
                    {/* Rent Listings */}
                    <div className="agentpro-list">
                      <div className="agentview-slider owl-carousel feature-property-sec for-rent">
                      <Slider {...settings}>
                        <div className="product-custom">
                          <div className="profile-widget">
                            <div className="pro-img">
                              <Link to={routes.rentDetails} className="property-img">
                                <ImageWithBasePath
                                  className="img-fluid"
                                  alt="Property Image"
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
                                <Link to={routes.rentDetails}>Lunaria Residence</Link>
                              </h3>
                              <p>
                                <MapPin size={15} className='me-1'/> 518-520 8th Ave,
                                New York, NY 10018, USA
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
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="assets/img/profiles/avatar-04.jpg"
                                      className="img-fluid avatar"
                                      alt="User"
                                    />
                                  </Link>
                                  <div className="user-name">
                                    <h6>
                                      <Link to="#">Burdette</Link>
                                    </h6>
                                    <p>Cambridge</p>
                                  </div>
                                </li>
                                <li>
                                  <Link
                                    to={routes.rentDetails}
                                    className="btn-primary"
                                  >
                                    Book Now
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="product-custom">
                          <div className="profile-widget">
                            <div className="pro-img">
                              <Link to={routes.rentDetails} className="property-img">
                                <ImageWithBasePath
                                  className="img-fluid"
                                  alt="Property Image"
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
                                <Link to={routes.rentDetails}>Grand Mahaka</Link>
                              </h3>
                              <p>
                                <MapPin size={15} className='me-1'/> 470 Park Ave S,
                                New York, NY 10016
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
                                  1 Baths
                                </li>
                                <li>
                                  <ImageWithBasePath
                                    src="assets/img/icons/building-icon.svg"
                                    alt="building-icon"
                                  />
                                  1200 Sqft
                                </li>
                              </ul>
                              <ul className="property-category d-flex justify-content-between align-items-center">
                                <li className="user-info">
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="assets/img/profiles/avatar-02.jpg"
                                      className="img-fluid avatar"
                                      alt="User"
                                    />
                                  </Link>
                                  <div className="user-name">
                                    <h6>
                                      <Link to="#">Karen Maria</Link>
                                    </h6>
                                    <p>South Dokata</p>
                                  </div>
                                </li>
                                <li>
                                  <Link
                                    to={routes.rentDetails}
                                    className="btn-primary"
                                  >
                                    Book Now
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="product-custom">
                          <div className="profile-widget">
                            <div className="pro-img">
                              <Link to={routes.rentDetails} className="property-img">
                                <ImageWithBasePath
                                  className="img-fluid"
                                  alt="Property Image"
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
                              <Link to="#"onClick={() => toggleClass(6)}>
                                <div className={`favourite ${isClassAdded[6] ? 'favourite selected' : ''}`}>
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
                                <MapPin size={15} className='me-1'/> 82-25 Parsons
                                Blvd, Jamaica, NY 11432, USA
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
                                  2 Baths
                                </li>
                                <li>
                                  <ImageWithBasePath
                                    src="assets/img/icons/building-icon.svg"
                                    alt="building-icon"
                                  />
                                  1500 Sqft
                                </li>
                              </ul>
                              <ul className="property-category d-flex justify-content-between align-items-center">
                                <li className="user-info">
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="assets/img/profiles/avatar-03.jpg"
                                      className="img-fluid avatar"
                                      alt="User"
                                    />
                                  </Link>
                                  <div className="user-name">
                                    <h6>
                                      <Link to="#">Scott Gwin</Link>
                                    </h6>
                                    <p>Minipoliies</p>
                                  </div>
                                </li>
                                <li>
                                  <Link
                                    to={routes.rentDetails}
                                    className="btn-primary"
                                  >
                                    Book Now
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        </Slider>
                      </div>
                    </div>
                    {/* /Rent Listings */}
                  </div>
                  {/* /Apartments */}
                  {/* Condos */}
                  <div className="tab-pane fade" id="condos">
                    {/* Rent Listings */}
                    <div className="agentpro-list">
                      <div className="agentview-slider owl-carousel feature-property-sec for-rent">
                      <Slider {...settings}>
                        <div className="product-custom">
                          <div className="profile-widget">
                            <div className="pro-img">
                              <Link to={routes.rentDetails} className="property-img">
                                <ImageWithBasePath
                                  className="img-fluid"
                                  alt="Property Image"
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
                              <Link to="#"onClick={() => toggleClass(7)}>
                                <div className={`favourite ${isClassAdded[7] ? 'favourite selected' : ''}`}>
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
                                <MapPin size={15} className='me-1'/> 470 Park Ave S,
                                New York, NY 10016
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
                                  1 Baths
                                </li>
                                <li>
                                  <ImageWithBasePath
                                    src="assets/img/icons/building-icon.svg"
                                    alt="building-icon"
                                  />
                                  1200 Sqft
                                </li>
                              </ul>
                              <ul className="property-category d-flex justify-content-between align-items-center">
                                <li className="user-info">
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="assets/img/profiles/avatar-02.jpg"
                                      className="img-fluid avatar"
                                      alt="User"
                                    />
                                  </Link>
                                  <div className="user-name">
                                    <h6>
                                      <Link to="#">Karen Maria</Link>
                                    </h6>
                                    <p>South Dokata</p>
                                  </div>
                                </li>
                                <li>
                                  <Link
                                    to={routes.rentDetails}
                                    className="btn-primary"
                                  >
                                    Book Now
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="product-custom">
                          <div className="profile-widget">
                            <div className="pro-img">
                              <Link to={routes.rentDetails} className="property-img">
                                <ImageWithBasePath
                                  className="img-fluid"
                                  alt="Property Image"
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
                              <Link to="#"onClick={() => toggleClass(8)}>
                                <div className={`favourite ${isClassAdded[8] ? 'favourite selected' : ''}`}>
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
                                <Link to={routes.rentDetails}>Lunaria Residence</Link>
                              </h3>
                              <p>
                                <MapPin size={15} className='me-1'/> 518-520 8th Ave,
                                New York, NY 10018, USA
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
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="assets/img/profiles/avatar-04.jpg"
                                      className="img-fluid avatar"
                                      alt="User"
                                    />
                                  </Link>
                                  <div className="user-name">
                                    <h6>
                                      <Link to="#">Burdette</Link>
                                    </h6>
                                    <p>Cambridge</p>
                                  </div>
                                </li>
                                <li>
                                  <Link
                                    to={routes.rentDetails}
                                    className="btn-primary"
                                  >
                                    Book Now
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="product-custom">
                          <div className="profile-widget">
                            <div className="pro-img">
                              <Link to={routes.rentDetails} className="property-img">
                                <ImageWithBasePath
                                  className="img-fluid"
                                  alt="Property Image"
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
                              <Link to="#"onClick={() => toggleClass(9)}>
                                <div className={`favourite ${isClassAdded[9] ? 'favourite selected' : ''}`}>
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
                                <MapPin size={15} className='me-1'/> 82-25 Parsons
                                Blvd, Jamaica, NY 11432, USA
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
                                  2 Baths
                                </li>
                                <li>
                                  <ImageWithBasePath
                                    src="assets/img/icons/building-icon.svg"
                                    alt="building-icon"
                                  />
                                  1500 Sqft
                                </li>
                              </ul>
                              <ul className="property-category d-flex justify-content-between align-items-center">
                                <li className="user-info">
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="assets/img/profiles/avatar-03.jpg"
                                      className="img-fluid avatar"
                                      alt="User"
                                    />
                                  </Link>
                                  <div className="user-name">
                                    <h6>
                                      <Link to="#">Scott Gwin</Link>
                                    </h6>
                                    <p>Minipoliies</p>
                                  </div>
                                </li>
                                <li>
                                  <Link
                                    to={routes.rentDetails}
                                    className="btn-primary"
                                  >
                                    Book Now
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        </Slider>
                      </div>
                    </div>
                    {/* /Rent Listings */}
                  </div>
                  {/* /Condos */}
                  {/* Home */}
                  <div className="tab-pane fade" id="home">
                    {/* Rent Listings */}
                    <div className="agentpro-list">
                      <div className="agentview-slider owl-carousel feature-property-sec for-rent">
                      <Slider {...settings}>
                        <div className="product-custom">
                          <div className="profile-widget">
                            <div className="pro-img">
                              <Link to={routes.rentDetails} className="property-img">
                                <ImageWithBasePath
                                  className="img-fluid"
                                  alt="Property Image"
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
                              <Link to="#"onClick={() => toggleClass(10)}>
                                <div className={`favourite ${isClassAdded[10] ? 'favourite selected' : ''}`}>
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
                                <Link to={routes.rentDetails}>Lunaria Residence</Link>
                              </h3>
                              <p>
                                <MapPin size={15} className='me-1'/> 518-520 8th Ave,
                                New York, NY 10018, USA
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
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="assets/img/profiles/avatar-04.jpg"
                                      className="img-fluid avatar"
                                      alt="User"
                                    />
                                  </Link>
                                  <div className="user-name">
                                    <h6>
                                      <Link to="#">Burdette</Link>
                                    </h6>
                                    <p>Cambridge</p>
                                  </div>
                                </li>
                                <li>
                                  <Link
                                    to={routes.rentDetails}
                                    className="btn-primary"
                                  >
                                    Book Now
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="product-custom">
                          <div className="profile-widget">
                            <div className="pro-img">
                              <Link to={routes.rentDetails} className="property-img">
                                <ImageWithBasePath
                                  className="img-fluid"
                                  alt="Property Image"
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
                              <Link to="#"onClick={() => toggleClass(11)}>
                                <div className={`favourite ${isClassAdded[11] ? 'favourite selected' : ''}`}>
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
                                <MapPin size={15} className='me-1'/> 470 Park Ave S,
                                New York, NY 10016
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
                                  1 Baths
                                </li>
                                <li>
                                  <ImageWithBasePath
                                    src="assets/img/icons/building-icon.svg"
                                    alt="building-icon"
                                  />
                                  1200 Sqft
                                </li>
                              </ul>
                              <ul className="property-category d-flex justify-content-between align-items-center">
                                <li className="user-info">
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="assets/img/profiles/avatar-02.jpg"
                                      className="img-fluid avatar"
                                      alt="User"
                                    />
                                  </Link>
                                  <div className="user-name">
                                    <Link to="#">Karen Maria</Link>
                                    <p>South Dokata</p>
                                  </div>
                                </li>
                                <li>
                                  <Link
                                    to={routes.rentDetails}
                                    className="btn-primary"
                                  >
                                    Book Now
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="product-custom">
                          <div className="profile-widget">
                            <div className="pro-img">
                              <Link to={routes.rentDetails} className="property-img">
                                <ImageWithBasePath
                                  className="img-fluid"
                                  alt="Property Image"
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
                              <Link to="#"onClick={() => toggleClass(12)}>
                                <div className={`favourite ${isClassAdded[12] ? 'favourite selected' : ''}`}>
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
                                <MapPin size={15} className='me-1'/> 82-25 Parsons
                                Blvd, Jamaica, NY 11432, USA
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
                                  1 Baths
                                </li>
                                <li>
                                  <ImageWithBasePath
                                    src="assets/img/icons/building-icon.svg"
                                    alt="building-icon"
                                  />
                                  1500 Sqft
                                </li>
                              </ul>
                              <ul className="property-category d-flex justify-content-between align-items-center">
                                <li className="user-info">
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="assets/img/profiles/avatar-03.jpg"
                                      className="img-fluid avatar"
                                      alt="User"
                                    />
                                  </Link>
                                  <div className="user-name">
                                    <h6>
                                      <Link to="#">Scott Gwin</Link>
                                    </h6>
                                    <p>Minipoliies</p>
                                  </div>
                                </li>
                                <li>
                                  <Link
                                    to={routes.rentDetails}
                                    className="btn-primary"
                                  >
                                    Book Now
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        </Slider>
                      </div>
                    </div>
                    {/* /Rent Listings */}
                  </div>
                  {/* /Home */}
                </div>
                {/* Reviews */}
                <div className="collapse-card">
                  <h4 className="card-title">
                    <Link
                      className="collapsed"
                      data-bs-toggle="collapse"
                      to="#review"
                      aria-expanded="false"
                    >
                      Reviews (25)
                    </Link>
                  </h4>
                  <div
                    id="review"
                    className="card-collapse collapse show  collapse-view"
                  >
                    <div className="review-card">
                      <div className="customer-review">
                        <div className="customer-info">
                          <div className="customer-name">
                            <Link to="#">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-01.jpg"
                                alt="User"
                              />
                            </Link>
                            <div>
                              <h5>
                                <Link to="#">Johnson</Link>
                              </h5>
                              <p>02 Jan 2023</p>
                            </div>
                          </div>
                          <div className="rating">
                            <span className="rating-count">
                              <i className="fa-solid fa-star checked" />
                              <i className="fa-solid fa-star checked" />
                              <i className="fa-solid fa-star checked" />
                              <i className="fa-solid fa-star checked" />
                              <i className="fa-solid fa-star" />
                            </span>
                            <p className="rating-review">
                              <span>4.0</span>(20 Reviews)
                            </p>
                          </div>
                        </div>
                        <div className="review-para">
                          <p>
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.It was
                            popularised in the 1960s{" "}
                          </p>
                        </div>
                      </div>
                      <div className="customer-review">
                        <div className="customer-info">
                          <div className="customer-name">
                            <Link to="#">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-02.jpg"
                                alt="User"
                              />
                            </Link>
                            <div>
                              <h5>
                                <Link to="#">Casandra</Link>
                              </h5>
                              <p>01 Jan 2023</p>
                            </div>
                          </div>
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
                        </div>
                        <div className="review-para">
                          <p>
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.It was
                            popularised in the 1960s with the elease of Letraset
                            sheets containing Lorem Ipsum passages, and more
                            recently with desktop publishing software like Aldus
                            Page Maker including versions.
                          </p>
                        </div>
                      </div>
                      <div className="property-review">
                        <h5 className="card-title">Property Reviews</h5>
                        <form action="#">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="review-form">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Your Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="review-form">
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder="Your Email"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="review-form">
                                <textarea
                                  rows={5}
                                  placeholder="Enter Your Comments"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="review-form submit-btn">
                                <button type="submit" className="btn-primary">
                                  Submit Review
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Reviews */}
              </div>
            </div>
            {/* Sidebar */}
            <div className="col-lg-4 theiaStickySidebar">
              <div className='stickybar'>
                <div className="right-sidebar">
                  {/* Enquire property */}
                  <div className="sidebar-card">
                    <form action="#">
                      <div className="sidebar-card-title">
                        <h5>Enquire Property</h5>
                      </div>
                      <div className="review-form">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="review-form">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                        />
                      </div>
                      <div className="review-form">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Phone Number"
                        />
                      </div>
                      <div className="review-form">
                        
                      <Select options={propertCategory1} defaultValue={propertCategory1[0]} className="select" styles={customStyles} />

                      </div>
                      <div className="review-form">
                        <textarea
                          rows={5}
                          placeholder="Yes, I'm Interested"
                          defaultValue={""}
                        />
                      </div>
                      <div className="review-form submit-btn">
                        <button type="submit" className="btn-primary">
                          Send Email
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* /Enquire property */}
                  {/* Contact */}
                  <div className="sidebar-card">
                    <div className="sidebar-card-title">
                      <h5>Contact</h5>
                    </div>
                    <ul className="list-details con-list">
                      <li>
                        <span>
                          <i className="bx bx-buildings" />
                          Office
                        </span>{" "}
                        +1 321 456 9874
                      </li>
                      <li>
                        <span>
                          <i className="bx bx-mobile-alt" />
                          Mobile
                        </span>{" "}
                        +1 897 654 1258
                      </li>
                      <li>
                        <span>
                          <i className="bx bx-phone-call" />
                          Fax
                        </span>{" "}
                        4616561461
                      </li>
                      <li>
                        <span>
                          <i className="bx bx-globe" />
                          Website
                        </span>{" "}
                        example.com
                      </li>
                      <li>
                        <span>
                          <i className="bx bx-phone-call" />
                          Address
                        </span>{" "}
                        7698 Creekwood Blvd
                      </li>
                      <li>
                        <span>
                          <i className="bx bx-mail-send" />
                          Email
                        </span>{" "}
                        richard@example.com
                      </li>
                    </ul>
                  </div>
                  {/* /Contact */}
                  {/* Share Property */}
                  <div className="sidebar-card">
                    <div className="sidebar-card-title">
                      <h5>Share Property</h5>
                    </div>
                    <div className="social-links">
                      <ul className="sidebar-social-links">
                        <li>
                          <Link to="#" className="fb-icon">
                            <i className="fa-brands fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="ins-icon">
                            <i className="fa-brands fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-behance" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="twitter-icon">
                            <i className="fa-brands fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="ins-icon">
                            <i className="fa-brands fa-pinterest-p" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fa-brands fa-linkedin" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Share Property */}
                </div>
              </div>
            </div>
            {/* Sidebar */}
          </div>
        </div>
      </section>
      {/* /Detail View Section */}
    </>

  )
}

export default AgentDetails
