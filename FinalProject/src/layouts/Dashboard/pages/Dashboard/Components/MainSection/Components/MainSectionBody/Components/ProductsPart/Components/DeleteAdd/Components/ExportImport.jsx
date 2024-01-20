import React from "react";

export default function ExportImport() {
  return (
    <>
      <div className="left-side">
        <div className="left-button-div">
          <button type="button" className="text-green">
            <i className="fa-solid fa-upload"></i>
            <span>Export</span>
          </button>
        </div>
        <div className="left-button-div">
          <button type="button" className="text-orange">
            <i className="fa-solid fa-download"></i>
            <span>Inport</span>
          </button>
        </div>
      </div>
    </>
  );
}
