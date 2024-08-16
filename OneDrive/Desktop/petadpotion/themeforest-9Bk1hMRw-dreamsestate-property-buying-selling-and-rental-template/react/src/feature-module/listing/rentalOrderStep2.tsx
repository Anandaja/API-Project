import React from 'react'
import BreadCrumb from '../../core/common/breadCrumb'
import { all_routes } from '../router/all_routes'
import { Link } from 'react-router-dom'

const RentalOrderStep2 = () => {
    const routes = all_routes
    return (
        <div>
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
                            <div className="booking-details">
                                <h4>Property Booking Details</h4>
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
                        <div className="col-lg-12">
                            <div className="booking-details">
                                <h4>Information</h4>
                                <ul className="information-details">
                                    <li>
                                        <h5>Name</h5>
                                        <p>Roudrigez</p>
                                    </li>
                                    <li>
                                        <h5>Email</h5>
                                        <p>info@example.com</p>
                                    </li>
                                    <li>
                                        <h5>Phone Number </h5>
                                        <p>+1 4985005 9404840</p>
                                    </li>
                                </ul>
                                <ul className="information-details">
                                    <li>
                                        <h5>Name</h5>
                                        <p>318-330 S Oakley Bl vd, Chicago, IL 60612, USA</p>
                                    </li>
                                </ul>
                                <ul className="information-details mb-0">
                                    <li className="me-0">
                                        <h5>Comments</h5>
                                        <p>
                                            This property is mostly wooded and sits high on a hilltop
                                            overlooking the Mohawk River Valley. Located right in the
                                            heart Upstate NYs Amish farm Country, this land is certified
                                            organic making it extremely rare!{" "}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="booking-details-btn">
                                <Link to={routes.rentalOrderStep1} className="btn btn-lightred me-2">
                                    Back to Order Details
                                </Link>
                                <Link to={routes.rentalOrderStep2} className="btn btn-primary">
                                    Go to Payment
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Detail View Section */}
        </div>
    )
}

export default RentalOrderStep2
