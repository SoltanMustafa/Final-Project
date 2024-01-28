import React, { useEffect, useState } from "react";
import TableHead from "./Components/TableHead";
import ProductTr from "./Components/ProductTr";
import TablePanigation from "./Components/TablePagination/TablePanigation";
import {
  GetBrands,
  GetProducts,
} from "../../../../../../../../../../../../services/Product";

export default function ProductsTable() {
  const [brandData, setBrandData] = useState([]);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    GetProducts().then((r) => {
      const data = r?.data?.product;
      setProductData(data);
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await GetBrands();
      const data = response?.data;
      setBrandData(data);
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="table-main-container">
        <div className="table-div">
          <table className="product-table">
            <thead className="table-head">
              <TableHead />
            </thead>
            <tbody className="table-body">
              {productData?.map((product) => {
                return (
                  <ProductTr
                    key={product.id}
                    product={product}
                    brandData={brandData}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        <TablePanigation />
      </div>
    </>
  );
}
