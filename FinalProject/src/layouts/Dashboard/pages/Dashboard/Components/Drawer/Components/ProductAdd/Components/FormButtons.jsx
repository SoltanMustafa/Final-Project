import React from "react";
import { useDispatch } from "react-redux";
import { CloseProductAdd } from "../../../../../../../../../RTK/features/counter/ProductAdd";

export default function FormButtons() {
  const closeDispatch = useDispatch();
  const handleCloseAdd = () => {
    closeDispatch(CloseProductAdd());
  };
  return (
    <>
      <div className="form-buttons">
        <div className="button-div">
          <button type="button" className="cancel-btn" onClick={handleCloseAdd}>
            Cancel
          </button>
        </div>
        <div className="button-div">
          <button type="submit" className="add-btn">
            Add Product
          </button>
        </div>
      </div>
    </>
  );
}
