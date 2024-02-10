import React from "react";

export default function DescriptionTab({ product }) {
  return (
    <>
      <div className="description-tab">
        <p>{product?.description}</p>
        <ul className="unordered-list">
          <li>
            <i className="fa-solid fa-circle-check"></i>
            <span>Any Product types that You want - Simple, Configurable</span>
          </li>
          <li>
            <i className="fa-solid fa-circle-check"></i>
            <span>Downloadable/Digital Products, Virtual Products</span>
          </li>
          <li>
            <i className="fa-solid fa-circle-check"></i>
            <span>Inventory Management with Backordered items</span>
          </li>
        </ul>
        <p>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam,
          <br />
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>
    </>
  );
}
