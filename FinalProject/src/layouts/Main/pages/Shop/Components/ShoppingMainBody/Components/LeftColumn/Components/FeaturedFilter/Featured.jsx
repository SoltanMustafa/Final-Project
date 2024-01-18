import React, { useState } from "react";
import FeaturedFilterProduct from "./FeaturedFilterProduct";

export default function Featured() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle((prevVisible) => !prevVisible);
  };
  return (
    <>
      <div className="featured-filter">
        <div
          className={`block-title ${toggle ? "block-title-before" : ""}`}
          onClick={handleToggle}
        >
          <h3>
            <span>Featured</span>
          </h3>
        </div>
        <div className={`toggle-content ${toggle ? "active" : ""}`}>
          <div className="featured-products-list">
            <FeaturedFilterProduct />
            <FeaturedFilterProduct />
            <FeaturedFilterProduct />
          </div>
        </div>
      </div>
    </>
  );
}
