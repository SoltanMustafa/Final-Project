import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { OpenProductDelete } from "../../../../../../../../../../../../../RTK/features/counter/ProductDelete";
import { OpenBrandUpdate } from "../../../../../../../../../../../../../RTK/features/counter/BrandUpdate";
import { setData } from "../../../../../../../../../../../../../RTK/features/counter/BrandUpdateDelete";

export default function BrandTr({ brand }) {
  const brandUpdateDispatch = useDispatch();
  const brandDelUpDispatch = useDispatch();
  const deleteDispatch = useDispatch();
  const [publish, setPublish] = useState(false);
  const handlePublished = () => {
    setPublish((prevpub) => !prevpub);
  };

  function handleDeleteModule() {
    deleteDispatch(OpenProductDelete());
    brandDelUpDispatch(setData(brand));
  }

  function handleBrandUpdate() {
    brandUpdateDispatch(OpenBrandUpdate());
    brandDelUpDispatch(setData(brand));
  }
  return (
    <>
      <tr className="product-tr">
        <td className="px-4 py-2">
          <input type="checkbox" id="" name="" />
        </td>
        <td className="px-4 py-2">
          <div className="text-sm">{brand._id.slice(0, 4)}</div>
        </td>
        <td className="px-4 py-2">
          <div className="flex items-center">
            <div className="relative rounded-full inline-block w-8 h-8 overflow-hidden p-1 mr-2 ">
              <img
                src={brand.image.url}
                alt={brand.name}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </div>
        </td>
        <td className="px-4 py-2">
          <h2 className="text-sm font-medium">{brand.name}</h2>
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
            <button
              className="p-2 text-gray-400 hover:text-emerald-600"
              onClick={handleBrandUpdate}
            >
              <p className="text-xl">
                <i className="fa-regular fa-pen-to-square"></i>
              </p>
            </button>
            <button
              className="p-2 text-gray-400 hover:text-red-600"
              onClick={handleDeleteModule}
            >
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
