import React from "react";
import ProductAddToCart from "./ProductAddToCart";
import SocialMediaIcons from "./SocialMediaIcons";

export default function ProductShop({ product, brandData }) {
  const brand = brandData.find((brand) => brand._id === product.brandId);
  return (
    <>
      <div className="col-md-7 product-shop">
        <div className="product-shop-wrapper">
          <div className="product-name">
            <h1>
              <a href="">{product?.title}</a>
            </h1>
          </div>
          <div className="product-review">
            <span className="review-badge">
              <span className="stars-span">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
              <span className="caption-span">No reviews</span>
            </span>
          </div>
          <div className="product-price-data">
            <div className="price-box">
              <div className="detail-price">
                {product?.salePrice > 0 ? (
                  <del className="prev-price">
                    <span className="money">${product?.productPrice}</span>
                  </del>
                ) : (
                  ""
                )}
                <div className="current-price">
                  <span className="money">
                    $
                    {product?.salePrice > 0
                      ? product?.salePrice
                      : product?.productPrice}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="short-description">
            <div className="description-inside">{product?.description}</div>
          </div>
          <div className="product-stock-state">
            <div className="product-stock">
              <span>Availability: </span>
              <span className="in-stock">
                {product?.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            <div className="product-brand">
              <span>Brand: </span>
              <span className="brand-list">
                <a href="">{brand?.name}</a>
              </span>
            </div>
          </div>
          <ProductAddToCart product={product} />
          <SocialMediaIcons />
        </div>
      </div>
    </>
  );
}
