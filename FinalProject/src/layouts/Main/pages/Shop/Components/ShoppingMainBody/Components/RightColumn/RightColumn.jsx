import React from "react";
import RightTop from "./Components/RightTop/RightTop";
import RightMain from "./Components/RightMain/RightMain";
import RightBottom from "./Components/RightBottom/RightBottom";

export default function RightColumn() {
  return (
    <>
      <div className="col-lg-9 right-column">
        <RightTop />
        <RightMain />
        <RightBottom />
      </div>
    </>
  );
}
