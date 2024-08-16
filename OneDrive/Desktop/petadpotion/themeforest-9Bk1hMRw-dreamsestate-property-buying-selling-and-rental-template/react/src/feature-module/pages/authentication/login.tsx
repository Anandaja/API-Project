import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";

const Login = () => {
  const routes = all_routes;
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange =(evnt: { target: { value: React.SetStateAction<string>; }; })=>{
    setPasswordInput(evnt.target.value);
}
  
 
  const togglePassword =()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }

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
                <h1>Hey There!!! Welcome Back.</h1>
                <form >
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
                  <div className="form-group">
                    <label className="form-label">
                      Password <span>*</span>
                    </label>
                    <div className="pass-group">
                      <input
                        type={passwordType}
                        onChange={handlePasswordChange} value={passwordInput}
                        className="form-control pass-input"
                        placeholder="Enter Password"
                      />
                      <span className="toggle-password"  onClick={togglePassword}>
                      {passwordType === "password" ? <span className="fas fa-eye"></span> : <span className="fas fa-eye-slash"></span>}
                      </span>
                    </div>
                  </div>
                  <div className="form-group mb-5">
                    <Link className="forgot-link" to={routes.forgotPassword}>
                      Forgot Password ?
                    </Link>
                  </div>
                  <div className="form-group">
                    <label className="custom_check mt-0 mb-0">
                      <span>Remember me</span>
                      <input type="checkbox" name="remeber" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <Link
                    to={routes.home}
                    className="btn btn-outline-light w-100 btn-size"
                  >
                    Sign In
                  </Link>
                  <div className="login-or">
                    <span className="span-or-log">
                      Or, Sign in with your email
                    </span>
                  </div>
                  {/* Social Login */}
                  <div className="social-login">
                    <Link
                      to="#"
                      className="d-flex align-items-center justify-content-center form-group btn google-login w-100"
                    >
                      <span>
                        <img
                          src="assets/img/icons/google.svg"
                          className="img-fluid"
                          alt="Google"
                        />
                      </span>
                      Sign in with Google
                    </Link>
                  </div>
                  <div className="social-login">
                    <Link
                      to="#"
                      className="mb-0 d-flex align-items-center justify-content-center form-group btn google-login w-100"
                    >
                      <span>
                        <img
                          src="assets/img/icons/facebook.svg"
                          className="img-fluid"
                          alt="Facebook"
                        />
                      </span>
                      Sign in with Facebook
                    </Link>
                  </div>
                  {/* /Social Login */}
                  <div className="text-center dont-have">
                    Don't have an account ? <Link to={routes.register}>Sign Up</Link>
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

export default Login;
