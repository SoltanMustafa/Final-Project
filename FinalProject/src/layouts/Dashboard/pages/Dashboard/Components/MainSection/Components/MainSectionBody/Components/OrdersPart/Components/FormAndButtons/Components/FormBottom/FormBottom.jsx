import React from "react";
import StartDate from "./Components/StartDate";
import EndDate from "./Components/EndDate";
import Buttons from "./Components/Buttons";

export default function FormBottom() {
  return (
    <>
      <div className="form-bottom">
        <StartDate />
        <EndDate />
        <Buttons />
      </div>
    </>
  );
}
