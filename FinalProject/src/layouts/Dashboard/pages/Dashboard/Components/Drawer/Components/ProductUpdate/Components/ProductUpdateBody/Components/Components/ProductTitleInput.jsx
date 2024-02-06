import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setData } from "../../../../../../../../../../../../RTK/features/counter/UpdateProductData";

export default function ProductTitleInput({ editData }) {
  const currentTitle = editData?.title;
  const [title, setTitle] = useState("");
  const titleDispatch = useDispatch();

  useEffect(() => {
    setTitle(currentTitle);
  }, [currentTitle]);

  useEffect(() => {
    titleDispatch(setData({ name: title }));
  }, [title]);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <div className="product-title-name">
        <label htmlFor="">Product Title/Name</label>
        <div className="input-div">
          <input
            type="text"
            placeholder="Product Title/Name"
            onChange={handleTitle}
            defaultValue={currentTitle}
          />
        </div>
      </div>
    </>
  );
}
