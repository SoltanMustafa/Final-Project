import React from "react";
import ProductAddHeader from "./Components/ProductAddHeader";
import ProductAddBody from "./Components/ProductAddBody/ProductAddBody";
import FormButtons from "./Components/FormButtons";
import { useSelector } from "react-redux";

export default function ProductsAdd() {
  const setProductAdd = useSelector(
    (state) => state.productAdd.productAddActive
  );
  return (
    <>
      <div
        className={`product-add-container ${
          setProductAdd ? "module-show" : ""
        }`}
      >
        <div className="container-content">
          <ProductAddHeader />
          <ProductAddBody />
          <FormButtons />
        </div>
      </div>
    </>
  );
}
