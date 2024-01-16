import React, { useState } from "react";
import MiniProductCart from "./MiniProductCart";

export default function NavSearch() {
  const [menuActive, setMenuActuive] = useState(false);

  const handleMenuToggle = () => {
    setMenuActuive((prevVisible) => !prevVisible);
  };

  return (
    <>
      <div className="search-area">
        <div className="search-icon" onClick={handleMenuToggle}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div
          className={`search-extended ${
            menuActive ? "search-extended-active" : ""
          }`}
        >
          <form action="" role="search" className="search-form">
            <input
              className="search-input"
              type="text"
              name=""
              id=""
              placeholder="Search..."
            />
            <div className="search-brands">
              <a href="" className="selected-brands">
                <span className="selected-brand">
                  All Categories
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </a>
            </div>
            <button className="form-search-button">
              <div className="i-holder-div">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </button>
          </form>
          <div className="search-result-wrapper search-result-active">
            <div className="results-holder">
              <div className="not-products-found">No products found</div>
              <div className="found-products">
                <div className="found-products-holder">
                  <MiniProductCart />
                </div>
                <div className="view-all-products">
                  <span>View All Resulst</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
