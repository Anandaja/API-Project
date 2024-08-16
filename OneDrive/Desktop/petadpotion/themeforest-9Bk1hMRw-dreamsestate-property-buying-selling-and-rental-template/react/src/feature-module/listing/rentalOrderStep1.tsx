import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../../core/common/breadCrumb'
import { all_routes } from '../router/all_routes'

const   RentalOrderStep1 = () => {
  const routes = all_routes
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
        <div className="col-lg-12">
          <div className="booking-details mb-0">
            <h4>Fill out this quick form</h4>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="review-form">
                  <label>
                    Name<span className="manitory">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="review-form">
                  <label>
                    Phone Number <span className="manitory">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="review-form">
                  <label>Email Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="review-form">
                  <label>Full Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Address"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="review-form mb-0">
                  <label>Special Requests / Questions / Comments</label>
                  <textarea
                    rows={5}
                    placeholder="Enter Comments"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="booking-details-btn">
            <Link to={routes.rentalOrderStep1} className="btn btn-lightred me-2">
              Back to Booking Details
            </Link>
            <Link to={routes.rentalOrderStep2} className="btn btn-primary">
              Go to Order Confirmation
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

export default RentalOrderStep1
