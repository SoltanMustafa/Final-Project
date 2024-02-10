import React from "react";
import { Link } from "react-router-dom";

export default function SingleProduct({ product, brandData }) {
  const brand = brandData?.find((brand) => brand?._id === product?.brandId);
  return (
    <>
      <div className="single-item">
        <div className="product-item">
          <div className="product-inner">
            <div className="product-image">
              <Link
                to={`/product/${product?._id}`}
                className="product-detail-link"
              >
                <div
                  className={`labels ${
                    product?.salePrice > 0 ? "labels-active" : ""
                  }`}
                >
                  <div className="onsale">
                    <span className="sale-lable">Sale</span>
                  </div>
                </div>
                <div className="image-holder">
                  <img
                    src={
                      product?.images && product.images.length > 0
                        ? product.images[0].url
                        : ""
                    }
                    alt={product?.title}
                    className="first"
                  />
                  <img
                    src={
                      product?.images && product.images.length > 1
                        ? product.images[1].url
                        : ""
                    }
                    alt={product?.title}
                    className="second"
                  />
                </div>
              </Link>
            </div>
            <div className="product-content">
              <span className="brand-list">{brand?.name}</span>
              <div className="product-title">
                <h3 className="product-title-h3">{product?.title}</h3>
              </div>
              <div className="rating-wrap">
                <div className="rating-content">
                  <span className="stars-span">
                    <span className="inside-stars-span">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </span>
                  </span>
                </div>
              </div>
              <div className="product-price mb-[18px]">
                {product?.salePrice > 0 ? (
                  <del>
                    <span className="prev-price">
                      <span className="prev-money">
                        ${product?.productPrice}
                      </span>
                    </span>
                  </del>
                ) : (
                  ""
                )}
                <ins>
                  <span className="current-price">
                    <span className="current-money">
                      $
                      {product?.salePrice > 0
                        ? product?.salePrice
                        : product?.productPrice}
                    </span>
                  </span>
                </ins>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
