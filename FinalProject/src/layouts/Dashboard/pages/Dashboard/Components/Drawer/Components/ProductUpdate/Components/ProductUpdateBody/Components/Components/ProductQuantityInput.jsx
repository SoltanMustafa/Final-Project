import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../../../../../../../../../../../../RTK/features/counter/UpdateProductData";

export default function ProductQuantityInput({ editData }) {
  const currentAmount = editData?.stock;
  const [quantity, setQuantity] = useState("");
  const quantityDispatch = useDispatch();

  useEffect(() => {
    setQuantity(currentAmount);
  }, [currentAmount]);

  useEffect(() => {
    quantityDispatch(setData({ quantity: Number(quantity) }));
  }, [quantity]);

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };
  return (
    <>
      <div className="product-quantity">
        <label htmlFor="">Product Quantity</label>
        <div className="input-div">
          <input
            type="text"
            placeholder="0"
            onChange={handleQuantity}
            defaultValue={currentAmount}
          />
        </div>
      </div>
    </>
  );
}
