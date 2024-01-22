import React from "react";
import { useDispatch } from "react-redux";
import { CloseStaffAdd } from "../../../../../../../../../RTK/features/counter/StaffAdd";

export default function FormButtons() {
  const staffAddDispatch = useDispatch();
  function handleCloseStaff() {
    staffAddDispatch(CloseStaffAdd());
  }
  return (
    <>
      <div className="form-buttons">
        <div className="button-div">
          <button
            type="button"
            className="cancel-btn"
            onClick={handleCloseStaff}
          >
            Cancel
          </button>
        </div>
        <div className="button-div">
          <button type="submit" className="add-btn">
            Add Staff
          </button>
        </div>
      </div>
    </>
  );
}
