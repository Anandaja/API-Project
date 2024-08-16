import React, { useEffect, useRef, useState } from 'react'
import BreadCrumb from '../../../../core/common/breadCrumb'
import ImageWithBasePath from '../../../../core/img'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import ModalVideo from 'react-modal-video'
import { Heart, MapPin, Share2 } from 'react-feather'
import { all_routes } from '../../../router/all_routes'

const RentDetails = () => {
  const routes = all_routes
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
      setNav1(sliderRef1.current);
      setNav2(sliderRef2.current);
  }, []);
  const settings1 = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: nav2 || undefined, // Link to the second slider
    ref: (slider: any) => (sliderRef1.current = slider), // Assign the slider ref
};

const settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: nav1 || undefined, // Link to the first slider
    ref: (slider: any) => (sliderRef2.current = slider), // Assign the slider ref
};
const [isOpen, setIsOpen] = useState(false);

const openModal = () => {
    setIsOpen(true);
};

const closeModal = () => {
    setIsOpen(false);
};
const [isClassAdded, setIsClassAdded] = useState([false]);
const toggleClass = (index: any) => {
  const updatedClasses = [...isClassAdded];
  updatedClasses[index] = !updatedClasses[index];
  setIsClassAdded(updatedClasses);
};
const settings = {
  dots: false,
  arrow:true,
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
  return (
    <div>
        <>
  {/* Breadcrumb */}
  <BreadCrumb title="Rent Details" pageTitle="Home" />
  {/* Breadcrumb */}
  {/* Detail View Section */}
  <section className="buy-detailview">
    <div className="container">
      {/* Details */}
      <div className="row align-items-center page-head">
        <div className="col-lg-8">
          <div className="buy-btn">
            <span className="buy">Buy</span>
            <span className="appartment">Appartment</span>
          </div>
          <div className="page-title">
            <h3>
              Modern Apartment in the City Center
              <span>
                <ImageWithBasePath src="assets/img/icons/location-icon.svg" alt='img' />
              </span>
            </h3>
            <p>
              <MapPin size={15} className='me-1'/> 318-330 S Oakley Blvd, Chicago,
              IL 60612, USA
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="latest-update">
            <h5>Last Updated on : 15 Jan 2023</h5>
            <p>$4,000</p>
            <ul className="other-pages">
              <li>
                <Link to="#">
                 
                  <Share2 size={15} className='me-1'/>
                  Share
                </Link>
              </li>
              <li>
                <Link to={routes.compare}>
                  <i className="feather-git-pull-request" />
                  Add to Compare
                </Link>
              </li>
              <li>
                <Link to="#">
                  <Heart size={15} className='me-1'/>
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Details */}
      <div className="row">
        <div className="col-lg-8">
          {/* Slider */}
          <div className="buy-details-col">
                                <div className="rental-card">
                                    <div className="slider rental-slider">
                                        <Slider {...settings1}>

                                            <div className="product-img">
                                                <ImageWithBasePath src="assets/img/rent/rent-detail-01.jpg" alt="Slider" />
                                            </div>
                                            <div className="product-img">
                                                <ImageWithBasePath src="assets/img/rent/rent-detail-02.jpg" alt="Slider" />
                                            </div>
                                            <div className="product-img">
                                                <ImageWithBasePath src="assets/img/rent/rent-detail-03.jpg" alt="Slider" />
                                            </div>
                                            <div className="product-img">
                                                <ImageWithBasePath src="assets/img/rent/rent-detail-04.jpg" alt="Slider" />
                                            </div>
                                            <div className="product-img">
                                                <ImageWithBasePath src="assets/img/rent/rent-detail-05.jpg" alt="Slider" />
                                            </div>
                                        </Slider>
                                    </div>
                                    <div className="slider slider-nav-thumbnails">
                                        <Slider {...settings2}>
                                            <div>
                                                <ImageWithBasePath
                                                    src="assets/img/rent/rent-detail-01.jpg"
                                                    alt='img'
                                                />
                                            </div>
                                            <div>
                                                <ImageWithBasePath
                                                    src="assets/img/rent/rent-detail-02.jpg"
                                                    alt='img'
                                                />
                                            </div>
                                            <div>
                                                <ImageWithBasePath
                                                    src="assets/img/rent/rent-detail-03.jpg"
                                                    alt='img'
                                                />
                                            </div>
                                            <div>
                                                <ImageWithBasePath
                                                    src="assets/img/rent/rent-detail-04.jpg"
                                                    alt='img'
                                                />
                                            </div>
                                            <div>
                                                <ImageWithBasePath
                                                    src="assets/img/rent/rent-detail-05.jpg"
                                                    alt='img'
                                                />
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
          {/* /Slider */}
          {/* Overview */}
          <div className="collapse-card">
            <h4 className="card-title">
              <Link
                className="collapsed"
                data-bs-toggle="collapse"
                to="#overview"
                aria-expanded="false"
              >
                Overview
              </Link>
            </h4>
            <div id="overview" className="card-collapse collapse show">
              <ul className="property-overview  collapse-view">
                <li>
                  <ImageWithBasePath src="assets/img/icons/bed-icon.svg" alt='img' />
                  <p>4 Beds</p>
                </li>
                <li>
                  <ImageWithBasePath src="assets/img/icons/bath-icon.svg" alt='img' />
                  <p>4 Baths</p>
                </li>
                <li>
                  <ImageWithBasePath src="assets/img/icons/building-icon.svg" alt='img' />
                  <p>35000 Sqft</p>
                </li>
                <li>
                  <ImageWithBasePath src="assets/img/icons/garage-icon.svg" alt='img' />
                  <p>2 Garages</p>
                </li>
                <li>
                  <ImageWithBasePath src="assets/img/icons/calender-icon.svg" alt='img' />
                  <p>Year Built: 2005</p>
                </li>
              </ul>
            </div>
          </div>
          {/* /Overview */}
          {/* Overview */}
          <div className="collapse-card">
            <h4 className="card-title">
              <Link
                className="collapsed"
                data-bs-toggle="collapse"
                to="#about"
                aria-expanded="false"
              >
                Description
              </Link>
            </h4>
            <div id="about" className="card-collapse collapse show">
              <div className="about-agent collapse-view">
                <p>
                  {" "}
                  Good road frontage on a paved county road with utilities make
                  it an amazing setting for yourdream country getaway! If you
                  like views, you must see this property!,{" "}
                </p>
                <p></p>
                <p>
                  This property is mostly wooded and sits high on a hilltop
                  overlooking the Mohawk River Valley.Located right in the heart
                  of Upstate NYs Amish farm Country, this land is certified
                  organic makingit extremely rare! Good road frontage on a paved
                  county road with utilities make it an amazingsetting for your
                  dream country getaway! If you like views, you must see this
                  property!This propertyis mostly wooded and sits high on a
                  hilltop overlooking the Mohawk River Valley. Located right
                  inthe heart of Upstate NYs Amish farm Country, this land is
                  certified organic making it extremelyrare! Good road frontage
                  on a paved county road with utilities make it an amazing
                  setting for yourdream country getaway! If you like views, you
                  must see this property!
                </p>
              </div>
            </div>
          </div>
          {/* /Overview */}
          {/* Property Address */}
          <div className="collapse-card">
            <h4 className="card-title">
              <Link
                className="collapsed"
                data-bs-toggle="collapse"
                to="#address"
                aria-expanded="false"
              >
                Property Address
              </Link>
            </h4>
            <div
              id="address"
              className="card-collapse collapse show  collapse-view"
            >
              <ul className="property-address">
                <li>
                  Address : <span> Ferris Park</span>
                </li>
                <li>
                  City : <span> Jersey City </span>
                </li>
                <li>
                  State/County : <span> New Jersey State</span>
                </li>
                <li>
                  Country : <span> United States</span>
                </li>
                <li>
                  Zip : <span> 07305</span>
                </li>
                <li>
                  Area : <span> Greenville</span>
                </li>
              </ul>
            </div>
          </div>
          {/* /Property Address */}
          {/* Property Details */}
          <div className="collapse-card">
            <h4 className="card-title">
              <Link
                className="collapsed"
                data-bs-toggle="collapse"
                to="#details"
                aria-expanded="false"
              >
                Property Details
              </Link>
            </h4>
            <div
              id="details"
              className="card-collapse collapse show  collapse-view"
            >
              <div className="row">
                <div className="col-md-4">
                  <ul className="property-details">
                    <li>
                      Property Id : <span> 22972</span>
                    </li>
                    <li>
                      Price : <span> $ 860,000 </span>
                    </li>
                    <li>
                      Price Info: <span> $ 1,098 /sq ft</span>
                    </li>
                    <li>
                      Property Size : <span> 190 ft2</span>
                    </li>
                    <li>
                      Property Lot Size : <span> 1,200 ft2</span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="property-details">
                    <li>
                      Rooms : <span> 10</span>
                    </li>
                    <li>
                      Bedrooms : <span> 5</span>
                    </li>
                    <li>
                      Bathrooms : <span> 6</span>
                    </li>
                    <li>
                      Custom Id : <span> 68</span>
                    </li>
                    <li>
                      Garages : <span> 2</span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="property-details">
                    <li>
                      Year Built : <span> 2005</span>
                    </li>
                    <li>
                      Garage Size : <span> 2 cars </span>
                    </li>
                    <li>
                      Available From : <span> 2023-11-18</span>
                    </li>
                    <li>
                      Structure Type : <span> Brick</span>
                    </li>
                    <li>
                      Floors No : <span> 3</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /Property Details */}
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
            <div
              id="amenities"
              className="card-collapse collapse show  collapse-view"
            >
              <div className="row">
                <div className="col-md-4">
                  <ul className="amenities-list">
                    <li>
                      <ImageWithBasePath
                        src="assets/img/icons/amenities-icon-1.svg"
                        alt='img'
                      />
                      Air Conditioning
                    </li>
                    <li>
                      <ImageWithBasePath
                        src="assets/img/icons/amenities-icon-2.svg"
                        alt='img'
                      />
                      Swimming Pools
                    </li>
                    <li>
                      <ImageWithBasePath
                        src="assets/img/icons/amenities-icon-3.svg"
                        alt='img'
                      />
                      Sporting Facilities
                    </li>
                    <li>
                      <ImageWithBasePath
                        src="assets/img/icons/amenities-icon-4.svg"
                        alt='img'
                      />
                      Gym
                    </li>
                    <li>
                      <ImageWithBasePath
                        src="assets/img/icons/amenities-icon-5.svg"
                        alt='img'
                      />
                      Clubhouse
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="amenities-list">
                    <li>
                      <ImageWithBasePath
                        src="assets/img/icons/amenities-icon-6.svg"
                        alt='img'
                      />
                      Landscaped Gardens
                    </li>
                    <li>
                      <ImageWithBasePath
                        src="assets/img/icons/amenities-icon-7.svg"
                        alt='img'
                      />
                      Wide-Open Spaces
                    </li>
                    <li>
                      <ImageWithBasePath
                        src="assets/img/icons/amenities-icon-8.svg"
                        alt='img'
                      />
                      Parks{" "}
                    </li>
                    <li>
                      <ImageWithBasePath
                        src="assets/img/icons/amenities-icon-9.svg"
                        alt='img'
                      />
                      Package Lockers
                    </li>
                    <li>
                      <ImageWithBasePath
                        src="assets/img/icons/amenities-icon-10.svg"
                        alt='img'
                      />
                      Spa
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="amenities-list">
                    <li>
                      <ImageWithBasePath
                        src="assets/img/icons/amenities-icon-11.svg"
                        alt='img'
                      />
                      Surveillance Cameras
                    </li>
                    <li>
                      <ImageWithBasePath
                        src="assets/img/icons/amenities-icon-12.svg"
                        alt='img'
                      />
                      Billiards Table
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /Amenities */}
          {/* Video */}
          <div className="collapse-card">
            <h4 className="card-title">
              <Link
                className="collapsed"
                data-bs-toggle="collapse"
                to="#video"
                aria-expanded="false"
              >
                Video
              </Link>
            </h4>
            <div
              id="video"
              className="card-collapse collapse show  collapse-view"
            >
              <div className="sample-video">
                <ImageWithBasePath src="assets/img/video-img.jpg" alt='img' />
                <Link
                  className="play-icon"
                  to="#"
                                            onClick={openModal}
                >
                  <i className="bx bx-play" />
                </Link>
                <ModalVideo
                                            channel="youtube"
                                            isOpen={isOpen}
                                            videoId="AWovHEZcpQU" // Replace with your actual YouTube video ID
                                            onClose={closeModal}
                                            allowFullScreen={true}
                                            ratio="16:9"
                                        // className="video-modal" // Custom class for the modal
                                        />
              </div>
            </div>
          </div>
          {/* /Video */}
          {/* Map */}
          <div className="collapse-card">
            <h4 className="card-title">
              <Link
                className="collapsed"
                data-bs-toggle="collapse"
                to="#map"
                aria-expanded="false"
              >
                Map
              </Link>
            </h4>
            <div
              id="map"
              className="card-collapse collapse show  collapse-view"
            >
              <div className="map">
                <iframe
                title='Google Map'
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509170.989457427!2d-12380081967108484!3d37.192957227641294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v166911581381!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  
                  referrerPolicy="no-referrer-when-downgrade"
                  className="contact-map"
                />
              </div>
            </div>
          </div>
          {/* /Map */}
          {/* Reviews */}
          <div className="collapse-card sidebar-card">
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
                      Letraset sheets containing LoremIpsum passages, and more
                      recently with desktop publishing software like Aldus
                      PageMakerincluding versions of Lorem Ipsum.It was
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
                      Letraset sheets containing LoremIpsum passages, and more
                      recently with desktop publishing software like Aldus
                      PageMakerincluding versions of Lorem Ipsum.It was
                      popularised in the 1960s with the elease ofLetraset sheets
                      containing Lorem Ipsum passages, and more recently with
                      desktop publishingsoftware like Aldus Page Maker including
                      versions.
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
        {/* Sidebar */}
        <div className="col-lg-4 theiaStickySidebar">
          <div className='stickybar'>
          <div className="right-sidebar">
            <Link to={routes.rentalOrder} className="btn btn-primary prop-book">
              <i className="bx bx-calendar" />
              Book Property
            </Link>
            {/* Enquiry */}
            <div className="sidebar-card">
              <div className="sidebar-card-title">
                <h5>Request Info</h5>
              </div>
              <div className="user-active">
                <div className="user-img">
                  <Link to="#">
                    <ImageWithBasePath
                      className="avatar"
                      src="assets/img/profiles/avatar-03.jpg"
                      alt='img'
                    />
                  </Link>
                  <span className="avatar-online" />
                </div>
                <div className="user-name">
                  <h4>
                    <Link to="#">John Collins</Link>
                  </h4>
                  <p> Company Agent</p>
                </div>
              </div>
              <form action="#">
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
              <ul className="connect-us">
                <li>
                  <Link to="#">
                    <i className="feather-phone" />
                    Call Us
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa-brands fa-whatsapp" />
                    Whatsapp
                  </Link>
                </li>
              </ul>
            </div>
            {/* /Enquiry */}
            {/* Listing Owner Details */}
            <div className="sidebar-card">
              <div className="sidebar-card-title">
                <h5>Listing Owner Details</h5>
              </div>
              <div className="user-active bg-white p-0">
                <div className="user-img">
                  <Link to="#">
                    <ImageWithBasePath
                      className="avatar"
                      src="assets/img/profiles/avatar-03.jpg"
                      alt='img'
                    />
                  </Link>
                </div>
                <div className="user-name">
                  <h4>
                    <Link to="#">John Collins</Link>
                  </h4>
                  <div className="rating">
                    <span className="rating-count d-inline-flex">
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
                      <i className="fa-solid fa-star checked" />
                    </span>
                    <span className="rating-review">5.0 (20 Reviews)</span>
                  </div>
                </div>
              </div>
              <ul className="list-details">
                <li>
                  No of Listings <span>05</span>
                </li>
                <li>
                  No of Bookings<span>225</span>
                </li>
                <li>
                  Memeber on<span>15 Jan 2023</span>
                </li>
                <li>
                  Verification<span>Verified</span>
                </li>
              </ul>
            </div>
            {/* /Listing Owner Details */}
            {/* Share Property */}
            <div className="sidebar-card">
              <div className="sidebar-card-title">
                <h5>Share Property</h5>
              </div>
              <div className="social-links">
                <ul className="sidebar-social-links">
                  <li>
                    <Link to="#" className="fb-icon">
                      <i className="fa-brands fa-facebook-f hi-icon" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="ins-icon">
                      <i className="fa-brands fa-instagram hi-icon" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-behance hi-icon" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="twitter-icon">
                      <i className="fa-brands fa-twitter hi-icon" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="ins-icon">
                      <i className="fa-brands fa-pinterest-p hi-icon" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa-brands fa-linkedin hi-icon" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* /Share Property */}
          </div>
          </div>
        </div>
        {/* /Sidebar */}
      </div>
      {/* Similar Listings */}
      <div className="similar-list">
        <div className="section-heading">
          <h2>Similar Listings</h2>
          <div className="sec-line">
            <span className="sec-line1" />
            <span className="sec-line2" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmodtempor incididunt
          </p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="feature-property-sec for-rent p-0">
              <div className="rentfeature-slider owl-carousel">
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
          </div>
        </div>
      </div>
      {/* /Similar Listings */}
    </div>
  </section>
  {/* /Detail View Section */}
</>

    </div>
  )
}

export default RentDetails