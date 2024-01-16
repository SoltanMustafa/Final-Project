import React from "react";
import FirstColumn from "./Components/FirstColumn";
import SecondColumn from "./Components/SecondColumn";
import ThirdColumn from "./Components/ThirdColumn";
import FourthColumn from "./Components/FourthColumn";

export default function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <FirstColumn />
              <SecondColumn />
              <ThirdColumn />
              <FourthColumn />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="payment-block">
              <img src="./payment_logo.png" alt="" />
            </div>
            <span>© Porto eCommerce. © 2020. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </>
  );
}
