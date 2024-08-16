import React from "react";
import BreadCrumb from "../../../core/common/breadCrumb";

import ImageWithBasePath from "../../../core/img";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";

const InvoiceDetails = () => {
  const routes = all_routes;
  return (
    <div>
      <>
        {/* Breadcrumb */}
        <BreadCrumb title="Invoice Details" pageTitle="Home" />
        {/* Breadcrumb */}
        {/* Invoice */}
        <section className="invoice-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 offset-md-1 col-md-10 col-lg-10">
                <div className="card">
                  <div className="head">
                    <Link
                      to={routes.home}
                      className="navbar-brand logo d-flex align-items-center"
                    >
                      <ImageWithBasePath
                        src="assets/img/logo.svg"
                        className="img-fluid"
                        alt="Logo"
                      />
                    </Link>
                    <div className="head-info text-end">
                      <h4 className="text-uppercase">INVOICE</h4>
                      <h5>DreamsEstate</h5>
                      <p>REG: 123000123000</p>
                      <p className="mb-0">
                        info@example.com | +64 123 1234 123
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="dull-bg from-to">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <h5>From </h5>
                        <p>Joseph</p>
                        <p>45, 5th Street Newyork, USA</p>
                        <p>LX6457</p>
                      </div>
                      <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <h5>To </h5>
                        <p>Yaseer</p>
                        <p>778 Mittal street, Germany</p>
                        <p>454787</p>
                      </div>
                      <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                        <table className="short-info w-100">
                          <tbody>
                            <tr>
                              <td>Invoice Number:</td>
                              <td className="float-end">
                                <span>INV-0002</span>
                              </td>
                            </tr>
                            <tr>
                              <td>Invoice Date:</td>
                              <td className="float-end">
                                <span>02 Jan 2023</span>
                              </td>
                            </tr>
                            <tr>
                              <td>Due:</td>
                              <td className="float-end">
                                <span>20 Jan 2023</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="invoice-table table table-bordered">
                      <thead>
                        <tr>
                          <th>Description</th>
                          <th>Qty</th>
                          <th>Price</th>
                          <th>GST</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Product Name</td>
                          <td>1</td>
                          <td>2000.00</td>
                          <td>0.00</td>
                          <td>2,000.00</td>
                        </tr>
                        <tr>
                          <td>Product Name</td>
                          <td>1</td>
                          <td>2000.00</td>
                          <td>0.00</td>
                          <td>2,000.00</td>
                        </tr>
                        <tr>
                          <td>Product Name</td>
                          <td>1</td>
                          <td>2000.00</td>
                          <td>0.00</td>
                          <td>2,000.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Total */}
                  <div className="row">
                    <div className="col-sm-12 col-md-7 col-xl-7 ms-auto">
                      <div className="dull-bg total-wrap">
                        <table className="table-responsive table total">
                          <tbody>
                            <tr>
                              <td>
                                <h6>Sub Total (excl. GST)</h6>
                              </td>
                              <td className="total-price">
                                <h6>
                                  <span>$6,000.00</span>
                                </h6>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h6>Total GST:</h6>
                              </td>
                              <td className="total-price">
                                <h6>
                                  <span>$0.00</span>
                                </h6>
                              </td>
                            </tr>
                            <tr className="credit-amount">
                              <td>
                                <h6>Credit card fee (if using):</h6>
                              </td>
                              <td className="total-price">
                                <h6>
                                  <span>$92.00</span>
                                </h6>
                              </td>
                            </tr>
                            <tr className="total-amount">
                              <td>
                                <h6>Amount due on 20 Jan 2023:</h6>
                              </td>
                              <td className="total-price">
                                <h6>
                                  <span>6,000.00 USD</span>
                                </h6>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* /Total */}
                  <div className="payment-detail d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-uppercase text-primary">
                        PAYMENT INSTRUCTIONS
                      </h6>
                      <h5>DreamsEstate</h5>
                      <p>Bank Name: ABC Bank limited</p>
                      <p>SWIFT/IBAN: NZ0201230012</p>
                      <p>Account Number: 12-1234-123456-12</p>
                      <p className="mt-4">
                        Please use as INV-0002 as a reference number
                      </p>
                      <p className="mb-0">
                        For any questions please contact us at info@example.com
                      </p>
                    </div>
                    <div className="pay-online">
                      <h5>Pay Online</h5>
                      <Link
                        to={routes.home}
                        className="navbar-brand logo d-flex align-items-center"
                      >
                        <ImageWithBasePath
                          src="assets/img/pay-online.jpg"
                          className="img-fluid"
                          alt="Image"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Invoice */}
      </>
    </div>
  );
};

export default InvoiceDetails;
