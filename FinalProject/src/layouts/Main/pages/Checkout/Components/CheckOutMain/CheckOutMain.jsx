import React from "react";
import CheckOutLeft from "./Components/CheckOutLeft/CheckOutLeft";
import CheckOutRight from "./Components/CheckOutRight/CheckOutRight";

export default function CheckOutMain() {
  return (
    <>
      <div className="checkout-main-body">
        <CheckOutLeft />
        <CheckOutRight />
      </div>
    </>
  );
}
