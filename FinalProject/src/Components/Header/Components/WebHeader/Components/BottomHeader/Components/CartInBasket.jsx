import React from "react";

export default function CartInBasket() {
  return (
    <>
      <div className="cart-item-in-basket">
        <div className="product-details">
          <p className="product-name">
            <a href="">Men Towel</a>
          </p>
          <div className="items-price-in-cart">
            <span className="price-and-amount">
              1 x <span className="price-money">$29.00</span>
            </span>
          </div>
        </div>
        <a href="" className="product-image">
          <img
            src="https://porto-demo7.myshopify.com/cdn/shop/products/MenTowel_small.jpg?v=1600572297"
            alt=""
          />
        </a>
        <div className="remove-product-from-basket">
          <a href="" className="remove-button">
            <i className="fa-solid fa-xmark"></i>
          </a>
        </div>
      </div>
    </>
  );
}
