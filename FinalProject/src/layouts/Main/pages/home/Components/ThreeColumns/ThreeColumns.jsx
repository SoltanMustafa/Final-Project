import React from "react";
import ThreeColumnProduct from "./ThreeColumnProduct";

export default function ThreeColumns() {
  return (
    <>
      <div className="three-columns">
        <div className="container">
          <hr className="seperator-line" />
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12 column-container">
              <div className="products-collection">
                <h2 className="section-title">
                  <span className="inline-title">Best Selling Products</span>
                </h2>
                <div className="products-lists">
                  <div className="products-inner-column">
                    <div className="products-grid">
                      <ThreeColumnProduct />
                      <ThreeColumnProduct />
                      <ThreeColumnProduct />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 column-container">
              <div className="products-collection">
                <h2 className="section-title">
                  <span className="inline-title">Top Rated Products</span>
                </h2>
                <div className="products-lists">
                  <div className="products-inner-column">
                    <div className="products-grid">
                      <ThreeColumnProduct />
                      <ThreeColumnProduct />
                      <ThreeColumnProduct />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 column-container">
              <div className="products-collection">
                <h2 className="section-title">
                  <span className="inline-title">Featured Products</span>
                </h2>
                <div className="products-lists">
                  <div className="products-inner-column">
                    <div className="products-grid">
                      <ThreeColumnProduct />
                      <ThreeColumnProduct />
                      <ThreeColumnProduct />
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
