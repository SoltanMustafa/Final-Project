import React from "react";
import LanguageWrapper from "../../../WebHeader/Components/TopHeader/Components/LanguageWrapper";
import LinksDropDown from "./Components/LinksDropDown";
import PhoneTopIcons from "./Components/PhoneTopIcons";

export default function PhoneHeaderTop() {
  return (
    <>
      <div className="phone-header-top">
        <div className="container">
          <div className="phone-header-top-links ">
            <LanguageWrapper />
            <div className="phone-header-links-media">
              <LinksDropDown />
              <PhoneTopIcons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
