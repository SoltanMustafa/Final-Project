import React from "react";

export default function FourthColumn() {
  return (
    <>
      <div className="col-lg-3 info-footer">
        <div className="widget-wrapper">
          <div className="foot-block-title">
            <h3>Subscribe Newsletter</h3>
          </div>
          <div className="fourth-block-content">
            <p className="fourth-block-p">
              Get all the latest information on events, sales and offers. Sign
              up for newsletter:
            </p>
            <div className="newsletter-footer">
              <form action="" className="footer-form">
                <span className="new-text">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Email Address"
                  />
                </span>
                <span className="new-button">
                  <button type="submit" className="btn-button">
                    Submit
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
