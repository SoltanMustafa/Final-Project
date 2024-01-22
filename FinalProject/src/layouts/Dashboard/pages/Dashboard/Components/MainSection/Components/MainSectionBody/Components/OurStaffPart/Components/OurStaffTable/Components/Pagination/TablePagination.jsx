import React from "react";
import NumberLi from "./NumberLi";

export default function TablePagination() {
  return (
    <>
      <div className="table-pagination py-3 px-4 bg-white text-gray-500">
        <div className="inside-pagination flex flex-row justify-between text-xs">
          <span className="main-span font-bold">Showing 1-11 of 11</span>
          <div className="pagination-div flex mt-2">
            <nav>
              <ul className="inline-flex items-center">
                <li>
                  <button type="button" className="button-half-oppacity">
                    <i className="fa-solid fa-angle-left"></i>
                  </button>
                </li>
                <NumberLi />
                <li>
                  <button type="button" className="">
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
