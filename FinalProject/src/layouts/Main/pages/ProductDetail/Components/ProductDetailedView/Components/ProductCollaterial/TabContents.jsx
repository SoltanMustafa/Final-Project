import React from "react";
import DescriptionTab from "./DescriptionTab";
import ReviewsTab from "./ReviewsTab";
import SizeTab from "./SizeTab";
import Shipping from "./Shipping.Jsx";

export default function TabContents({ toggle, product }) {
  return (
    <>
      <div
        className={`tab-content ${toggle === 1 ? "tab-content-active" : ""}`}
      >
        <DescriptionTab product={product} />
      </div>
      <div
        className={`tab-content ${toggle === 2 ? "tab-content-active" : ""}`}
      >
        <ReviewsTab />
      </div>
      <div
        className={`tab-content ${toggle === 3 ? "tab-content-active" : ""}`}
      >
        <SizeTab />
      </div>
      <div
        className={`tab-content ${toggle === 4 ? "tab-content-active" : ""}`}
      >
        <Shipping />
      </div>
    </>
  );
}
