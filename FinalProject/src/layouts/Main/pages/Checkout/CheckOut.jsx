import React from "react";
import CheckOutTop from "./Components/CheckOutTop/CheckOutTop";
import CheckOutMain from "./Components/CheckOutMain/CheckOutMain";

export default function CheckOut() {
  return (
    <>
      <div className="main-checkout">
        <CheckOutTop />
        <CheckOutMain />
      </div>
    </>
  );
}
