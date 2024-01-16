import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import LittleProduct from "./LittleImage";

export default function ProductImageMenu() {
  const options = {
    loop: false,
    nav: false,
    responsive: {
      0: {
        items: 3,
      },
      640: {
        items: 4,
      },
      778: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  };
  return (
    <>
      <div className="col-md-6 product-image-box">
        <div className="product-image-list">
          <div className="product-image-zoom">
            <div className="product-gallery">
              <img
                src="https://porto-demo7.myshopify.com/cdn/shop/products/MenBrownBelts2_16c0f79e-e3b1-44f1-bb36-550c5f744248_600x_crop_center.jpg?v=1600571883"
                alt=""
                className="gallery-image"
              />
              <div className="icon-zoom">
                {/*?xml version="1.0" ?*/}
                <svg
                  enableBackground="new 0 0 512 512"
                  height="512px"
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="512px"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M504.984,478.912L361.365,335.271c28.868-34.715,46.246-79.299,46.246-127.965  C407.611,96.672,317.939,7,207.306,7C96.692,7,7,96.672,7,207.306c0,110.608,89.692,200.301,200.306,200.301  c48.676,0,93.256-17.379,127.972-46.248L478.896,505L504.984,478.912z M28.085,207.306c0-98.825,80.386-179.221,179.221-179.221  c98.815,0,179.221,80.396,179.221,179.221c0,98.831-80.405,179.215-179.221,179.215C108.471,386.521,28.085,306.137,28.085,207.306z  "
                    fill="#777"
                  />
                  <rect
                    fill="#425661"
                    height="21.084"
                    width="200.729"
                    x="105.181"
                    y="197.438"
                  />
                  <rect
                    fill="#425661"
                    height="200.729"
                    width="21.084"
                    x="195.003"
                    y="107.615"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="more-views-horizontal">
            <div className="row">
              <OwlCarousel className="owl-carousel" {...options}>
                <LittleProduct />
                <LittleProduct />
                <LittleProduct />
                <LittleProduct />
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
