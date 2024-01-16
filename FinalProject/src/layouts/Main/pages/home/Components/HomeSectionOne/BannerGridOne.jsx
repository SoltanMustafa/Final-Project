import React from "react";

export default function BannerGridOne() {
  return (
    <>
      <div className="banner-grid-item-1">
        <div className="banner-wrap">
          <img src="./home_banner1.webp" alt="" />
          <div className="banner-content">
            <div className="item1-banner-inner-content">
              <div className="all-content-holder">
                <h5 className="item1-first-text">Find the Boundaries</h5>
                <h3 className="item1-second-text">Flash Sale</h3>
                <h4 className="item1-third-text">70% OFF</h4>
                <div className="starting-price-tag flex">
                  <h5 className="item1-fourth-text">STARTING AT</h5>
                  <h5 className="item1-fifth-text">
                    <b className="background-span">
                      <sup className="inside-dollar-span">$</sup>
                      <span>199</span>
                      <sup className="inside-cent-span">99</sup>
                    </b>
                  </h5>
                </div>
                <div className="banner-button-one">
                  <a href="">Shop Now!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
