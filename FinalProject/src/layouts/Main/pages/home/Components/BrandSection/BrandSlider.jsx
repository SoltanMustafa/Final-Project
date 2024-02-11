import React, { useEffect, useState } from "react";
import BrandItem from "./BrandItem";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {
  GetSiteBrands,
  GetSiteProducts,
} from "../../../../../../services/siteProduct";

export default function BrandSlider() {
  const [brandData, setBrandData] = useState([]);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const r = await GetSiteBrands();
        const data = r?.data.slice(0, 4);
        setBrandData(data);
      } catch (error) {
        console.log("Error when fetching brands", error);
      }
    };
    fetchBrands();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const page = 1;
        const perPage = 33;
        const r = await GetSiteProducts({ page, perPage });
        const data = r?.data?.product;
        setProductData(data);
      } catch (error) {
        console.log("Error when fetching products", error);
      }
    };
    fetchProducts();
  }, []);

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
            {brandData.map((brand) => {
              return (
                <BrandItem
                  key={brand?._id}
                  brand={brand}
                  productData={productData}
                />
              );
            })}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}
