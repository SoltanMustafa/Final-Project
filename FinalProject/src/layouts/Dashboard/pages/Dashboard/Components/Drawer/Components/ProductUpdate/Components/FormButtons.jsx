import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CloseProductUpdate } from "../../../../../../../../../RTK/features/counter/ProductUpdate";
import { resetData } from "../../../../../../../../../RTK/features/counter/ProductUpdateDelete";
import { resetState } from "../../../../../../../../../RTK/features/counter/UpdateProductData";
import { UpdateProducts } from "../../../../../../../../../services/Product";

export default function FormButtons() {
  const updateDispatch = useDispatch();
  const updatedBrand = useSelector((state) => state.updateProductData?.brand);
  const updatedDesc = useSelector(
    (state) => state.updateProductData?.description
  );
  const updatedPrice = useSelector((state) => state.updateProductData?.price);
  const updatedSalePrice = useSelector(
    (state) => state.updateProductData?.salePrice
  );
  const updatedQuantity = useSelector(
    (state) => state.updateProductData?.quantity
  );
  const updatedTitle = useSelector((state) => state.updateProductData?.name);
  const updatedImages = useSelector((state) => state.updateProductData?.images);
  const editData = useSelector((state) => state.editProductData?.editData);
  const productId = editData?._id;
  const editDispatch = useDispatch();
  const upEditDispatch = useDispatch();

  function handleCloseUpdate() {
    updateDispatch(CloseProductUpdate());
    editDispatch(resetData());
    upEditDispatch(resetState());
  }

  const productUpdated = {
    title: updatedTitle,
    description: updatedDesc,
    productPrice: Number(updatedPrice),
    salePrice: Number(updatedSalePrice),
    brandId: updatedBrand,
    stock: Number(updatedQuantity),
    images: [...updatedImages],
  };

  console.log("alldata", productUpdated);

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    if (Number(updatedSalePrice) >= Number(updatedPrice)) {
      alert("Sale price should be less than product price.");
      return;
    }
    if (!updatedImages || updatedImages.length === 0) {
      alert("Please upload at least one image.");
      return;
    }

    console.log("updateProduct", productUpdated);
    console.log("productID", productId);

    try {
      const response = await UpdateProducts({ productId, productUpdated });
      console.log("Update Product Response:", response);
    } catch (error) {
      console.error("Update Product Error:", error);
    }
  };

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
