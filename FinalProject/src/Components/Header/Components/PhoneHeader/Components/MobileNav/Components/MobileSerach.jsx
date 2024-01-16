import React from "react";
import MiniProductCart from "../../../../WebHeader/Components/BottomHeader/Components/MiniProductCart";

export default function MobileSerach() {
  return (
    <>
      <div className="mobile-search-extended">
        <form action="" className="mobile-search-form">
          <input
            type="text"
            placeholder="Search..."
            className="mobile-search-input"
          />
          <button type="submit" className="mob-search-button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <div className="search-result-wrapper">
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
    </>
  );
}
