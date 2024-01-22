import React from "react";

export default function TableHead() {
  return (
    <>
      <tr className="head-tr">
        <td className="px-4 py-2">
          <input type="checkbox" id="selectAll" />
        </td>
        <td className="px-4 py-2">ID</td>
        <td className="px-4 py-2">Icon</td>
        <td className="px-4 py-2">Name</td>
        <td className="px-4 py-2 text-center">View</td>
        <td className="px-4 py-2 text-center">Published</td>
        <td className="px-4 py-2 text-right">Actions</td>
      </tr>
    </>
  );
}
