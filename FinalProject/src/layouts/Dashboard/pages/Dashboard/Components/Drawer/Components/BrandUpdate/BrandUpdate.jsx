import React from "react";
import FormButtons from "./Components/FormButtons";
import BrandUpdateHeader from "./Components/BrandUpdateHeader";
import BrandUpdateBody from "./Components/BrandUpdateBody/BrandUpdateBody";
import { useSelector } from "react-redux";

export default function BrandUpdate() {
  const brandUpdateActive = useSelector(
    (state) => state.brandUpdate.brandUpdateActive
  );
  return (
    <>
      <div
        className={`brand-update-container ${
          brandUpdateActive ? "module-show" : ""
        }`}
      >
        <div className="container-content">
          <BrandUpdateHeader />
          <BrandUpdateBody />
          <FormButtons />
        </div>
      </div>
    </>
  );
}
