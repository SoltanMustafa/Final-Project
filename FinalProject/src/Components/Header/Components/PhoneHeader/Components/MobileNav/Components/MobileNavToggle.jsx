import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileNavToggle() {
  const [forCollections, setForCollections] = useState(false);
  const [forProducts, setForProducts] = useState(false);
  const [forPages, setForPages] = useState(false);
  const [forFeatures, setForFeatures] = useState(false);
  const [forVariations1, setForVariations1] = useState(false);
  const [forVariations2, setForVariations2] = useState(false);
  const [forVariations, setForVariations] = useState(false);
  const [forPageLayout, setForPageLayout] = useState(false);

  const handleClickCollections = (e) => {
    e.preventDefault();
    setForCollections((prevVisible) => !prevVisible);
    setForProducts(false);
    setForPages(false);
    setForFeatures(false);
  };
  const handleClickProducts = (e) => {
    e.preventDefault();
    setForProducts((prevVisible) => !prevVisible);
    setForCollections(false);
    setForPages(false);
    setForFeatures(false);
  };
  const handleClickPages = (e) => {
    e.preventDefault();
    setForPages((prevVisible) => !prevVisible);
    setForCollections(false);
    setForProducts(false);
    setForFeatures(false);
  };
  const handleClickFeatures = (e) => {
    e.preventDefault();
    setForFeatures((prevVisible) => !prevVisible);
    setForCollections(false);
    setForProducts(false);
    setForPages(false);
  };
  const handleClickVariations1 = (e) => {
    e.preventDefault();
    setForVariations1((prevVisible) => !prevVisible);
    setForVariations2(false);
  };
  const handleClickVariations2 = (e) => {
    e.preventDefault();
    setForVariations2((prevVisible) => !prevVisible);
    setForVariations1(false);
  };
  const handleClickVariations = (e) => {
    e.preventDefault();
    setForVariations((prevVisible) => !prevVisible);
    setForPageLayout(false);
  };
  const handleClickPageLayout = (e) => {
    e.preventDefault();
    setForPageLayout((prevVisible) => !prevVisible);
    setForVariations(false);
  };

  return (
    <>
      <ul className="mobile-nav-accordion">
        <li className="accordion-li">
          <a href="" className="accordion-li-a">
            <span className="mobmenu-title-span">Home</span>
          </a>
        </li>
        <li className="accordion-li">
          <a
            href=""
            className="accordion-li-a"
            onClick={handleClickCollections}
          >
            <span className="mobmenu-title-span">Collections</span>
            <span className="angle-up-down">
              <i
                className={`fa-solid ${
                  forCollections ? "fa-angle-up" : "fa-angle-down"
                }`}
              ></i>
            </span>
          </a>
          <ul
            className={`first-level-toggle ${
              forCollections ? "first-level-toggle-active" : ""
            }`}
          >
            <li className="first-level-toggle-li">
              <a
                href=""
                className="first-level-toggle-li-a"
                onClick={handleClickVariations1}
              >
                <span>Variations 1</span>
                <span>
                  <i
                    className={`fa-solid ${
                      forVariations1 ? "fa-angle-up" : "fa-angle-down"
                    }`}
                  ></i>
                </span>
              </a>
              <ul
                className={`second-level-toggle-ul ${
                  forVariations1 ? "second-level-toggle-ul-active" : ""
                }`}
              >
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Fullwidth Banner
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    No Sidebar Banner
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Infinite Ajax Scroll
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Left Sidebar
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Right Sidebar
                    <span className="toggle-new-badge">New</span>
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Product Flex Grid
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Product List Item Type
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Daily Deal
                  </a>
                </li>
              </ul>
            </li>
            <li className="first-level-toggle-li">
              <a
                href=""
                className="first-level-toggle-li-a"
                onClick={handleClickVariations2}
              >
                <span>Variations 2</span>
                <span>
                  <i
                    className={`fa-solid ${
                      forVariations2 ? "fa-angle-up" : "fa-angle-down"
                    }`}
                  ></i>
                </span>
              </a>
              <ul
                className={`second-level-toggle-ul ${
                  forVariations2 ? "second-level-toggle-ul-active" : ""
                }`}
              >
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Quantity Field
                    <span className="toggle-new-badge">New</span>
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Image, Color Swatch
                    <span className="toggle-new-badge">New</span>
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    3 Columns Products
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    4 Columns Products
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    5 Columns Products
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    6 Columns Products
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Full Width Mode
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Product List Item Type
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="accordion-li">
          <a href="" className="accordion-li-a" onClick={handleClickProducts}>
            <span className="mobmenu-title-span">Products</span>
            <span className="angle-up-down">
              <i
                className={`fa-solid ${
                  forProducts ? "fa-angle-up" : "fa-angle-down"
                }`}
              ></i>
            </span>
          </a>
          <ul
            className={`first-level-toggle ${
              forProducts ? "first-level-toggle-active" : ""
            }`}
          >
            <li className="first-level-toggle-li">
              <a
                href=""
                className="first-level-toggle-li-a"
                onClick={handleClickVariations}
              >
                <span>Variations</span>
                <span>
                  <i
                    className={`fa-solid ${
                      forVariations ? "fa-angle-up" : "fa-angle-down"
                    }`}
                  ></i>
                </span>
              </a>
              <ul
                className={`second-level-toggle-ul ${
                  forVariations ? "second-level-toggle-ul-active" : ""
                }`}
              >
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Simple Product
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Variant Product
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Image Swatch
                    <span className="toggle-new-badge">New</span>
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Variant With Rectangle
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Moved Tabs
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Add Cart Sticky
                    <span className="toggle-new-badge">New</span>
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Right Side Zoom
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Dynamic Checkout Button
                  </a>
                </li>
              </ul>
            </li>
            <li className="first-level-toggle-li">
              <a
                href=""
                className="first-level-toggle-li-a"
                onClick={handleClickPageLayout}
              >
                <span>Page Layout</span>
                <span>
                  <i
                    className={`fa-solid ${
                      forPageLayout ? "fa-angle-up" : "fa-angle-down"
                    }`}
                  ></i>
                </span>
              </a>
              <ul
                className={`second-level-toggle-ul ${
                  forPageLayout ? "second-level-toggle-ul-active" : ""
                }`}
              >
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Default Layout
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Extended Layout
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Full Width Layout
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Grid Images Layout
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Sticky Both Side Info
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Sticky Right Side Info
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Wide Grid Layout
                  </a>
                </li>
                <li className="second-level-toggle-li">
                  <a href="" className="second-level-toggle-li-a">
                    Life Sidebar
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="accordion-li">
          <a href="" className="accordion-li-a" onClick={handleClickPages}>
            <span className="mobmenu-title-span">Pages</span>
            <span className="angle-up-down">
              <i
                className={`fa-solid ${
                  forPages ? "fa-angle-up" : "fa-angle-down"
                }`}
              ></i>
            </span>
          </a>
          <ul
            className={`first-level-toggle ${
              forPages ? "first-level-toggle-active" : ""
            }`}
          >
            <li className="first-level-toggle-li">
              <a href="" className="first-level-toggle-li-a">
                <span>About Us</span>
              </a>
            </li>
            <li className="first-level-toggle-li">
              <a href="" className="first-level-toggle-li-a">
                <span>FAQs</span>
              </a>
            </li>
            <li className="first-level-toggle-li">
              <a href="" className="first-level-toggle-li-a">
                <span>Contact Us</span>
              </a>
            </li>
            <li className="first-level-toggle-li">
              <a href="" className="first-level-toggle-li-a">
                <span>Blog Post</span>
              </a>
            </li>
            <li className="first-level-toggle-li">
              <Link to={"cart"} className="first-level-toggle-li-a">
                <span>Shopping Cart</span>
              </Link>
            </li>
            <li className="first-level-toggle-li">
              <Link to={"cart"} className="first-level-toggle-li-a">
                <span>Checkout</span>
              </Link>
            </li>
            <li className="first-level-toggle-li">
              <Link to={"cart"} className="first-level-toggle-li-a">
                <span>My Account</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="accordion-li">
          <a href="" className="accordion-li-a" onClick={handleClickFeatures}>
            <span className="mobmenu-title-span">Features</span>
            <span className="angle-up-down">
              <i
                className={`fa-solid ${
                  forFeatures ? "fa-angle-up" : "fa-angle-down"
                }`}
              ></i>
            </span>
          </a>
          <ul
            className={`first-level-toggle ${
              forFeatures ? "first-level-toggle-active" : ""
            }`}
          >
            <li className="first-level-toggle-li">
              <a href="" className="first-level-toggle-li-a">
                <span>Header Types</span>
              </a>
            </li>
            <li className="first-level-toggle-li">
              <a href="" className="first-level-toggle-li-a">
                <span>Footer Types</span>
              </a>
            </li>
          </ul>
        </li>
        <li className="accordion-li">
          <a href="" className="accordion-li-a">
            <span className="mobmenu-title-span">Buy Porto!</span>
          </a>
        </li>
      </ul>
    </>
  );
}
