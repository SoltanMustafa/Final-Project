import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import PurchasedlItem from "./PurchasedItem";
import {
  GetSiteBrands,
  GetSiteProducts,
} from "../../../../../../services/siteProduct";

export default function PurchasedCarousel() {
  const [productData, setProductData] = useState([]);
  const [brandData, setBrandData] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const page = 1;
        const perPage = 10;
        const r = await GetSiteProducts({ page, perPage });
        const products = r?.data?.product;

        const randomProducts = [];
        const totalProducts = products.length;
        const selectedIndices = new Set();
        while (selectedIndices.size < 5) {
          const randomIndex = Math.floor(Math.random() * totalProducts);
          selectedIndices.add(randomIndex);
        }
        selectedIndices.forEach((index) => {
          randomProducts.push(products[index]);
        });

        setProductData(randomProducts);
      } catch (error) {
        console.log("Error when fetching products", error);
      }
    };
    fetchProduct();
  }, []);

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const r = await GetSiteBrands();
        const data = r?.data;
        setBrandData(data);
      } catch (error) {
        console.log("Error when fetching brands", error);
      }
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
            {productData?.map((product) => {
              return (
                <PurchasedlItem
                  product={product}
                  brandData={brandData}
                  key={product?._id}
                />
              );
            })}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}
