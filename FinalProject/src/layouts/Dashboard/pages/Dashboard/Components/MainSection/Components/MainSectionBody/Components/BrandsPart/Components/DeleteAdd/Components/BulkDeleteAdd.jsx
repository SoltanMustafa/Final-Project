import React from "react";
import { useDispatch } from "react-redux";
import { OpenBrandAdd } from "../../../../../../../../../../../../../RTK/features/counter/BrandAdd";

export default function BulkDeleteAdd() {
  const brandDispatch = useDispatch();

  function handleBrandAdd() {
    brandDispatch(OpenBrandAdd());
  }
  return (
    <>
      <div className="right-side">
        <div className="right-button-holder">
          <button type="button" className="bulk-btn">
            <i className="fa-regular fa-pen-to-square"></i>
            <span>Bulk Action</span>
          </button>
        </div>
        <div className="right-button-holder">
          <button type="button" className="delete-btn">
            <i className="fa-regular fa-trash-can"></i>
            <span>Delete</span>
          </button>
        </div>
        <div className="right-button-holder">
          <button type="button" className="add-btn" onClick={handleBrandAdd}>
            <i className="fa-solid fa-plus"></i>
            <span>Add Brand</span>
          </button>
        </div>
      </div>
    </>
  );
}
