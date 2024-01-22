import React from "react";
import { useDispatch } from "react-redux";
import { CloseProductUpdate } from "../../../../../../../../../RTK/features/counter/ProductUpdate";

export default function FormButtons() {
  const updateDispatch = useDispatch();

  function handleCloseUpdate() {
    updateDispatch(CloseProductUpdate());
  }
  return (
    <>
      <div className="form-buttons">
        <div className="button-div">
          <button
            type="button"
            className="cancel-btn"
            onClick={handleCloseUpdate}
          >
            Cancel
          </button>
        </div>
        <div className="button-div">
          <button type="submit" className="add-btn">
            Update Product
          </button>
        </div>
      </div>
    </>
  );
}
