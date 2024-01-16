import React from "react";
import ProductTr from "./ProductTr";
import ProductBottomTr from "./ProductBottomTr";

export default function CartTable() {
  return (
    <>
      <table className="cart-table">
        <thead>
          <tr>
            <th className="product-thumbnail"></th>
            <th className="product-name">
              <span>Product</span>
            </th>
            <th className="product-price">
              <span>Price</span>
            </th>
            <th className="product-quantity">
              <span>Quantity</span>
            </th>
            <th className="product-subtotal">
              <span>Subtotal</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <ProductTr />
          <ProductBottomTr />
        </tbody>
      </table>
    </>
  );
}
