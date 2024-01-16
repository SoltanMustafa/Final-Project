import React from "react";

export default function BannerGridTwo() {
  return (
    <>
      <div className="banner-grid-item-2">
        <div className="banner-wrap">
          <img src="./home_banner2.avif" alt="" />
          <div className="banner-content">
            <div className="item2-banner-inner-content">
              <div className="all-content-holder2">
                <h3 className="item2-first-text">Porto Watches</h3>
                <h4 className="item2-second-text">
                  <sup className="percentage-sup">20%</sup>
                  30%
                  <sup className="off-sup">OFF</sup>
                </h4>
                <div className="item2-third-text">
                  <a href="">Shop Now</a>
                </div>
              </div>
              <div className="banner-little-photo"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
