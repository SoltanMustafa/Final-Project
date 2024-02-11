import React, { useEffect, useState } from "react";
import SliderItem from "./SliderItem";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { GetSiteBrands } from "../../../../../../services/siteProduct";

export default function BoxBrand() {
  const [brandData, setBrandData] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const r = await GetSiteBrands();
        const data = r?.data;
        setBrandData(data);
      } catch (error) {
        console.log("Error when fetching brands", error);
      }
    };
    fetchBrands();
  }, []);
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
                    {brandData.map((brand) => {
                      return <SliderItem key={brand?._id} brand={brand} />;
                    })}
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
