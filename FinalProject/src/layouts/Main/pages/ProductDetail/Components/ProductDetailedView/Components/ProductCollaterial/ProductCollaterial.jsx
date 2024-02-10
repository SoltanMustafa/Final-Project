import React, { useState } from "react";
import SectionNavigation from "./SectionNavigation";
import TabContents from "./TabContents";

export default function ProductCollateral({ product }) {
  const [toggle, setToggle] = useState(1);

  function updateToggle(index) {
    setToggle(index);
  }

  return (
    <>
      <div className="product-collateral">
        <div className="product-detailed-description">
          <SectionNavigation updateToggle={updateToggle} toggle={toggle} />
          <TabContents toggle={toggle} product={product} />
        </div>
      </div>
    </>
  );
}
