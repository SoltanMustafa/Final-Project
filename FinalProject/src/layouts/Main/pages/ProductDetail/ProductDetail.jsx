import React, { useEffect } from "react";
import Header from "../../../../Components/Header/Header";
import Footer from "../../../../Components/Footer/Footer";
import ProductDetailedView from "./Components/ProductDetailedView/ProductDetailedView";
import AlsoPurchased from "./Components/AlsoPurchased/AlsoPurchased";

export default function ProductDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="product-detail-main">
        <div className="link-title">
          <div className="main-text-holder">
            <div className="container">
              <div className="link-way">
                <ul>
                  <li className="home">
                    <a href="">Home</a>
                  </li>
                  <li>
                    <span className="split">
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                    <span>Men Black Belt</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="main-part">
          <ProductDetailedView />
          <AlsoPurchased />
        </div>
      </div>
      <Footer />
    </>
  );
}
