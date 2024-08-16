import React from "react";
import ImageWithBasePath from "../../../core/img";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";

const Error500 = () => {
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
            src="assets/img/500.png"
            className="img-fluid"
            alt="Unexpected error"
          />
          <h1>500 Unexpected Error</h1>
          <p className="error-content">
            We’re having some issuesat the moment. we’ll have it fixed in no
            time.
          </p>
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

export default Error500;
