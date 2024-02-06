import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../../../../../../../../../../../../RTK/features/counter/UpdateProductData";

export default function ProductDescriptionInput({ editData }) {
  const currentText = editData?.description;
  const [pDescription, setDescription] = useState("");
  const descDispatch = useDispatch();

  useEffect(() => {
    setDescription(currentText);
  }, [currentText]);

  useEffect(() => {
    descDispatch(setData({ description: pDescription }));
  }, [pDescription]);

  const handleDescript = (event) => {
    setDescription(event.target.value);
    descDispatch(setData({ description: event.target.value }));
  };
  return (
    <div className="product-description">
      <label htmlFor="productDescription">Product Description</label>
      <div className="input-div">
        <textarea
          id="productDescription"
          name="productDescription"
          placeholder="Product Description"
          onChange={handleDescript}
          defaultValue={currentText}
        ></textarea>
      </div>
    </div>
  );
}
