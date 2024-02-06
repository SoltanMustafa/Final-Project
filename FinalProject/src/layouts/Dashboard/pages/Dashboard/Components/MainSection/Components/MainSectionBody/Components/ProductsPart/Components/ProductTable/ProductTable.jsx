import React, { useEffect, useState } from "react";
import TableHead from "./Components/TableHead";
import ProductTr from "./Components/ProductTr";
import {
  GetBrands,
  GetProducts,
} from "../../../../../../../../../../../../services/Product";
import TablePagination from "./Components/TablePanigation";

export default function ProductsTable() {
  const [brandData, setBrandData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [totalProducts, setTotalProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const perPage = 10;

  useEffect(() => {
    GetProducts({ page: currentPage, perPage: perPage }).then((r) => {
      const data = r?.data?.product;
      console.log("pageResponse", r);
      const totalCount = r?.data?.totalCount;
      const calculatedTotalPages = Math.ceil(totalCount / 10);
      setProductData(data);
      setTotalPages(calculatedTotalPages);
      setTotalProducts(totalCount);
    });
  }, [currentPage, perPage]);

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
              {productData?.map((product) => (
                <ProductTr
                  key={product.id}
                  product={product}
                  brandData={brandData}
                />
              ))}
            </tbody>
          </table>
        </div>
        <TablePagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalProducts={totalProducts}
        />
      </div>
    </>
  );
}
