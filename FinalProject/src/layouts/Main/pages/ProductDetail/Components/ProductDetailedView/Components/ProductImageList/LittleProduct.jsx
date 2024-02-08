import React from "react";

export default function LittleProduct({ image, handleImageChange }) {
  return (
    <>
      <div className="little-item">
        <div className="item-inside">
          <a
            href=""
            className="thumb-link"
            onClick={(e) => {
              e.preventDefault();
              handleImageChange(image.url);
            }}
          >
            <img src={image.url} className="img-responsive" />
          </a>
        </div>
      </div>
    </>
  );
}
