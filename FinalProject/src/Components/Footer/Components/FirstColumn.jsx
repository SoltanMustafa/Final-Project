import React from "react";

export default function FirstColumn() {
  return (
    <>
      <div className="col-lg-3 info-footer">
        <div className="widget-wrapper">
          <div className="foot-block-title">
            <h3>About Us</h3>
          </div>
          <div className="block-content">
            <a href="" className="logo-holder">
              <img src="./logo_ecomwhite.png" alt="" />
            </a>
            <div className="textwidget">
              <p className="mb-[24px] mt-[-15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec vestibulum magna, et dapibus lacus. Duis nec vestibulum
                magna, et dapibus lacus.
              </p>
            </div>
            <div className="share-links my-[30px]">
              <a href="" className="share-facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="" className="share-twitter">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="" className="share-linkedin">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
