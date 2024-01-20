import React from "react";
import { useSelector } from "react-redux";
import LogoSection from "./Components/LogoSection";
import LeftBarMenu from "./Components/LeftBarMenu";

export default function LeftBar({ menuSelection, handleMenuSelection }) {
  const sideBarActive = useSelector((state) => state.sideBar.sideBarActive);
  return (
    <>
      <div className={`left-bar ${sideBarActive ? "show-bar" : ""}`}>
        <div className="left-bar-inside">
          <LogoSection />
          <LeftBarMenu
            menuSelection={menuSelection}
            handleMenuSelection={handleMenuSelection}
          />
        </div>
      </div>
    </>
  );
}
