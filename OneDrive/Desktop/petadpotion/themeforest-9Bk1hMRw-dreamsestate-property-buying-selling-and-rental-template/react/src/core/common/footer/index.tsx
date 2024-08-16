import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../img'
import { all_routes } from '../../../feature-module/router/all_routes'

const Footer:  React.FC = () => {
    const routes= all_routes;
    return (
        <>
            {/* Footer */}
            <div className="footer">
                {/* Footer Top */}
                <div className="footer-top">
                    <div className="footer-border-img">
                        <ImageWithBasePath src="assets/img/bg/line-bg.png" alt="Line Image" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="footer-widget footer-about">
                                    <div className="footer-app-content">
                                        <div className="footer-content-heading">
                                            <h4>Get Our App </h4>
                                            <p>Download the app and book your property</p>
                                        </div>
                                        <div className="download-app">
                                            <Link to="#">
                                                <ImageWithBasePath src="assets/img/google-pay.png" alt="google play" />
                                            </Link>
                                            <Link to="#">
                                                <ImageWithBasePath src="assets/img/app-store.png" alt="app store" />
                                            </Link>
                                        </div>
                                        <div className="social-links">
                                            <h4>Connect with us</h4>
                                            <ul>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fa-brands fa-facebook-f hi-icon" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fa-brands fa-instagram hi-icon" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fa-brands fa-behance hi-icon" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fa-brands fa-twitter hi-icon" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
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
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4">
                                <div className="footer-widget-list">
                                    <div className="footer-content-heading">
                                        <h4>Explore</h4>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link to={routes.rentPropertyList}>Listings</Link>
                                        </li>
                                        <li>
                                            <Link to={routes.register}>Register</Link>
                                        </li>
                                        <li>
                                            <Link to={routes.login}>Login</Link>
                                        </li>
                                        <li>
                                            <Link to={routes.blogGrid}>Blogs</Link>
                                        </li>
                                        <li>
                                            <Link to={routes.agencyGrid}>Agency</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4">
                                <div className="footer-widget-list">
                                    <div className="footer-content-heading">
                                        <h4>Categories</h4>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link to="#">Apartments</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Office</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Villas</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Flat</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-4">
                                <div className="footer-widget-list">
                                    <div className="footer-content-heading">
                                        <h4>Locations</h4>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link to="#">United States</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Canada</Link>
                                        </li>
                                        <li>
                                            <Link to="#">India</Link>
                                        </li>
                                        <li>
                                            <Link to="#">UK</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Australia</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-4">
                                <div className="footer-widget-list">
                                    <div className="footer-content-heading">
                                        <h4>Quick Links</h4>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link to={routes.aboutUs}>About</Link>
                                        </li>
                                        <li>
                                            <Link to={routes.faq}>Faq</Link>
                                        </li>
                                        <li>
                                            <Link to={routes.termsCondition}>Terms &amp; Conditions</Link>
                                        </li>
                                        <li>
                                            <Link to={routes.privacyPolicy}>Privacy Policy</Link>
                                        </li>
                                        <li>
                                            <Link to={routes.gallery}>Gallery</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Footer Top */}
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom-content">
                            <div className="copyright">
                                <p>Copyright 2024 - All right reserved DreamsEstate</p>
                            </div>
                            <div className="company-logo">
                                <p>a product of</p>
                                <Link to="https://dreamguystech.com/" target="_blank">
                                    <ImageWithBasePath src="assets/img/company-logo.png" alt="Logo" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Footer Bottom */}
            </div>
            {/* /Footer */}
        </>

    )
}

export default Footer
