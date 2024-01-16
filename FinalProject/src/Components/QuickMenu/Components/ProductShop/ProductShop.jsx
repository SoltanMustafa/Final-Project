import React from "react";
import ProductAddToCart from "./ProductAddToCart";
import SocialMediaIcons from "./SocialMediaIcons";

export default function ProductShop() {
  return (
    <>
      <div className="col-md-6 product-shop">
        <div className="product-shop-wrapper">
          <div className="product-name">
            <h1>
              <a href="">Men Black Belt</a>
            </h1>
          </div>
          <div className="product-review">
            <span className="review-badge">
              <span className="stars-span">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
              <span className="caption-span">No reviews</span>
            </span>
          </div>
          <div className="product-price-data">
            <div className="price-box">
              <div className="detail-price">
                <del className="prev-price">
                  <span className="money">$259.00</span>
                </del>
                <div className="current-price">
                  <span className="money">$209.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="short-description">
            <div className="description-inside">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat.
            </div>
          </div>
          <div className="product-stock-state">
            <div className="product-stock">
              <span>Availability: </span>
              <span className="in-stock">In Stock</span>
            </div>
            <div className="product-brand">
              <span>Brand: </span>
              <span className="brand-list">
                <a href="">Pull & Bear</a>
              </span>
            </div>
          </div>
          <ProductAddToCart />
          <SocialMediaIcons />
        </div>
      </div>
    </>
  );
}
