import React from "react";

export default function ThirdColumn() {
  return (
    <>
      <div className="col-lg-3 info-footer">
        <div className="widget-wrapper">
          <div className="foot-block-title">
            <h3>Latest News</h3>
          </div>
          <div className="third-block-content">
            <div className="post-item-small">
              <a href="">Post Format Image</a>
              <span className="post-date">Sep 20, 2020</span>
            </div>
            <div className="post-item-small">
              <a href="">Top Jeans Collection</a>
              <span className="post-date">Sep 20, 2020</span>
            </div>
            <div className="post-item-small">
              <a href="">Post Format - Image Galery</a>
              <span className="post-date">Nov 28, 2016</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
