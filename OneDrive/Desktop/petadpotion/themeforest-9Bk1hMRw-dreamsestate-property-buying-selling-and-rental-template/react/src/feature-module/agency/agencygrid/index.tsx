import React from 'react'
import ImageWithBasePath from '../../../core/img'
import { Link } from 'react-router-dom'
import BreadCrumb from '../../../core/common/breadCrumb'

import { agenctType, area, city, customStyles, propertCategory } from '../../../core/common/select'
import Select from 'react-select';
import { all_routes } from '../../router/all_routes'
const AgencyGrid = () => {
    const routes = all_routes
    return (
        <>
            {/* Breadcrumb */}
            <BreadCrumb title="Agency Grid Without Sidebar" pageTitle="Home" />
            {/* Breadcrumb */}
            {/* Content */}
            <div className="listing-section">
                <div className="container">
                    {/* Show Result */}
                    <div className="showing-result-head show-list">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="review-form">
                                    <label>Agency Type</label>
                                    <Select options={agenctType} defaultValue={agenctType[0]} className="select" styles={customStyles} />

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="review-form">
                                    <label>Select City</label>
                                    <Select options={city} defaultValue={city[0]} className="select" styles={customStyles} />

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="review-form">
                                    <label>Select Area</label>
                                    <Select options={area} defaultValue={area[0]} className="select" styles={customStyles} />

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="review-form">
                                    <label>Select Category</label>
                                    <Select options={propertCategory} defaultValue={propertCategory[0]} className="select" styles={customStyles} />

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Show Result */}
                    <div className="row">
                        {/* Agency */}
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="agent-card agency card flex-fill">
                                <div className="agent-img">
                                    <Link to={routes.agencyDetails}>
                                        <ImageWithBasePath
                                            className="img-fluid"
                                            alt='img'
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
                        {/* /Agency */}
                        {/* Agent */}
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="agent-card agency card flex-fill">
                                <div className="agent-img">
                                    <Link to={routes.agencyDetails}>
                                        <ImageWithBasePath
                                            className="img-fluid"
                                            alt='img'
                                            src="assets/img/property/property-02.png"
                                        />
                                    </Link>
                                    <div className="list-feature">
                                        <span>70 Listings</span>
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
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="agent-card agency card flex-fill">
                                <div className="agent-img">
                                    <Link to={routes.agencyDetails}>
                                        <ImageWithBasePath
                                            className="img-fluid"
                                            alt='img'
                                            src="assets/img/property/property-03.png"
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
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="agent-card agency card flex-fill">
                                <div className="agent-img">
                                    <Link to={routes.agencyDetails}>
                                        <ImageWithBasePath
                                            className="img-fluid"
                                            alt='img'
                                            src="assets/img/property/property-05.png"
                                        />
                                    </Link>
                                    <div className="list-feature">
                                        <span>55 Listings</span>
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
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="agent-card agency card flex-fill">
                                <div className="agent-img">
                                    <Link to={routes.agencyDetails}>
                                        <ImageWithBasePath
                                            className="img-fluid"
                                            alt='img'
                                            src="assets/img/property/property-04.png"
                                        />
                                    </Link>
                                    <div className="list-feature">
                                        <span>44 Listings</span>
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
                                            <span>5.0</span>(23 Reviews)
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
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="agent-card agency card flex-fill">
                                <div className="agent-img">
                                    <Link to={routes.agencyDetails}>
                                        <ImageWithBasePath
                                            className="img-fluid"
                                            alt='img'
                                            src="assets/img/property/property-06.png"
                                        />
                                    </Link>
                                    <div className="list-feature">
                                        <span>60 Listings</span>
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
                                            <span>5.0</span>(25 Reviews)
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
                    </div>
                </div>
            </div>
            {/* /Content */}
        </>

    )
}

export default AgencyGrid
