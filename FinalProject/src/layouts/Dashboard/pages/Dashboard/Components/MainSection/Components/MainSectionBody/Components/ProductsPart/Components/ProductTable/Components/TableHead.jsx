import React from "react";

export default function TableHead() {
  return (
    <>
      <tr className="head-tr">
        <td className="px-4 py-2">
          <input type="checkbox" id="selectAll" />
        </td>
        <td className="px-4 py-2">Product Name</td>
        <td className="px-4 py-2">Brand</td>
        <td className="px-4 py-2">Price</td>
        <td className="px-4 py-2">Sale Price</td>
        <td className="px-4 py-2">Stock</td>
        <td className="px-4 py-2">Status</td>
        <td className="px-4 py-2 text-center">View</td>
        <td className="px-4 py-2 text-center">Published</td>
        <td className="px-4 py-2 text-right">Actions</td>
      </tr>
    </>
  );
}
