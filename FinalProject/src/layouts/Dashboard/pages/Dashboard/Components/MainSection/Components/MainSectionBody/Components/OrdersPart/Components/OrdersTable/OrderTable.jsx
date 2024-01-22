import React from "react";
import TableHead from "./Components/TableHead";
import ProductTr from "./Components/ProductTr";
import TablePanigation from "./Components/TablePagination/TablePagination";

export default function OrderTable() {
  return (
    <>
      <div className="table-main-container">
        <div className="table-div">
          <table className="product-table">
            <thead className="table-head">
              <TableHead />
            </thead>
            <tbody className="table-body">
              <ProductTr />
              <ProductTr />
              <ProductTr />
              <ProductTr />
              <ProductTr />
              <ProductTr />
              <ProductTr />
              <ProductTr />
              <ProductTr />
            </tbody>
          </table>
        </div>
        <TablePanigation />
      </div>
    </>
  );
}
