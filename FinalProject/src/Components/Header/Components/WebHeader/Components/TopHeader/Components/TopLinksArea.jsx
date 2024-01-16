import React from "react";
import { Link } from "react-router-dom";

export default function TopLinksArea() {
  return (
    <>
      <div className="top-links-area flex relative flex-wrap">
        <section className="header-toplink-menu">
          <ul className="links flex items-center">
            <li>
              <Link to={"cart"}>My Account</Link>
            </li>
            <li>
              <Link to={"home"}>About Us</Link>
            </li>
            <li>
              <Link to={"home"}>Blog</Link>
            </li>
            <li>
              <Link to={"cart"}>My Wishlist</Link>
            </li>
            <li>
              <Link to={"cart"}>Cart</Link>
            </li>
            <li>
              <Link to={"auth/login"}>Log In</Link>
            </li>
          </ul>
          <span className="seperator"></span>
          <div className="social-media-links">
            <a href="" className="share-facebook">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="" className="share-twitter">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="" className="share-instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
