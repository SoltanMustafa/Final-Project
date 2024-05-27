import React from "react";
import ShopProduct from "./Components/ShopProduct";

export default function RightMain({ brandData, productData }) {
  return (
    <>
      <div className="right-main row">
        {productData?.map((product) => {
          return (
            <ShopProduct
              product={product}
              key={product?._id}
              brandData={brandData}
            />
          );
        })}
      </div>
    </>
  );
}
