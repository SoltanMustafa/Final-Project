import React from "react";

export default function DownloadButton() {
  return (
    <>
      <div className="holder-div">
        <button className="flex gap-2 items-center w-full h-12 justify-center text-sm leading-5 text-center transition-colors duration-150 font-medium px-6 py-2 rounded-md text-white bg-emerald-500 hover:bg-emerald-600">
          <span>Download All Orders</span>
          <i className="fa-solid fa-cloud-arrow-down"></i>
        </button>
      </div>
    </>
  );
}
