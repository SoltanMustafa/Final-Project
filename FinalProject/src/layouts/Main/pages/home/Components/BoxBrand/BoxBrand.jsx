import React from "react";
import SliderItem from "./SliderItem";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function BoxBrand() {
  const options = {
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 2,
      },
      640: {
        items: 5,
      },
      992: {
        items: 6,
      },
    },
  };
  return (
    <>
      <div className="box-brand">
        <div className="brand-slider">
          <div className="container">
            <div className="brand-box-inside">
              <div className="carousel-itself">
                <div className="inside-carousel">
                  <OwlCarousel className="slider-holder" {...options}>
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                    <SliderItem />
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
