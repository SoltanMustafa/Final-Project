import React, { useState } from "react";

export default function ProductTr() {
  const [publish, setPublish] = useState(false);
  const handlePublished = () => {
    setPublish((prevpub) => !prevpub);
  };
  return (
    <>
      <tr className="product-tr">
        <td className="px-4 py-2">
          <input type="checkbox" id="" name="" />
        </td>
        <td className="px-4 py-2">
          <div className="flex items-center">
            <div className="relative rounded-full inline-block w-8 h-8 overflow-hidden p-1 mr-2 ">
              <img
                src="https://res.cloudinary.com/ahossain/image/upload/v1682058933/product/CMTHP-COR12-deep-ash-920x920.webp"
                alt=""
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <div className="product-name-div">
              <h2 className="text-sm font-medium">Premium T-Shirt</h2>
            </div>
          </div>
        </td>
        <td className="px-4 py-2">
          <div className="text-sm">Pull & Bear</div>
        </td>
        <td className="px-4 py-2">
          <span className="text-sm font-bold">$450.00</span>
        </td>
        <td className="px-4 py-2">
          <span className="text-sm font-bold">$430.00</span>
        </td>
        <td className="px-4 py-2">
          <span className="text-sm">9944</span>
        </td>
        <td className="px-4 py-2">
          <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100">
            Selling
          </span>
        </td>
        <td className="px-4 py-2">
          <a
            href=""
            className="flex justify-center text-gray-400 hover:text-emerald-600"
          >
            <p className="text-xl">
              <i className="fa-solid fa-magnifying-glass-plus"></i>
            </p>
          </a>
        </td>
        <td className="px-4 py-2 text-center">
          <div className="inside-div">
            <div
              className={`switch-button-holder ${
                publish ? "switch-onclick" : ""
              }`}
              onClick={handlePublished}
            >
              <div
                className={`switch-button ${publish ? "position-left" : ""}`}
              ></div>
            </div>
          </div>
        </td>
        <td className="px-4 py-2">
          <div className="flex justify-end text-right">
            <button className="p-2 text-gray-400 hover:text-emerald-600">
              <p className="text-xl">
                <i className="fa-regular fa-pen-to-square"></i>
              </p>
            </button>
            <button className="p-2 text-gray-400 hover:text-red-600">
              <p className="text-xl">
                <i className="fa-regular fa-trash-can"></i>
              </p>
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
