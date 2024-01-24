import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../../../../../../../../../../../../RTK/features/counter/AddProductData";

export default function ProductSalePriceInput() {
  const salePriceRef = useRef();
  const saleDispatch = useDispatch();

  const handleSalePrice = () => {
    saleDispatch(setData({ salePrice: salePriceRef.current.value }));
  };
  return (
    <>
      <div className="product-sale-price">
        <label htmlFor="">Sale Price</label>
        <div className="input-div">
          <input
            type="number"
            placeholder="$0"
            ref={salePriceRef}
            onChange={handleSalePrice}
          />
        </div>
      </div>
    </>
  );
}
