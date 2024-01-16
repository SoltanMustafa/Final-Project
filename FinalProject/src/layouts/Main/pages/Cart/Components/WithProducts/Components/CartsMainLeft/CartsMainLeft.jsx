import React from "react";
import CartTable from "./Components/CartTable";
import TextArea from "./Components/TextArea";

export default function CartsMainLeft() {
  return (
    <>
      <div className="col-lg-8 carts-main-left">
        <div className="cart-table-wrap">
          <CartTable />
        </div>
        <TextArea />
      </div>
    </>
  );
}
