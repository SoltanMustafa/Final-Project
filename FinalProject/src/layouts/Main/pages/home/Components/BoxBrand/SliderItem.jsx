import React from "react";

export default function SliderItem({ brand }) {
  return (
    <>
      <div className="slider-item">
        <div className="item">
          <a href="">
            <img src={brand?.image.url} alt={brand?.name} />
          </a>
        </div>
      </div>
    </>
  );
}
