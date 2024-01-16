import React from "react";

export default function BrandItem() {
  return (
    <>
      <div className="brand-item">
        <div className="item-inner">
          <a href="">
            <span className="thumb-info">
              <span className="thumb-image">
                <img
                  src="https://cdn.shopify.com/s/files/1/1613/0131/files/shop7_cat1.jpg?v=1600310193"
                  alt=""
                />
              </span>
              <span className="thumb-text">
                <h3 className="sub-title">Pull & Bear</h3>
                <span className="product-count">3 Products</span>
              </span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
