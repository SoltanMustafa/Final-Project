import React from "react";
import SingleProduct from "./SingleProduct";

export default function JustArrived() {
  return (
    <>
      <div className="just-arrived">
        <div className="container pt-[32px]">
          <div className="product-collection">
            <h2 className="section-title">
              <span className="inline-title">Just Arrived</span>
            </h2>
            <div className="products-element">
              <div className="lists-of-product">
                <div className="products-container">
                  <SingleProduct />
                  <SingleProduct />
                  <SingleProduct />
                  <SingleProduct />
                  <SingleProduct />
                  <SingleProduct />
                  <SingleProduct />
                  <SingleProduct />
                  <SingleProduct />
                  <SingleProduct />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
