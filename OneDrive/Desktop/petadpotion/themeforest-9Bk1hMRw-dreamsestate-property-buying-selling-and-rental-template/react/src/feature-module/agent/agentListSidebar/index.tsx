import React from 'react'
import ImageWithBasePath from '../../../core/img'
import { Link } from 'react-router-dom'
import AgentSidebar from '../agentSidebar'
import BreadCrumb from '../../../core/common/breadCrumb'
import { all_routes } from '../../router/all_routes'


const AgentListSidebar = () => {
    const routes = all_routes
    return (
        <div>
            {/* Breadcrumb */}
            <BreadCrumb title="Agent List With Sidebar" pageTitle="Home" />
            {/* Breadcrumb */}
            {/* Content */}
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 theiaStickySidebar">
                            <div className='stickybar'>
                            {/* Sidebar */}
                           <AgentSidebar />
                            {/* /Sidebar */}
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                {/* Agent */}
                                <div className="col-lg-12 d-flex">
                                    <div className="agent-list flex-fill">
                                        <div className="agent-img">
                                            <Link to={routes.agentDetails} className="property-img">
                                                <ImageWithBasePath
                                                    className="img-fluid"
                                                    alt='img'
                                                    src="assets/img/agents/agent-list-01.jpg"
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
                                                            <span>5.0</span>(80 Reviews)
                                                        </p>
                                                    </div>
                                                    <h6>
                                                        <Link to={routes.agentDetails}>Mike Rutter</Link>
                                                    </h6>
                                                    <h5>
                                                        <i className="bx bx-user-voice" />
                                                        Selling Agent
                                                    </h5>
                                                </div>
                                                <div className="list-feature">
                                                    <span>60 Listings</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p>
                                                    We were referred to Eric through our close friends and are
                                                    so happy with the service he provided! This was our first
                                                    house, so we had a lot of questions and he was happy to
                                                    answer them all!
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
                                </div>
                                {/* /Agent */}
                                {/* Agent */}
                                <div className="col-lg-12 d-flex">
                                    <div className="agent-list flex-fill">
                                        <div className="agent-img">
                                            <Link to={routes.agentDetails} className="property-img">
                                                <ImageWithBasePath
                                                    className="img-fluid"
                                                    alt='img'
                                                    src="assets/img/agents/agent-list-02.jpg"
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
                                                    <h6>
                                                        <Link to={routes.agentDetails}>Pamela</Link>
                                                    </h6>
                                                    <h5>
                                                        <i className="bx bx-user-voice" />
                                                        Buying Agent
                                                    </h5>
                                                </div>
                                                <div className="list-feature">
                                                    <span>30 Listings</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p>
                                                    We were referred to Eric through our close friends and are
                                                    so happy with the service he provided! This was our first
                                                    house, so we had a lot of questions and he was happy to
                                                    answer them all!
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
                                </div>
                                {/* /Agent */}
                                {/* Agent */}
                                <div className="col-lg-12 d-flex">
                                    <div className="agent-list flex-fill">
                                        <div className="agent-img">
                                            <Link to={routes.agentDetails} className="property-img">
                                                <ImageWithBasePath
                                                    className="img-fluid"
                                                    alt='img'
                                                    src="assets/img/agents/agent-list-03.jpg"
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
                                                            <span>5.0</span>(25 Reviews)
                                                        </p>
                                                    </div>
                                                    <h6>
                                                        <Link to={routes.agentDetails}>Enriquez</Link>
                                                    </h6>
                                                    <h5>
                                                        <i className="bx bx-user-voice" />
                                                        Selling Agent
                                                    </h5>
                                                </div>
                                                <div className="list-feature">
                                                    <span>40 Listings</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p>
                                                    We were referred to Eric through our close friends and are
                                                    so happy with the service he provided! This was our first
                                                    house, so we had a lot of questions and he was happy to
                                                    answer them all!
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
                                </div>
                                {/* /Agent */}
                                {/* Agent */}
                                <div className="col-lg-12 d-flex">
                                    <div className="agent-list flex-fill">
                                        <div className="agent-img">
                                            <Link to={routes.agentDetails} className="property-img">
                                                <ImageWithBasePath
                                                    className="img-fluid"
                                                    alt='img'
                                                    src="assets/img/agents/agent-list-04.jpg"
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
                                                            <span>5.0</span>(25 Reviews)
                                                        </p>
                                                    </div>
                                                    <h6>
                                                        <Link to={routes.agentDetails}>Lowe</Link>
                                                    </h6>
                                                    <h5>
                                                        <i className="bx bx-user-voice" />
                                                        Selling Agent
                                                    </h5>
                                                </div>
                                                <div className="list-feature">
                                                    <span>55 Listings</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p>
                                                    We were referred to Eric through our close friends and are
                                                    so happy with the service he provided! This was our first
                                                    house, so we had a lot of questions and he was happy to
                                                    answer them all!
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
                                </div>
                                {/* /Agent */}
                                {/* Agent */}
                                <div className="col-lg-12 d-flex">
                                    <div className="agent-list flex-fill">
                                        <div className="agent-img">
                                            <Link to={routes.agentDetails} className="property-img">
                                                <ImageWithBasePath
                                                    className="img-fluid"
                                                    alt='img'
                                                    src="assets/img/agents/agent-list-05.jpg"
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
                                                            <span>5.0</span>(23 Reviews)
                                                        </p>
                                                    </div>
                                                    <h6>
                                                        <Link to={routes.agentDetails}>Gregory</Link>
                                                    </h6>
                                                    <h5>
                                                        <i className="bx bx-user-voice" />
                                                        Buying Agent
                                                    </h5>
                                                </div>
                                                <div className="list-feature">
                                                    <span>45 Listings</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p>
                                                    We were referred to Eric through our close friends and are
                                                    so happy with the service he provided! This was our first
                                                    house, so we had a lot of questions and he was happy to
                                                    answer them all!
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
                                </div>
                                {/* /Agent */}
                                {/* Agent */}
                                <div className="col-lg-12 d-flex">
                                    <div className="agent-list flex-fill">
                                        <div className="agent-img">
                                            <Link to={routes.agentDetails} className="property-img">
                                                <ImageWithBasePath
                                                    className="img-fluid"
                                                    alt='img'
                                                    src="assets/img/agents/agent-list-06.jpg"
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
                                                            <span>5.0</span>(67 Reviews)
                                                        </p>
                                                    </div>
                                                    <h6>
                                                        <Link to={routes.agentDetails}>Lee Rutter</Link>
                                                    </h6>
                                                    <h5>
                                                        <i className="bx bx-user-voice" />
                                                        Selling Agent
                                                    </h5>
                                                </div>
                                                <div className="list-feature">
                                                    <span>50 Listings</span>
                                                </div>
                                            </div>
                                            <div>
                                                <p>
                                                    We were referred to Eric through our close friends and are
                                                    so happy with the service he provided! This was our first
                                                    house, so we had a lot of questions and he was happy to
                                                    answer them all!
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

export default AgentListSidebar
