import React from "react";
import Header from "../../../../Components/Header/Header";
import Footer from "../../../../Components/Footer/Footer";
import HomeSectionOne from "./Components/HomeSectionOne/HomeSectionOne";
import FeaturedProducts from "./Components/FeaturedProducts/FeaturedProducts";
import BrandSection from "./Components/BrandSection/BrandSection";
import JustArrived from "./Components/JustArrived/JustArrived";
import ThreeColumns from "./Components/ThreeColumns/ThreeColumns";
import BoxBrand from "./Components/BoxBrand/BoxBrand";
import NewsReviws from "./Components/NewsReviews/NewsReviws";
import QuickMenu from "../../../../Components/QuickMenu/QuickMenu";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="main-wrapper">
          <div className="home-main">
            <HomeSectionOne />
            <FeaturedProducts />
            <BrandSection />
            <JustArrived />
            <ThreeColumns />
            <BoxBrand />
            <NewsReviws />
          </div>
        </div>
      </div>
      <QuickMenu />
      <Footer />
    </>
  );
}
