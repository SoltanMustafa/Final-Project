import React from "react";
import FormAndButtons from "./Components/FormAndButtons/FormAndButtons";
import OurStaffTable from "./Components/OurStaffTable/OurStaffTable";

export default function OurStaffPart() {
  return (
    <>
      <div className="ourstaffpart-inside">
        <h1 className="section-title">Our Staff</h1>
        <FormAndButtons />
        <OurStaffTable />
      </div>
    </>
  );
}
