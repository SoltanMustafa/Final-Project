import React from "react";
import FormButtons from "./Components/FormButtons";
import StaffUpdateHeader from "./Components/StaffUpdateHeader";
import StaffUpdateBody from "./Components/StaffAddBody/StaffUpdateBody";
import { useSelector } from "react-redux";

export default function StaffUpdate() {
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
          <StaffUpdateBody />
          <FormButtons />
        </div>
      </div>
    </>
  );
}
