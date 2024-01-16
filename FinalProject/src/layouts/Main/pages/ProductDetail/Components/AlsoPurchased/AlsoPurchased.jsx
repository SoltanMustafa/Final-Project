import React from "react";
import PurchasedCarousel from "./PurchasedCarousel";

export default function AlsoPurchased() {
  return (
    <>
      <div className="purchased-products">
        <div className="container">
          <div className="products-collection">
            <h2 className="section-title">
              <span className="inline-title">Also Purchased</span>
            </h2>
            <PurchasedCarousel />
          </div>
        </div>
      </div>
    </>
  );
}
