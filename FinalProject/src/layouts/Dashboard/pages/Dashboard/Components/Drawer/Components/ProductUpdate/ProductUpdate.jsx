import React from "react";
import ProductUpdateHeader from "./Components/ProductUpdateHeader";
import FormButtons from "./Components/FormButtons";
import ProductUpdateBody from "./Components/ProductUpdateBody/ProductUpdateBody";
import { useSelector } from "react-redux";

export default function ProductUpdate() {
  const productUpdateActive = useSelector(
    (state) => state.productUpdate.productUpdateActive
  );
  return (
    <>
      <div
        className={`product-update-container ${
          productUpdateActive ? "module-show" : ""
        }`}
      >
        <div className="container-content">
          <ProductUpdateHeader />
          <ProductUpdateBody />
          <FormButtons />
        </div>
      </div>
    </>
  );
}
