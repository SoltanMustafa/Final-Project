import React from "react";

export default function RegisterForm() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 main-form-content">
            <div className="account-login-register">
              <div className="login-register-form-holder">
                <div className="col-md-6 margine-bottom">
                  <div className="form-box">
                    <h3 className="page-title">Register</h3>
                    <div className="content">
                      <form action="">
                        <ul className="form-list">
                          <li className="input-li">
                            <label
                              htmlFor="Customer Email"
                              className="hidden-label"
                            >
                              <span>First Name</span>
                              <em>*</em>
                            </label>
                            <input
                              type="text"
                              name=""
                              className="input-itself"
                              required
                            />
                          </li>
                          <li className="input-li">
                            <label
                              htmlFor="Customer Email"
                              className="hidden-label"
                            >
                              <span>Last Name</span>
                              <em>*</em>
                            </label>
                            <input
                              type="text"
                              name=""
                              className="input-itself"
                              required
                            />
                          </li>
                          <li className="input-li">
                            <label
                              htmlFor="Customer Email"
                              className="hidden-label"
                            >
                              <span>Email Address</span>
                              <em>*</em>
                            </label>
                            <input
                              type="email"
                              name=""
                              className="input-itself"
                              required
                            />
                          </li>
                          <li className="input-li">
                            <label
                              htmlFor="Customer Email"
                              className="hidden-label"
                            >
                              <span>Password</span>
                              <em>*</em>
                            </label>
                            <input
                              type="password"
                              name=""
                              className="input-itself"
                              required
                            />
                          </li>
                          <li className="mb-[24px]">
                            <a href="">Forgot your password?</a>
                          </li>
                          <li className="mb-[24px]">
                            <button type="submit" className="black-button">
                              <span>Submit</span>
                            </button>
                          </li>
                        </ul>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
