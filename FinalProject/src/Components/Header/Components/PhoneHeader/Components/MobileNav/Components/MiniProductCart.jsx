import React from "react";
import { Link } from "react-router-dom";

export default function MiniProductCart({ product }) {
  console.log(product);
  return (
    <>
      <Link to={`/product/${product?._id}`} className="mini-cart-holder">
        <div className="suggestion-thumb">
          <img src={product?.images[0].url} alt={product?.title} />
        </div>
        <div className="suggested-product-detail">
          <div className="suggested-product-title">{product?.title}</div>
          <div className="price-tag flex flex-nowrap items-center mt-[7px]">
            {product?.salePrice > 0 ? (
              <div className="suggested-product-prev-price">
                ${product?.productPrice}
              </div>
            ) : (
              ""
            )}
            <div className="suggested-product-price">
              $
              {product?.salePrice > 0
                ? product?.salePrice
                : product?.productPrice}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
