import React from 'react'
import BreadCrumb from '../../../core/common/breadCrumb'

import ImageWithBasePath from '../../../core/img'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import { agenctType, area, city, customStyles, propertCategory } from '../../../core/common/select'
import { all_routes } from '../../router/all_routes'

const AagencyList = () => {
  const routes = all_routes
  return (
    <>
      {/* Breadcrumb */}
      <BreadCrumb title="Agency List Without Sidebar" pageTitle="Home" />
      {/* Breadcrumb */}
      {/* Content */}
      <div className="listing-section">
        <div className="container">
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
          <div className="row">
            <div className="col-lg-12">
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
            </div>
          </div>
        </div>
      </div>
      {/* /Content */}
    </>
  )
}

export default AagencyList
