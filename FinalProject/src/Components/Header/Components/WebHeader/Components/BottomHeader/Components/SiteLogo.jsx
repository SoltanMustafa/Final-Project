import React from "react";
import { useSelector } from "react-redux";

export default function SiteLogo() {
  const scrollValue = useSelector((state) => state.stickyHeader.ScrollValue);
  return (
    <>
      <div className="site-logo">
        <a href="/" className="porto-main-logo">
          <img
            className={`${scrollValue > 0 ? "img-transform-scale" : ""}`}
            src="https://porto-demo7.myshopify.com/cdn/shop/t/29/assets/logo_black_new.png?v=82644603109002165811639889209"
            alt="porto-logo"
          />
        </a>
      </div>
    </>
  );
}
