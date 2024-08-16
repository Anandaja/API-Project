import React, { useEffect } from "react";
import BreadCrumb from "../../../core/common/breadCrumb";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import ImageWithBasePath from "../../../core/img";

const Pricing = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);
  return (
    <div>
      <>
        {/* Breadcrumb */}
        <BreadCrumb title="Pricing Plan" pageTitle="Home" />
        {/* Breadcrumb */}
        {/* Pricing */}
        <section className="price-section section">
          <div className="container">
            <div className="pricing-tab align-items-center justify-content-center">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Monthly
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Yearly
                  </button>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade active show"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6">
                    <div
                      className="price-card aos"
                      data-aos="flip-right"
                      data-aos-easing="ease-out-cubic"
                    >
                      <div className="price-title">
                        <h3>Standard</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut elit tellus, luctus nec ullamcorper mattis,
                          pulvinar dapibus leo.
                        </p>
                      </div>
                      <div className="price-features bg-white">
                        <h5>Key Features</h5>
                        <ul>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            10 Listing Per Login
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            100+ Users
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Enquiry On Listing
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            24 Hrs Support
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Custom Review
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Impact Reporting
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Onboarding &amp; Account
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            API Access
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Transaction Tracking
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Branding
                          </li>
                        </ul>
                      </div>
                      <div className="price-btn">
                        <Link to="#" className="btn-primary">
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div
                      className="price-card"
                      data-aos="flip-right"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration={1000}
                    >
                      <div className="price-sticker">
                        <ImageWithBasePath
                          src="assets/img/icons/pricing-icon.svg"
                          alt="price-sticker"
                        />
                      </div>
                      <div className="price-title">
                        <h3>Professional</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut elit tellus, luctus nec ullamcorper mattis,
                          pulvinar dapibus leo.
                        </p>
                      </div>
                      <div className="price-features professional bg-white">
                        <h5>Key Features</h5>
                        <ul>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            10 Listing Per Login
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            100+ Users
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Enquiry On Listing
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            24 Hrs Support
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Custom Review
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Impact Reporting
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Onboarding &amp; Account
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            API Access
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Transaction Tracking
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Branding
                          </li>
                        </ul>
                      </div>
                      <div className="price-btn">
                        <Link to="#" className="btn-primary">
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div
                      className="price-card"
                      data-aos="flip-right"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration={2000}
                    >
                      <div className="price-title">
                        <h3>Enterprise</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut elit tellus, luctus nec ullamcorper mattis,
                          pulvinar dapibus leo.
                        </p>
                      </div>
                      <div className="price-features bg-white enterprise">
                        <h5>Key Features</h5>
                        <ul>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            10 Listing Per Login
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            100+ Users
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Enquiry On Listing
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            24 Hrs Support
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Custom Review
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Impact Reporting
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Onboarding &amp; Account
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            API Access
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Transaction Tracking
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Branding
                          </li>
                        </ul>
                      </div>
                      <div className="price-btn">
                        <Link to="#" className="btn-primary">
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6">
                    <div className="price-card">
                      <div className="price-title">
                        <h3>Standard</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut elit tellus, luctus nec ullamcorper mattis,
                          pulvinar dapibus leo.
                        </p>
                      </div>
                      <div className="price-features">
                        <h5>Key Features</h5>
                        <ul>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            80 Listing per login
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            100+ Users
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Enquiry on listing
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            24 hrs Support
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Custom Review
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Impact Reporting
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Onboarding &amp; Account
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            API Access
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Transaction tracking
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Branding
                          </li>
                        </ul>
                      </div>
                      <div className="price-btn">
                        <Link to="#" className="btn-primary">
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="price-card">
                      <div className="price-title">
                        <h3>Professional</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut elit tellus, luctus nec ullamcorper mattis,
                          pulvinar dapibus leo.
                        </p>
                      </div>
                      <div className="price-features professional">
                        <h5>Key Features</h5>
                        <ul>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            50 Listing per login
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            100+ Users
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Enquiry on listing
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            24 hrs Support
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Custom Review
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Impact Reporting
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Onboarding &amp; Account
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            API Access
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Transaction tracking
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Branding
                          </li>
                        </ul>
                      </div>
                      <div className="price-btn">
                        <Link to="#" className="btn-primary">
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="price-card">
                      <div className="price-title">
                        <h3>Enterprise</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut elit tellus, luctus nec ullamcorper mattis,
                          pulvinar dapibus leo.
                        </p>
                      </div>
                      <div className="price-features enterprise">
                        <h5>Key Features</h5>
                        <ul>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            70 Listing per login
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            100+ Users
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Enquiry on listing
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            24 hrs Support
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Custom Review
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Impact Reporting
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Onboarding &amp; Account
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            API Access
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Transaction tracking
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-square-check" />
                            </span>
                            Branding
                          </li>
                        </ul>
                      </div>
                      <div className="price-btn">
                        <Link to="#" className="btn-primary">
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Pricing */}
      </>
    </div>
  );
};

export default Pricing;
