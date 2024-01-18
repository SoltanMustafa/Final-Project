import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MainLayouts() {
  const sideMenuActive = useSelector((state) => state.sideMenu.sideMenuActive);
  return (
    <>
      <div className={`wrapper ${sideMenuActive ? "wrapper-left-250px" : ""}`}>
        <Outlet />
      </div>
    </>
  );
}
