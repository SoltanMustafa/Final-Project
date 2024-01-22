import React from "react";

export default function TableHead() {
  return (
    <>
      <tr className="head-tr">
        <td className="px-4 py-2">Invoce No</td>
        <td className="px-4 py-2">Order Time</td>
        <td className="px-4 py-2">Customer Name</td>
        <td className="px-4 py-2">Method</td>
        <td className="px-4 py-2">Amount</td>
        <td className="px-4 py-2">Status</td>
        <td className="px-4 py-2">Action</td>
        <td className="px-4 py-2 text-right">Invoce</td>
      </tr>
    </>
  );
}
