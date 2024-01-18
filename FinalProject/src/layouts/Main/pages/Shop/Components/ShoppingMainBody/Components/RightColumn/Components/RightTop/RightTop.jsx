import React from "react";
import SideFilter from "./Components/SideFilter";
import SortMenu from "./Components/SortMenu";
import ViewMode from "./Components/ViewMode";

export default function RightTop() {
  return (
    <>
      <div className="right-top">
        <div className="right-top-inside">
          <SideFilter />
          <SortMenu />
          <ViewMode />
        </div>
      </div>
    </>
  );
}
