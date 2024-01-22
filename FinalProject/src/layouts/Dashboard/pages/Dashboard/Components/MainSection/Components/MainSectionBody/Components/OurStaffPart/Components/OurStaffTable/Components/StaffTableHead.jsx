import React from "react";

export default function StaffTableHead() {
  return (
    <>
      <tr className="head-tr">
        <td className="px-4 py-2">Name</td>
        <td className="px-4 py-2">Email</td>
        <td className="px-4 py-2">Joining Data</td>
        <td className="px-4 py-2">Role</td>
        <td className="px-4 py-2 text-center">Status</td>
        <td className="px-4 py-2 text-center">Published</td>
        <td className="px-4 py-2 text-right">Actions</td>
      </tr>
    </>
  );
}
