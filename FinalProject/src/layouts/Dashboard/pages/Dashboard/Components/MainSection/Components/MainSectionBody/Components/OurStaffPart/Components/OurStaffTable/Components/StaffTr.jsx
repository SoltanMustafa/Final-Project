import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { OpenProductDelete } from "../../../../../../../../../../../../../RTK/features/counter/ProductDelete";
import { OpenStaffUpdate } from "../../../../../../../../../../../../../RTK/features/counter/StaffUpdate";
import { setData } from "../../../../../../../../../../../../../RTK/features/counter/EditAdminData";

export default function StaffTr({ admin }) {
  const staffUpdateDispatch = useDispatch();

  const staffDeleteDispatch = useDispatch();
  const editAdminDispatch = useDispatch();

  function handleDeleteStaff() {
    staffDeleteDispatch(OpenProductDelete());
    editAdminDispatch(setData(admin));
  }

  function handleOpenStaff() {
    staffUpdateDispatch(OpenStaffUpdate());
    editAdminDispatch(setData(admin));
  }

  const [publish, setPublish] = useState(false);
  const handlePublished = () => {
    setPublish((prevpub) => !prevpub);
  };
  return (
    <>
      <tr className="product-tr">
        <td className="px-4 py-2">
          <div className="text-sm">{admin?.name}</div>
        </td>
        <td className="px-4 py-2">
          <div className="text-sm">{admin?.email}</div>
        </td>
        <td className="px-4 py-2">
          <div className="text-sm">{admin?.createdAt.slice(0, 10)}</div>
        </td>
        <td className="px-4 py-2">
          <span className="text-sm font-medium capitalize">{admin?.role}</span>
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
