import React from "react";

export default function BrandTitle() {
  return (
    <>
      <div className="product-title-name">
        <label htmlFor="">Brand Name</label>
        <div className="input-div">
          <input type="text" placeholder="Product Title/Name" />
        </div>
      </div>
    </>
  );
}
