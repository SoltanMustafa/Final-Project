import React from "react";
import ProductImageList from "./Components/ProductImageList/ProductImageList";
import ProductShop from "./Components/ProductShop/ProductShop";
import ProductCollateral from "./Components/ProductCollaterial/ProductCollaterial";

export default function ProductDetailedView({ product, brandData }) {
  return (
    <>
      <div className="product-detailed-view">
        <div className="product-main">
          <div className="container">
            <div className="box-product-page">
              <div className="row">
                <div className="col-lg-12 main-content">
                  <div className="product-essential">
                    <div className="row">
                      <ProductImageList product={product} />
                      <ProductShop product={product} brandData={brandData} />
                    </div>
                  </div>
                  <ProductCollateral product={product} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
