import React from "react";
import ProductTitleImput from "./Components/ProductTitleImput";
import ProductDescriptionInput from "./Components/ProductDescriptionInput";
import ProductImagesinput from "./Components/ProductImagesInput/ProductImagesinput";
import ProductBrandInput from "./Components/ProductBrandInput";
import ProductPriceInput from "./Components/ProductPriceInput";
import ProductSalePriceInput from "./Components/ProductSalePriceInput";
import ProductQuantityInput from "./Components/ProductQuantityInput";

export default function FormInputs() {
  return (
    <>
      <div className="form-inputs">
        <ProductTitleImput />
        <ProductDescriptionInput />
        <ProductImagesinput />
        <ProductBrandInput />
        <ProductPriceInput />
        <ProductSalePriceInput />
        <ProductQuantityInput />
      </div>
    </>
  );
}
