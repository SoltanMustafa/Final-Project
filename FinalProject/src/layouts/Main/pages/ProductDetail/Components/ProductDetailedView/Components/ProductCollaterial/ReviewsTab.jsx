import React from "react";

export default function ReviewsTab() {
  return (
    <>
      <div className="reviews-tab">
        <h2 className="section-title">Customer Reviews</h2>
        <div className="summary">
          <span className="summary-caption">No reviews yet</span>
          <span className="summary-action">
            <a href="">Write a review</a>
          </span>
        </div>
      </div>
    </>
  );
}
