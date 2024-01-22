import React from "react";
import { useDispatch } from "react-redux";
import { OpenStaffAdd } from "../../../../../../../../../../../../../RTK/features/counter/StaffAdd";

export default function AddStaff() {
  const staffAddDispatch = useDispatch();
  function handleOpenStaff() {
    staffAddDispatch(OpenStaffAdd());
  }
  return (
    <>
      <div className="add-staff-section">
        <button
          type="button"
          className="inline-flex align-bottom items-center justify-center leading-5 transition-color duration-150 font-medium px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 hover:bg-emerald-600 w-full gap-2 h-12"
          onClick={handleOpenStaff}
        >
          <i className="fa-solid fa-plus"></i>
          <span>Add Staff</span>
        </button>
      </div>
    </>
  );
}
