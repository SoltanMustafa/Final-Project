import React from "react";

export default function SingleProduct() {
  return (
    <>
      <div className="single-item">
        <div className="product-item">
          <div className="product-inner">
            <div className="product-image">
              <a href="" className="product-detail-link">
                <div className="labels labels-active">
                  <div className="onsale">
                    <span className="sale-lable">Sale</span>
                  </div>
                </div>
                <div className="image-holder">
                  <img
                    src="https://porto-demo7.myshopify.com/cdn/shop/products/JeansPants_300x300_crop_center.jpg?v=1600571505"
                    alt=""
                    className="first"
                  />
                  <img
                    src="https://porto-demo7.myshopify.com/cdn/shop/products/JeansPants1_300x300_crop_center.jpg?v=1600571505"
                    alt=""
                    className="second"
                  />
                </div>
              </a>
            </div>
            <div className="product-content">
              <span className="brand-list">Pull & Bear</span>
              <div className="product-title">
                <h3 className="product-title-h3">Jeans Pants</h3>
              </div>
              <div className="rating-wrap">
                <div className="rating-content">
                  <span className="stars-span">
                    <span className="inside-stars-span">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </span>
                </div>
              </div>
              <div className="product-price mb-[18px]">
                <del>
                  <span className="prev-price">
                    <span className="prev-money">$259.00</span>
                  </span>
                </del>
                <ins>
                  <span className="current-price">
                    <span className="current-money">$209.00</span>
                  </span>
                </ins>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
