import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { OpenProductUpdate } from "../../../../../../../../../../../../../RTK/features/counter/ProductUpdate";
import { OpenProductDelete } from "../../../../../../../../../../../../../RTK/features/counter/ProductDelete";
import { setData } from "../../../../../../../../../../../../../RTK/features/counter/ProductUpdateDelete";

export default function ProductTr({ product, brandData }) {
  const editDispatch = useDispatch();
  const deleteDispatch = useDispatch();
  const updateDispatch = useDispatch();
  const [publish, setPublish] = useState(false);
  const handlePublished = () => {
    setPublish((prevpub) => !prevpub);
  };

  function handleOpenDelete() {
    deleteDispatch(OpenProductDelete());
    editDispatch(setData(product));
  }

  function handleUpdateButton() {
    updateDispatch(OpenProductUpdate());
    editDispatch(setData(product));
  }
  const brand = brandData.find((brand) => brand?._id === product?.brandId);
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
                src={product.images[0].url}
                alt={product.title}
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <div className="product-name-div">
              <h2 className="text-sm font-medium">
                {product.title.length > 22
                  ? `${product.title.substring(0, 22)}...`
                  : product.title}
              </h2>
            </div>
          </div>
        </td>
        <td className="px-4 py-2">
          <div className="text-sm">{brand?.name}</div>
        </td>
        <td className="px-4 py-2">
          <span className="text-sm font-bold">${product.productPrice}</span>
        </td>
        <td className="px-4 py-2">
          <span className="text-sm font-bold">
            $
            {`${
              product.salePrice > 0 ? product.salePrice : product.productPrice
            }`}
          </span>
        </td>
        <td className="px-4 py-2">
          <span className="text-sm">{product.stock}</span>
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
            <button
              className="p-2 text-gray-400 hover:text-emerald-600"
              onClick={handleUpdateButton}
            >
              <p className="text-xl">
                <i className="fa-regular fa-pen-to-square"></i>
              </p>
            </button>
            <button
              className="p-2 text-gray-400 hover:text-red-600"
              onClick={handleOpenDelete}
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
