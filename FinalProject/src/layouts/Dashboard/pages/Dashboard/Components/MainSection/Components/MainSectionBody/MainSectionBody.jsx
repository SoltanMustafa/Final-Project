import React from "react";
import DashboardPart from "./Components/DashboardPart/DashboardPart";
import BrandsPart from "./Components/BrandsPart/BrandsPart";
import ProductsPart from "./Components/ProductsPart/ProductsPart";
import OrdersPart from "./Components/OrdersPart/OrdersPart";
import OurStaffPart from "./Components/OurStaffPart/OurStaffPart";

export default function MainSectionBody({ menuSelection }) {
  return (
    <>
      <div className="main-section-body">
        <div className="dashboard-container">
          <div
            className={`dashboardpart ${
              menuSelection === 1 ? "section-show" : ""
            }`}
          >
            <DashboardPart />
          </div>
          <div
            className={`productspart ${
              menuSelection === 2 ? "section-show" : ""
            }`}
          >
            <ProductsPart />
          </div>
          <div
            className={`brandspart ${
              menuSelection === 3 ? "section-show" : ""
            }`}
          >
            <BrandsPart />
          </div>
          <div
            className={`orderspart ${
              menuSelection === 4 ? "section-show" : ""
            }`}
          >
            <OrdersPart />
          </div>
          <div
            className={`ourstaffpart ${
              menuSelection === 5 ? "section-show" : ""
            }`}
          >
            <OurStaffPart />
          </div>
        </div>
      </div>
    </>
  );
}
