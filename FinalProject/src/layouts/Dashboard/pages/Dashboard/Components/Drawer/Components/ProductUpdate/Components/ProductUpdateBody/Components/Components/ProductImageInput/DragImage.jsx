import React from "react";

export default function DragImage({ images, index, deleteImage }) {
  return (
    <>
      <div className="image-holder">
        <div className="relative" key={index}>
          <img src={images.url} alt={images.name} />
          <p className="absolute bottom-0 text-xs text-white bg-blue-600 w-full rounded-full py-1 text-center">
            Default Image
          </p>
          <button
            type="button"
            className="w-[16px] h-[16px] rounded-full border border-rose-600 text-rose-600 absolute top-0 right-0 text-[11px] flex items-center justify-center"
            onClick={() => {
              deleteImage(index);
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </>
  );
}
