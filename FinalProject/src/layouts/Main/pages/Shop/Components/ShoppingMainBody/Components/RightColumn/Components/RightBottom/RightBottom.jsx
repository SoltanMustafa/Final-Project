import React from "react";

export default function RightBottom({
  totalPages,
  currentPage,
  onPageChange,
  totalProducts,
}) {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  return (
    <>
      <div className="right-bottom">
        <div className="pagination-container">
          <div className="pagination">
            <ul className="pagination-ul"></ul>
          </div>
        </div>
      </div>
    </>
  );
}
