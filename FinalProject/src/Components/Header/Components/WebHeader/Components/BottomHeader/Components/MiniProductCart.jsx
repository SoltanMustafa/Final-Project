import React from "react";

export default function MiniProductCart() {
  return (
    <>
      <div className="mini-cart-holder">
        <div className="suggestion-thumb">
          <img
            src="https://porto-demo7.myshopify.com/cdn/shop/products/MenSportsCap2_688b7346-228b-467e-8c1f-d568b8a07eee_120x70.jpg?v=1600572646"
            alt=""
          />
        </div>
        <div className="suggested-product-detail">
          <div className="suggested-product-title">Products Sticky Info</div>
          <div className="price-tag flex flex-nowrap items-center mt-[7px]">
            <div className="suggested-product-prev-price">$49.00</div>
            <div className="suggested-product-price">$39.00</div>
          </div>
        </div>
      </div>
    </>
  );
}
