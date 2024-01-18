import React from "react";

export default function FeaturedFilterProduct() {
  return (
    <>
      <div className="product-container">
        <a href="" className="product-image">
          <div className="inner">
            <img
              src="https://porto-demo7.myshopify.com/cdn/shop/products/BlackGlasses_150x150_crop_center.jpg?v=1600571397"
              alt=""
            />
          </div>
        </a>
        <div className="product-details">
          <a href="" className="product-title-a">
            <span className="product-title">Black Glassess</span>
          </a>
          <div className="star-rating">
            <span className="star-badge">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </span>
          </div>
          <div className="product-price">
            <span className="money">$120.00</span>
          </div>
        </div>
      </div>
    </>
  );
}
