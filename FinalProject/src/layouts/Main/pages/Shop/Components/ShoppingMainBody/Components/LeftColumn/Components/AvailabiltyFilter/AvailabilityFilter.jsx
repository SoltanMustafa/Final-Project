import React, { useState } from "react";

export default function AvailabilityFilter() {
  const [toggle, setToggle] = useState(true);
  const [inStock, setInStock] = useState(false);
  const [outStock, setOutStock] = useState(false);

  const handleToggle = () => {
    setToggle((prevVisible) => !prevVisible);
  };

  const handleInStock = () => {
    setInStock((initialState) => !initialState);
    setOutStock(false);
  };
  const handleOutStock = () => {
    setOutStock((initialState) => !initialState);
    setInStock(false);
  };
  return (
    <>
      <div className="availability-filter">
        <div
          className={`block-title ${toggle ? "block-title-before" : ""}`}
          onClick={handleToggle}
        >
          <h3>
            <span>Availability</span>
          </h3>
        </div>
        <div className={`toggle-content ${toggle ? "active" : ""}`}>
          <ul className="stock-outstock">
            <li>
              <div className="input-container">
                <input type="checkbox" onClick={handleInStock} />
                <div className="input-skin">
                  {inStock ? (
                    <i className="fa-regular fa-square-check"></i>
                  ) : (
                    <i className="fa-regular fa-square"></i>
                  )}
                </div>
              </div>
              <div className="stock-state">In stock (11)</div>
            </li>
            <li>
              <div className="input-container">
                <input type="checkbox" onClick={handleOutStock} />
                <div className="input-skin">
                  {outStock ? (
                    <i className="fa-regular fa-square-check"></i>
                  ) : (
                    <i className="fa-regular fa-square"></i>
                  )}
                </div>
              </div>
              <div className="stock-state">Out of stock (11)</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
