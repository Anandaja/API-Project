import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../core/img'
import BreadCrumb from '../../../core/common/breadCrumb'

import Slider from 'react-slick'

const BlogDetails = () => {
    const settings = {
        dots: false,
        arrow:true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
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
            {/* Breadcrumb */}
            <BreadCrumb title="Blog Details" pageTitle="Home" />
            {/* Breadcrumb */}
            {/* Blog Grid*/}
            <div className="section blog-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-banner">
                                <div className="blog-banner-img">
                                    <ImageWithBasePath src="assets/img/blog/blog-banner.jpg" alt="img" />
                                </div>
                                <div className="blog-banner-content">
                                    <div className="blog-banner-contenthead">
                                        <h6>Property</h6>
                                        <h5>Why community living is important for elderly people</h5>
                                    </div>
                                    <div className="blog-detailset">
                                        <div className="post-author">
                                            <div className="post-author-img">
                                                <ImageWithBasePath src="assets/img/profiles/avatar-01.jpg" alt="author" />
                                            </div>
                                            <Link to="#">
                                                {" "}
                                                <span> Francis</span>
                                            </Link>
                                        </div>
                                        <i className="fa-solid fa-calendar-days" />{" "}
                                        <span className="ms-2">Feb 6, 2023</span>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-para-content">
                                <p>
                                    If you are living alone in your home or mostly living by yourself
                                    and are looking for ways to make your life better, then you should
                                    try community living. Elderly people need to live in a community
                                    with other people. This means that you are close to your friends
                                    and family, but not so much that you lose your privacy. Living in
                                    a community can help you feel more comfortable and safe.Let’s
                                    further check out why community living is important for elderly
                                    people:
                                </p>
                                <h4>There’s no place like home:</h4>
                                <ImageWithBasePath src="assets/img/blog/blog-banner1.jpg" alt="img" />
                                <p>
                                    Home is where the heart is. It’s where you make memories, laugh
                                    with friends and family, and feel safe. Where you can relax and
                                    enjoy life and be yourself. Home is where you can sleep peacefully
                                    at night, knowing that someone is there to watch over you when you
                                    need them most. There’s no place like home. This is true for
                                    everyone, but it is especially important for the elderly because
                                    they have more responsibilities than young people do. The elderly
                                    need support at home, and the same support and care are only
                                    possible in community settings. It’s not just the physical aspect
                                    of community living that’s important, but also the social side.
                                    There are several benefits to having a group of friends and family
                                    members who can help you out in your time of need.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Blog Grid*/}
            {/* Latest Blog */}
            <section className="feature-property-sec blog-details-sec">
                <div className="container">
                    <div className="section-heading text-center">
                        <h2>Related Posts</h2>
                        <div className="sec-line mb-0">
                            <span className="sec-line1" />
                            <span className="sec-line2" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="testimonial-slider testimonialnext-prev owl-carousel">
                            <Slider {...settings}>
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <Link to="#">
                                            <ImageWithBasePath src="assets/img/blog/blog-1.jpg" alt='img' />
                                        </Link>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-property">
                                            <span>Property</span>
                                        </div>
                                        <div className="blog-title">
                                            <h3>
                                                <Link to="#">
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
                                                    <Link to="#">Rafael</Link>
                                                    <p>Posted on : 15 Jan 2023</p>
                                                </div>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <span>
                                                        <i className="fa-solid fa-arrow-right" />
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <Link to="#">
                                            <ImageWithBasePath src="assets/img/blog/blog-2.jpg" alt='img' />
                                        </Link>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-property">
                                            <span>Condos</span>
                                        </div>
                                        <div className="blog-title">
                                            <h3>
                                                <Link to="#">
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
                                                    <Link to="#">John</Link>
                                                    <p>Posted on : 15 Jan 2023</p>
                                                </div>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <span>
                                                        <i className="fa-solid fa-arrow-right" />
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <Link to="#">
                                            <ImageWithBasePath src="assets/img/blog/blog-3.jpg" alt='img' />
                                        </Link>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-property">
                                            <span>Flat</span>
                                        </div>
                                        <div className="blog-title">
                                            <h3>
                                                <Link to="#">
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
                                                    <Link to="#">Eric Krok</Link>
                                                    <p>Posted on : 15 Jan 2023</p>
                                                </div>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <span>
                                                        <i className="fa-solid fa-arrow-right" />
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <Link to="#">
                                            <ImageWithBasePath src="assets/img/blog/blog-2.jpg" alt='img' />
                                        </Link>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-property">
                                            <span>Villa</span>
                                        </div>
                                        <div className="blog-title">
                                            <h3>
                                                <Link to="#">
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
                                                    <Link to="#">Francis</Link>
                                                    <p>Posted on : 15 Jan 2023</p>
                                                </div>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <span>
                                                        <i className="fa-solid fa-arrow-right" />
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blog-card">
                                    <div className="blog-img">
                                        <Link to="#">
                                            <ImageWithBasePath src="assets/img/blog/blog-1.jpg" alt='img' />
                                        </Link>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-property">
                                            <span>Godown</span>
                                        </div>
                                        <div className="blog-title">
                                            <h3>
                                                <Link to="#">
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
                                                    <Link to="#">Rafael</Link>
                                                    <p>Posted on : 15 Jan 2023</p>
                                                </div>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <span>
                                                        <i className="fa-solid fa-arrow-right" />
                                                    </span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Latest Blog */}
        </div>
    )
}

export default BlogDetails
