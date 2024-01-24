import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../../../../../../../../../../../../RTK/features/counter/AddProductData";

export default function ProductTitleImput() {
  const nameRef = useRef();
  const nameDispatch = useDispatch();
  const handleName = () => {
    nameDispatch(setData({ name: nameRef.current.value }));
  };

  return (
    <>
      <div className="product-title-name">
        <label htmlFor="">Product Title/Name</label>
        <div className="input-div">
          <input
            type="text"
            placeholder="Product Title/Name"
            ref={nameRef}
            onChange={handleName}
            required
          />
        </div>
      </div>
    </>
  );
}
