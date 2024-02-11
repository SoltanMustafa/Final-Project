import React from "react";

export default function BrandItem({ brand, productData }) {
  const brandProduct = productData?.filter(
    (product) => product?.brandId === brand?._id
  );

  console.log(brandProduct);
  return (
    <>
      <div className="brand-item">
        <div className="item-inner">
          <a href="">
            <span className="thumb-info">
              <span className="thumb-image">
                <img
                  src="./brandbackground.jpg"
                  alt={brand?.name}
                  className="bg-image"
                />
                <img
                  src={brand?.image.url}
                  alt={brand?.name}
                  className="brand-image"
                />
              </span>
              <span className="thumb-text">
                <h3 className="sub-title">{brand?.name}</h3>
                <span className="product-count">
                  {brandProduct.length} Products
                </span>
              </span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
