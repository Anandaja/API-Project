import React, { useEffect, useState } from 'react'
import ImageWithBasePath from '../../core/img'
import "aos/dist/aos.css";
import AOS from "aos";
import Slider from 'react-slick'
import Select from 'react-select';
import { customStyles, propertype } from '../../core/common/select';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { MapPin, Search } from 'react-feather';
import { all_routes } from '../router/all_routes';


const Home = () => {
  const routes = all_routes
  const [isClassAdded, setIsClassAdded] = useState([false]);
  const toggleClass = (index: any) => {
    const updatedClasses = [...isClassAdded];
    updatedClasses[index] = !updatedClasses[index];
    setIsClassAdded(updatedClasses);
  };
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
  const blog = {
    dots: false,
    arrow: true,
    nav: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
  const partner = {
    dots: false,
    infinite: true,
    nav: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const feature = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const sales = {
    dots: false,
    infinite: true,
    nav: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const city = {
    dots: false,
    nav: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const property = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
    

      {/* Home Banner */}
      <section className="banner-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="banner-content" data-aos="fade-down">
                <h1>
                  Find Your Best Dream House for{" "}
                  <span>Rental, Buy &amp; Sell...</span>
                </h1>
                <p>
                  Properties for buy / rent in in your location. We have more than
                  3000+ listings for you to choose
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-search" data-aos="fade-down">
                <div className="banner-tab">
                  <ul className="nav nav-tabs" id="bannerTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <Link
                        className="nav-link active"
                        id="buy-property"
                        data-bs-toggle="tab"
                        to="#buy_property"
                        role="tab"
                        aria-controls="buy_property"
                        aria-selected="true"
                      >
                        <ImageWithBasePath src="assets/img/icons/buy-icon.svg" alt="icon" /> Buy a
                        Property
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link
                        className="nav-link"
                        id="rent-property"
                        data-bs-toggle="tab"
                        to="#rent_property"
                        role="tab"
                        aria-controls="rent_property"
                        aria-selected="false"
                      >
                        <ImageWithBasePath src="assets/img/icons/rent-icon.svg" alt="icon" /> Rent
                        a Property
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="bannerTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="buy_property"
                    role="tabpanel"
                    aria-labelledby="buy-property"
                  >
                    <div className="banner-tab-property">
                      <form action="#">
                        <div className="banner-property-info">
                          <div className="banner-property-grid">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Keyword"
                            />
                          </div>
                          <div className="banner-property-grid">
                            <Select options={propertype} defaultValue={propertype[0]} className="select" styles={customStyles} />
                          </div>
                          <div className="banner-property-grid">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Address"
                            />
                          </div>
                          <div className="banner-property-grid">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Min Price"
                            />
                          </div>
                          <div className="banner-property-grid">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Max Price"
                            />
                          </div>
                          <div className="banner-property-grid">
                            <Link
                              to={routes.buyPropertyGrid}
                              className="btn-primary"
                            >
                              <span>
                                
                                <Search size={15} className='me-1'/>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="rent_property"
                    role="tabpanel"
                    aria-labelledby="rent-property"
                  >
                    <div className="banner-tab-property">
                      <form action="#">
                        <div className="banner-property-info">
                          <div className="banner-property-grid">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Keyword"
                            />
                          </div>
                          <div className="banner-property-grid">
                            <Select options={propertype} defaultValue={propertype[0]} className="select" styles={customStyles} />
                          </div>
                          <div className="banner-property-grid">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter Address"
                            />
                          </div>
                          <div className="banner-property-grid">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Min Price"
                            />
                          </div>
                          <div className="banner-property-grid">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Max Price"
                            />
                          </div>
                          <div className="banner-property-grid">
                            <Link
                              to={routes.rentGrid}
                              className="btn-primary"
                            >
                              <span>
                              <Search size={20} className='me-1'/>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Home Banner */}
      {/* How It Work */}
      <section className="howit-work">
        <div className="container">
          <div className="section-heading text-center">
            <h2>How It Works</h2>
            <div className="sec-line">
              <span className="sec-line1" />
              <span className="sec-line2" />
            </div>
            <p>Follow these 3 steps to book your place</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="howit-work-card"
                data-aos="fade-down"
                data-aos-duration={1200}
                data-aos-delay={100}
              >
                <div className="work-card-icon">
                  <span>
                    <ImageWithBasePath src="assets/img/icons/work-icon-1.svg" alt="icon" />
                  </span>
                </div>
                <h4>01. Search for Location</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mollis et sem sed sollicitudin. Donec non odio…
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="howit-work-card"
                data-aos="fade-down"
                data-aos-duration={1200}
                data-aos-delay={200}
              >
                <div className="work-card-icon">
                  <span className="bg-red">
                    <ImageWithBasePath src="assets/img/icons/work-icon-2.svg" alt="icon" />
                  </span>
                </div>
                <h4>02. Select Property Type</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mollis et sem sed sollicitudin. Donec non odio…
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="howit-work-card"
                data-aos="fade-down"
                data-aos-duration={1200}
                data-aos-delay={300}
              >
                <div className="work-card-icon">
                  <span className="bg-green">
                    <ImageWithBasePath src="assets/img/icons/work-icon-3.svg" alt="icon" />
                  </span>
                </div>
                <h4>03. Book Your Property</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mollis et sem sed sollicitudin. Donec non odio…
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /How It Work */}
      {/* Property Type */}
      <section className="property-type-sec">
        <div className="section-shape-imgs">
          <ImageWithBasePath
            src="assets/img/shapes/property-sec-bg-1.png"
            className="rectangle-left"
            alt="icon"
          />
          <ImageWithBasePath
            src="assets/img/shapes/property-sec-bg-2.png"
            className="rectangle-right"
            alt="icon"
          />
          <ImageWithBasePath
            src="assets/img/icons/red-circle.svg"
            className="bg-09"
            alt="Image"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div
                className="section-heading"
                data-aos="fade-down"
                data-aos-duration={1000}
              >
                <h2>Explore by Property Type</h2>
                <div className="sec-line">
                  <span className="sec-line1" />
                  <span className="sec-line2" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mollis et sem sed{" "}
                </p>
              </div>
              <div className="owl-navigation">
                <div className="owl-nav mynav1 nav-control" />
              </div>
            </div>
            <div className="col-md-8">

              <div className="property-type-slider">
                <Slider {...property} className='explore-slider'>
                  <div
                    className="property-card"
                    data-aos="fade-down"
                    data-aos-duration={1000}
                  >
                    <div className="property-img">
                      <ImageWithBasePath src="assets/img/icons/property-icon-1.svg" alt="icon" />
                    </div>
                    <div className="property-name">
                      <h4>Houses</h4>
                      <p>30 Properties</p>
                    </div>
                  </div>
                  <div
                    className="property-card"
                    data-aos="fade-down"
                    data-aos-duration={1000}
                  >
                    <div className="property-img">
                      <ImageWithBasePath src="assets/img/icons/property-icon-2.svg" alt="icon" />
                    </div>
                    <div className="property-name">
                      <h4>Offices</h4>
                      <p>25 Properties</p>
                    </div>
                  </div>
                  <div
                    className="property-card"
                    data-aos="fade-down"
                    data-aos-duration={1000}
                  >
                    <div className="property-img">
                      <ImageWithBasePath src="assets/img/icons/property-icon-3.svg" alt="icon" />
                    </div>
                    <div className="property-name">
                      <h4>Villas</h4>
                      <p>40 Properties</p>
                    </div>
                  </div>
                  <div
                    className="property-card"
                    data-aos="fade-down"
                    data-aos-duration={1000}
                  >
                    <div className="property-img">
                      <ImageWithBasePath src="assets/img/icons/property-icon-4.svg" alt="icon" />
                    </div>
                    <div className="property-name">
                      <h4>Apartment</h4>
                      <p>35 Properties</p>
                    </div>
                  </div>
                  <div
                    className="property-card"
                    data-aos="fade-down"
                    data-aos-duration={1000}
                  >
                    <div className="property-img">
                      <ImageWithBasePath src="assets/img/icons/property-icon-3.svg" alt="icon" />
                    </div>
                    <div className="property-name">
                      <h4>Villas</h4>
                      <p>40 Properties</p>
                    </div>
                  </div>
                  <div
                    className="property-card"
                    data-aos="fade-down"
                    data-aos-duration={1000}
                  >
                    <div className="property-img">
                      <ImageWithBasePath src="assets/img/icons/property-icon-1.svg" alt="icon" />
                    </div>
                    <div className="property-name">
                      <h4>Houses</h4>
                      <p>30 Properties</p>
                    </div>
                  </div>
                  <div
                    className="property-card"
                    data-aos="fade-down"
                    data-aos-duration={1000}
                  >
                    <div className="property-img">
                      <ImageWithBasePath src="assets/img/icons/property-icon-4.svg" alt="icon" />
                    </div>
                    <div className="property-name">
                      <h4>Apartment</h4>
                      <p>35 Properties</p>
                    </div>
                  </div>
                </Slider>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* /Property Type */}
      {/* Feature Properties For Sale*/}
      <section className="feature-property-sec">
        <div className="container">
          <div className="section-heading text-center">
            <h2>Featured Properties for Sales</h2>
            <div className="sec-line">
              <span className="sec-line1" />
              <span className="sec-line2" />
            </div>
            <p>Hand-Picked selection of quality places</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="feature-slider ">
                <Slider {...sales} className="service-slider">
                  <div className="slider-col">
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration={1000}
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <Link to={routes.rentDetails} className="property-img">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt="Property Image"
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
                            <Link to="#" onClick={() => toggleClass(1)}>
                              <div className={`favourite ${isClassAdded[1] ? 'favourite selected' : ''}`}>
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
                            <Link to={routes.rentDetails}>Place perfect for nature</Link>
                          </h3>
                          <p>
                            <span>
                              <MapPin size={15} className='me-1' />
                            </span>
                            318-S Oakley Blvd, Chicago, IL 60612, USA
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
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration={1000}
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <Link to={routes.rentDetails} className="property-img">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt="Property Image"
                              src="assets/img/product/product-2.jpg"
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
                          <div className="product-amount">
                            <span>$78,000</span>
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
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                            </span>
                            <p className="rating-review">
                              <span>3.0</span>(10 Reviews)
                            </p>
                          </div>
                          <h3 className="title">
                            <Link to={routes.rentDetails}>Beautiful Condo Room</Link>
                          </h3>
                          <p>
                            <MapPin size={15} className='me-1' />
                            470 Park Ave S, New York, NY 10016
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
                              15000 Sqft
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
                  <div className="slider-col">
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration={1000}
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <Link to={routes.rentDetails} className="property-img">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt="Property Image"
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
                              <span>4.0</span>(28 Reviews)
                            </p>
                          </div>
                          <h3 className="title">
                            <Link to={routes.rentDetails}>Summer house</Link>
                          </h3>
                          <p>
                            <MapPin size={15} className='me-1' />
                            82-25 Parsons Blvd, Jamaica, NY 11432, USA
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
                              1 Bath
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
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration={1000}
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <Link to="rent-detail-viewhtml" className="property-img">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt="Property Image"
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
                            <Link to="#" onClick={() => toggleClass(4)}>
                              <div className={`favourite ${isClassAdded[4] ? 'favourite selected' : ''}`}>
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
                              <i className="fa-solid fa-star checked" />
                            </span>
                            <p className="rating-review">
                              <span>5.0</span>(15 Reviews)
                            </p>
                          </div>
                          <h3 className="title">
                            <Link to={routes.rentDetails}>Minimalist and bright flat</Link>
                          </h3>
                          <p>
                            <MapPin size={15} className='me-1' />
                            518-520 8th Ave, New York, NY 10018, USA
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
                              1 Baths
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
                  <div className="slider-col">
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration={1000}
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <Link to={routes.rentDetails} className="property-img">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt="Property Image"
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
                            <Link to="#" onClick={() => toggleClass(5)}>
                              <div className={`favourite ${isClassAdded[5] ? 'favourite selected' : ''}`}>
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
                              <span>5.0</span>(20 Reviews)
                            </p>
                          </div>
                          <h3 className="title">
                            <Link to={routes.rentDetails}>Two storey modern flat</Link>
                          </h3>
                          <p>
                            <MapPin size={15} className='me-1' />
                            470 Park Ave S, New York, NY 10016
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
                              31000 Sqft
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
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration={1000}
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <Link to={routes.rentDetails} className="property-img">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt="Property Image"
                              src="assets/img/product/product-2.jpg"
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
                            <Link to="#" onClick={() => toggleClass(6)}>
                              <div className={`favourite ${isClassAdded[6] ? 'favourite selected' : ''}`} >
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
                              <span>4.0</span>(12 Reviews)
                            </p>
                          </div>
                          <h3 className="title">
                            <Link to={routes.rentDetails}>Modern apartment</Link>
                          </h3>
                          <p>
                            <MapPin size={15} className='me-1' />
                            122 N Morgan St, Chicago, IL 60607, USA
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
                  <div className="slider-col">
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration={1000}
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <Link to={routes.rentDetails} className="property-img">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt="Property Image"
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
                            <Link to="#" onClick={() => toggleClass(6)}>
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
                            <span className="rating-review">5.0 (60 Reviews)</span>
                          </div>
                          <h3 className="title">
                            <Link to={routes.rentDetails}>Minimalist and bright flat</Link>
                          </h3>
                          <p>
                            <MapPin size={15} className='me-1' />
                            518-520 8th Ave, New York, NY 10018, USA
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
                              2 Baths
                            </li>
                            <li>
                              <ImageWithBasePath
                                src="assets/img/icons/building-icon.svg"
                                alt="building-icon"
                              />
                              23000 Sqft
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
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration={1000}
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <Link to={routes.rentDetails} className="property-img">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt="Property Image"
                              src="assets/img/product/product-3.jpg"
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
                            <Link to="#" onClick={() => toggleClass(6)}>
                              <div className={`favourite ${isClassAdded[6] ? 'favourite selected' : ''}`}>
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
                            <span className="rating-review">5.0 (50 Reviews)</span>
                          </div>
                          <h3 className="title">
                            <Link to={routes.rentDetails}>Place perfect for nature</Link>
                          </h3>
                          <p>
                            <MapPin size={15} className='me-1' />
                            318-S Oakley Blvd, Chicago, IL 60612, USA
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
                              4 Baths
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
                </Slider>
              </div>
              <div
                className="view-property-btn d-flex justify-content-center"
                data-aos="fade-down"
                data-aos-duration={1000}
              >
                <Link to={routes.rentGrid} className="btn-primary">
                  View All Properties
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-imgs">
          <ImageWithBasePath src="assets/img/bg/price-bg.png" className="bg-01" alt="icon" />
          <ImageWithBasePath
            src="assets/img/icons/blue-circle.svg"
            className="bg-02"
            alt="icon"
          />
          <ImageWithBasePath src="assets/img/icons/red-circle.svg" className="bg-03" alt="icon" />
        </div>
      </section>
      {/* /Feature Properties For Sale */}
      {/* Cities List */}
      <section className="cities-list-sec">
        <div className="container">
          <div className="section-heading">
            <h2>Cities With Listing</h2>
            <div className="sec-line">
              <span className="sec-line1" />
              <span className="sec-line2" />
            </div>
            <p>Destinations we love the most</p>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="city-card-slider">
                <Slider {...city} className='city-listing'>
                  <div
                    className="city-first-card"
                    data-aos="fade-down"
                    data-aos-duration={2000}
                  >
                    <div className="city-list">
                      <div className="city-img">
                        <ImageWithBasePath src="assets/img/city/city-1.jpg" alt="City" />
                      </div>
                      <div className="city-name">
                        <h5>New York</h5>
                        <p>300 Properties</p>
                      </div>
                      <div className="arrow-overlay">
                        <Link to={routes.rentGrid}>
                          <i className="fa-solid fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                    <div className="city-list">
                      <div className="city-img">
                        <ImageWithBasePath src="assets/img/city/city-2.jpg" alt="City" />
                      </div>
                      <div className="city-name">
                        <h5>Singapore</h5>
                        <p>400 Properties</p>
                      </div>
                      <div className="arrow-overlay">
                        <Link to={routes.rentGrid}>
                          <i className="fa-solid fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="city-card-two"
                    data-aos="fade-down"
                    data-aos-duration={2000}
                  >
                    <div className="city-list">
                      <div className="city-img">
                        <ImageWithBasePath src="assets/img/city/city-3.jpg" alt="City" />
                      </div>
                      <div className="city-name">
                        <h5>Thailand</h5>
                        <p>200 Properties</p>
                      </div>
                      <div className="arrow-overlay">
                        <Link to={routes.rentGrid}>
                          <i className="fa-solid fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                    <div className="city-list">
                      <div className="city-img">
                        <ImageWithBasePath src="assets/img/city/city-4.jpg" alt="City" />
                      </div>
                      <div className="city-name">
                        <h5>Argentina</h5>
                        <p>740 Properties</p>
                      </div>
                      <div className="arrow-overlay">
                        <Link to={routes.rentGrid}>
                          <i className="fa-solid fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="city-card-three"
                    data-aos="fade-down"
                    data-aos-duration={2000}
                  >
                    <div className="city-list">
                      <div className="city-img">
                        <ImageWithBasePath src="assets/img/city/city-5.jpg" alt="City" />
                      </div>
                      <div className="city-name">
                        <h5>United Kingdom</h5>
                        <p>1450 Properties</p>
                      </div>
                      <div className="arrow-overlay">
                        <Link to={routes.rentGrid}>
                          <i className="fa-solid fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                    <div className="city-list">
                      <div className="city-img">
                        <ImageWithBasePath src="assets/img/city/city-1.jpg" alt="City" />
                      </div>
                      <div className="city-name">
                        <h5>United Arab Emirates</h5>
                        <p>100 Properties</p>
                      </div>
                      <div className="arrow-overlay">
                        <Link to={routes.rentGrid}>
                          <i className="fa-solid fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="city-first-card"
                    data-aos="fade-down"
                    data-aos-duration={2000}
                  >
                    <div className="city-list">
                      <div className="city-img">
                        <ImageWithBasePath src="assets/img/city/city-1.jpg" alt="City" />
                      </div>
                      <div className="city-name">
                        <h5>USA</h5>
                        <p>320 Properties</p>
                      </div>
                      <div className="arrow-overlay">
                        <Link to={routes.rentGrid}>
                          <i className="fa-solid fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                    <div className="city-list">
                      <div className="city-img">
                        <ImageWithBasePath src="assets/img/city/city-2.jpg" alt="City" />
                      </div>
                      <div className="city-name">
                        <h5>Singapore</h5>
                        <p>500 Properties</p>
                      </div>
                      <div className="arrow-overlay">
                        <Link to={routes.rentGrid}>
                          <i className="fa-solid fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Cities List */}
      {/* Feature Property For Rent */}
      <section className="feature-property-sec for-rent">
        <div className="container">
          <div className="section-heading text-center">
            <h2>Featured Properties for Rent</h2>
            <div className="sec-line">
              <span className="sec-line1" />
              <span className="sec-line2" />
            </div>
            <p>Hand-picked selection of quality places</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="feature-slider">
                <Slider {...feature} className='service-slider'>
                  <div className="slider-col">
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration={2000}
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <Link to={routes.rentDetails} className="property-img">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt="Property Image"
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
                          <Link to="#" onClick={() => toggleClass(8)}>
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
                            <Link to={routes.rentDetails}>Beautiful Condo Room</Link>
                          </h3>
                          <p>
                            <MapPin size={15} className='me-1' /> 318-S Oakley Blvd,
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
                          <ul className="property-category d-flex justify-content-between align-items-center">
                            <li className="user-info">
                              <Link to={routes.rentDetails}>
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-01.jpg"
                                  className="img-fluid avatar"
                                  alt="User"
                                />
                              </Link>
                              <div className="user-name">
                                <h6>
                                  <Link to={routes.rentDetails}>Marc Silva</Link>
                                </h6>
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
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration={2000}
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
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
                          <Link to="#" onClick={() => toggleClass(9)}>
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
                            <Link to={routes.rentDetails}>Grand Mahaka</Link>
                          </h3>
                          <p>
                            <MapPin size={15} className='me-1' /> 470 Park Ave S, New
                            York, NY 10016
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
                                  <Link to={routes.rentDetails}>Karen Maria</Link>
                                </h6>
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
                  <div className="slider-col">
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration={2000}
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
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
                          <Link to="#" onClick={() => toggleClass(11)}>
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
                            <Link to={routes.rentDetails}>Royal Apartment</Link>
                          </h3>
                          <p>
                            <MapPin size={15} className='me-1' /> 82-25 Parsons Blvd,
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
                              12000 Sqft
                            </li>
                          </ul>
                          <ul className="property-category d-flex justify-content-between align-items-center">
                            <li className="user-info">
                              <Link to={routes.rentDetails}>
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-03.jpg"
                                  className="img-fluid avatar"
                                  alt="User"
                                />
                              </Link>
                              <div className="user-name">
                                <h6>
                                  <Link to={routes.rentDetails}>Scott Gwin</Link>
                                </h6>
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
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration={2000}
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
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
                          <Link to="#" onClick={() => toggleClass(12)}>
                            <div className={`favourite ${isClassAdded[12] ? 'favourite selected' : ''}`} >
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
                            <MapPin size={15} className='me-1' /> 518-520 8th Ave, New
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
                              2 Baths
                            </li>
                            <li>
                              <ImageWithBasePath
                                src="assets/img/icons/building-icon.svg"
                                alt="building-icon"
                              />
                              23000 Sqft
                            </li>
                          </ul>
                          <ul className="property-category d-flex justify-content-between align-items-center">
                            <li className="user-info">
                              <Link to={routes.rentDetails}>
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-04.jpg"
                                  className="img-fluid avatar"
                                  alt="User"
                                />
                              </Link>
                              <div className="user-name">
                                <h6>
                                  <Link to={routes.rentDetails}>Burdette</Link>
                                </h6>
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
                  <div className="slider-col">
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration={2000}
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <Link to={routes.rentDetails} className="property-img">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt="Property Image"
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
                          <Link to="#" onClick={() => toggleClass(13)}>
                            <div className={`favourite ${isClassAdded[13] ? 'favourite selected' : ''}`}>
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
                            <MapPin size={15} className='me-1' /> 470 Park Ave S, New
                            York, NY 10016
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
                              3 Baths
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
                              <Link to={routes.rentDetails}>
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-05.jpg"
                                  className="img-fluid avatar"
                                  alt="User"
                                />
                              </Link>
                              <div className="user-name">
                                <h6>
                                  <Link to={routes.rentDetails}>Kell Robinson</Link>
                                </h6>
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
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration={2000}
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
                          <Link to={routes.rentDetails} className="property-img">
                            <ImageWithBasePath
                              className="img-fluid"
                              alt="Property Image"
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
                          <Link to="#" onClick={() => toggleClass(14)}>
                            <div className={`favourite ${isClassAdded[14] ? 'favourite selected' : ''}`}>
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
                            <MapPin size={15} className='me-1' /> 122 N Morgan St,
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
                              3 Baths
                            </li>
                            <li>
                              <ImageWithBasePath
                                src="assets/img/icons/building-icon.svg"
                                alt="building-icon"
                              />
                              25000 Sqft
                            </li>
                          </ul>
                          <ul className="property-category d-flex justify-content-between align-items-center">
                            <li className="user-info">
                              <Link to={routes.rentDetails}>
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-07.jpg"
                                  className="img-fluid avatar"
                                  alt="User"
                                />
                              </Link>
                              <div className="user-name">
                                <h6>
                                  <Link to={routes.rentDetails}>Pittman</Link>
                                </h6>
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
                  <div className="slider-col">
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration={2000}
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
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
                          <Link to="#" onClick={() => toggleClass(16)}>
                            <div className={`favourite ${isClassAdded[16] ? 'favourite selected' : ''}`}>
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
                            <Link to={routes.rentDetails}>Minimalist and bright flat</Link>
                          </h3>
                          <p>
                            <MapPin size={15} className='me-1' /> 518-520 8th Ave, New
                            York, NY 10018, USA
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
                              18000 Sqft
                            </li>
                          </ul>
                          <ul className="property-category d-flex justify-content-between align-items-center">
                            <li className="user-info">
                              <Link to={routes.rentDetails}>
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-10.jpg"
                                  className="img-fluid avatar"
                                  alt="User"
                                />
                              </Link>
                              <div className="user-name">
                                <h6>
                                  <Link to={routes.rentDetails}>John Doe</Link>
                                </h6>
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
                    <div
                      className="product-custom"
                      data-aos="fade-down"
                      data-aos-duration={2000}
                    >
                      <div className="profile-widget">
                        <div className="doc-img">
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
                          <Link to="#">
                            <div className="favourite">
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
                            <Link to={routes.rentDetails}>Place perfect for nature</Link>
                          </h3>
                          <p>
                            <MapPin size={15} className='me-1' /> 318-S Oakley Blvd,
                            Chicago, IL 60612, USA
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
                          <ul className="property-category d-flex justify-content-between align-items-center">
                            <li className="user-info">
                              <Link to={routes.rentDetails}>
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-12.jpg"
                                  className="img-fluid avatar"
                                  alt="User"
                                />
                              </Link>
                              <div className="user-name">
                                <h6>
                                  <Link to={routes.rentDetails}>Richard</Link>
                                </h6>
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
                </Slider>
              </div>
              <div
                className="view-property-btn d-flex justify-content-center"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <Link to={routes.rentGrid} className="btn-primary">
                  View All Properties
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-imgs">
          <ImageWithBasePath src="assets/img/bg/price-bg.png" className="bg-04" alt="Image" />
        </div>
      </section>
      {/* /Feature Property For Rent */}
      {/* Couter */}
      <section className="counter-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div
                className="counter-box flex-fill"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <div className="counter-icon">
                  <ImageWithBasePath src="assets/img/icons/counter-icon-1.svg" alt="icon" />
                </div>
                <div className="counter-value">
                  <h3 className="dash-count">
                    <span className="counter-up"> <CountUp start={0} end={50} duration={7} /></span>K
                  </h3>
                  <h5>Listings Added </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div
                className="counter-box flex-fill"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <div className="counter-icon">
                  <ImageWithBasePath src="assets/img/icons/counter-icon-2.svg" alt="icon" />
                </div>
                <div className="counter-value">
                  <h3 className="dash-count">
                    <span className="counter-up" > <CountUp start={0} end={3000} duration={7} /></span>+
                  </h3>
                  <h5>Agents Listed </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div
                className="counter-box flex-fill"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <div className="counter-icon">
                  <ImageWithBasePath src="assets/img/icons/counter-icon-3.svg" alt="icon" />
                </div>
                <div className="counter-value">
                  <h3 className="dash-count">
                    <span className="counter-up"><CountUp start={0} end={2000} duration={7} /></span>+
                  </h3>
                  <h5>Sales Completed </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div
                className="counter-box flex-fill"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <div className="counter-icon">
                  <ImageWithBasePath src="assets/img/icons/counter-icon-4.svg" alt="icon" />
                </div>
                <div className="counter-value">
                  <h3 className="dash-count">
                    <span className="counter-up"> <CountUp start={0} end={5000} duration={7} /></span>+
                  </h3>
                  <h5>Users</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Couter */}
      {/* Main Property */}
      <section className="main-property-sec">
        <div className="container">
          <div className="main-property-details">
            <div className="row justify-content-center">
              {/* Buy Property */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <div className="single-property-card">
                  <div className="img-card">
                    <Link to={routes.buyPropertyGrid}>
                      <ImageWithBasePath
                        src="assets/img/city/property-img-1.jpg"
                        alt="Property Image"
                      />
                    </Link>
                  </div>
                  <div className="buy-property">
                    <h4>
                      <Link to={routes.buyPropertyGrid}>Buy a Property</Link>
                    </h4>
                    <Link to={routes.buyPropertyGrid} className="arrow buy-arrow">
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* /Buy Property */}
              {/* Sell Property */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <div className="single-property-card">
                  <div className="img-card">
                    <Link to={routes.rentGrid}>
                      <ImageWithBasePath
                        src="assets/img/city/property-img-2.jpg"
                        alt="Property Image"
                      />
                    </Link>
                  </div>
                  <div className="buy-property">
                    <h4>
                      <Link to="rent-property-gridhtml">Sell a Property</Link>
                    </h4>
                    <Link to={routes.rentGrid} className="arrow sell-arrow">
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* /Sell Property */}
              {/* Rent Property */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <div className="single-property-card">
                  <div className="img-card">
                    <Link to={routes.rentGrid}>
                      <ImageWithBasePath
                        src="assets/img/city/property-img-3.jpg"
                        alt="Property Image"
                      />
                    </Link>
                  </div>
                  <div className="buy-property">
                    <h4>
                      <Link to={routes.rentGrid}>Rent a Property</Link>
                    </h4>
                    <Link to={routes.rentGrid} className="arrow rent-arrow">
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* /Rent Property */}
            </div>
            <div className="bg-imgs">
              <ImageWithBasePath src="assets/img/bg/prop-bg.png" className="bg-10" alt="icon" />
            </div>
          </div>
          {/* Partners */}
          <div className="partners-sec">
            <div className="section-heading text-center">
              <h2>Hundreds of Partners Around the World</h2>
              <div className="sec-line">
                <span className="sec-line1" />
                <span className="sec-line2" />
              </div>
              <p>
                {" "}
                Every day, we build trust through communication, transparency, and
                results.
              </p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="partners-slider owl-carousel">
                  <Slider {...partner}>
                    <div className="partner-icon">
                      <ImageWithBasePath src="assets/img/icons/partner-icon-1.svg" alt="Partners" />
                    </div>
                    <div className="partner-icon">
                      <ImageWithBasePath src="assets/img/icons/partner-icon-2.svg" alt="Partners" />
                    </div>
                    <div className="partner-icon">
                      <ImageWithBasePath src="assets/img/icons/partner-icon-3.svg" alt="Partners" />
                    </div>
                    <div className="partner-icon">
                      <ImageWithBasePath src="assets/img/icons/partner-icon-4.svg" alt="Partners" />
                    </div>
                    <div className="partner-icon">
                      <ImageWithBasePath src="assets/img/icons/partner-icon-5.svg" alt="Partners" />
                    </div>
                    <div className="partner-icon">
                      <ImageWithBasePath src="assets/img/icons/partner-icon-6.svg" alt="Partners" />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          {/* /Partners */}
        </div>
        <div className="bg-imgs">
          <ImageWithBasePath
            src="assets/img/icons/blue-circle.svg"
            className="bg-08"
            alt="icon"
          />
        </div>
      </section>
      {/* /Main Property */}
      {/* Testimonial */}
      <section className="testimonial-sec">
        <div className="container">
          <div className="section-heading">
            <h2>Testimonials</h2>
            <div className="sec-line">
              <span className="sec-line1" />
              <span className="sec-line2" />
            </div>
            <p>What our happy client says</p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="testimonial-slider">
                <Slider {...settings} className="test-slider">
                  <div
                    className="testimonial-card"
                    data-aos="fade-down"
                    data-aos-duration={2000}
                  >
                    <div className="user-icon">
                      <Link to="#">
                        <ImageWithBasePath src="assets/img/profiles/avatar-01.jpg" alt="User" />
                      </Link>
                    </div>
                    <p>
                      Omnis velit quia. Perspiciatis et cupiditate. Voluptatum beatae
                      asperiores dolor magnam fuga. Sed fuga est harum quo nesciunt
                      sint. Optio veniam...Omnis velit quia. Perspiciatis et
                      cupiditate. Voluptatum beatae asperiores dolor magnam fuga. Sed
                      fuga est harum quo nesciunt sint. Optio veniam...
                    </p>
                    <h4>
                      <Link to="#">Horace Cole</Link>
                    </h4>
                    <div className="rating">
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                    </div>
                  </div>
                  <div
                    className="testimonial-card"
                    data-aos="fade-down"
                    data-aos-duration={2000}
                  >
                    <div className="user-icon">
                      <Link to="#">
                        <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="User" />
                      </Link>
                    </div>
                    <p>
                      Omnis velit quia. Perspiciatis et cupiditate. Voluptatum beatae
                      asperiores dolor magnam fuga. Sed fuga est harum quo nesciunt
                      sint. Optio veniam...Omnis velit quia. Perspiciatis et
                      cupiditate. Voluptatum beatae asperiores dolor magnam fuga. Sed
                      fuga est harum quo nesciunt sint. Optio veniam...
                    </p>
                    <h4>
                      <Link to="#">Karen Maria</Link>
                    </h4>
                    <div className="rating">
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                    </div>
                  </div>
                  <div
                    className="testimonial-card"
                    data-aos="fade-down"
                    data-aos-duration={2000}
                  >
                    <div className="user-icon">
                      <Link to="#">
                        <ImageWithBasePath src="assets/img/profiles/avatar-03.jpg" alt="User" />
                      </Link>
                    </div>
                    <p>
                      Omnis velit quia. Perspiciatis et cupiditate. Voluptatum beatae
                      asperiores dolor magnam fuga. Sed fuga est harum quo nesciunt
                      sint. Optio veniam...Omnis velit quia. Perspiciatis et
                      cupiditate. Voluptatum beatae asperiores dolor magnam fuga. Sed
                      fuga est harum quo nesciunt sint. Optio veniam...
                    </p>
                    <h4>
                      <Link to="#">Jack Nitzsche</Link>
                    </h4>
                    <div className="rating">
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                    </div>
                  </div>
                  <div
                    className="testimonial-card"
                    data-aos="fade-down"
                    data-aos-duration={2000}
                  >
                    <div className="user-icon">
                      <Link to="#">
                        <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="User" />
                      </Link>
                    </div>
                    <p>
                      Omnis velit quia. Perspiciatis et cupiditate. Voluptatum beatae
                      asperiores dolor magnam fuga. Sed fuga est harum quo nesciunt
                      sint. Optio veniam...Omnis velit quia. Perspiciatis et
                      cupiditate. Voluptatum beatae asperiores dolor magnam fuga. Sed
                      fuga est harum quo nesciunt sint. Optio veniam...
                    </p>
                    <h4>
                      <Link to="#">Sofia Retz</Link>
                    </h4>
                    <div className="rating">
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                    </div>
                  </div>
                  <div
                    className="testimonial-card"
                    data-aos="fade-down"
                    data-aos-duration={2000}
                  >
                    <div className="user-icon">
                      <Link to="#">
                        <ImageWithBasePath src="assets/img/profiles/avatar-05.jpg" alt="User" />
                      </Link>
                    </div>
                    <p>
                      Omnis velit quia. Perspiciatis et cupiditate. Voluptatum beatae
                      asperiores dolor magnam fuga. Sed fuga est harum quo nesciunt
                      sint. Optio veniam...Omnis velit quia. Perspiciatis et
                      cupiditate. Voluptatum beatae asperiores dolor magnam fuga. Sed
                      fuga est harum quo nesciunt sint. Optio veniam...
                    </p>
                    <h4>
                      <Link to="#">John Doe</Link>
                    </h4>
                    <div className="rating">
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                      <span>
                        <i className="fa-solid fa-star" />
                      </span>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Testimonial */}
      {/* Pricing */}
      <section className="price-section">
        <div className="container">
          <div className="pricing-tab">
            <div className="section-heading">
              <h2>Pricing &amp; Subscriptions</h2>
              <div className="sec-line">
                <span className="sec-line1" />
                <span className="sec-line2" />
              </div>
              <p>Checkout our package, choose your package wisely</p>
            </div>
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#monthly-price"
                  type="button"
                  role="tab"
                  aria-controls="monthly-price"
                  aria-selected="true"
                >
                  Monthly
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#yearly-price"
                  type="button"
                  role="tab"
                  aria-controls="yearly-price"
                  aria-selected="false"
                >
                  Yearly
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent">
            {/* Monthly Price */}
            <div
              className="tab-pane fade active show"
              id="monthly-price"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="row justify-content-center">
                {/* Price Item */}
                <div className="col-lg-4 col-md-6">
                  <div
                    className="price-card aos"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                  >
                    <div className="price-title">
                      <h3>Standard</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                        leo.
                      </p>
                    </div>
                    <div className="price-features">
                      <h5>Key Features</h5>
                      <ul>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          10 Listing Per Login
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          100+ Users
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Enquiry On Listing
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          24 Hrs Support
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Custom Review
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Impact Reporting
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Onboarding &amp; Account
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          API Access
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Transaction Tracking
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Branding
                        </li>
                      </ul>
                    </div>
                    <div className="price-btn">
                      <Link to={routes.login} className="btn-primary">
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /Price Item */}
                {/* Price Item */}
                <div className="col-lg-4 col-md-6">
                  <div
                    className="price-card"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration={1000}
                  >
                    <div className="price-sticker">
                      <ImageWithBasePath
                        src="assets/img/icons/pricing-icon.svg"
                        alt="price-sticker"
                      />
                    </div>
                    <div className="price-title">
                      <h3>Professional</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                        leo.
                      </p>
                    </div>
                    <div className="price-features professional">
                      <h5>Key Features</h5>
                      <ul>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          20 Listing Per Login
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          100+ Users
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Enquiry On Listing
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          24 Hrs Support
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Custom Review
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Impact Reporting
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Onboarding &amp; Account
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          API Access
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Transaction Tracking
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Branding
                        </li>
                      </ul>
                    </div>
                    <div className="price-btn">
                      <Link to={routes.login} className="btn-primary">
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /Price Item */}
                {/* Price Item */}
                <div className="col-lg-4 col-md-6">
                  <div
                    className="price-card"
                    data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration={2000}
                  >
                    <div className="price-title">
                      <h3>Enterprise</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                        leo.
                      </p>
                    </div>
                    <div className="price-features enterprise">
                      <h5>Key Features</h5>
                      <ul>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          30 Listing Per Login
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          100+ Users
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Enquiry On Listing
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          24 Hrs Support
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Custom Review
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Impact Reporting
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Onboarding &amp; Account
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          API Access
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Transaction Tracking
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Branding
                        </li>
                      </ul>
                    </div>
                    <div className="price-btn">
                      <Link to={routes.login} className="btn-primary">
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /Price Item */}
              </div>
            </div>
            {/* /Monthly Price */}
            {/* Yearly Price */}
            <div
              className="tab-pane fade"
              id="yearly-price"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="row justify-content-center">
                {/* Price Item */}
                <div className="col-lg-4 col-md-6">
                  <div className="price-card">
                    <div className="price-title">
                      <h3>Standard</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                        leo.
                      </p>
                    </div>
                    <div className="price-features">
                      <h5>Key Features</h5>
                      <ul>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          50 Listing per login
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          150+ Users
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Enquiry on listing
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          24 hrs Support
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Custom Review
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Impact Reporting
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Onboarding &amp; Account
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          API Access
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Transaction tracking
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Branding
                        </li>
                      </ul>
                    </div>
                    <div className="price-btn">
                      <Link to={routes.login} className="btn-primary">
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Price Item */}
                <div className="col-lg-4 col-md-6">
                  <div className="price-card">
                    <div className="price-title">
                      <h3>Professional</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                        leo.
                      </p>
                    </div>
                    <div className="price-features professional">
                      <h5>Key Features</h5>
                      <ul>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          80 Listing per login
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          200+ Users
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Enquiry on listing
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          24 hrs Support
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Custom Review
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Impact Reporting
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Onboarding &amp; Account
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          API Access
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Transaction tracking
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Branding
                        </li>
                      </ul>
                    </div>
                    <div className="price-btn">
                      <Link to={routes.login} className="btn-primary">
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Price Item */}
                <div className="col-lg-4 col-md-6">
                  <div className="price-card">
                    <div className="price-title">
                      <h3>Enterprise</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                        leo.
                      </p>
                    </div>
                    <div className="price-features enterprise">
                      <h5>Key Features</h5>
                      <ul>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          70 Listing per login
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          300+ Users
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Enquiry on listing
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          24 hrs Support
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Custom Review
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Impact Reporting
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Onboarding &amp; Account
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          API Access
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Transaction tracking
                        </li>
                        <li>
                          <span>
                            <i className="fa-regular fa-square-check" />
                          </span>
                          Branding
                        </li>
                      </ul>
                    </div>
                    <div className="price-btn">
                      <Link to={routes.login} className="btn-primary">
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /Price Item */}
              </div>
            </div>
            {/* /Yearly Price */}
          </div>
        </div>
        <div className="bg-imgs">
          <ImageWithBasePath src="assets/img/bg/price-bg.png" className="bg-05" alt="icon" />
        </div>
      </section>
      {/* /Pricing */}
      {/* Faq */}
      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="faq-img">
                <ImageWithBasePath src="assets/img/faq-img.jpg" alt="icon" />
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="section-heading"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <h2>Frequently Asked Questions</h2>
                <div className="sec-line">
                  <span className="sec-line1" />
                  <span className="sec-line2" />
                </div>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt
                </p>
              </div>
              <div
                className="faq-card"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <h4 className="faq-title">
                  <Link
                    className="collapsed"
                    data-bs-toggle="collapse"
                    to="#faqone"
                    aria-expanded="false"
                  >
                    1. What are the costs to buy a house?
                  </Link>
                </h4>
                <div id="faqone" className="card-collapse collapse">
                  <div className="faq-info">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="faq-card"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <h4 className="faq-title">
                  <Link
                    className="collapsed"
                    data-bs-toggle="collapse"
                    to="#faqtwo"
                    aria-expanded="false"
                  >
                    2. What are the steps to sell a house?
                  </Link>
                </h4>
                <div id="faqtwo" className="card-collapse collapse">
                  <div className="faq-info">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="faq-card"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <h4 className="faq-title">
                  <Link
                    className=""
                    data-bs-toggle="collapse"
                    to="#faqthree"
                    aria-expanded="false"
                  >
                    3. Do you have loan consultants?
                  </Link>
                </h4>
                <div id="faqthree" className="card-collapse collapse show">
                  <div className="faq-info">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="faq-card"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <h4 className="faq-title">
                  <Link
                    className="collapsed"
                    data-bs-toggle="collapse"
                    to="#faqfour"
                    aria-expanded="false"
                  >
                    4. When will the project be completed?
                  </Link>
                </h4>
                <div id="faqfour" className="card-collapse collapse">
                  <div className="faq-info">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="faq-card"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <h4 className="faq-title">
                  <Link
                    className="collapsed"
                    data-bs-toggle="collapse"
                    to="#faqfive"
                    aria-expanded="false"
                  >
                    5.What are the steps to rent a house?
                  </Link>
                </h4>
                <div id="faqfive" className="card-collapse collapse">
                  <div className="faq-info">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Faq */}
      {/* Agent Register */}
      <section className="agent-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div
                className="section-heading"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <h2>Become a Real Estate Agent</h2>
                <div className="sec-line">
                  <span className="sec-line1" />
                  <span className="sec-line2" />
                </div>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="register-btn"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <Link to={routes.register} className="btn-primary">
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-imgs">
          <ImageWithBasePath
            src="assets/img/icons/blue-circle.svg"
            className="bg-06"
            alt="icon"
          />
          <ImageWithBasePath src="assets/img/icons/red-circle.svg" className="bg-07" alt="icon" />
        </div>
      </section>
      {/* /Agent Register */}
      {/* Latest Blog */}
      <section className="latest-blog-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="section-heading text-center">
                <h2>Latest Blog</h2>
                <div className="sec-line">
                  <span className="sec-line1" />
                  <span className="sec-line2" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmodtempor incididunt
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="blog-slider">
                <Slider {...blog} className="home-blog">
                  {/* Blog */}
                  <div
                    className="blog-card"
                    data-aos="fade-down"
                    data-aos-duration={2000}
                  >
                    <div className="blog-img">
                      <Link to={routes.blogDetails}>
                        <ImageWithBasePath src="assets/img/blog/blog-1.jpg" alt="Blog Image" />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <div className="blog-property">
                        <span>Property</span>
                      </div>
                      <div className="blog-title">
                        <h3>
                          <Link to={routes.blogDetails}>
                            How to achieve financial independence
                          </Link>
                        </h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          available.
                        </p>
                      </div>
                      <ul className="property-category d-flex justify-content-between align-items-center">
                        <li className="user-info">
                          <Link to="#">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-01.jpg"
                              className="img-fluid avatar"
                              alt="User"
                            />
                          </Link>
                          <div className="user-name">
                            <h6>
                              <Link to="#">Doe John</Link>
                            </h6>
                            <p>Posted on : 15 Jan 2023</p>
                          </div>
                        </li>
                        <li>
                          <Link to={routes.blogDetails}>
                            <span>
                              <i className="fa-solid fa-arrow-right" />
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Blog */}
                  {/* Blog */}
                  <div
                    className="blog-card"
                    data-aos="fade-down"
                    data-aos-duration={2000}
                  >
                    <div className="blog-img">
                      <Link to={routes.blogDetails}>
                        <ImageWithBasePath src="assets/img/blog/blog-2.jpg" alt="Blog Image" />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <div className="blog-property">
                        <span>Advantages</span>
                      </div>
                      <div className="blog-title">
                        <h3>
                          <Link to={routes.blogDetails}>
                            The most popular cities for homebuyers
                          </Link>
                        </h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          available.
                        </p>
                      </div>
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
                              <Link to="#">John</Link>
                            </h6>
                            <p>Posted on : 15 Jan 2023</p>
                          </div>
                        </li>
                        <li>
                          <Link to={routes.blogDetails}>
                            <span>
                              <i className="fa-solid fa-arrow-right" />
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Blog */}
                  {/* Blog */}
                  <div
                    className="blog-card"
                    data-aos="fade-down"
                    data-aos-duration={2000}
                  >
                    <div className="blog-img">
                      <Link to={routes.blogDetails}>
                        <ImageWithBasePath src="assets/img/blog/blog-3.jpg" alt="Blog Image" />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <div className="blog-property">
                        <span>Finanace</span>
                      </div>
                      <div className="blog-title">
                        <h3>
                          <Link to={routes.blogDetails}>
                            Learn how real estate really shapes our future
                          </Link>
                        </h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          available.
                        </p>
                      </div>
                      <ul className="property-category d-flex justify-content-between align-items-center">
                        <li className="user-info">
                          <Link to="#">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-05.jpg"
                              className="img-fluid avatar"
                              alt="User"
                            />
                          </Link>
                          <div className="user-name">
                            <h6>
                              <Link to="#">Eric Krok</Link>
                            </h6>
                            <p>Posted on : 15 Jan 2023</p>
                          </div>
                        </li>
                        <li>
                          <Link to={routes.blogDetails}>
                            <span>
                              <i className="fa-solid fa-arrow-right" />
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Blog */}
                  {/* Blog */}
                  <div
                    className="blog-card"
                    data-aos="fade-down"
                    data-aos-duration={2000}
                  >
                    <div className="blog-img">
                      <Link to={routes.blogDetails}>
                        <ImageWithBasePath src="assets/img/blog/blog-2.jpg" alt="Blog Image" />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <div className="blog-property">
                        <span>Property</span>
                      </div>
                      <div className="blog-title">
                        <h3>
                          <Link to={routes.blogDetails}>
                            The most popular cities for homebuyers
                          </Link>
                        </h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          available.
                        </p>
                      </div>
                      <ul className="property-category d-flex justify-content-between align-items-center">
                        <li className="user-info">
                          <Link to="#">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-07.jpg"
                              className="img-fluid avatar"
                              alt="User"
                            />
                          </Link>
                          <div className="user-name">
                            <h6>
                              <Link to="#">Francis</Link>
                            </h6>
                            <p>Posted on : 12 May 2023</p>
                          </div>
                        </li>
                        <li>
                          <Link to={routes.blogDetails}>
                            <span>
                              <i className="fa-solid fa-arrow-right" />
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Blog */}
                  {/* Blog */}
                  <div
                    className="blog-card"
                    data-aos="fade-down"
                    data-aos-duration={2000}
                  >
                    <div className="blog-img">
                      <Link to={routes.blogDetails}>
                        <ImageWithBasePath src="assets/img/blog/blog-1.jpg" alt="Blog Image" />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <div className="blog-property">
                        <span>Property</span>
                      </div>
                      <div className="blog-title">
                        <h3>
                          <Link to={routes.blogDetails}>
                            How to achieve financial independence
                          </Link>
                        </h3>
                        <p>
                          There are many variations of passages of lorem ipsum
                          available.
                        </p>
                      </div>
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
                              <Link to="#">Rafael</Link>
                            </h6>
                            <p>Posted on : 13 Jan 2023</p>
                          </div>
                        </li>
                        <li>
                          <Link to={routes.blogDetails}>
                            <span>
                              <i className="fa-solid fa-arrow-right" />
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Blog */}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Latest Blog */}
      {/* News Letter */}
      <section className="news-letter-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div
                className="news-heading"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <h2>Sign Up for Our Newsletter</h2>
                <p>
                  Lorem ipsum dolor sit amet, consecte tur cing elit. Suspe ndisse
                  suscipit sagittis
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="email-form"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <form action="#">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email Address"
                  />
                  <button className="btn-primary">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* News Letter */}
    </>

  )
}

export default Home
