import React from "react";
import LatestNews from "./LatestNews";
import LatestReviews from "./LatestReviews";

export default function NewsReviws() {
  return (
    <>
      <div className="news-reviews">
        <div className="container custom-container">
          <div className="row">
            <LatestNews />
            <LatestReviews />
          </div>
        </div>
      </div>
    </>
  );
}
