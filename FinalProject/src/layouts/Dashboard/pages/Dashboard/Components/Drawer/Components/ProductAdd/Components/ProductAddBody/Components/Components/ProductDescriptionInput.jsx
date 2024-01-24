import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../../../../../../../../../../../../RTK/features/counter/AddProductData";

export default function ProductDescriptionInput() {
  const describtionRef = useRef();
  const desDispatch = useDispatch();

  const handleDescription = () => {
    desDispatch(setData({ description: describtionRef.current.value }));
  };
  return (
    <>
      <div className="product-description">
        <label htmlFor="">Product Description</label>
        <div className="input-div">
          <textarea
            name=""
            placeholder="Product Description"
            ref={describtionRef}
            onChange={handleDescription}
          ></textarea>
        </div>
      </div>
    </>
  );
}
