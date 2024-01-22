import React from "react";
import { useDispatch } from "react-redux";
import { CloseBrandAdd } from "../../../../../../../../../RTK/features/counter/BrandAdd";

export default function FormButtons() {
  const brandDispatch = useDispatch();
  function handleBrandAdd() {
    brandDispatch(CloseBrandAdd());
  }
  return (
    <>
      <div className="form-buttons">
        <div className="button-div">
          <button type="button" className="cancel-btn" onClick={handleBrandAdd}>
            Cancel
          </button>
        </div>
        <div className="button-div">
          <button type="submit" className="add-btn">
            Add Brand
          </button>
        </div>
      </div>
    </>
  );
}
