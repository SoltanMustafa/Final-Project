import React from "react";
import { useDispatch } from "react-redux";
import { OpenQuickView } from "../../../../../../RTK/features/counter/QuickMenu";
import { Link } from "react-router-dom";

export default function CarouselItem({ product, brandData }) {
  const dispatch = useDispatch();
  const brand = brandData.find((brand) => brand._id === product?.brandId);

  const handleQuickMenu = (e) => {
    e.preventDefault();
    dispatch(OpenQuickView({ product: product, brand: brand }));
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <div className="carousel-item">
        <div className="product-item">
          <div className="product-inner">
            <div className="product-image">
              <Link
                to={`product/${product._id}`}
                className="product-detail-link"
              >
                <div className="labels labels-active">
                  {product?.salePrice > 0 ? (
                    <div className="onsale">
                      <span className="sale-lable">Sale</span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="image-holder">
                  <img
                    src={product?.images[0].url}
                    alt={product?.title}
                    className="first"
                  />
                  <img
                    src={product?.images[1].url}
                    alt={product?.title}
                    className="second"
                  />
                </div>
              </Link>
              <div className="link-on-image">
                <div className="quickview-link">
                  <a
                    href=""
                    className="quickview-action"
                    onClick={handleQuickMenu}
                  >
                    <span>Quick View</span>
                  </a>
                </div>
              </div>
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
              <div className="add-links-wrap">
                {product?.stock > 0 ? (
                  <div className="add-links">
                    <a href="" className="add-to-basket">
                      {/*?xml version="1.0" ?*/}
                      <svg
                        height="1698.268px"
                        style={{
                          enableBackground: "new 0 0 1489.733 1698.268",
                        }}
                        version="1.1"
                        viewBox="0 0 1489.733 1698.268"
                        width="1489.733px"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <g id="shopping_bag_2">
                          <path d="M1489.668,1540.226l-50.734-1145.759c-0.896-84.585-70.35-153.199-155.591-153.199h-257.892   C1004.523,106.268,886.593,0,744.689,0C602.747,0,484.784,106.268,463.85,241.268H206.313   c-85.217,0-154.649,68.616-155.543,153.202L0.064,1540.188C0.022,1541.16,0,1542.146,0,1543.121   c0,85.543,69.797,155.146,155.592,155.146h1178.556c85.79,0,155.586-69.583,155.586-155.127   C1489.733,1542.166,1489.712,1541.2,1489.668,1540.226z M744.689,132.141c68.746,0,126.941,46.126,145.617,109.126H598.998   C617.684,178.268,675.908,132.141,744.689,132.141z M1334.147,1566.268H155.592c-12.811,0-22.917-9.645-23.43-22.062   l50.674-1145.048c0.043-0.971,0.064-2.111,0.064-3.084c0-12.695,10.283-22.806,23.412-22.806H460v241.459   c0,36.49,29.51,66.07,66,66.07s66-29.58,66-66.07V373.268h304v241.459c0,36.49,29.51,66.07,66,66.07s66-29.58,66-66.07V373.268   h255.343c13.153,0,23.457,10.095,23.457,22.79c0,0.974,0.021,2.023,0.064,2.998l50.706,1145.117   C1357.057,1556.586,1346.953,1566.268,1334.147,1566.268z" />
                        </g>
                        <g id="Layer_1" />
                      </svg>

                      <span>Add to Cart</span>
                    </a>
                    <div className="wishlist-wrap">
                      <div className="wishlist-button">
                        <a href="" className="button-itself">
                          <i className="fa-regular fa-heart"></i>
                        </a>
                      </div>
                    </div>
                    <a href="" className="link-compare">
                      <i className="fa-solid fa-chart-simple"></i>
                    </a>
                  </div>
                ) : (
                  <a className="sold-out">Sold Out</a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
