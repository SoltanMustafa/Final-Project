import React from "react";
import StaffName from "./Components/StaffName";
import StaffSurname from "./Components/StaffSurname";
import StaffPasword from "./Components/StaffPasword";
import StaffEmail from "./Components/StaffEmail";

export default function FormInputs() {
  return (
    <>
      <div className="form-inputs">
        <StaffName />
        <StaffSurname />
        <StaffEmail />
        <StaffPasword />
      </div>
    </>
  );
}
