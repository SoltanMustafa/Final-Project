import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BrandImagesInput from "./Components/BrandImagesInput";
import { CloseBrandAdd } from "../../../../../../../../../../RTK/features/counter/BrandAdd";
import { CreateBrand } from "../../../../../../../../../../services/Product";

export default function BrandAddBody() {
  const brandDispatch = useDispatch();
  const brandImageFormat = useSelector(
    (state) => state.brandImageAdd.brandImage
  );
  const [brandName, setBrandName] = useState("");

  function handleBrandAdd() {
    brandDispatch(CloseBrandAdd());
  }

  function handleBrandNameChange(event) {
    setBrandName(event.target.value);
  }

  const addBrand = (e) => {
    e.preventDefault();
    const brandData = {
      name: brandName,
      image: brandImageFormat,
    };
    CreateBrand(brandData).then((r) => console.log("final", r));
  };
  return (
    <>
      <div className="product-add-body">
        <form className="product-add-form" onSubmit={addBrand}>
          <div className="form-inputs">
            <div className="product-title-name">
              <label htmlFor="">Brand Name</label>
              <div className="input-div">
                <input
                  type="text"
                  placeholder="Product Title/Name"
                  value={brandName}
                  onChange={handleBrandNameChange}
                />
              </div>
            </div>
            <BrandImagesInput />
            <div className="form-buttons">
              <div className="button-div">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={handleBrandAdd}
                >
                  Cancel
                </button>
              </div>
              <div className="button-div">
                <button type="submit" className="add-btn">
                  Add Brand
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
