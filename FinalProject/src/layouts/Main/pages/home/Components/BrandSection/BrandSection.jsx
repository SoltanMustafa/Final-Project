import React from "react";
import BrandSlider from "./BrandSlider";

export default function BrandSection() {
  return (
    <>
      <div className="brand-section">
        <div className="brand-wrap">
          <div className="container">
            <h2 className="section-title flex flex-nowrap items-center">
              <span className="line-left"></span>
              <span className="inline-title px-[12px]">
                Brow Our Most Viewed Brands and More
              </span>
              <span className="line-right"></span>
            </h2>
            <BrandSlider />
          </div>
        </div>
      </div>
    </>
  );
}
