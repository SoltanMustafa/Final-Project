import React from "react";
import ProductTitleInput from "./Components/ProductTitleInput";
import ProductDescriptionInput from "./Components/ProductDescriptionInput";
import ProductBrandInput from "./Components/ProductBrandInput";
import ProductPriceInput from "./Components/ProductPriceInput";
import ProductSalePriceInput from "./Components/ProductSalePriceInput";
import ProductQuantityInput from "./Components/ProductQuantityInput";
import ProductImagesinput from "./Components/ProductImageInput/ProductImagesInput";

export default function FormInputs() {
  return (
    <>
      <div className="form-inputs">
        <ProductTitleInput />
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
