import React from "react";

export default function ProductDescriptionInput() {
  return (
    <>
      <div className="product-description">
        <label htmlFor="">Product Description</label>
        <div className="input-div">
          <textarea name="" placeholder="Product Description"></textarea>
        </div>
      </div>
    </>
  );
}
