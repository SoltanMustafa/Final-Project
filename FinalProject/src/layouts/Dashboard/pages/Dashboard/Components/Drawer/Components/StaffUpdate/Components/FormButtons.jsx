import React from "react";
import { useDispatch } from "react-redux";
import { CloseStaffUpdate } from "../../../../../../../../../RTK/features/counter/StaffUpdate";

export default function FormButtons() {
  const updateStaffDispatch = useDispatch();
  function handleCloseStaff() {
    updateStaffDispatch(CloseStaffUpdate());
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
            Update Staff
          </button>
        </div>
      </div>
    </>
  );
}
