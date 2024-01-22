import React from "react";
import FormTop from "./Components/FormTop/FormTop";
import FormBottom from "./Components/FormBottom/FormBottom";

export default function FormAndButtons() {
  return (
    <>
      <div className="form-and-buttons">
        <div className="main-container">
          <form action="">
            <FormTop />
            <FormBottom />
          </form>
        </div>
      </div>
    </>
  );
}
