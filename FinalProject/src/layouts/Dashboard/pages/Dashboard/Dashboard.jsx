import React, { useState } from "react";
import LeftBar from "./Components/LeftBar/LeftBar";
import MainSection from "./Components/MainSection/MainSection";
import Drawer from "./Components/Drawer/Drawer";

export default function Dashboard() {
  const [menuSelection, setMenuSelection] = useState(1);
  const handleMenuSelection = (index) => {
    setMenuSelection(index);
  };
  return (
    <>
      <div className="dashboard-main">
        <LeftBar
          menuSelection={menuSelection}
          handleMenuSelection={handleMenuSelection}
        />
        <MainSection menuSelection={menuSelection} />
        <Drawer />
      </div>
    </>
  );
}
