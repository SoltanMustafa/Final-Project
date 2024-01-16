import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import PurchasedlItem from "./PurchasedItem";

export default function PurchasedCarousel() {
  const options = {
    loop: true,
    nav: false,
    responsive: {
      0: {
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
      <div className="products-slider">
        <div className="slider-container">
          <OwlCarousel className="owl-carousel" {...options}>
            <PurchasedlItem />
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}
