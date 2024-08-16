import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import { CornerDownLeft } from "react-feather";

const ForgotPassword = () => {
    const routes = all_routes;
  return (
    <div className="login-body">
      <div className="container">
        {/* Header */}
        <header className="log-header">
          <Link to={routes.home}>
            <img
              className="img-fluid logo-dark"
              src="assets/img/logo.svg"
              alt="Logo"
            />
          </Link>
        </header>
        {/* /Header */}
        <div className="login-wrapper">
          <div className="loginbox">
            <div className="login-auth">
              <div className="login-auth-wrap">
                <div className="sign-group">
                  <Link to={routes.home} className="btn sign-up">
                    <span>
                     
                       <CornerDownLeft size={15} className='me-1'/>
                    </span>{" "}
                    Back To Home
                  </Link>
                </div>
                <h1>Forgot Password</h1>
                <form>
                  <div className="form-group">
                    <label className="form-label">
                      Email <span>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                    />
                  </div>
                  <Link
                    to={routes.restPassword}
                    className="btn btn-outline-light w-100 btn-size"
                  >
                    Sign Up
                  </Link>
                  <div className="text-center dont-have">
                    Remember login ? <Link to={routes.login}>Sign In</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
