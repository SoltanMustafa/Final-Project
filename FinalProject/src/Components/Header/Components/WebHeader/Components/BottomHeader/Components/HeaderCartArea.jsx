import React from "react";
import { Link } from "react-router-dom";
import CartInBasket from "./CartInBasket";

export default function HeaderCartArea() {
  return (
    <>
      <div className="header-cart-area">
        <div className="custom-block">
          <div className="phone-details flex items-center">
            <img className="phone-icon" src="./header_phone.png" alt="" />
            <span className="phone-text-holder">
              <span className="call-us-now">CALL US NOW</span>
              <br />
              <span className="phone-number text-[18px] mt-[3px] text-gray-950 font-bold">
                +123 5678 890
              </span>
            </span>
          </div>
        </div>
        <div className="mini-cart">
          <div className="cart-holder">
            <div className="icon-cart-header">
              {/*?xml version="1.0" ?*/}
              <svg
                className="w-[28px]"
                id="레이어_1"
                style={{ enableBackground: "new 0 0 40 40" }}
                version="1.1"
                viewBox="0 0 40 40"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path d="M32.47,9.1H28.3c-0.46-4.09-3.96-7.17-8.08-7.1h-0.45c-4.12-0.06-7.61,3.01-8.07,7.1H7.53c-1.54,0-2.79,1.25-2.79,2.79l0,0  v23.32c0,1.54,1.25,2.79,2.79,2.79c0,0,0,0,0,0h24.94c1.54,0,2.79-1.25,2.79-2.79c0,0,0,0,0,0V11.89  C35.26,10.35,34.01,9.1,32.47,9.1L32.47,9.1z M19.77,3.89h0.45c3.08-0.08,5.74,2.16,6.18,5.21H13.6  C14.04,6.05,16.69,3.82,19.77,3.89z M33.37,35.21c0,0.5-0.4,0.9-0.9,0.9H7.53c-0.5,0-0.9-0.4-0.9-0.9V11.89c0-0.5,0.4-0.9,0.9-0.9  c0,0,4.13,0,4.13,0c0,0.56,0,1.12,0,1.68c0,0.95,0,1.72-0.02,2.67c-0.01,0.5,0.15,0.91,0.66,1.08c0.37,0.12,0.77,0,1.03-0.28  c0.27-0.29,0.25-0.6,0.25-0.97c0-0.76-0.02-1.32-0.02-2.08c0-0.7,0-1.39,0-2.1h12.88v4.56c0,0.52,0.43,0.95,0.95,0.95  c0.52,0,0.95-0.43,0.95-0.95V11h4.13c0.5,0,0.9,0.4,0.9,0.9V35.21z" />
              </svg>
              <span className="cart-total">
                <span className="cart-qty">0</span>
              </span>
              <i className="fa-solid fa-angle-down ml-[15px]"></i>
            </div>
            <div className="cart-wrapper">
              <div className="cart-inner">
                <div className="cart-inner-content">
                  <div className="total-count flex items-center justify-between">
                    <span>
                      0 <span>item(s)</span>
                    </span>
                    <Link to={"cart"} className="view-cart-button">
                      <span>View Cart</span>
                    </Link>
                  </div>
                  <div className="cart-content">
                    <div className="cart-in-basket">
                      <div className="clearefix">
                        <CartInBasket />
                      </div>
                    </div>
                    <div className="cart-checkout">
                      <div className="cart-checkout-info">
                        <p className="subtotal flex items-center justify-between">
                          <span>Total:</span>
                          <span>$29.00</span>
                        </p>
                      </div>
                      <div className="checkout-actions">
                        <Link to={"cart"} className="checkout-cart-button">
                          <span>Checkout</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <p className="no-items-in-cart">
                    You have no items in your shopping cart.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
