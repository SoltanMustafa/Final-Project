import React from "react";
import HeaderButton from "./Components/HeaderButton";
import HeaderMenu from "./Components/HeaderMenu";

export default function DashboardHeader() {
  return (
    <>
      <header className="dashboard-header">
        <div className="dashboard-container">
          <HeaderButton />
          <HeaderMenu />
        </div>
      </header>
    </>
  );
}
