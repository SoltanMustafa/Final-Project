import React from "react";

export default function ProductQuantityInput() {
  return (
    <>
      <div className="product-quantity">
        <label htmlFor="">Product Quantity</label>
        <div className="input-div">
          <input type="text" placeholder="0" />
        </div>
      </div>
    </>
  );
}
