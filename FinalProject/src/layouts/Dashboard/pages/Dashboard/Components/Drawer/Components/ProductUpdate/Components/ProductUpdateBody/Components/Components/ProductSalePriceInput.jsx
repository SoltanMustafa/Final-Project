import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../../../../../../../../../../../../RTK/features/counter/UpdateProductData";

export default function ProductSalePriceInput({ editData }) {
  const currentSalePrice = editData?.salePrice;
  const [salePrice, setSalePrice] = useState("");
  const saleDispatch = useDispatch();

  useEffect(() => {
    setSalePrice(currentSalePrice);
  }, [currentSalePrice]);

  useEffect(() => {
    saleDispatch(setData({ salePrice: Number(salePrice) }));
  }, [salePrice]);

  const handleSalePrice = (e) => {
    setSalePrice(e.target.value);
  };

  return (
    <>
      <div className="product-sale-price">
        <label htmlFor="">Sale Price</label>
        <div className="input-div">
          <input
            type="number"
            placeholder="$0"
            onChange={handleSalePrice}
            defaultValue={currentSalePrice}
          />
        </div>
      </div>
    </>
  );
}
