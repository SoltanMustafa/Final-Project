import React, { useEffect, useRef, useState } from "react";
import DragImage from "./DragImage";
import { useDispatch } from "react-redux";
import { setData } from "../../../../../../../../../../../../../RTK/features/counter/UpdateProductData";

export default function ProductImagesinput({ editData }) {
  const currentImages = editData?.images;
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const imageDispatch = useDispatch();
  console.log("currentImages", currentImages);

  useEffect(() => {
    setImages(currentImages);
  }, [currentImages]);

  let imageUrls = [];

  if (images && Array.isArray(images)) {
    imageUrls = images.map((photo) => photo.url);
  } else {
    console.error("Images is not defined or not an array");
  }

  useEffect(() => {
    async function convertAndDispatch() {
      try {
        const base64Array = await Promise.all(
          imageUrls.map(async (imageUrl) => {
            const response = await fetch(imageUrl);
            const blob = await response.blob();

            return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onloadend = () => {
                const base64WithPrefix = `data:image/webp;base64,${
                  reader.result.split(",")[1]
                }`;
                resolve(base64WithPrefix);
              };
              reader.onerror = reject;
              reader.readAsDataURL(blob);
            });
          })
        );

        console.log("Base64 Array:", base64Array);

        imageDispatch(setData({ images: [...base64Array] }));
      } catch (error) {
        console.error("Hata:", error);
      }
    }

    convertAndDispatch();
  }, [imageUrls]);

  function selectFiles(event) {
    const files = event.dataTransfer.files;
    setImages((prevImages) => {
      if (prevImages.length + files.length > 4) {
        alert("You can't upload more than 4 images.");
        return prevImages;
      }

      let newImages = [...prevImages];

      for (let i = 0; i < files.length; i++) {
        if (files[i].type.split("/")[0] !== "image") {
          alert("Only image files are allowed.");
          continue;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Data = reader.result;
          newImages.push({
            name: files[i].name,
            url: base64Data,
          });
        };

        reader.readAsDataURL(files[i]);
      }

      return newImages;
    });
  }

  function deleteImage(index) {
    setImages((prevImages) => {
      const updatedImages = prevImages.filter((_, i) => i !== index);
      imageDispatch(setData({ images: updatedImages.map((img) => img.url) }));
      return updatedImages;
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
    if (images.length + files.length > 4) {
      alert("You can't upload more than 4 image.");
      return;
    }

    let base64Strings = [];

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
            url: base64Data,
          },
        ]);

        base64Strings.push(base64Data);

        imageDispatch(setData({ images: [...base64Strings] }));
      };

      reader.readAsDataURL(files[i]);
    }
  }

  return (
    <>
      <div className="product-images">
        <label htmlFor="">Product Images</label>
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
            {images &&
              images.length > 0 &&
              images.map((image, index) => (
                <DragImage
                  image={image}
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
