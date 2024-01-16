import React from "react";

export default function DescriptionTab() {
  return (
    <>
      <div className="description-tab">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat.
        </p>
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
