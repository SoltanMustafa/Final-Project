import React, { useEffect, useState } from "react";
import ThreeColumnProduct from "./ThreeColumnProduct";
import { GetSiteProducts } from "../../../../../../services/siteProduct";

export default function ThreeColumns() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const page = 3;
        const perPage = 10;
        const r = await GetSiteProducts({ page, perPage });
        const data = r?.data?.product;
        setProductData(data);
      } catch (error) {
        console.log("Error when fetching products", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="three-columns">
        <div className="container">
          <hr className="seperator-line" />
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12 column-container">
              <div className="products-collection">
                <h2 className="section-title">
                  <span className="inline-title">Best Selling Products</span>
                </h2>
                <div className="products-lists">
                  <div className="products-inner-column">
                    <div className="products-grid">
                      {productData?.slice(0, 3).map((product) => {
                        return (
                          <ThreeColumnProduct
                            key={product?._id}
                            product={product}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 column-container">
              <div className="products-collection">
                <h2 className="section-title">
                  <span className="inline-title">Top Rated Products</span>
                </h2>
                <div className="products-lists">
                  <div className="products-inner-column">
                    <div className="products-grid">
                      {productData?.slice(3, 6).map((product) => {
                        return (
                          <ThreeColumnProduct
                            key={product?._id}
                            product={product}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 column-container">
              <div className="products-collection">
                <h2 className="section-title">
                  <span className="inline-title">Featured Products</span>
                </h2>
                <div className="products-lists">
                  <div className="products-inner-column">
                    <div className="products-grid">
                      {productData?.slice(6, 9).map((product) => {
                        return (
                          <ThreeColumnProduct
                            key={product?._id}
                            product={product}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
