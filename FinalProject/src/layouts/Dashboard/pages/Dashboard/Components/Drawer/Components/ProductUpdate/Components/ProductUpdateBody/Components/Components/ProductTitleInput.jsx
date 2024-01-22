import React from "react";

export default function ProductTitleInput() {
  return (
    <>
      <div className="product-title-name">
        <label htmlFor="">Product Title/Name</label>
        <div className="input-div">
          <input type="text" placeholder="Product Title/Name" />
        </div>
      </div>
    </>
  );
}
