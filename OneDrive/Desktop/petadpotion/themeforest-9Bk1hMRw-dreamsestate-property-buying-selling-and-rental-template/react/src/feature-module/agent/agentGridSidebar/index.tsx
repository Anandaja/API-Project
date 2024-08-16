import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../core/img'
import AgentSidebar from '../agentSidebar'
import BreadCrumb from '../../../core/common/breadCrumb'
import { all_routes } from '../../router/all_routes'


const AgentGridSidebar = () => {
    const routes = all_routes
    return (
        <div>
            {/* Breadcrumb */}
            <BreadCrumb title="Agent Grid With Sidebar" pageTitle="Home" />
            {/* Breadcrumb */}
            {/* Content */}
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 theiaStickySidebar">
                            {/* Sidebar */}
                           <AgentSidebar/>
                            {/* /Sidebar */}
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                {/* Agent */}
                                <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
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
                                <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
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
                                                    <span>5.0</span>(8 Reviews)
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
                                <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
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
                                                    <span>5.0</span>(5 Reviews)
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
                                <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
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
                                                    <span>5.0</span>(11 Reviews)
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
                                <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
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
                                                    <span>5.0</span>(12 Reviews)
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
                                <div className="col-xl-4 col-lg-6 col-md-6 d-flex">
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

export default AgentGridSidebar
