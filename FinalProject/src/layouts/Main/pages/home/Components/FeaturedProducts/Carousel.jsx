import React, { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {
  GetSiteBrands,
  GetSiteProducts,
} from "../../../../../../services/siteProduct";

export default function Carousel() {
  const [productData, setProductData] = useState([]);
  const [brandData, setBrandData] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const page = 1;
        const perPage = 10;
        const r = await GetSiteProducts({ page, perPage });
        const data = r?.data?.product?.slice(0, 5);

        setProductData(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduct();
  }, []);

  useEffect(() => {
    const fetchBrand = async () => {
      const r = await GetSiteBrands();
      const data = r?.data;
      setBrandData(data);
    };
    fetchBrand();
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
            {productData.map((product) => {
              return (
                <CarouselItem
                  key={product?._id}
                  product={product}
                  brandData={brandData}
                />
              );
            })}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}
