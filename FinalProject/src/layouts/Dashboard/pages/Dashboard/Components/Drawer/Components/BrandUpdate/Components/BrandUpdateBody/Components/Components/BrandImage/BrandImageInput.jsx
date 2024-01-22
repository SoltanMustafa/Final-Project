import React, { useRef, useState } from "react";
import DragImage from "./DrageImage";

export default function BrandImageinput() {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  function selectFiles(event) {
    const files = event.target.files;
    if (files.length == 0) return;
    if (images.length + files.length > 1) {
      alert("You can't upload more than 1 image.");
      return;
    }
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  function deleteImage(index) {
    setImages((prevImages) => {
      return prevImages.filter((_, i) => i !== index);
    });
  }

  function onDragOver(event) {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  }

  function onDragLeave(event) {
    event.preventDefault();
    setIsDragging(false);
  }

  function onDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    if (images.length + files.length > 1) {
      alert("You can't upload more than 1 image.");
      return;
    }
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;

      setImages((prevImages) => [
        ...prevImages,
        {
          name: files[i].name,
          url: URL.createObjectURL(files[i]),
        },
      ]);
    }
  }

  return (
    <>
      <div className="product-images">
        <label htmlFor="">Brand Image</label>
        <div className="drag-image-holder">
          <div
            className="images-drag-div"
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          >
            <input
              type="file"
              accept="image/*,.jpeg, .jpg, .png, .webp"
              multiple
              ref={fileInputRef}
              onChange={selectFiles}
            />
            {isDragging ? (
              <p className="text-[22px] py-8 mt-2 text-gray-900">
                Drag your images here
              </p>
            ) : (
              <>
                <span className="mx-auto flex justify-center text-emerald-600 text-[24px]">
                  <i className="fa-solid fa-cloud-arrow-up"></i>
                </span>
                <p className="text-sm mt-2 text-gray-900">
                  Drag your images here
                </p>
                <em className="text-xs text-gray-400">
                  (Only *jpeg, *webp, jpg and *png images will be accepted)
                </em>
              </>
            )}
          </div>
          <aside className="flex flex-row flex-wrap mt-4">
            {images.map((images, index) => (
              <DragImage
                images={images}
                index={index}
                deleteImage={deleteImage}
                key={index}
              />
            ))}
          </aside>
        </div>
      </div>
    </>
  );
}
