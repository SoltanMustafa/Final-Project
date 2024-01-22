import React from "react";
import { useDispatch } from "react-redux";
import { CloseStaffUpdate } from "../../../../../../../../../RTK/features/counter/StaffUpdate";

export default function StaffUpdateHeader() {
  const staffUpdateDispatch = useDispatch();
  function handleUpdateStaff() {
    staffUpdateDispatch(CloseStaffUpdate());
  }
  return (
    <>
      <div className="product-add-header">
        <div className="header-top">
          <button className="close-btn" onClick={handleUpdateStaff}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <h4 className="header-title text-xl font-medium">Update Staff</h4>
          <p className="mb-0 text-sm">
            Updated your staff necessary information from here
          </p>
        </div>
        <div className="header-bottom mt-4">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
              <button className="inline-block px-4 py-2 text-base text-emerald-600 border-emerald-600 border-b-2">
                Basic Info
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
