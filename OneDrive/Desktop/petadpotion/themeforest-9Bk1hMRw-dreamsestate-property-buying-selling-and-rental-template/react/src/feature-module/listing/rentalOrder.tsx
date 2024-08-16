import React from "react";
import BreadCrumb from "../../core/common/breadCrumb";
import { Link } from "react-router-dom";
import { all_routes } from "../router/all_routes";
import Select from 'react-select';
import { customStyles, sortByTime1,  } from "../../core/common/select";

const RentalOrder = () => {
  const routes = all_routes;
  return (
    <div>
      <>
        {/* Breadcrumb */}
        <BreadCrumb title="Rental Booking" pageTitle="Home" />
        {/* Breadcrumb */}
        {/* Detail View Section */}
        <section className="content inner-content bg-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="success-div">
                  <span>
                    <i className="bx bx-check-circle me-1" />
                    Modern apartment in the city centre is available for rental
                  </span>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="details-div">
                  <div className="details-div-content">
                    <h5>Details</h5>
                    <p>Modern Apartment in the city centre</p>
                    <h5>Location </h5>
                    <p className="mb-0">
                      318-330 S Oakley Blvd, Chicago, IL 60612, USA
                    </p>
                  </div>
                  <div className="details-div-price">
                    <h5>Booking Amount</h5>
                    <h6>
                      $300 <span>/ Day</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="details-time">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="arrival-div">
                        <h5>Arrival Time</h5>
                        <ul>
                          <li>
                            <input type="radio" id="radio1" name="Arrival" />
                            <label htmlFor="radio1">
                              Tue<span>21</span>Feb
                            </label>
                          </li>
                          <li>
                            <input type="radio" id="radio2" name="Arrival" />
                            <label htmlFor="radio2">
                              Wed<span>22</span>Feb
                            </label>
                          </li>
                          <li>
                            <input type="radio" id="radio3" name="Arrival" />
                            <label htmlFor="radio3">
                              Thur<span>23</span>Feb
                            </label>
                          </li>
                          <li>
                            <input type="radio" id="radio4" name="Arrival" />
                            <label htmlFor="radio4">
                              Feb<span>24</span>Feb
                            </label>
                          </li>
                          <li>
                            <input type="radio" id="radio5" name="Arrival" />
                            <label htmlFor="radio5">
                              Sat<span>25</span>Feb
                            </label>
                          </li>
                        </ul>
                      </div>
                      <div className="review-form mb-0">
                      <Select options={sortByTime1} defaultValue={sortByTime1[0]} className="select" styles={customStyles} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="arrival-div arrival-dept">
                        <h5>Departure Time</h5>
                        <ul>
                          <li>
                            <input
                              type="radio"
                              id="Departure1"
                              name="Departure"
                            />
                            <label htmlFor="Departure1">
                              Tue<span>21</span>Feb
                            </label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id="Departure2"
                              name="Departure"
                            />
                            <label htmlFor="Departure2">
                              Wed<span>22</span>Feb
                            </label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id="Departure3"
                              name="Departure"
                            />
                            <label htmlFor="Departure3">
                              Thur<span>23</span>Feb
                            </label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id="Departure4"
                              name="Departure"
                            />
                            <label htmlFor="Departure4">
                              Feb<span>24</span>Feb
                            </label>
                          </li>
                          <li>
                            <input
                              type="radio"
                              id="Departure5"
                              name="Departure"
                            />
                            <label htmlFor="Departure5">
                              Sat<span>25</span>Feb
                            </label>
                          </li>
                        </ul>
                      </div>
                      <div className="review-form mb-0">
                      <Select options={sortByTime1} defaultValue={sortByTime1[0]} className="select" styles={customStyles} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="booking-details">
                  <div className="row">
                    <div className="col-lg-12">
                      <h4>Booking Details</h4>
                      <ul>
                        <li>
                          <h5>Arrival Time</h5>
                          <p>318-330 S Oakley Blvd, Chicago, IL 60612, USA</p>
                        </li>
                        <li>
                          <h5>Departure Time</h5>
                          <p>318-330 S Oakley Blvd, Chicago, IL 60612, USA</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="booking-details-price">
                  <div className="row">
                    <div className="col-lg-12">
                      <ul>
                        <li>
                          <h5>Booking Price </h5>
                          <h6>$300</h6>
                        </li>
                        <li>
                          <h5>Service Charge</h5>
                          <h6>$10</h6>
                        </li>
                        <li>
                          <h5>Tax</h5>
                          <h6>$5</h6>
                        </li>
                      </ul>
                      <ul className="booking-details-total">
                        <li>
                          <h5>Grand Total</h5>
                          <h6>$315</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="booking-details-btn">
                  <Link to="#" className="btn btn-lightred me-2">
                    Previous
                  </Link>
                  <Link
                    to={routes.rentalOrderStep1}
                    className="btn btn-primary"
                  >
                    Go to Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Detail View Section */}
      </>
    </div>
  );
};

export default RentalOrder;
