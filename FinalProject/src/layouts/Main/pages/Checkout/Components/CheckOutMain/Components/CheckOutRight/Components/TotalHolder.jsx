import React from "react";
import CheckOutProduct from "./CheckOutProduct";

export default function TotalHolder() {
  return (
    <>
      <div className="total-content-holder">
        <div className="inside-content-holder">
          <div className="content-container">
            <div className="products-column">
              <CheckOutProduct />
              <CheckOutProduct />
              <CheckOutProduct />
              <CheckOutProduct />
            </div>
            <div className="price-column">
              <div className="subtotal-div">
                <span className="subtotal-text">Subtotal</span>
                <span className="subtotal-price">$328.00</span>
              </div>
              <div className="shipping-div">
                <span className="shipping-text">Shipping</span>
                <span className="shipping-price">$20.00</span>
              </div>
              <div className="total-div">
                <span className="total-text">Total</span>
                <span className="total-price">
                  <span className="currency">USD</span>
                  <span className="amount">$348.00</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
