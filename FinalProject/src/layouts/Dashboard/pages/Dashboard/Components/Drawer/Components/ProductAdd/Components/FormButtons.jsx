import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CloseProductAdd } from "../../../../../../../../../RTK/features/counter/ProductAdd";
import { CreateProducts } from "../../../../../../../../../services/Product";

export default function FormButtons() {
  const closeDispatch = useDispatch();
  const imagesSelector = useSelector((state) => state.addProductData.images);
  const brandID = useSelector((state) => state.addProductData.brand);
  const productName = useSelector((state) => state.addProductData.name);
  const productDesc = useSelector((state) => state.addProductData.description);
  const productPrice = useSelector((state) => state.addProductData.price);
  const productSalePrice = useSelector(
    (state) => state.addProductData.salePrice
  );
  const productQuantity = useSelector((state) => state.addProductData.quantity);

  console.log("images", imagesSelector);

  const handleCreateProduct = (e) => {
    e.preventDefault();
    if (Number(productSalePrice) >= Number(productPrice)) {
      alert("Sale price should be less than product price.");
      return;
    }
    if (!imagesSelector || imagesSelector.length === 0) {
      alert("Please upload at least one image.");
      return;
    }
    const productData = {
      title: productName,
      description: productDesc,
      salePrice: Number(productSalePrice),
      productPrice: Number(productPrice),
      brandId: brandID,
      stock: Number(productQuantity),
      images: [...imagesSelector],
    };
    console.log("alldata", productData);
    CreateProducts(productData).then((r) => console.log("data", r));
  };

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
          <button
            type="button"
            className="add-btn"
            onClick={handleCreateProduct}
          >
            Add Product
          </button>
        </div>
      </div>
    </>
  );
}
