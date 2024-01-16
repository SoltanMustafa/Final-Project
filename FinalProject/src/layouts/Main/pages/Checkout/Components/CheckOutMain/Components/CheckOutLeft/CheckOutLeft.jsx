import React from "react";
import CheckOutFormTop from "./Components/CheckOutFormTop";
import CheckOutFormMid from "./Components/CheckOutFormMid";
import CheckOutFormBottom from "./Components/CheckOutFormBottom/CheckOutFormBottom";

export default function CheckOutLeft() {
  return (
    <>
      <div className="left-part">
        <div className="left-part-inside">
          <div className="left-part-inner">
            <div className="content-holder">
              <form action="" className="checkout-form">
                <div className="form-inside-div">
                  <CheckOutFormTop />
                  <CheckOutFormMid />
                  <CheckOutFormBottom />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
