import React from "react";

export default function CheckOutFormBottom() {
  return (
    <>
      <div className="checkout-form-bottom">
        <div className="payment-holder">
          <div className="payment-div">
            <h2>Payment</h2>
          </div>
          <div className="text-div">
            <span>All transactions are secure and encrypted</span>
          </div>
        </div>
        <div className="payment-accept">
          <div className="svg-holder">
            {/*?xml version="1.0" ?*/}
            <svg
              height="100px"
              id="Layer_1"
              style={{ enableBackground: "new 0 0 100 100" }}
              version="1.1"
              viewBox="0 0 100 100"
              width="100px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <path d="M91.924,23.204V65.98H19.46V23.204H91.924 M95.049,20.079H16.335v49.026h78.714L95.049,20.079L95.049,20.079z" />
              </g>
              <g>
                <polygon points="86.813,26.766 77.031,26.766 77.031,29.891 86.813,29.891  " />
              </g>
              <g>
                <polygon points="34.222,26.766 24.441,26.766 24.441,29.891 34.222,29.891  " />
              </g>
              <g>
                <polygon points="86.813,59.423 77.031,59.423 77.031,62.548 86.813,62.548  " />
              </g>
              <g>
                <polygon points="34.222,59.423 24.441,59.423 24.441,62.548 34.222,62.548  " />
              </g>
              <g>
                <path d="M55.659,37.812c3.731,0,6.766,3.035,6.766,6.766s-3.035,6.766-6.766,6.766s-6.766-3.035-6.766-6.766   C48.894,40.848,51.929,37.812,55.659,37.812 M55.659,34.687L55.659,34.687c-5.462,0-9.891,4.428-9.891,9.891l0,0   c0,5.462,4.428,9.891,9.891,9.891l0,0c5.462,0,9.891-4.428,9.891-9.891l0,0C65.55,39.116,61.122,34.687,55.659,34.687   L55.659,34.687z" />
              </g>
              <polygon points="13.009,72.627 13.009,26.524 9.884,26.524 9.884,72.627 9.884,75.752 13.009,75.752 88.415,75.752 88.415,72.627   " />
              <polygon points="6.375,79.159 6.375,33.056 3.25,33.056 3.25,79.159 3.25,82.284 6.375,82.284 81.781,82.284 81.781,79.159 " />
            </svg>
          </div>
          <div className="text-holder">
            <span>This store can't accept payments right now</span>
          </div>
        </div>
      </div>
    </>
  );
}
