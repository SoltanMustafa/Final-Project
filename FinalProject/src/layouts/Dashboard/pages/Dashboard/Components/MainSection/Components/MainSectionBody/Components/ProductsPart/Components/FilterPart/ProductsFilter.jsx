import React from "react";
import BrandSelect from "./Components/BrandSelect";
import DifferentSelect from "./Components/DifferentSelect";
import FilterResetBtn from "./Components/FilterResetBtn";

export default function ProductsFilter() {
  return (
    <>
      <div className="filter-main-container">
        <div className="filter-inside">
          <form action="" className="filter-form">
            <div className="search-input-div">
              <input type="text" placeholder="Search Product" />
            </div>
            <BrandSelect />
            <DifferentSelect />
            <FilterResetBtn />
          </form>
        </div>
      </div>
    </>
  );
}
