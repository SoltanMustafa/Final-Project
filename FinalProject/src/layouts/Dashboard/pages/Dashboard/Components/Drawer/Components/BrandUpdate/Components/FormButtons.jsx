import React from "react";
import { useDispatch } from "react-redux";
import { CloseBrandUpdate } from "../../../../../../../../../RTK/features/counter/BrandUpdate";

export default function FormButtons() {
  const brandDispatch = useDispatch();
  function handleBrandUpdate() {
    brandDispatch(CloseBrandUpdate());
  }
  return (
    <>
      <div className="form-buttons">
        <div className="button-div">
          <button
            type="button"
            className="cancel-btn"
            onClick={handleBrandUpdate}
          >
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
