import React, { useState } from "react";

export default function ProductTr() {
  const [status, setStatus] = useState(1);
  function handleOrderStatus(index) {
    setStatus(index);
  }

  return (
    <>
      <tr className="product-tr">
        <td className="px-4 py-2">
          <span className="text-sm">10024</span>
        </td>
        <td className="px-4 py-2">
          <div className="text-sm">Jan 22, 2024 3:14 PM</div>
        </td>
        <td className="px-4 py-2">
          <span className="text-sm">lucas matt</span>
        </td>
        <td className="px-4 py-2">
          <span className="text-sm font-bold">Cash</span>
        </td>
        <td className="px-4 py-2">
          <span className="text-sm font-bold">$699.89</span>
        </td>
        <td className="px-4 py-2">
          {status === 1 ? (
            <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100">
              Delivered
            </span>
          ) : (
            <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-blue-600 bg-blue-100">
              Processing
            </span>
          )}
        </td>
        <td className="px-4 py-2">
          <select
            name=""
            id=""
            className="block w-full border bg-gray-100 px-2 py-1 text-sm rounded-md form-select focus:bg-white border-gray-200"
            onChange={(e) => {
              handleOrderStatus(parseInt(e.target.value, 10));
            }}
            value={status}
          >
            <option value="1">Delivered</option>
            <option value="2">Processing</option>
          </select>
        </td>
        <td className="px-4 py-2">
          <div className="flex justify-end text-right">
            <button className="p-2 text-gray-400 hover:text-emerald-600">
              <p className="text-xl">
                <i className="fa-solid fa-print"></i>
              </p>
            </button>
            <button className="p-2 text-gray-400 hover:text-emerald-600">
              <p className="text-xl">
                <i className="fa-solid fa-magnifying-glass-plus"></i>
              </p>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
