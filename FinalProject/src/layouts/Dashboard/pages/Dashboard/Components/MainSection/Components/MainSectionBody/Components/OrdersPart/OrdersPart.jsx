import React from "react";
import FormAndButtons from "./Components/FormAndButtons/FormAndButtons";
import OrderTable from "./Components/OrdersTable/OrderTable";

export default function OrdersPart() {
  return (
    <>
      <div className="orderspart-inside">
        <h1 className="section-title">Orders</h1>
        <FormAndButtons />
        <OrderTable />
      </div>
    </>
  );
}
