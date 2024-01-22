import React from "react";
import ProductAdd from "./Components/ProductAdd/ProductAdd";
import { useSelector } from "react-redux";

export default function Drawer() {
  const setProductAdd = useSelector(
    (state) => state.productAdd.productAddActive
  );
  return (
    <>
      <div className={`drawer ${setProductAdd ? "drawer-show" : ""}`}>
        <div className="drawer-mask"></div>
        <ProductAdd />
      </div>
    </>
  );
}
