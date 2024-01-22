import React from "react";

export default function FilterReset() {
  return (
    <>
      <div className="filter-reset-div">
        <div className="button-holder">
          <button
            type="submit"
            className="align-bottom inline-flex items-center justify-center leading-5 transition-color duration-150 font-medium px-4 py-2 rounded-lg text-sm w-full h-12 text-white bg-emerald-500 hover:bg-emerald-600"
          >
            Filter
          </button>
        </div>
        <div className="button-holder">
          <button
            type="reset"
            className="align-bottom inline-flex items-center justify-center leading-5 transition-color duration-150 font-medium px-4 py-2 rounded-lg text-sm w-full h-12 bg-gray-200 text-gray-800 hover:bg-gray-400"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
