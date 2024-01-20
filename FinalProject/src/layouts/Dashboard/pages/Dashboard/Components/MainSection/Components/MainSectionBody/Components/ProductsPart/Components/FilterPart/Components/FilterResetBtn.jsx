import React from "react";

export default function FilterResetBtn() {
  return (
    <>
      <div className="filter-reset-btn">
        <div className="btn-div">
          <button type="submit" className="button-green">
            Filter
          </button>
        </div>
        <div className="btn-div">
          <button type="reset" className="button-grey">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
