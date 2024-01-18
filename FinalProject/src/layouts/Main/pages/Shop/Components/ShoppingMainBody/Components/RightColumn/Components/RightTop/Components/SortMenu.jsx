import React from "react";

export default function SortMenu() {
  return (
    <>
      <div className="sort-menu">
        <div className="sort-by">
          <div className="select-inner">
            <form action="" className="sort-form">
              <div className="sort-form-inside">
                <span>Sort by:</span>
                <select name="" id="" className="sort-select">
                  <option value="">Featured</option>
                  <option value="">Alphabetically, A-Z</option>
                  <option value="">Alphabetically, Z-A</option>
                  <option value="">Price, low to hight</option>
                  <option value="">Price, how to low</option>
                </select>
                <i className="fa-solid fa-angle-down"></i>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
