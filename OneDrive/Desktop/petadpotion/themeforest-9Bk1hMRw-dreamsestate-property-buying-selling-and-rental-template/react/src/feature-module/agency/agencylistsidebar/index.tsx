import React from 'react'
import ImageWithBasePath from '../../../core/img'
import { Link } from 'react-router-dom'
import { AgencySidebar } from '../agencysidebar'
 import BreadCrumb from '../../../core/common/breadCrumb'
import { all_routes } from '../../router/all_routes'


const AgencyListSidebar = () => {
    const routes = all_routes
    return (
        <>
            {/* Breadcrumb */}
            <BreadCrumb title="Agency List With Sidebar" pageTitle="Home" />
            {/* Breadcrumb */}
            {/* Content */}
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 theiaStickySidebar">
                            <div className='stickybar'>
                                {/* Sidebar */}
                                <AgencySidebar />
                                {/* /Sidebar */}
                            </div>
                        </div>
                        <div className="col-lg-9">
                            {/* Agency List */}
                            <div className="agent-list agency">
                                <div className="agent-img">
                                    <Link to={routes.agencyDetails} className="property-img">
                                        <ImageWithBasePath
                                            className="img-fluid"
                                            alt='img'
                                            src="assets/img/property/property-01.png"
                                        />
                                    </Link>
                                </div>
                                <div className="agent-content">
                                    <div className="agent-info">
                                        <div className="agent-rating">
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
                                            <div className="agency-user">
                                                <div className="agency-user-info">
                                                    <h6>
                                                        <Link to={routes.agencyDetails}>Luxurios Estate</Link>
                                                    </h6>
                                                    <p>
                                                        <i className="bx bx-map" />
                                                        New York, Queens
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-feature">
                                            <span>60 Listings</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p>
                                            We were referred to Eric through our close friends and are so
                                            happy with the service he provided! This was our first house,
                                            so we had a lot of questions and he was happy to answer them
                                            all!
                                        </p>
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-behance" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
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
                            </div>
                            {/* /Agency List */}
                            {/* Agency List */}
                            <div className="agent-list agency">
                                <div className="agent-img">
                                    <Link to={routes.agencyDetails}>
                                        <ImageWithBasePath
                                            className="img-fluid"
                                            alt='img'
                                            src="assets/img/property/property-02.png"
                                        />
                                    </Link>
                                </div>
                                <div className="agent-content">
                                    <div className="agent-info">
                                        <div className="agent-rating">
                                            <div className="rating">
                                                <span className="rating-count">
                                                    <i className="fa-solid fa-star checked" />
                                                    <i className="fa-solid fa-star checked" />
                                                    <i className="fa-solid fa-star checked" />
                                                    <i className="fa-solid fa-star checked" />
                                                    <i className="fa-solid fa-star checked" />
                                                </span>
                                                <p className="rating-review">
                                                    <span>5.0</span>(40 Reviews)
                                                </p>
                                            </div>
                                            <div className="agency-user">
                                                <div className="agency-user-info">
                                                    <h6>
                                                        <Link to={routes.agencyDetails}>Green Reality</Link>
                                                    </h6>
                                                    <p>
                                                        <i className="bx bx-map" />
                                                        City Center, Manhattan
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-feature">
                                            <span>30 Listings</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p>
                                            We were referred to Eric through our close friends and are so
                                            happy with the service he provided! This was our first house,
                                            so we had a lot of questions and he was happy to answer them
                                            all!
                                        </p>
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-behance" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
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
                            </div>
                            {/* /Agency List */}
                            {/* Agency List */}
                            <div className="agent-list agency">
                                <div className="agent-img">
                                    <Link to={routes.agencyDetails}>
                                        <ImageWithBasePath
                                            className="img-fluid"
                                            alt='img'
                                            src="assets/img/property/property-03.png"
                                        />
                                    </Link>
                                </div>
                                <div className="agent-content">
                                    <div className="agent-info">
                                        <div className="agent-rating">
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
                                            <div className="agency-user">
                                                <div className="agency-user-info">
                                                    <h6>
                                                        <Link to={routes.agencyDetails}>Homes</Link>
                                                    </h6>
                                                    <p>
                                                        <i className="bx bx-map" />
                                                        Las Vegas
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-feature">
                                            <span>40 Listings</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p>
                                            We were referred to Eric through our close friends and are so
                                            happy with the service he provided! This was our first house,
                                            so we had a lot of questions and he was happy to answer them
                                            all!
                                        </p>
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-behance" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
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
                            </div>
                            {/* /Agency List */}
                            {/* Agency List */}
                            <div className="agent-list agency">
                                <div className="agent-img">
                                    <Link to={routes.agencyDetails}>
                                        <ImageWithBasePath
                                            className="img-fluid"
                                            alt='img'
                                            src="assets/img/property/property-04.png"
                                        />
                                    </Link>
                                </div>
                                <div className="agent-content">
                                    <div className="agent-info">
                                        <div className="agent-rating">
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
                                            <div className="agency-user">
                                                <div className="agency-user-info">
                                                    <h6>
                                                        <Link to={routes.agencyDetails}>Queen Estate</Link>
                                                    </h6>
                                                    <p>
                                                        <i className="bx bx-map" />
                                                        Pawnee City, NE
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-feature">
                                            <span>55 Listings</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p>
                                            We were referred to Eric through our close friends and are so
                                            happy with the service he provided! This was our first house,
                                            so we had a lot of questions and he was happy to answer them
                                            all!
                                        </p>
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-behance" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
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
                            </div>
                            {/* /Agency List */}
                            {/* Agency List */}
                            <div className="agent-list agency">
                                <div className="agent-img">
                                    <Link to={routes.agencyDetails}>
                                        <ImageWithBasePath
                                            className="img-fluid"
                                            alt='img'
                                            src="assets/img/property/property-05.png"
                                        />
                                    </Link>
                                </div>
                                <div className="agent-content">
                                    <div className="agent-info">
                                        <div className="agent-rating">
                                            <div className="rating">
                                                <span className="rating-count">
                                                    <i className="fa-solid fa-star checked" />
                                                    <i className="fa-solid fa-star checked" />
                                                    <i className="fa-solid fa-star checked" />
                                                    <i className="fa-solid fa-star checked" />
                                                    <i className="fa-solid fa-star checked" />
                                                </span>
                                                <p className="rating-review">
                                                    <span>5.0</span>(14 Reviews)
                                                </p>
                                            </div>
                                            <div className="agency-user">
                                                <div className="agency-user-info">
                                                    <h6>
                                                        <Link to={routes.agencyDetails}>Rent a Home</Link>
                                                    </h6>
                                                    <p>
                                                        <i className="bx bx-map" />
                                                        Barron, WI
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-feature">
                                            <span>45 Listings</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p>
                                            We were referred to Eric through our close friends and are so
                                            happy with the service he provided! This was our first house,
                                            so we had a lot of questions and he was happy to answer them
                                            all!
                                        </p>
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-behance" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
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
                            </div>
                            {/* /Agency List */}
                            {/* Agency List */}
                            <div className="agent-list agency">
                                <div className="agent-img">
                                    <Link to={routes.agencyDetails}>
                                        <ImageWithBasePath
                                            className="img-fluid"
                                            alt='img'
                                            src="assets/img/property/property-06.png"
                                        />
                                    </Link>
                                </div>
                                <div className="agent-content">
                                    <div className="agent-info">
                                        <div className="agent-rating">
                                            <div className="rating">
                                                <span className="rating-count">
                                                    <i className="fa-solid fa-star checked" />
                                                    <i className="fa-solid fa-star checked" />
                                                    <i className="fa-solid fa-star checked" />
                                                    <i className="fa-solid fa-star checked" />
                                                    <i className="fa-solid fa-star checked" />
                                                </span>
                                                <p className="rating-review">
                                                    <span>5.0</span>(16 Reviews)
                                                </p>
                                            </div>
                                            <div className="agency-user">
                                                <div className="agency-user-info">
                                                    <h6>
                                                        <Link to={routes.agencyDetails}>Louis Realtors</Link>
                                                    </h6>
                                                    <p>
                                                        <i className="bx bx-map" />
                                                        Correll, MN
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-feature">
                                            <span>50 Listings</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p>
                                            We were referred to Eric through our close friends and are so
                                            happy with the service he provided! This was our first house,
                                            so we had a lot of questions and he was happy to answer them
                                            all!
                                        </p>
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-behance" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="fa-brands fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
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
                            </div>
                            {/* /Agency List */}
                            {/* Pagination */}
                            <div className="grid-pagination">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item prev">
                                        <Link className="page-link" to="#">
                                            <i className="fa-solid fa-arrow-left" /> Prev
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            1
                                        </Link>
                                    </li>
                                    <li className="page-item active">
                                        <Link className="page-link" to="#">
                                            2
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            3
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            4
                                        </Link>
                                    </li>
                                    <li className="page-item next">
                                        <Link className="page-link" to="#">
                                            Next <i className="fa-solid fa-arrow-right" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* /Pagination */}
                        </div>
                    </div>
                </div>
            </div>
            {/* /Content */}
        </>

    )
}

export default AgencyListSidebar
