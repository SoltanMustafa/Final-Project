import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import {
  GetSiteBrands,
  GetSiteProducts,
} from "../../../../../../services/siteProduct";

export default function JustArrived() {
  const [productData, setProductData] = useState([]);
  const [brandData, setBrandData] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const page = 2;
        const perPage = 10;
        const r = await GetSiteProducts({ page, perPage });
        const data = r?.data?.product;
        setProductData(data);
      } catch (error) {
        console.log("Error when fetching products", error);
      }
    };
    fetchProduct();
  }, []);

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const r = await GetSiteBrands();
        const data = r?.data;
        setBrandData(data);
      } catch (error) {
        console.log("Error when fetching brands", error);
      }
    };
    fetchBrand();
  }, []);

  return (
    <>
      <div className="just-arrived">
        <div className="container pt-[32px]">
          <div className="product-collection">
            <h2 className="section-title">
              <span className="inline-title">Just Arrived</span>
            </h2>
            <div className="products-element">
              <div className="lists-of-product">
                <div className="products-container">
                  {productData?.map((product) => {
                    return (
                      <SingleProduct
                        key={product?._id}
                        product={product}
                        brandData={brandData}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
