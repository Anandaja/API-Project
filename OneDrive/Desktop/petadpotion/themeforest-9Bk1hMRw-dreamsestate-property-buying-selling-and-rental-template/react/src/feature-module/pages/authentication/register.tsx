import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";

const Register = () => {
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
                <h1>
                  Signup! <span className="d-block"> New Account.</span>
                </h1>
                <form >
                  <div className="form-group">
                    <label className="form-label">
                      Name <span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                    />
                  </div>
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
                    Sign Up
                 </Link>
                  <div className="login-or">
                    <span className="span-or-log">
                      Or, Sign up with your email
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
                      Sign up with Google
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
                      Sign up with Facebook
                   </Link>
                  </div>
                  {/* /Social Login */}
                  <div className="text-center dont-have">
                    Already have login ? <Link to={routes.login}>Sign In</Link>
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

export default Register;
