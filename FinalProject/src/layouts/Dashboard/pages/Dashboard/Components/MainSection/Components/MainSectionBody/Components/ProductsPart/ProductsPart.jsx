import React from "react";
import DeteletAdd from "./Components/DeleteAdd/DeteletAdd";
import ProductsFilter from "./Components/FilterPart/ProductsFilter";
import ProductsTable from "./Components/ProductTable/ProductTable";

export default function ProductsPart() {
  return (
    <>
      <div className="productspart-inside">
        <h1 className="section-title">Products</h1>
        <DeteletAdd />
        <ProductsFilter />
        <ProductsTable />
      </div>
    </>
  );
}
