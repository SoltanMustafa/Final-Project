import React from "react";
import TableHead from "./Components/TableHead";
import ProductTr from "./Components/ProductTr";
import TablePanigation from "./Components/TablePagination/TablePanigation";

export default function ProductsTable() {
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
