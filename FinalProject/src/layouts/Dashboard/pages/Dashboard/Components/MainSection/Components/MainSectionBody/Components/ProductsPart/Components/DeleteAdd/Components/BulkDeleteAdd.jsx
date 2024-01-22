import React from "react";
import { useDispatch } from "react-redux";
import { OpenProductAdd } from "../../../../../../../../../../../../../RTK/features/counter/ProductAdd";

export default function BulkDeleteAdd() {
  const addDispatch = useDispatch();
  const handleAddProduct = () => {
    addDispatch(OpenProductAdd());
  };
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
          <button type="button" className="add-btn" onClick={handleAddProduct}>
            <i className="fa-solid fa-plus"></i>
            <span>Add Product</span>
          </button>
        </div>
      </div>
    </>
  );
}
