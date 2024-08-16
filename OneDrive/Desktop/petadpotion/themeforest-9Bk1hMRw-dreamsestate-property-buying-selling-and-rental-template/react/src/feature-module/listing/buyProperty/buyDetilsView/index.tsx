import React, { useEffect, useRef, useState } from 'react'
import ImageWithBasePath from '../../../../core/img'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import ModalVideo from 'react-modal-video';
import { Info, MapPin, Video } from 'react-feather';
import { customStyles, sortByTime } from '../../../../core/common/select';
import Select from 'react-select';
import { all_routes } from '../../../router/all_routes';

const BuyDetilsView = () => {
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
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
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
    const settingsListing = {
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
    return (
        <>
            {/* Breadcrumb */}
            <div className="breadcrumb">
                <div className="container">
                    <div className="bread-crumb-head">
                        <div className="breadcrumb-title">
                            <h2>Buy Details - Single Schedule a Visit</h2>
                        </div>
                        <div className="breadcrumb-list">
                            <ul>
                                <li>
                                    <Link to={routes.home}>Home </Link>
                                </li>
                                <li>Buy Details - Single Schedule a Visit</li>
                            </ul>
                        </div>
                    </div>
                    <div className="breadcrumb-border-img">
                        <ImageWithBasePath src="assets/img/bg/line-bg.png" alt="Line Image" />
                    </div>
                </div>
            </div>
            {/* Breadcrumb */}
            {/* Detail View Section */}
            <section className="buy-detailview">
                <div className="container">
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
                            {/* Slider */}
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
                                            <ImageWithBasePath src="assets/img/icons/bed-icon.svg" alt="Image" />
                                            <p>4 Beds</p>
                                        </li>
                                        <li>
                                            <ImageWithBasePath src="assets/img/icons/bath-icon.svg" alt="Image" />
                                            <p>4 Baths</p>
                                        </li>
                                        <li>
                                            <ImageWithBasePath src="assets/img/icons/building-icon.svg" alt="Image" />
                                            <p>3500 Sqft</p>
                                        </li>
                                        <li>
                                            <ImageWithBasePath src="assets/img/icons/garage-icon.svg" alt="Image" />
                                            <p>2 Garages</p>
                                        </li>
                                        <li>
                                            <ImageWithBasePath src="assets/img/icons/calender-icon.svg" alt="Image" />
                                            <p>Year Built: 2005</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* /Overview */}
                            {/* Description */}
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
                                            it an amazing setting for your dream country getaway! If you
                                            like views, you must see this property!,{" "}
                                        </p>
                                        <p>
                                            This property is mostly wooded and sits high on a hilltop
                                            overlooking the Mohawk River Valley. Located right in the
                                            heart of Upstate NYs Amish farm Country, this land is
                                            certified organic making it extremely rare! Good road frontage
                                            on a paved county road with utilities make it an amazing
                                            setting for your dream country getaway! If you like views, you
                                            must see this property!This property is mostly wooded and sits
                                            high on a hilltop overlooking the Mohawk River Valley. Located
                                            right in the heart of Upstate NYs Amish farm Country, this
                                            land is certified organic making it extremely rare! Good road
                                            frontage on a paved county road with utilities make it an
                                            amazing setting for your dream country getaway! If you like
                                            views, you must see this property!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* /Description */}
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
                                                    {" "}
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
                                                    Available From : <span> 18-11-2023</span>
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
                                                        alt="Image"
                                                    />
                                                    Air Conditioning
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/amenities-icon-2.svg"
                                                        alt="Image"
                                                    />
                                                    Swimming Pools
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/amenities-icon-3.svg"
                                                        alt="Image"
                                                    />
                                                    Sporting Facilities
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/amenities-icon-4.svg"
                                                        alt="Image"
                                                    />
                                                    Gym
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/amenities-icon-5.svg"
                                                        alt="Image"
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
                                                        alt="Image"
                                                    />
                                                    Landscaped Gardens
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/amenities-icon-7.svg"
                                                        alt="Image"
                                                    />
                                                    Wide-Open Spaces
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/amenities-icon-8.svg"
                                                        alt="Image"
                                                    />
                                                    Parks{" "}
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/amenities-icon-9.svg"
                                                        alt="Image"
                                                    />
                                                    Package Lockers
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/amenities-icon-10.svg"
                                                        alt="Image"
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
                                                        alt="Image"
                                                    />
                                                    Surveillance Cameras
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/amenities-icon-12.svg"
                                                        alt="Image"
                                                    />
                                                    Billiards Table
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Amenities */}
                            {/* Documents */}
                            <div className="collapse-card">
                                <h4 className="card-title">
                                    <Link
                                        className="collapsed"
                                        data-bs-toggle="collapse"
                                        to="#Documents"
                                        aria-expanded="false"
                                    >
                                        Documents
                                    </Link>
                                </h4>
                                <div
                                    id="Documents"
                                    className="card-collapse collapse show  collapse-view"
                                >
                                    <div className="row">
                                        <div className="col-md-12">
                                            <ul className="amenities-list document">
                                                <li>
                                                    <ImageWithBasePath src="assets/img/icons/pdf-icon.svg" alt="Image" />
                                                    Ferris Park.jpg
                                                </li>
                                                <li>
                                                    <ImageWithBasePath src="assets/img/icons/pdf-icon.svg" alt="Image" />
                                                    Energetic-Certificate-PDF6
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Documents */}
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
                                <div id="video" className="card-collapse collapse show">
                                    <div className="sample-video collapse-view">
                                        <ImageWithBasePath src="assets/img/video-img.jpg" alt="Image" />
                                        <Link
                                            className="play-icon"
                                            // data-fancybox=""
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
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509170.989457427!2d-123.80081967108484!3d37.192957227641294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1669181581381!5m2!1sen!2sin"
                                            style={{ border: 0 }}
                                            allowFullScreen={true}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="contact-map"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* /Map */}
                            {/* Floor Plan */}
                            <div className="collapse-card sidebar-card">
                                <h4 className="card-title">
                                    <Link
                                        className="collapsed"
                                        data-bs-toggle="collapse"
                                        to="#FloorPlan"
                                        aria-expanded="false"
                                    >
                                        Floor Plan
                                    </Link>
                                </h4>
                                <div
                                    id="FloorPlan"
                                    className="card-collapse collapse show  collapse-view"
                                >
                                    <div className="inside-collapse-card mt-0">
                                        <h5 className="card-title p-0">
                                            <Link
                                                data-bs-toggle="collapse"
                                                to="#floorplane1"
                                                aria-expanded="false"
                                            >
                                                Floor Plan 1
                                            </Link>
                                        </h5>
                                        <div id="floorplane1" className="card-collapse collapse show">
                                            <ul>
                                                <li>
                                                    <ImageWithBasePath src="assets/img/icons/bed-icon.svg" alt="Image" />4
                                                    Beds
                                                </li>
                                                <li>
                                                    <ImageWithBasePath src="assets/img/icons/bath-icon.svg" alt="Image" />4
                                                    Baths
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/building-icon.svg"
                                                        alt="Image"
                                                    />
                                                    3500 Sqft
                                                </li>
                                                <li>
                                                    <ImageWithBasePath src="assets/img/icons/money-icon.svg" alt="Image" />
                                                    $35,000
                                                </li>
                                            </ul>
                                            <div className="floor-map">
                                                <ImageWithBasePath src="assets/img/floor-map.png" alt="Image" />
                                            </div>
                                            <div className="map-info">
                                                <p>
                                                    This property is mostly wooded and sits high on a hilltop
                                                    overlooking the Mohawk River Valley. Located right in the
                                                    heart of Upstate NYs Amish farm Country, this land is
                                                    certified organic making it extremely rare! Good road
                                                    frontage on a paved county road with utilities make it an
                                                    amazing setting for your dream country getaway! If you
                                                    like views, you must see this property!,{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inside-collapse-card">
                                        <h5 className="card-title p-0">
                                            <Link
                                                className="collapsed"
                                                data-bs-toggle="collapse"
                                                to="#floorplane2"
                                                aria-expanded="false"
                                            >
                                                Floor Plan 2
                                            </Link>
                                        </h5>
                                        <div id="floorplane2" className="card-collapse collapse">
                                            <ul>
                                                <li>
                                                    <ImageWithBasePath src="assets/img/icons/bed-icon.svg" alt="Image" />4
                                                    Beds
                                                </li>
                                                <li>
                                                    <ImageWithBasePath src="assets/img/icons/bath-icon.svg" alt="Image" />4
                                                    Baths
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/building-icon.svg"
                                                        alt="Image"
                                                    />
                                                    3500 Sqft
                                                </li>
                                                <li>
                                                    <ImageWithBasePath src="assets/img/icons/money-icon.svg" alt="Image" />
                                                    $35,000
                                                </li>
                                            </ul>
                                            <div className="floor-map">
                                                <ImageWithBasePath src="assets/img/floor-map.png" alt="Image" />
                                            </div>
                                            <div className="map-info">
                                                <p>
                                                    This property is mostly wooded and sits high on a hilltop
                                                    overlooking the Mohawk River Valley. Located right in the
                                                    heart of Upstate NYs Amish farm Country, this land is
                                                    certified organic making it extremely rare! Good road
                                                    frontage on a paved county road with utilities make it an
                                                    amazing setting for your dream country getaway! If you
                                                    like views, you must see this property!,{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /Floor Plan */}
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
                                                    <Link to="#;">
                                                        <ImageWithBasePath
                                                            src="assets/img/profiles/avatar-01.jpg"
                                                            alt="User"
                                                        />
                                                    </Link>
                                                    <div>
                                                        <h5>
                                                            <Link to="#;">Johnson</Link>
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
                                                    Letraset sheets containing Lorem Ipsum passages, and more
                                                    recently with desktop publishing software like Aldus
                                                    PageMaker including versions of Lorem Ipsum.It was
                                                    popularised in the 1960s{" "}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="customer-review">
                                            <div className="customer-info">
                                                <div className="customer-name">
                                                    <Link to="#;">
                                                        <ImageWithBasePath
                                                            src="assets/img/profiles/avatar-02.jpg"
                                                            alt="User"
                                                        />
                                                    </Link>
                                                    <div>
                                                        <h5>
                                                            <Link to="#;">Casandra</Link>
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
                                                    Letraset sheets containing Lorem Ipsum passages, and more
                                                    recently with desktop publishing software like Aldus
                                                    PageMaker including versions of Lorem Ipsum.It was
                                                    popularised in the 1960s with the elease of Letraset
                                                    sheets containing Lorem Ipsum passages, and more recently
                                                    with desktop publishing software like Aldus Page Maker
                                                    including versions.
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
                                    {/* Schedule a Visit */}
                                    <div className="sidebar-card">
                                        <div className="contact-btn contact-btn-new">
                                            <Link to={routes.buyDetails}>
                                                
                                                <Info className='me-1' size={15}/>
                                                Request Info
                                            </Link>
                                            <Link to={routes.buyDetails} className="active">
                                                
                                                <Video className='me-1' size={15}/>
                                                Schedule a Visit
                                            </Link>
                                        </div>
                                        <div className="calender mb-0">
                                            <h6 className="user-info">Select Day</h6>
                                        </div>
                                        <div className="arrival-div">
                                            <ul>
                                                <li>
                                                    <input type="radio" id="radio1" name="Arrival" />
                                                    <label htmlFor="radio1">
                                                        Tue<span>21</span>Feb
                                                    </label>
                                                </li>
                                                <li>
                                                    <input
                                                        type="radio"
                                                        id="radio2"
                                                        name="Arrival"
                                                        defaultChecked={true}
                                                    />
                                                    <label htmlFor="radio2">
                                                        Wed<span>22</span>Feb
                                                    </label>
                                                </li>
                                                <li>
                                                    <input type="radio" id="radio3" name="Arrival" />
                                                    <label htmlFor="radio3">
                                                        Thur<span>23</span>Feb
                                                    </label>
                                                </li>
                                                <li>
                                                    <input type="radio" id="radio4" name="Arrival" />
                                                    <label htmlFor="radio4">
                                                        Feb<span>24</span>Feb
                                                    </label>
                                                </li>
                                                <li>
                                                    <input type="radio" id="radio5" name="Arrival" />
                                                    <label htmlFor="radio5">
                                                        Sat<span>25</span>Feb
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="review-form">
                                        <Select options={sortByTime} defaultValue={sortByTime[0]} className="select" styles={customStyles} />
                                        </div>
                                        <h6 className="user-info">Your Information</h6>
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
                                        <ul className="connect-us">
                                            <li>
                                                <Link to="#;">
                                                    <i className="feather-phone" />
                                                    Call Us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#;">
                                                    <i className="fa-brands fa-whatsapp" />
                                                    Whatsapp
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* /Request Info */}
                                    {/* Listing Owner Details */}
                                    <div className="sidebar-card">
                                        <div className="sidebar-card-title">
                                            <h5>Listing Owner Details</h5>
                                        </div>
                                        <div className="user-active bg-white p-0">
                                            <div className="user-img">
                                                <Link to="#;">
                                                    <ImageWithBasePath
                                                        className="avatar"
                                                        src="assets/img/profiles/avatar-03.jpg"
                                                        alt="Image"
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
                                                    <Link to="#;" className="fb-icon">
                                                        <i className="fa-brands fa-facebook-f hi-icon" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#;" className="ins-icon">
                                                        <i className="fa-brands fa-instagram hi-icon" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#;">
                                                        <i className="fa-brands fa-behance hi-icon" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#;" className="twitter-icon">
                                                        <i className="fa-brands fa-twitter hi-icon" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#;" className="ins-icon">
                                                        <i className="fa-brands fa-pinterest-p hi-icon" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#;">
                                                        <i className="fa-brands fa-linkedin hi-icon" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /Share Property */}
                                    {/* Mortarage Calculator */}
                                    <div className="sidebar-card">
                                        <div className="sidebar-card-title">
                                            <h5>Mortarage Calculator</h5>
                                        </div>
                                        <div className="review-form">
                                            <label>Total Amount ($)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='150000000'
                                            />
                                        </div>
                                        <div className="review-form">
                                            <label>Down Payment ($)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='1000000'
                                            />
                                        </div>
                                        <div className="review-form">
                                            <label>Loan Terms (Years)</label>
                                            <input type="text" className="form-control" placeholder='2' />
                                        </div>
                                        <div className="review-form">
                                            <label>Interest Rate (%)</label>
                                            <input type="text" className="form-control" placeholder='15' />
                                        </div>
                                        <div className="review-form submit-btn">
                                            <button type="submit" className="btn-primary">
                                                Send Email
                                            </button>
                                        </div>
                                        <div className="reset-btn">
                                            <Link to="#;">Reset Form</Link>
                                        </div>
                                    </div>
                                    {/* /Mortarage Calculator */}
                                    {/* Slider */}
                                    <div className="sidebar-img-slider owl-carousel">
                                        <Slider {...settings}>
                                            <div className="slide-img-card">
                                                <div className="slide-img">
                                                    <ImageWithBasePath src="assets/img/sidebar-slide.jpg" alt="Image" />
                                                </div>
                                                <div className="property-name">
                                                    <h3>High-Rise Townhouse</h3>
                                                    <span>
                                                       <MapPin size={15} className='me-1'/>
                                                        Chicago
                                                    </span>
                                                    <div className="star-rate">
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-img-card">
                                                <div className="slide-img">
                                                    <ImageWithBasePath src="assets/img/sidebar-slide.jpg" alt="Image" />
                                                </div>
                                                <div className="property-name">
                                                    <h3>High-Rise Townhouse</h3>
                                                    <span>
                                                       <MapPin size={15} className='me-1'/>
                                                        Chicago
                                                    </span>
                                                    <div className="star-rate">
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-img-card">
                                                <div className="slide-img">
                                                    <ImageWithBasePath src="assets/img/sidebar-slide.jpg" alt="Image" />
                                                </div>
                                                <div className="property-name">
                                                    <h3>High-Rise Townhouse</h3>
                                                    <span>
                                                       <MapPin size={15} className='me-1'/>
                                                        Chicago
                                                    </span>
                                                    <div className="star-rate">
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                    {/* /Slider */}
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
                                <div className="blog-slider owl-carousel">
                                    <Slider {...settingsListing}>
                                        {/* List */}
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
                                                        <Link to="#">
                                                            <div className="favourite">
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
                                                        <Link to={routes.buyDetails}>
                                                            Place perfect for nature
                                                        </Link>
                                                    </h3>
                                                    <p>
                                                       <MapPin size={15} className='me-1'/>
                                                        
                                                         318-S Oakley Blvd,
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
                                                            3 Baths
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
                                        {/* /List */}
                                        {/* List */}
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
                                                        <Link to="#">
                                                            <div className="favourite">
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
                                                            <i className="fa-solid fa-star checked" />
                                                        </span>
                                                        <p className="rating-review">
                                                            <span>5.0</span>(25 Reviews)
                                                        </p>
                                                    </div>
                                                    <h3 className="title">
                                                        <Link to={routes.buyDetails}>Beautiful Condo Room</Link>
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
                                                            3000 Sqft
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
                                        {/* /List */}
                                        {/* List */}
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
                                                        <Link to="#">
                                                            <div className="favourite">
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
                                                            <i className="fa-solid fa-star checked" />
                                                        </span>
                                                        <p className="rating-review">
                                                            <span>5.0</span>(10 Reviews)
                                                        </p>
                                                    </div>
                                                    <h3 className="title">
                                                        <Link to={routes.buyDetails}>Summer house</Link>
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
                                                            3500 Sqft
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
                                        {/* /List */}
                                        {/* List */}
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
                                                        <Link to="#">
                                                            <div className="favourite">
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
                                                            <span>5.0</span>(5 Reviews)
                                                        </p>
                                                    </div>
                                                    <h3 className="title">
                                                        <Link to={routes.buyDetails}>
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
                                                            4 Beds
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
                                        {/* /List */}
                                        {/* List */}
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
                                                        <Link to="#">
                                                            <div className="favourite">
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
                                                        <Link to={routes.buyDetails}>Two storey modern flat</Link>
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
                                        {/* /List */}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Similar Listings */}
                </div>
            </section>
            {/* /Detail View Section */}
        </>

    )
}

export default BuyDetilsView
