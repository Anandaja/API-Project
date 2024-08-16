import React from 'react'
import ImageWithBasePath from '../../../core/img'
import { Link } from "react-router-dom";
import { all_routes } from '../../router/all_routes';

const ComingSoon = () => {
  const routes = all_routes
  return (
    <div className="login-body">
    <div className="container">
        {/* Header */}
        <header className="log-header">
          <Link to={routes.home}><ImageWithBasePath className="img-fluid logo-dark" src="assets/img/logo.svg" alt="Logo" /></Link>
        </header>
        {/* /Header */}
        <div className="error-box come-box">
          <h1>Coming Soon</h1>
          <p>We'll be here soon with our new awesome site, subscribe to be notified.</p>
          <h6>We'll Be Back Shortly</h6>
          <div className="footer-social-links">
            <ul className="nav">						
              <li>
                <Link to="#"><i className="fa-brands fa-instagram hi-icon" /></Link>
              </li>						
              <li>
                <Link to="#"><i className="fa-brands fa-twitter hi-icon" /> </Link>
              </li>						
              <li>
                <Link to="#"><i className="fab fa-youtube hi-icon" /></Link>
              </li>
              <li>
                <Link to="#"><i className="fa-brands fa-facebook-f hi-icon" /></Link>
              </li>
              <li>
                <Link to="#"><i className="fa-brands fa-linkedin hi-icon" /></Link>
              </li>
            </ul>
          </div>
          <div className="serve-form">
            <form action="#">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter Email" />
                <button type="submit" className="btn button-notific btn-primary d-flex align-items-center">
                  <span>Notify Me</span>
                </button>
              </div>
            </form>
          </div>
          <div className="back-button">
            <Link to={routes.home} className="btn-maintance btn">Back to Home</Link>
          </div>
        </div>
      </div>
      </div>
  )
}

export default ComingSoon