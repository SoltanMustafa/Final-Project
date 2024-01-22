import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { OpenProductDelete } from "../../../../../../../../../../../../../RTK/features/counter/ProductDelete";
import { OpenStaffUpdate } from "../../../../../../../../../../../../../RTK/features/counter/StaffUpdate";

export default function StaffTr() {
  const staffUpdateDispatch = useDispatch();

  const staffDeleteDispatch = useDispatch();

  function handleDeleteStaff() {
    staffDeleteDispatch(OpenProductDelete());
  }

  function handleOpenStaff() {
    staffUpdateDispatch(OpenStaffUpdate());
  }

  const [publish, setPublish] = useState(false);
  const handlePublished = () => {
    setPublish((prevpub) => !prevpub);
  };
  return (
    <>
      <tr className="product-tr">
        <td className="px-4 py-2">
          <div className="text-sm">Admin Admin</div>
        </td>
        <td className="px-4 py-2">
          <div className="text-sm">admin@email.com</div>
        </td>
        <td className="px-4 py-2">
          <div className="text-sm">Jan 22, 2024</div>
        </td>
        <td className="px-4 py-2">
          <span className="text-sm font-medium">Admin</span>
        </td>
        <td className="px-4 py-2 text-center ">
          <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100">
            Active
          </span>
        </td>
        <td className="px-4 py-2 text-center">
          <div className="inside-div">
            <div
              className={`switch-button-holder ${
                publish ? "switch-onclick" : ""
              }`}
              onClick={handlePublished}
            >
              <div
                className={`switch-button ${publish ? "position-left" : ""}`}
              ></div>
            </div>
          </div>
        </td>
        <td className="px-4 py-2">
          <div className="flex justify-end text-right">
            <button
              className="p-2 text-gray-400 hover:text-emerald-600"
              onClick={handleOpenStaff}
            >
              <p className="text-xl">
                <i className="fa-regular fa-pen-to-square"></i>
              </p>
            </button>
            <button
              className="p-2 text-gray-400 hover:text-red-600"
              onClick={handleDeleteStaff}
            >
              <p className="text-xl">
                <i className="fa-regular fa-trash-can"></i>
              </p>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
