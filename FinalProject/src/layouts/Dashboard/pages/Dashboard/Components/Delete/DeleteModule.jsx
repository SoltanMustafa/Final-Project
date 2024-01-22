import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CloseProductDelete } from "../../../../../../RTK/features/counter/ProductDelete";

export default function DeleteModule() {
  const productDeleteDispatch = useDispatch();
  const productDeleteActive = useSelector(
    (state) => state.productDelete.productDeleteActive
  );

  function handleCloseModule() {
    productDeleteDispatch(CloseProductDelete());
  }
  return (
    <>
      <div
        className={`delete-wrapper ${
          productDeleteActive ? "delete-shower" : ""
        }`}
      >
        <div className="delete-container">
          <div className="container-body">
            <span className="text-center text-[24px] mb-6 text-red-500">
              <i className="fa-regular fa-trash-can"></i>
            </span>
            <h2 className="text-xl font-medium mb-2">
              Are You Sure! Want to Delete
              <span className="text-red-500"> Premium T-Shirt</span>?
            </h2>
            <p className="text-sm">
              Do you really want to delete these records? You can't view this in
              your list anymore if you delete!
            </p>
          </div>
          <footer className="flex items-center justify-center px-6 py-3 bg-gray-50 -mx-6 -mb-4 gap-8">
            <button
              className="inline-flex items-center text-gray-600 rounded-lg px-4 py-2 border-gray-200 leading-5 bg-gray-300 h-12 hover:bg-white"
              onClick={handleCloseModule}
            >
              No, Keep it
            </button>
            <button className="inline-flex items-center text-white rounded-lg px-4 py-2 border-emerald-500 leading-5 bg-emerald-500 h-12 hover:bg-emerald-700">
              Yes, Delete it
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
