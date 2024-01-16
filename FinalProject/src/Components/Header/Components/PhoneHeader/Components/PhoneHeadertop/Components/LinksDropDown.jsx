import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LinksDropDown() {
  const [menuActive, setMenuActuive] = useState(false);

  const handleMenuToggle = () => {
    setMenuActuive((prevVisible) => !prevVisible);
  };
  return (
    <>
      <ul className="links flex items-center">
        <li className="dropdown-link" onClick={handleMenuToggle}>
          <span className="link-span">Links</span>
          <i className="fa-solid fa-angle-down ml-[3px]"></i>
          <ul
            className={`dropdown-menu-for-links ${
              menuActive ? "dropdown-menu-active" : ""
            }`}
          >
            <li className="dropdown-menu-li">
              <Link to={"cart"}>My Account</Link>
            </li>
            <li className="dropdown-menu-li">
              <a href="">About us</a>
            </li>
            <li className="dropdown-menu-li">
              <a href="">Blog</a>
            </li>
            <li className="dropdown-menu-li">
              <a href="">My Wishlist</a>
            </li>
            <li className="dropdown-menu-li">
              <Link to={"cart"}>Cart</Link>
            </li>
            <li className="dropdown-menu-li">
              <Link to={"auth/login"}>Login</Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
