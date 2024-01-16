import React from "react";

export default function BannerGridFour() {
  return (
    <>
      <div className="banner-grid-item-4">
        <div className="banner-wrap">
          <img src="./home_banner3.webp" alt="" />
          <div className="banner-content">
            <div className="item4-inner-content">
              <div className="item4-all-content">
                <h3 className="item4-first-text">Deal Promos</h3>
                <h4 className="item4-second-text">Starting at $99</h4>
                <div className="items4-show-now">
                  <a href="">Shop Now</a>
                </div>
              </div>
              <div className="percent50">
                <h6 className="percent50-h6">
                  50
                  <small>
                    <sup>%</sup>
                    <sub>OFF</sub>
                  </small>
                </h6>
              </div>
              <div className="percent70">
                <h6 className="percent70-h6">
                  70
                  <small>
                    <sup>%</sup>
                    <sub>OFF</sub>
                  </small>
                </h6>
              </div>
              <div className="percent30">
                <h6 className="percent30-h6">
                  30
                  <small>
                    <sup>%</sup>
                    <sub>OFF</sub>
                  </small>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
