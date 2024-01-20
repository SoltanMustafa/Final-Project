import React from "react";
import DashboardHeader from "./Components/DashboardHeader/DashboardHeader";
import MainSectionBody from "./Components/MainSectionBody/MainSectionBody";

export default function MainSection({ menuSelection }) {
  return (
    <>
      <div className="main-section">
        <DashboardHeader />
        <MainSectionBody menuSelection={menuSelection} />
      </div>
    </>
  );
}
