import React from "react";

export default function ProductBrandInput() {
  return (
    <>
      <div className="product-brand">
        <label htmlFor="">Brand</label>
        <div className="selector-container">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Select Brand"
              className="search-box"
            />
          </div>
          <div className="option-list">
            <ul>
              <li>No Options Available</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
