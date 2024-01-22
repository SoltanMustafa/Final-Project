import React from "react";

export default function BrandsFilter() {
  return (
    <>
      <div className="brands-filter-main">
        <div className="filter-container">
          <form action="" className="filter-form">
            <div className="input-holder">
              <input
                type="text"
                className="input-itself"
                placeholder="Search by Brand's name"
              />
            </div>
            <div className="button-holder">
              <div className="button-div">
                <button type="submit" className="filter-btn">
                  Filter
                </button>
              </div>
              <div className="button-div">
                <button type="reset" className="reset-btn">
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
