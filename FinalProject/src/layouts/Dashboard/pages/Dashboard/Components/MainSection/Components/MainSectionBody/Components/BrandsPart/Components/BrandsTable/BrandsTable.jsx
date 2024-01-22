import React from "react";
import TableHead from "./Components/TableHead";
import BrandTr from "./Components/BrandTr";
import TablePanigation from "./Components/Pagination/TablePagination";

export default function BrandsTable() {
  return (
    <>
      <div className="table-main-container">
        <div className="table-div">
          <table className="product-table">
            <thead className="table-head">
              <TableHead />
            </thead>
            <tbody className="table-body">
              <BrandTr />
              <BrandTr />
              <BrandTr />
              <BrandTr />
              <BrandTr />
              <BrandTr />
              <BrandTr />
              <BrandTr />
              <BrandTr />
            </tbody>
          </table>
        </div>
        <TablePanigation />
      </div>
    </>
  );
}
