import React from "react";
import BrandTitle from "./Components/BrandTitle";
import BrandImagesinput from "./Components/BrandImage/BrandImagesInput";

export default function FormInputs() {
  return (
    <>
      <div className="form-inputs">
        <BrandTitle />
        <BrandImagesinput />
      </div>
    </>
  );
}
