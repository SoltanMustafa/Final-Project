import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../../../../../../../../../../../../RTK/features/counter/AddProductData";

export default function ProductQuantityInput() {
  const quantityRef = useRef();
  const quantityDispatch = useDispatch();

  const handleQuantity = () => {
    quantityDispatch(setData({ quantity: quantityRef.current.value }));
  };
  return (
    <>
      <div className="product-quantity">
        <label htmlFor="">Product Quantity</label>
        <div className="input-div">
          <input
            type="text"
            placeholder="0"
            ref={quantityRef}
            onChange={handleQuantity}
            required
          />
        </div>
      </div>
    </>
  );
}
