import React from "react";

export default function ShoppingTop() {
  return (
    <>
      <div className="shopping-top-main">
        <div className="shopping-top">
          <div className="shop-wrap-container container">
            <div className="row">
              <div className="col-md-12 shop-top-col">
                <div className="main-content-holder">
                  <div className="main-text-content">
                    <div className="text-content-inside">
                      <h3 className="new-season">New Season Sale</h3>
                      <h3 className="off-40percent">40% OFF</h3>
                    </div>
                  </div>
                  <div className="button-holder">
                    <div className="button-inside">
                      <button className="shop-now-btn">
                        <span>Shop now</span>
                        <i class="fa-solid fa-arrow-right-long"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shopping-nav">
          <div className="container">
            <div className="nav-holder">
              <ul className="shopping-links">
                <li className="back-home-li">
                  <a href="">Home</a>
                </li>
                <li className="arrow-shop-li">
                  <span className="arrow-span">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                  <span className="shop-span">Shop</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
