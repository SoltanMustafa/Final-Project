import React from "react";

export default function CheckOutProduct() {
  return (
    <>
      <div className="checkout-product">
        <div className="image-holder">
          <img
            src="https://cdn.shopify.com/s/files/1/1613/0131/products/JeansPants_64x64.jpg?v=1600571505"
            alt=""
          />
          <div className="count-div">
            <span>1</span>
          </div>
        </div>
        <div className="text-holder">
          <span>Jeans Pants</span>
        </div>
        <div className="price-holder">
          <span>$299.00</span>
        </div>
      </div>
    </>
  );
}
