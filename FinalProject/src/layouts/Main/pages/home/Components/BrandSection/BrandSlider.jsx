import React from "react";
import BrandItem from "./BrandItem";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function BrandSlider() {
  const options = {
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      468: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  };
  return (
    <>
      <div className="brand-collection-list">
        <div className="lists">
          <OwlCarousel className="carousel-item" {...options}>
            <BrandItem />
            <BrandItem />
            <BrandItem />
            <BrandItem />
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}
