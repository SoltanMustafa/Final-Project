import React from "react";

export default function ProductPriceInput() {
  return (
    <>
      <div className="product-price">
        <label htmlFor="">Product Price</label>
        <div className="input-div">
          <input type="text" placeholder="$0" />
        </div>
      </div>
    </>
  );
}
