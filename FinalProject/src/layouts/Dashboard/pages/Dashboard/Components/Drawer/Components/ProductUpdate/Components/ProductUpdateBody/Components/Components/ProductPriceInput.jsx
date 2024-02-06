import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../../../../../../../../../../../../RTK/features/counter/UpdateProductData";

export default function ProductPriceInput({ editData }) {
  const currentPrice = editData?.productPrice;
  const [productPrice, setProductPrice] = useState("");
  const priceDispatch = useDispatch();
  useEffect(() => {
    setProductPrice(currentPrice);
  }, [currentPrice]);

  useEffect(() => {
    priceDispatch(setData({ price: Number(productPrice) }));
  }, [productPrice]);

  const handlePriceUpdate = (event) => {
    setProductPrice(event.target.value);
  };
  return (
    <>
      <div className="product-price">
        <label htmlFor="">Product Price</label>
        <div className="input-div">
          <input
            type="number"
            placeholder="$0"
            onChange={handlePriceUpdate}
            defaultValue={currentPrice}
          />
        </div>
      </div>
    </>
  );
}
