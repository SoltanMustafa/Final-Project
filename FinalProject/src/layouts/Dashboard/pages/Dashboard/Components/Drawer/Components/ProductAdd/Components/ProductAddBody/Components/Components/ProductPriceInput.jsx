import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../../../../../../../../../../../../RTK/features/counter/AddProductData";

export default function ProductPriceInput() {
  const priceRef = useRef();
  const priceDispatch = useDispatch();

  const handlePrice = () => {
    priceDispatch(setData({ price: priceRef.current.value }));
  };
  return (
    <>
      <div className="product-price">
        <label htmlFor="">Product Price</label>
        <div className="input-div">
          <input
            type="number"
            min={0}
            placeholder="$0"
            ref={priceRef}
            onChange={handlePrice}
            required
          />
        </div>
      </div>
    </>
  );
}
