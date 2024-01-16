import React from "react";
import { Link } from "react-router-dom";

export default function LoginTop() {
  return (
    <>
      <section className="page-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="top-text">
                <ul className="links-ul">
                  <li className="home-page-link">
                    <Link to={"/"}>Home</Link>
                    <i className="fa-solid fa-angle-right"></i>
                  </li>
                  <li>
                    <span>My Account</span>
                  </li>
                </ul>
              </div>
              <div className="bottom-text">
                <h1 className="page-title">
                  <span>My Account</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
