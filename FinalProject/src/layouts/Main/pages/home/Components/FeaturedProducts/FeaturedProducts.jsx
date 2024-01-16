import React from "react";
import Carousel from "./Carousel";

export default function FeaturedProducts() {
  return (
    <>
      <div className="featured-products">
        <div className="container">
          <div className="products-collection">
            <h2 className="section-title">
              <span className="inline-title">Featured Products</span>
            </h2>
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}
