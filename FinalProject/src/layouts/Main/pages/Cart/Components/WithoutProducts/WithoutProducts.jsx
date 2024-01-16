import React from "react";

export default function WithoutProducts() {
  return (
    <>
      <div className="without-main-section hidden">
        <div className="container-without">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 main-content">
                <div className="main-content-holder">
                  {/*?xml version="1.0" ?*/}
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 16 3 C 13.253906 3 11 5.253906 11 8 L 11 9 L 6.0625 9 L 6 9.9375 L 5 27.9375 L 4.9375 29 L 27.0625 29 L 27 27.9375 L 26 9.9375 L 25.9375 9 L 21 9 L 21 8 C 21 5.253906 18.746094 3 16 3 Z M 16 5 C 17.65625 5 19 6.34375 19 8 L 19 9 L 13 9 L 13 8 C 13 6.34375 14.34375 5 16 5 Z M 7.9375 11 L 11 11 L 11 14 L 13 14 L 13 11 L 19 11 L 19 14 L 21 14 L 21 11 L 24.0625 11 L 24.9375 27 L 7.0625 27 Z" />
                  </svg>

                  <p className="w-full py-[8px] px-[16px] mb-[20px] text-center">
                    Your cart is currently empty.
                  </p>
                  <p className="return-to-shop mb-[20px] w-full text-center">
                    <a href="">Return to shop</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
