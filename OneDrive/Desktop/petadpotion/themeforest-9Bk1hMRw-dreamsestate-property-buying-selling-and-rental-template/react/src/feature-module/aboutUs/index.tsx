import React, { useEffect } from 'react'
import ImageWithBasePath from '../../core/img'
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CountUp from 'react-countup';
import BreadCrumb from '../../core/common/breadCrumb';

const AboutUs = () => {

    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
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
    return (
        <>
            <div className="aboutus-page">
                <BreadCrumb title="About Us" pageTitle="Home" />
                {/* About Us */}
                <section className="aboutus-section">
                    <div className="container">
                        {/* About Content */}
                        <div className="about-content">
                            <h6>About DreamsEstate</h6>
                            <h1>We connect building with people</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis
                                ligula eu lectus vulputate porttitor sed feugiat nunc. Mauris ac
                                consectetur ante,
                            </p>
                            <p className="mb-0">
                                congue, sed luctus lectus congue. Integer convallis condimentum sem.
                                Duis elementum tortor eget condimentum tempor. Praesent sollicitudin
                                lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper at
                                orci at placerat.Placeat Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        {/* /About Content */}
                    </div>
                </section>
                {/* /About Us */}
                {/* About Counter */}
                <section className="about-counter-sec">
                    <div className="container">
                        {/* About Images listing */}
                        <div className="about-listing-img">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12 col-sm-12">
                                    <div className="about-listing">
                                        <ImageWithBasePath src="assets/img/about-us/about-us-01.jpg" alt="aboutus-01" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 col-sm-12">
                                    <div className="about-listing">
                                        <ImageWithBasePath src="assets/img/about-us/about-us-02.jpg" alt="aboutus-02" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12 col-sm-12">
                                    <div className="about-listing">
                                        <ImageWithBasePath src="assets/img/about-us/about-us-03.jpg" alt="aboutus-03" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /About Images listing */}
                        {/* About Count */}
                        <div className="counter-sec">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                                    <div className="counter-box flex-fill">
                                        <div className="counter-icon">
                                            <ImageWithBasePath src="assets/img/icons/counter-icon-1.svg" alt="icon" />
                                        </div>
                                        <div className="counter-value">
                                            <h3 className="dash-count">
                                                <span className="counter-up">
                                                    <CountUp start={0} end={50} duration={7} />K
                                                </span>
                                            </h3>
                                            <h5>Listings Added </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                                    <div className="counter-box flex-fill">
                                        <div className="counter-icon">
                                            <ImageWithBasePath src="assets/img/icons/counter-icon-2.svg" alt="icon" />
                                        </div>
                                        <div className="counter-value">
                                            <h3 className="dash-count">
                                                <span className="counter-up">
                                                    <CountUp start={0} end={3000} duration={5} />+
                                                </span>
                                            </h3>
                                            <h5>Agents Listed </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                                    <div className="counter-box active flex-fill">
                                        <div className="counter-icon">
                                            <ImageWithBasePath src="assets/img/icons/counter-icon-3.svg" alt="icon" />
                                        </div>
                                        <div className="counter-value">
                                            <h3 className="dash-count">
                                                <span className="counter-up">
                                                    <CountUp start={0} end={2000} duration={5} />
                                                </span>+
                                            </h3>
                                            <h5>Sales Completed </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                                    <div className="counter-box flex-fill">
                                        <div className="counter-icon">
                                            <ImageWithBasePath src="assets/img/icons/counter-icon-4.svg" alt="icon" />
                                        </div>
                                        <div className="counter-value">
                                            <h3 className="dash-count">
                                                <span className="counter-up">
                                                    <CountUp start={0} end={5000} duration={5} />
                                                </span>+
                                            </h3>
                                            <h5>Users</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /About Count */}
                    </div>
                </section>
                {/* /About Counter */}
                {/* Book Place */}
                <div className="section book-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="book-listing">
                                    <h2>Ready to Book a Place?</h2>
                                    <ImageWithBasePath src="assets/img/about-us/about-us-04.jpg" alt="aboutus-03" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="book-content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                        quis ligula eu lectus vulputate porttitor sed feugiat nunc.{" "}
                                        <span>Mauris ac consectetur ante,</span>
                                    </p>
                                    <p>
                                        congue, sed luctus lectus congue. Integer convallis condimentum
                                        sem. Duis elementum tortor eget condimentum tempor. Praesent
                                        sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula.
                                        Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit
                                        amet. congue, sed luctus lectus congue. Integer convallis
                                        condimentum sem. Duis elementum tortor eget condimentum tempor.
                                        Praesent sollicitudin lectus ut pharetra pulvinar. Done congue,
                                        sed luctus lectus congue. Integer convallis condimentum sem. Duis
                                        elementum tortor eget condimentum tempor. Praesent sollicitudin
                                        lectus ut pharetra pulvinar. Done Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Quisque quis ligula eu lectus
                                        vulputate porttitor sed feugiat nunc.{" "}
                                        <span>Mauris ac consectetur ante,</span>
                                    </p>
                                    <p className="mb-0">
                                        congue, sed luctus lectus congue. Integer convallis condimentum
                                        sem. Duis elementum tortor eget condimentum tempor. Praesent
                                        sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula.
                                        Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit
                                        amet.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Book Place */}
                {/* Partners */}
                <section className="section partners-sec">
                    <div className="container">
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
                                    <Slider {...settings}>
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
                </section>
                {/* /Partners */}
            </div>
        </>
    )
}

export default AboutUs
