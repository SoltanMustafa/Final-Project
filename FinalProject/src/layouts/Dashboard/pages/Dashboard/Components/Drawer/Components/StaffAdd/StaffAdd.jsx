import React from "react";
import FormButtons from "./Components/FormButtons";
import StaffAddHeader from "./Components/StaffAddHeader";
import { useSelector } from "react-redux";
import StaffAddBody from "./Components/StaffAddBody/StaffAddBody";

export default function StaffAdd() {
  const staffAddActive = useSelector((state) => state.staffAdd.staffAddActive);
  return (
    <>
      <div
        className={`staff-add-container ${staffAddActive ? "module-show" : ""}`}
      >
        <div className="container-content">
          <StaffAddHeader />
          <StaffAddBody />
          <FormButtons />
        </div>
      </div>
    </>
  );
}
