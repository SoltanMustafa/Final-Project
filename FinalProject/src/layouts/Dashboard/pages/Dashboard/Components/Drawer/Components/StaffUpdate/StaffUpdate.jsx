import React from "react";
import { useDispatch } from "react-redux";
import StaffUpdateHeader from "./Components/StaffUpdateHeader";
import { useSelector } from "react-redux";
import { CloseStaffUpdate } from "../../../../../../../../RTK/features/counter/StaffUpdate";

export default function StaffUpdate() {
  const editAdminData = useSelector((state) => state.editAdminData.editData);

  const updateStaffDispatch = useDispatch();
  function handleCloseStaff() {
    updateStaffDispatch(CloseStaffUpdate());
  }
  const staffUpdateActive = useSelector(
    (state) => state.staffUpdate.staffUpdateActive
  );
  return (
    <>
      <div
        className={`staff-add-container ${
          staffUpdateActive ? "module-show" : ""
        }`}
      >
        <div className="container-content">
          <StaffUpdateHeader />
          <div className="product-add-body">
            <form action="" className="product-add-form">
              <div className="form-inputs">
                <div className="product-title-name">
                  <label htmlFor="">Name</label>
                  <div className="input-div">
                    <input type="text" placeholder={editAdminData?.name} />
                  </div>
                </div>
                <div className="product-title-name">
                  <label htmlFor="">Surname</label>
                  <div className="input-div">
                    <input type="text" placeholder={editAdminData?.surname} />
                  </div>
                </div>
                <div className="product-title-name">
                  <label htmlFor="">Email</label>
                  <div className="input-div">
                    <input type="email" placeholder={editAdminData?.email} />
                  </div>
                </div>
                <div className="product-title-name">
                  <label htmlFor="">Password</label>
                  <div className="input-div">
                    <input type="text" placeholder="Password" />
                  </div>
                </div>
              </div>
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
