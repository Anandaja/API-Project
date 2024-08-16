import React, { useState } from 'react'
import BreadCrumb from '../../core/common/breadCrumb'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../core/img'
import { all_routes } from '../router/all_routes'

const RentalOrderStep3 = () => {
    const routes = all_routes
    const [activeIndex, setActiveIndex] = useState(1);

    const handleClick = (index: any) => {
        setActiveIndex(index);
    };

    return (
        <>
            {/* Breadcrumb */}
            <BreadCrumb title="Rental Booking" pageTitle="Home" />
            {/* Breadcrumb */}
            {/* Detail View Section */}
            <section className="content inner-content bg-white">
                <div className="container">
                    <div className="row">
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
                            <div className="booking-details mb-0 pb-lg-3 pb-0">
                                <h4>Choose Payment Method</h4>
                                <div className="payment-icon">
                                    <ul>
                                        <li className={activeIndex === 0 ? "active" : ""} onClick={() => handleClick(0)}>

                                            <span>
                                                <ImageWithBasePath src="assets/img/payment/paypal.png" alt="img" />
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <ImageWithBasePath src="assets/img/payment/stripe.png" alt="img" />
                                            </span>
                                        </li>
                                        <li className="active">
                                            <span>
                                                <ImageWithBasePath src="assets/img/payment/card.png" alt="img" />
                                            </span>
                                        </li>
                                        <li className="mb-0">
                                            <span>
                                                <ImageWithBasePath src="assets/img/payment/wallet.png" alt="img" />
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <h4>Add New Card</h4>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="review-form">
                                            <label>Card Number</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="+1 3940 9404"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="review-form">
                                            <label>
                                                Card Holder Name<span className="manitory">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Roudrigez"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-12">
                                        <div className="review-form">
                                            <label>Select Date</label>
                                            <input
                                                type="text"
                                                className="form-control datetimepicker"
                                                placeholder="Select Date"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-12">
                                        <div className="review-form">
                                            <label>&nbsp;</label>
                                            <select className="form-control select">
                                                <option>Select Year</option>
                                                <option>2012</option>
                                                <option>2013</option>
                                                <option>2014</option>
                                                <option>2015</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="review-form">
                                            <label>CVV</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Security Number"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="booking-details-btn">
                                <Link to={routes.rentalOrder} className="btn btn-lightred me-2">
                                    Go Back
                                </Link>
                                <Link
                                    to="#"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#success"
                                >
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Detail View Section */}
        </>

    )
}

export default RentalOrderStep3
