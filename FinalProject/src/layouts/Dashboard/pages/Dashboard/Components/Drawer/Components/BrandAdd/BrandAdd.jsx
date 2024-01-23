import React from "react";
import BrandAddHeader from "./Components/BrandAddHeader";
import BrandAddBody from "./Components/BrandAddBody/BrandAddBody";
import { useSelector } from "react-redux";

export default function BrandAdd() {
  const brandAddActive = useSelector((state) => state.brandAdd.brandAddActive);
  return (
    <>
      <div
        className={`brand-add-container ${brandAddActive ? "module-show" : ""}`}
      >
        <div className="container-content">
          <BrandAddHeader />
          <BrandAddBody />
        </div>
      </div>
    </>
  );
}
