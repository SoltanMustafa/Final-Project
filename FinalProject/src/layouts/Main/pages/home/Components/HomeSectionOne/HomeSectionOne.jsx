import React from "react";
import BannerGridOne from "./BannerGridOne";
import BannerGridTwo from "./BannerGridTwo";
import BannerGridThree from "./BannerGridThree";
import BannerGridFour from "./BannerGridFour";

export default function HomeSectionOne() {
  return (
    <>
      <div className="banner-masonry-section">
        <div className="banner-masonry-div">
          <div className="container">
            <div className="banner-grid">
              <BannerGridOne />
              <BannerGridTwo />
              <BannerGridThree />
              <BannerGridFour />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
