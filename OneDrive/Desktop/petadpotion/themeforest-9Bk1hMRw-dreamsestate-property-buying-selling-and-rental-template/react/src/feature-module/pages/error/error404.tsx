import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/img";
import { all_routes } from "../../router/all_routes";

const Error404 = () => {
  const routes = all_routes
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
            src="assets/img/404.png"
            className="img-fluid"
            alt="Page not found"
          />
          <h1>Oops! Page Not Found!</h1>
          <p>The page you requested was not found.</p>
          <div className="back-button">
            <Link to={routes.home} className="btn">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
