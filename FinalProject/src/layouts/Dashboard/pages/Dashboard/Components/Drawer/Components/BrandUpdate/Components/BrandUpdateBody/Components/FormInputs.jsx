import React from "react";
import BrandTitle from "./Components/BrandTitle";
import BrandImageinput from "./Components/BrandImage/BrandImageInput";

export default function FormInputs() {
  return (
    <>
      <div className="form-inputs">
        <BrandTitle />
        <BrandImageinput />
      </div>
    </>
  );
}
