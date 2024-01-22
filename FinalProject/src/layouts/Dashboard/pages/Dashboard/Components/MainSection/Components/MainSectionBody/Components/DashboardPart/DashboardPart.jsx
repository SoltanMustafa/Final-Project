import React from "react";
import DataBoxes from "./Components/DataBoxes";
import OrderStatusBoxes from "./Components/OrderStatusBoxes";
import Barcharts from "./Components/Barcharts";
import OrderTable from "../OrdersPart/Components/OrdersTable/OrderTable";

export default function DashboardPart() {
  return (
    <>
      <div className="dashboardpart-inside">
        <h1 className="dashboard-overview">Dashboard Overview</h1>
        <DataBoxes />
        <OrderStatusBoxes />
        <Barcharts />
        <h1 className="dashboard-overview">Recent Orders</h1>
        <OrderTable />
      </div>
    </>
  );
}
