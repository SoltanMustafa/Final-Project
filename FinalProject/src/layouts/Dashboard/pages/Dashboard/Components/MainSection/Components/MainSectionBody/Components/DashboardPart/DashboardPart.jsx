import React from "react";
import DataBoxes from "./Components/DataBoxes";
import OrderStatusBoxes from "./Components/OrderStatusBoxes";
import Barcharts from "./Components/Barcharts";

export default function DashboardPart() {
  return (
    <>
      <div className="dashboardpart-inside">
        <h1 className="dashboard-overview">Dashboard Overview</h1>
        <DataBoxes />
        <OrderStatusBoxes />
        <Barcharts />
      </div>
    </>
  );
}
