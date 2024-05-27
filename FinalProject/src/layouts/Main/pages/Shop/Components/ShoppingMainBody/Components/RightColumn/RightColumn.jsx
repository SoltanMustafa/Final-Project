import React from "react";
import RightTop from "./Components/RightTop/RightTop";
import RightMain from "./Components/RightMain/RightMain";
import RightBottom from "./Components/RightBottom/RightBottom";

export default function RightColumn({
  brandData,
  productData,
  totalPages,
  currentPage,
  onPageChange,
  totalProducts,
}) {
  return (
    <>
      <div className="col-lg-9 right-column">
        <RightTop />
        <RightMain brandData={brandData} productData={productData} />
        <RightBottom
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
          totalProducts={totalProducts}
        />
      </div>
    </>
  );
}
