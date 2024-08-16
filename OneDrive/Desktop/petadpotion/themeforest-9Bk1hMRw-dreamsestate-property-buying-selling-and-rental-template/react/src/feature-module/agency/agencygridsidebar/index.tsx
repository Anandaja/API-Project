import React from 'react'
import ImageWithBasePath from '../../../core/img'
import { Link } from 'react-router-dom'
import BreadCrumb from '../../../core/common/breadCrumb'

import { AgencySidebar } from '../agencysidebar'
import { all_routes } from '../../router/all_routes'

const AgencyGridSidebar = () => {
    const routes = all_routes
    return (
        <div>
            {/* Breadcrumb */}
            <BreadCrumb title="Agency Grid With Sidebar" pageTitle="Home" />
            {/* Breadcrumb */}
            {/* Content */}
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 theiaStickySidebar">
                            <div className='stickybar'>
                            {/* Sidebar */}
                            <AgencySidebar/>
                            {/* /Sidebar */}
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                {/* Agent */}
                                <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                                    <div className="agent-card agency card flex-fill">
                                        <div className="agent-img">
                                            <Link to={routes.agencyDetails} className="property-img">
                                                <ImageWithBasePath
                                                    className="img-fluid"
                                                    alt="img"
                                                    src="assets/img/property/property-01.png"
                                                />
                                            </Link>
                                            <div className="list-feature">
                                                <span>30 Listings</span>
                                            </div>
                                        </div>
                                        <div className="agent-content">
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
                                    </div>
                                </div>
                                {/* /Agent */}
                                {/* Agent */}
                                <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                                    <div className="agent-card agency card flex-fill">
                                        <div className="agent-img">
                                            <Link to={routes.agencyDetails} className="property-img">
                                                <ImageWithBasePath
                                                    className="img-fluid"
                                                    alt="img"
                                                    src="assets/img/property/property-02.png"
                                                />
                                            </Link>
                                            <div className="list-feature">
                                                <span>50 Listings</span>
                                            </div>
                                        </div>
                                        <div className="agent-content">
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
                                    </div>
                                </div>
                                {/* /Agent */}
                                {/* Agent */}
                                <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                                    <div className="agent-card agency card flex-fill">
                                        <div className="agent-img">
                                            <Link to={routes.agencyDetails} className="property-img">
                                                <ImageWithBasePath
                                                    className="img-fluid"
                                                    alt="img"
                                                    src="assets/img/property/property-03.png"
                                                />
                                            </Link>
                                            <div className="list-feature">
                                                <span>25 Listings</span>
                                            </div>
                                        </div>
                                        <div className="agent-content">
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
                                    </div>
                                </div>
                                {/* /Agent */}
                                {/* Agent */}
                                <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                                    <div className="agent-card agency card flex-fill">
                                        <div className="agent-img">
                                            <Link to={routes.agencyDetails} className="property-img">
                                                <ImageWithBasePath
                                                    className="img-fluid"
                                                    alt="img"
                                                    src="assets/img/property/property-05.png"
                                                />
                                            </Link>
                                            <div className="list-feature">
                                                <span>38 Listings</span>
                                            </div>
                                        </div>
                                        <div className="agent-content">
                                            <div className="rating">
                                                <span className="rating-count">
                                                    <i className="fa-solid fa-star checked" />
                                                    <i className="fa-solid fa-star checked" />
                                                    <i className="fa-solid fa-star checked" />
                                                    <i className="fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                </span>
                                                <p className="rating-review">
                                                    <span>3.0</span>(35 Reviews)
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
                                    </div>
                                </div>
                                {/* /Agent */}
                                {/* Agent */}
                                <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                                    <div className="agent-card agency card flex-fill">
                                        <div className="agent-img">
                                            <Link to={routes.agencyDetails} className="property-img">
                                                <ImageWithBasePath
                                                    className="img-fluid"
                                                    alt="img"
                                                    src="assets/img/property/property-04.png"
                                                />
                                            </Link>
                                            <div className="list-feature">
                                                <span>45 Listings</span>
                                            </div>
                                        </div>
                                        <div className="agent-content">
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
                                    </div>
                                </div>
                                {/* /Agent */}
                                {/* Agent */}
                                <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
                                    <div className="agent-card agency card flex-fill">
                                        <div className="agent-img">
                                            <Link to={routes.agencyDetails} className="property-img">
                                                <ImageWithBasePath
                                                    className="img-fluid"
                                                    alt="img"
                                                    src="assets/img/property/property-06.png"
                                                />
                                            </Link>
                                            <div className="list-feature">
                                                <span>35 Listings</span>
                                            </div>
                                        </div>
                                        <div className="agent-content">
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
                                    </div>
                                </div>
                                {/* /Agent */}
                                {/* Pagination */}
                                <div className="col-lg-12">
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
                                </div>
                                {/* /Pagination */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Content */}
        </div>
    )
}

export default AgencyGridSidebar
