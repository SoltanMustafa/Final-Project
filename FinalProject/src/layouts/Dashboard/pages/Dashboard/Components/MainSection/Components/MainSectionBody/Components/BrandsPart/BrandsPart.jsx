import React from "react";
import DeteletAdd from "./Components/DeleteAdd/DeleteAdd";
import BrandsFilter from "./Components/FilterPart/BrandsFilter";
import BrandsTable from "./Components/BrandsTable/BrandsTable";

export default function BrandsPart() {
  return (
    <>
      <div className="brandspart-inside">
        <h1 className="section-title">Brands</h1>
        <DeteletAdd />
        <BrandsFilter />
        <BrandsTable />
      </div>
    </>
  );
}
