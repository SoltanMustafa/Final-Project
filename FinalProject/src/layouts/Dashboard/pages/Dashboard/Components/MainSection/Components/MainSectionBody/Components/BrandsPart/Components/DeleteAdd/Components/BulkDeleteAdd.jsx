import React from "react";

export default function BulkDeleteAdd() {
  return (
    <>
      <div className="right-side">
        <div className="right-button-holder">
          <button type="button" className="bulk-btn">
            <i className="fa-regular fa-pen-to-square"></i>
            <span>Bulk Action</span>
          </button>
        </div>
        <div className="right-button-holder">
          <button type="button" className="delete-btn">
            <i className="fa-regular fa-trash-can"></i>
            <span>Delete</span>
          </button>
        </div>
        <div className="right-button-holder">
          <button type="button" className="add-btn">
            <i className="fa-solid fa-plus"></i>
            <span>Add Brand</span>
          </button>
        </div>
      </div>
    </>
  );
}
