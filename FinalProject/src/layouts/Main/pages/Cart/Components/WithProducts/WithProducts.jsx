import React from "react";
import CartsMainLeft from "./Components/CartsMainLeft/CartsMainLeft";
import CartsMainRight from "./Components/CartsMainRight/CartsMainRight";

export default function WithProducts() {
  return (
    <>
      <div className="with-main-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 with-main-content">
              <div className="main-inside">
                <form action="" className="cart-form">
                  <div className="row mb-[48px] pb-[8px]">
                    <CartsMainLeft />
                    <CartsMainRight />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
