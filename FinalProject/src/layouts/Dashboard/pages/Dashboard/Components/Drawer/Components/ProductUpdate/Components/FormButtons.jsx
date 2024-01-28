import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CloseProductUpdate } from "../../../../../../../../../RTK/features/counter/ProductUpdate";
import { resetData } from "../../../../../../../../../RTK/features/counter/ProductUpdateDelete";
import { resetState } from "../../../../../../../../../RTK/features/counter/UpdateProductData";

export default function FormButtons() {
  const updateDispatch = useDispatch();
  const updatedBrand = useSelector((state) => state.updateProductData.brand);
  const updatedDesc = useSelector(
    (state) => state.updateProductData.description
  );
  const updatedPrice = useSelector((state) => state.updateProductData.price);
  const editDispatch = useDispatch();
  const upEditDispatch = useDispatch();
  console.log("updateBrand", updatedPrice);

  function handleCloseUpdate() {
    updateDispatch(CloseProductUpdate());
    editDispatch(resetData());
    upEditDispatch(resetState());
  }

  const handleUpdateProduct = () => {};
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
          <button
            type="button"
            className="add-btn"
            onClick={handleUpdateProduct}
          >
            Update Product
          </button>
        </div>
      </div>
    </>
  );
}
