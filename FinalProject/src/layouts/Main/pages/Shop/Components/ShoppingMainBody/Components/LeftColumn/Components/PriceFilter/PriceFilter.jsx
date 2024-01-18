import React, { useState } from "react";

export default function PriceFilter() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle((prevVisible) => !prevVisible);
  };
  return (
    <>
      <div className="price-filter">
        <div
          className={`block-title ${toggle ? "block-title-before" : ""}`}
          onClick={handleToggle}
        >
          <h3>
            <span>Price</span>
          </h3>
        </div>
        <div className={`toggle-content ${toggle ? "active" : ""}`}>
          <div className="price-range">
            <div className="field">
              <span className="field-currency">$</span>
              <input type="text" placeholder="0" />
            </div>
            <div className="no-border">
              <span>To</span>
            </div>
            <div className="field">
              <span className="field-currency">$</span>
              <input type="text" placeholder="299" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
