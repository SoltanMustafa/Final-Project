import React from "react";

export default function TablePagination({
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
    <div className="table-pagination py-3 px-4 bg-white text-gray-500">
      <div className="inside-pagination flex flex-row justify-between text-xs">
        <span className="main-span font-bold">
          Showing {Math.min((currentPage - 1) * 10 + 1, totalProducts)}-
          {Math.min(currentPage * 10, totalProducts)} of {totalProducts}{" "}
        </span>
        <div className="pagination-div flex mt-2">
          <nav>
            <ul className="inline-flex items-center">
              <li>
                <button
                  type="button"
                  className="button-half-oppacity"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  <i className="fa-solid fa-angle-left"></i>
                </button>
              </li>
              {[...Array(totalPages).keys()].map((index) => (
                <li key={index}>
                  <button
                    type="button"
                    className={currentPage === index + 1 ? "selected-page" : ""}
                    onClick={() => onPageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  className="button-half-oppacity"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  <i className="fa-solid fa-angle-right"></i>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
