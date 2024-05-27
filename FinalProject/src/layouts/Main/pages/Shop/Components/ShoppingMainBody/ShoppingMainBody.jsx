import React, { useEffect, useState } from "react";
import LeftColumn from "./Components/LeftColumn/LeftColumn";
import RightColumn from "./Components/RightColumn/RightColumn";
import {
  GetSiteBrands,
  GetSiteProducts,
} from "../../../../../../services/siteProduct";

export default function ShoppingMainBody() {
  const [brandData, setBrandData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [totalProducts, setTotalProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const perPage = 12;

  useEffect(() => {
    const allProductFetch = async () => {
      try {
        const r = await GetSiteProducts({
          page: currentPage,
          perPage: perPage,
        });
        const data = r?.data?.product;
        const totalCount = r?.data?.totalCount;
        const pagesCount = Math.ceil(totalCount / 12);
        setProductData(data);
        setTotalProducts(totalCount);
        setTotalPages(pagesCount);
      } catch (error) {
        throw new Error("Error occured during fetching site products" + error);
      }
    };
    allProductFetch();
  }, [currentPage, perPage]);

  useEffect(() => {
    const allBrandsFetch = async () => {
      try {
        const res = await GetSiteBrands();
        const data = res?.data;
        setBrandData(data);
      } catch (error) {
        throw new Error("Error occured during fetchin brands" + error);
      }
    };

    allBrandsFetch();
  }, []);

  return (
    <>
      <div className="shopping-main-part">
        <div className="product-main container">
          <div className="row">
            <LeftColumn brandData={brandData} productData={productData} />
            <RightColumn
              brandData={brandData}
              productData={productData}
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              totalProducts={totalProducts}
            />
          </div>
        </div>
      </div>
    </>
  );
}
