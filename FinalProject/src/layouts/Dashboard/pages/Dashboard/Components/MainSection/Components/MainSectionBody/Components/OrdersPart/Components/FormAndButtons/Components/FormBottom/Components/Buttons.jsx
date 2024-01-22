import React from "react";

export default function Buttons() {
  return (
    <>
      <div className="holder-div">
        <div className="buttons-inside">
          <button type="submit" className="filter-btn">
            Filter
          </button>
          <button type="reset" className="reset-btn">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
