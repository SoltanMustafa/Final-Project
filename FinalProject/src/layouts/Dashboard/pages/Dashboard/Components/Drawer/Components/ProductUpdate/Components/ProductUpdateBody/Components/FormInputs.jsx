import React from "react";
import ProductTitleInput from "./Components/ProductTitleInput";
import ProductDescriptionInput from "./Components/ProductDescriptionInput";
import ProductBrandInput from "./Components/ProductBrandInput";
import ProductPriceInput from "./Components/ProductPriceInput";
import ProductSalePriceInput from "./Components/ProductSalePriceInput";
import ProductQuantityInput from "./Components/ProductQuantityInput";
import ProductImagesinput from "./Components/ProductImageInput/ProductImagesInput";
import { useSelector } from "react-redux";

export default function FormInputs() {
  const editData = useSelector((state) => state.editProductData.editData);
  return (
    <>
      <div className="form-inputs">
        <ProductTitleInput editData={editData} />
        <ProductDescriptionInput editData={editData} />
        <ProductImagesinput editData={editData} />
        <ProductBrandInput editData={editData} />
        <ProductPriceInput editData={editData} />
        <ProductSalePriceInput editData={editData} />
        <ProductQuantityInput editData={editData} />
      </div>
    </>
  );
}
