import React, { useState } from "react";
import BrandItem from "./BrandItem";

export default function BrandFilter() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle((prevVisible) => !prevVisible);
  };
  return (
    <>
      <div className="brand-filter">
        <div
          className={`block-title ${toggle ? "block-title-before" : ""}`}
          onClick={handleToggle}
        >
          <h3>
            <span>Brands</span>
          </h3>
        </div>
        <div className={`toggle-content ${toggle ? "active" : ""}`}>
          <div className="brands-list">
            <BrandItem />
            <BrandItem />
            <BrandItem />
          </div>
        </div>
      </div>
    </>
  );
}
