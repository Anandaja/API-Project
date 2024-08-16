import React from 'react'
import BreadCrumb from '../../core/common/breadCrumb'
import ImageWithBasePath from '../../core/img'
import { Link } from 'react-router-dom'

const Compare = () => {
  return (
    <div>
      <>
  {/* Breadcrumb */}
  <BreadCrumb title="Compare Properties" pageTitle="Home" />
  {/* Breadcrumb */}
  {/* Blog Grid*/}
  <div className="buy-detailview bg-white">
    <div className="container">
      <div className="row">
        <div className="compare-table">
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td className="empty-cell" />
                  <td>
                    <div className="compare-head">
                      <h4>Renovated Apartment</h4>
                      <div className="compare-action">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="Property Image"
                          src="assets/img/product/product-1.jpg"
                        />
                        <Link to="#">
                          <i className="bx bx-trash" />
                        </Link>
                      </div>
                      <span>1421 San Pedro St, Los Angeles</span>
                      <h5>$1,250,000</h5>
                    </div>
                  </td>
                  <td>
                    <div className="compare-head">
                      <h4>Gorgeous Villa Bay View</h4>
                      <div className="compare-action">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="Property Image"
                          src="assets/img/product/product-2.jpg"
                        />
                        <Link to="#">
                          <i className="bx bx-trash" />
                        </Link>
                      </div>
                      <span>6 Bishop Ave. Perkasie, PA</span>
                      <h5>$1,250,000</h5>
                    </div>
                  </td>
                  <td>
                    <div className="compare-head">
                      <h4>Luxury Family Home</h4>
                      <div className="compare-action">
                        <ImageWithBasePath
                          className="img-fluid"
                          alt="Property Image"
                          src="assets/img/product/product-3.jpg"
                        />
                        <Link to="#">
                          <i className="bx bx-trash" />
                        </Link>
                      </div>
                      <span>1421 San Pedro St, Los Angeles</span>
                      <h5>$1,250,000</h5>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Type</th>
                  <td>Apartment</td>
                  <td>Apartment</td>
                  <td>Apartment</td>
                </tr>
                <tr>
                  <th>Rooms</th>
                  <td>8</td>
                  <td>8</td>
                  <td>8</td>
                </tr>
                <tr>
                  <th>Area</th>
                  <td>2000 Sqft</td>
                  <td>2000 Sqft</td>
                  <td>2000 Sqft</td>
                </tr>
                <tr>
                  <th>Swimming Pool</th>
                  <td>
                    <i className="bx bx-x text-danger" />
                  </td>
                  <td>
                    <i className="bx bx-x text-danger" />
                  </td>
                  <td>
                    <i className="bx bx-x text-danger" />
                  </td>
                </tr>
                <tr>
                  <th>Bed Rooms</th>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
                <tr>
                  <th>Window Covering</th>
                  <td>
                    <i className="bx bx-x text-danger" />
                  </td>
                  <td>
                    <i className="bx bx-x text-danger" />
                  </td>
                  <td>
                    <i className="bx bx-x text-danger" />
                  </td>
                </tr>
                <tr>
                  <th>Air Conditioning</th>
                  <td>
                    <i className="bx bx-check-double text-success" />
                  </td>
                  <td>
                    <i className="bx bx-check-double text-success" />
                  </td>
                  <td>
                    <i className="bx bx-check-double text-success" />
                  </td>
                </tr>
                <tr>
                  <th>Garages</th>
                  <td>
                    <i className="bx bx-check-double text-success" />
                  </td>
                  <td>
                    <i className="bx bx-check-double text-success" />
                  </td>
                  <td>
                    <i className="bx bx-check-double text-success" />
                  </td>
                </tr>
                <tr>
                  <th>Laundry Room</th>
                  <td>
                    <i className="bx bx-x text-danger" />
                  </td>
                  <td>
                    <i className="bx bx-x text-danger" />
                  </td>
                  <td>
                    <i className="bx bx-x text-danger" />
                  </td>
                </tr>
                <tr>
                  <th>Internet</th>
                  <td>
                    <i className="bx bx-check-double text-success" />
                  </td>
                  <td>
                    <i className="bx bx-check-double text-success" />
                  </td>
                  <td>
                    <i className="bx bx-check-double text-success" />
                  </td>
                </tr>
                <tr>
                  <th>Gym </th>
                  <td>
                    <i className="bx bx-check-double text-success" />
                  </td>
                  <td>
                    <i className="bx bx-check-double text-success" />
                  </td>
                  <td>
                    <i className="bx bx-check-double text-success" />
                  </td>
                </tr>
                <tr>
                  <th>Bed Rooms</th>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Blog Grid*/}
</>

    </div>
  )
}

export default Compare