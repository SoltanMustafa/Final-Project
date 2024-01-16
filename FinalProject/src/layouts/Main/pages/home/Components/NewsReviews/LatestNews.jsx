import React from "react";

export default function LatestNews() {
  return (
    <>
      <div className="col-md-6">
        <div className="article-title">
          <h2 className="section-title">
            <span className="inline-title">Latest News</span>
          </h2>
          <div className="latest-news">
            <div className="recent-posts">
              <div className="news-item">
                <div className="item-inside">
                  <div className="post-image">
                    <a href="">
                      <div className="img-thumbnail">
                        <img
                          src="https://porto-demo7.myshopify.com/cdn/shop/articles/blog1_480x480_6f3a823b-a384-459d-baf5-51cf3143b206_400x_crop_center.jpg?v=1600592900"
                          alt=""
                        />
                      </div>
                    </a>
                    <div className="post-date">
                      <span className="day">20</span>
                      <span className="month">Sep</span>
                    </div>
                  </div>
                  <div className="post-content">
                    <h4 className="entry-title">
                      <a href="">Post Format Image</a>
                    </h4>
                    <p className="post-text">
                      <p className="inside-text">
                        Euismod atras vulpuyaye iltricies etri elit. Class
                        aptent taciti sociosqu...
                      </p>
                      <a href="" className="read-more">
                        Read more
                        <i class="fa-solid fa-angle-right"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
