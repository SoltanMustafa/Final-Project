import React, { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Carousel() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    function fetchProduct() {}
  }, []);

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
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}
