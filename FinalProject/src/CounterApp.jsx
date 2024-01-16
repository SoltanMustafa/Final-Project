import React from "react";
import MainRouter from "./router";
import { useSelector } from "react-redux";

export default function CounterApp() {
  const sideMenuActive = useSelector((state) => state.sideMenu.sideMenuActive);

  return (
    <>
      <div className={`wrapper ${sideMenuActive ? "wrapper-left-250px" : ""}`}>
        <MainRouter />
      </div>
    </>
  );
}
