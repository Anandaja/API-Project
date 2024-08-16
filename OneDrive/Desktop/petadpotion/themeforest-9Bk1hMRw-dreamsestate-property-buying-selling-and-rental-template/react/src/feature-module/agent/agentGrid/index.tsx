import React from 'react'
import ImageWithBasePath from '../../../core/img'
import { Link } from 'react-router-dom'
import { agentType, area, city, customStyles, propertCategory } from '../../../core/common/select'
import Select from 'react-select'
import BreadCrumb from '../../../core/common/breadCrumb'
import { all_routes } from '../../router/all_routes'

const AgentGrid = () => {
    const routes = all_routes
    return (
        <>
            {/* Breadcrumb */}
            <BreadCrumb title="Agent Grid Without Sidebar" pageTitle="Home" />
            {/* Breadcrumb */}
            {/* Content */}
            <div className="listing-section">
                <div className="container">
                    {/* Show Result */}
                    <div className="showing-result-head show-list">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="review-form">
                                    <label>Agent Type</label>
                                    <Select options={agentType} defaultValue={agentType[0]} className="select" styles={customStyles} />
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
                    {/* /Show Result */}
                    <div className="row">
                        {/* Agent */}
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="agent-card card flex-fill">
                                <div className="agent-img">
                                    <Link to={routes.agentDetails} className="property-img">
                                        <ImageWithBasePath
                                            className="img-fluid"
                                            alt='img'
                                            src="assets/img/agents/agent-01.jpg"
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
                                    <h6>
                                        <Link to={routes.agentDetails}>Mike Rutter</Link>
                                    </h6>
                                    <p>
                                        <i className="bx bx-user-voice" />
                                        Selling Agent
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* /Agent */}
                        {/* Agent */}
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="agent-card card flex-fill">
                                <div className="agent-img">
                                    <Link to={routes.agentDetails} className="property-img">
                                        <ImageWithBasePath
                                            className="img-fluid"
                                            alt='img'
                                            src="assets/img/agents/agent-02.jpg"
                                        />
                                    </Link>
                                    <div className="list-feature">
                                        <span>40 Listings</span>
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
                                    <h6>
                                        <Link to={routes.agentDetails}>Pamela</Link>
                                    </h6>
                                    <p>
                                        <i className="bx bx-user-voice" />
                                        Buying Agent
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* /Agent */}
                        {/* Agent */}
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="agent-card card flex-fill">
                                <div className="agent-img">
                                    <Link to={routes.agentDetails} className="property-img">
                                        <ImageWithBasePath
                                            className="img-fluid"
                                            alt='img'
                                            src="assets/img/agents/agent-03.jpg"
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
                                            <i className="fa-solid fa-star checked" />
                                        </span>
                                        <p className="rating-review">
                                            <span>5.0</span>(12 Reviews)
                                        </p>
                                    </div>
                                    <h6>
                                        <Link to={routes.agentDetails}>Enriquez</Link>
                                    </h6>
                                    <p>
                                        <i className="bx bx-user-voice" />
                                        Selling Agent
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* /Agent */}
                        {/* Agent */}
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="agent-card card flex-fill">
                                <div className="agent-img">
                                    <Link to={routes.agentDetails} className="property-img">
                                        <ImageWithBasePath
                                            className="img-fluid"
                                            alt='img'
                                            src="assets/img/agents/agent-04.jpg"
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
                                            <span>5.0</span>(22 Reviews)
                                        </p>
                                    </div>
                                    <h6>
                                        <Link to={routes.agentDetails}>Lowe</Link>
                                    </h6>
                                    <p>
                                        <i className="bx bx-user-voice" />
                                        Selling Agent
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* /Agent */}
                        {/* Agent */}
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="agent-card card flex-fill">
                                <div className="agent-img">
                                    <Link to={routes.agentDetails} className="property-img">
                                        <ImageWithBasePath
                                            className="img-fluid"
                                            alt='img'
                                            src="assets/img/agents/agent-05.jpg"
                                        />
                                    </Link>
                                    <div className="list-feature">
                                        <span>32 Listings</span>
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
                                            <span>5.0</span>(13 Reviews)
                                        </p>
                                    </div>
                                    <h6>
                                        <Link to={routes.agentDetails}>Gregory</Link>
                                    </h6>
                                    <p>
                                        <i className="bx bx-user-voice" />
                                        Buying Agent
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* /Agent */}
                        {/* Agent */}
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="agent-card card flex-fill">
                                <div className="agent-img">
                                    <Link to={routes.agentDetails} className="property-img">
                                        <ImageWithBasePath
                                            className="img-fluid"
                                            alt='img'
                                            src="assets/img/agents/agent-06.jpg"
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
                                            <span>5.0</span>(10 Reviews)
                                        </p>
                                    </div>
                                    <h6>
                                        <Link to={routes.agentDetails}>Lee</Link>
                                    </h6>
                                    <p>
                                        <i className="bx bx-user-voice" />
                                        Selling Agent
                                    </p>
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

export default AgentGrid
