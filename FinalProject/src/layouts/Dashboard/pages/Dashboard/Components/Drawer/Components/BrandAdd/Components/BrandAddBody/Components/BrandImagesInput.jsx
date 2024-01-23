import React, { useRef, useState } from "react";
import DragImage from "./DragImage";
import { useDispatch } from "react-redux";
import { setData } from "../../../../../../../../../../../RTK/features/counter/BrandImageAdd";

export default function BrandImagesinput() {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const brandImageDispatch = useDispatch();

  function selectFiles(event) {
    const files = event.dataTransfer.files;
    if (images.length + files.length > 1) {
      alert("You can't upload more than 1 image.");
      return;
    }

    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") {
        alert("Only image files are allowed.");
        continue;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result;
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: base64Data, // Base64-encoded image data
          },
        ]);
        console.log(
          `Image "${files[i].name}" added to state with base64 data:`,
          base64Data
        );
      };

      reader.readAsDataURL(files[i]);
    }
  }

  function deleteImage(index) {
    setImages((prevImages) => {
      return prevImages.filter((_, i) => i !== index);
    });
    brandImageDispatch(setData(""));
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
      if (files[i].type.split("/")[0] !== "image") {
        alert("Only image files are allowed.");
        continue;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result;
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: base64Data, // Base64-encoded image data
          },
        ]);
        console.log(
          `Image "${files[i].name}" added to state with base64 data:`,
          base64Data
        );
        brandImageDispatch(setData(base64Data));
      };

      reader.readAsDataURL(files[i]);
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
