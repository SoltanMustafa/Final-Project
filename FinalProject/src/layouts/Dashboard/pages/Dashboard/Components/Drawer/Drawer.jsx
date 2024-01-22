import React from "react";
import ProductAdd from "./Components/ProductAdd/ProductAdd";
import { useSelector } from "react-redux";
import ProductUpdate from "./Components/ProductUpdate/ProductUpdate";
import BrandAdd from "./Components/BrandAdd/BrandAdd";
import BrandUpdate from "./Components/BrandUpdate/BrandUpdate";
import StaffAdd from "./Components/StaffAdd/StaffAdd";
import StaffUpdate from "./Components/StaffUpdate/StaffUpdate";

export default function Drawer() {
  const setProductAdd = useSelector(
    (state) => state.productAdd.productAddActive
  );
  const setProductUpdate = useSelector(
    (state) => state.productUpdate.productUpdateActive
  );
  const setBrandAdd = useSelector((state) => state.brandAdd.brandAddActive);
  const setBrandUpdate = useSelector(
    (state) => state.brandUpdate.brandUpdateActive
  );
  const setStaffAdd = useSelector((state) => state.staffAdd.staffAddActive);
  const setStaffUpdate = useSelector(
    (state) => state.staffUpdate.staffUpdateActive
  );

  return (
    <>
      <div
        className={`drawer ${
          setProductAdd ||
          setProductUpdate ||
          setBrandAdd ||
          setBrandUpdate ||
          setStaffAdd ||
          setStaffUpdate
            ? "drawer-show"
            : ""
        }`}
      >
        <div className="drawer-mask"></div>
        <ProductAdd />
        <ProductUpdate />
        <BrandAdd />
        <BrandUpdate />
        <StaffAdd />
        <StaffUpdate />
      </div>
    </>
  );
}
