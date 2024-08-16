import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import { CornerDownLeft } from "react-feather";

const ResetPassword = () => {
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
                <h1>Reset Password</h1>
                <form >
                  <div className="form-group">
                    <label className="form-label">
                      Password <span>*</span>
                    </label>
                    <div className="pass-group">
                      <input
                        type="password"
                        className="form-control pass-input"
                        placeholder="Enter Password"
                      />
                      <span className="fas fa-eye toggle-password" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Confirm Password <span>*</span>
                    </label>
                    <div className="pass-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Confirm Password"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="custom_check mt-0 mb-0">
                      <span>Remember me</span>
                      <input type="checkbox" name="remeber" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <Link
                    to={routes.login}
                    className="btn btn-outline-light w-100 btn-size"
                  >
                    Reset
                  </Link>
                  <div className="text-center dont-have">
                    Already have login ? <Link to={routes.register}>Sign In</Link>
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

export default ResetPassword;
