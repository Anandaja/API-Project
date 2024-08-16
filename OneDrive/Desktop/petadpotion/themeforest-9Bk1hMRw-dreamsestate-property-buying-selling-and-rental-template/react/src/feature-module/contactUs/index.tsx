import React from 'react'
import BreadCrumb from '../../core/common/breadCrumb'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../core/img'
import Select from 'react-select'
import { country, customStyles } from '../../core/common/select'
import { all_routes } from '../router/all_routes'
// import BreadCrumb from '../../core/common/breadCrumb'

const ContactUs = () => {
  const routes = all_routes
  return (
    <div>
        <>
  {/* Breadcrumb */}
  <BreadCrumb title="Contact Us" pageTitle="Home" />
  {/* Breadcrumb */}
  {/* Contact us */}
  <section className="section contact-section">
    <div className="container">
      <div className="contact-content">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12 d-flex">
                <div className="card">
                  <div className="card-body contact-info flex-fill">
                    <h3>Talk to Member of Sales Team</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque quis ligula eu lectus vulputate porttitor sed
                      feugiat nunc. Mauris ac consectetur ante,
                    </p>
                    <Link
                      to="#"
                      className="btn-primary d-inline-block"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 d-flex">
                <div className="card">
                  <div className="card-body contact-info flex-fill">
                    <h3>Product &amp; Account Support</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque quis ligula eu lectus vulputate porttitor sed
                      feugiat nunc. Mauris ac consectetur ante,
                    </p>
                    <Link to={routes.faq} className="btn-primary d-inline-block">
                      Go to FAQ
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <ImageWithBasePath src="assets/img/contact.jpg" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Contact us */}
  {/* Contact Info Details */}
  <section className="section contact-info-sec">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <form action="#">
            <div className="card">
              <div className="card-header">
                <h3>Get In Touch</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12 col-12">
                    <div className="form-group">
                      <label>Your Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Number"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="form-group">
                      <label>Country</label>
                      <Select options={country} defaultValue={country[0]} className="select" styles={customStyles} />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="form-group">
                      <label>Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        className="form-control"
                        rows={14}
                        placeholder="Comments"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn-primary">
                  Submit Enquiry
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6">
          <h3>Contact Details</h3>
          <div className="row">
            <div className="col-lg-12 d-flex">
              <div className="flex-fill">
                <div className="contact-info-details d-flex align-items-center">
                  <span>
                    <ImageWithBasePath src="assets/img/icons/phone.svg" alt="Image" />
                  </span>
                  <div>
                    <h4>Call Us At</h4>
                    <Link to="tel:+16398098393">+1 63980 98393</Link>,
                    <Link to="tel:+16398098393">+1 63980 98393</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 d-flex">
              <div className="flex-fill">
                <div className="contact-info-details d-flex align-items-center">
                  <span>
                    <ImageWithBasePath src="assets/img/icons/mail.svg" alt="Image" />
                  </span>
                  <div>
                    <h4>Email Us</h4>
                    <Link to="mailto:info@example.com">info@example.com</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 d-flex">
              <div className="flex-fill">
                <div className="contact-info-details d-flex align-items-center">
                  <span>
                    <ImageWithBasePath src="assets/img/icons/map-pin.svg" alt="Image" />
                  </span>
                  <div>
                    <h4>Location</h4>
                    <p>Jl. Surabaya Jaya, No.10, Surabaya United States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="map-location">
            <h3>Find Us On</h3>
            <iframe
            title='Google Map'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.8862835683544!2d-73.98256668525309!3d41.93829486962529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd0ee3286615b7%3A0x42bfa96cc2ce4381!2s132%20Kingston%20St%2C%20Kingston%2C%20NY%2012401%2C%20USA!5e0!3m2!1sen!2sin!4v1670922579281!5m2!1sen!2sin"
              height={359}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Contact Info Details */}
</>

    </div>
  )
}

export default ContactUs