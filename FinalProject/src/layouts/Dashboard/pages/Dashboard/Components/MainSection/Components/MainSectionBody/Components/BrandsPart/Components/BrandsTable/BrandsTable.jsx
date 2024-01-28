import React, { useEffect, useState } from "react";
import TableHead from "./Components/TableHead";
import BrandTr from "./Components/BrandTr";
import TablePanigation from "./Components/Pagination/TablePagination";
import { GetBrands } from "../../../../../../../../../../../../services/Product";

export default function BrandsTable() {
  const [brandData, setBrandData] = useState([]);
  useEffect(() => {
    GetBrands().then((r) => {
      const data = r?.data;
      console.log("data", data);
      setBrandData(data);
    });
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
              {brandData?.map((brand) => {
                return <BrandTr key={brand._id} brand={brand} />;
              })}
            </tbody>
          </table>
        </div>
        <TablePanigation />
      </div>
    </>
  );
}
