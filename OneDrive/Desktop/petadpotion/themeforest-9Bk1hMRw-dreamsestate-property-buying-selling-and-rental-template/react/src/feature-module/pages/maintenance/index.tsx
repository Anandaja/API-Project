import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/img";
import { all_routes } from "../../router/all_routes";

const Maintenace = () => {
  const routes = all_routes;
  return (
    <div className="login-body">
      <div className="container">
        {/* Header */}
        <header className="log-header">
          <Link to={routes.home}>
            <ImageWithBasePath
              className="img-fluid logo-dark"
              src="assets/img/logo.svg"
              alt="Logo"
            />
          </Link>
        </header>
        {/* /Header */}
        <div className="error-box">
          <ImageWithBasePath
            src="assets/img/maintenance.png"
            className="img-fluid"
            alt="Maintenance"
          />
          <h1 className="coming-soon mb-2">We're Down for Maintenance</h1>
          <p>
            Our website is currently undergoing scheduled maintenance, will be
            right back in a few minutes.
          </p>
          <h6>We'll Be Back Shortly</h6>
          <div className="footer-social-links">
            <ul className="nav">
              <li>
                <Link to="#">
                  <i className="fa-brands fa-instagram" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa-brands fa-twitter" />{" "}
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fab fa-youtube" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa-brands fa-linkedin-in" />
                </Link>
              </li>
            </ul>
          </div>
          <Link to={routes.home} className="btn-maintance btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Maintenace;
