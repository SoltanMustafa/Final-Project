import React from "react";

export default function SectionNavigation({ updateToggle, toggle }) {
  return (
    <>
      <ul className="section-navigation">
        <li className="description-li nav-item">
          <a
            href=""
            className={`title-a ${toggle === 1 ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              updateToggle(1);
            }}
          >
            Description
          </a>
        </li>
        <li className="reviews-li nav-item">
          <a
            href=""
            className={`title-a ${toggle === 2 ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              updateToggle(2);
            }}
          >
            Reviews
          </a>
        </li>
        <li className="size-chart-li nav-item">
          <a
            href=""
            className={`title-a ${toggle === 3 ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              updateToggle(3);
            }}
          >
            Size Chart
          </a>
        </li>
        <li className="shipping-li nav-item">
          <a
            href=""
            className={`title-a ${toggle === 4 ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              updateToggle(4);
            }}
          >
            Shipping & Delivery
          </a>
        </li>
      </ul>
    </>
  );
}
