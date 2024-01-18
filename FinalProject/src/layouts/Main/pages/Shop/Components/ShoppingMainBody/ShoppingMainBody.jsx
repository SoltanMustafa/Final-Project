import React from "react";
import LeftColumn from "./Components/LeftColumn/LeftColumn";
import RightColumn from "./Components/RightColumn/RightColumn";

export default function ShoppingMainBody() {
  return (
    <>
      <div className="shopping-main-part">
        <div className="product-main container">
          <div className="row">
            <LeftColumn />
            <RightColumn />
          </div>
        </div>
      </div>
    </>
  );
}
