import React from "react";

export default function ProductSalePriceInput() {
  return (
    <>
      <div className="product-sale-price">
        <label htmlFor="">Sale Price</label>
        <div className="input-div">
          <input type="text" placeholder="$0" />
        </div>
      </div>
    </>
  );
}