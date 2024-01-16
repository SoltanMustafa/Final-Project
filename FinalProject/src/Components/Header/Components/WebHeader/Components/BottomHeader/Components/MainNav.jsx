import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MainNav() {
  const scrollValue = useSelector((state) => state.stickyHeader.ScrollValue);
  return (
    <>
      <div className="main-nav">
        <div className="main-top-nav">
          <ul className="top-navigation">
            <li
              className={`navbar-item ${
                scrollValue > 0 ? "" : "active-navbar-item"
              }`}
            >
              <a href="" className="navbar-title">
                <span>Home</span>
              </a>
            </li>
            <li className="navbar-item">
              <Link to={"shop"} className="navbar-title">
                <span className="has-after">Collections</span>
                <i className="fa-solid fa-angle-down"></i>
              </Link>
              <div className="dropdown-menu p-2.5">
                <div className="container">
                  <div className="mega-columns width-650">
                    <div className="dropdown-menu-titles">
                      <div className="titles-ul-holder">
                        <ul className="titles-ul-itself flex gap-6">
                          <li className="level1">
                            <a href="" className="title-level1">
                              Variations 1
                            </a>
                            <div className="menu-wrapper">
                              <ul className="menu-wrapper-ul">
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Fullwidth banner
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    No sidebar banner
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Infinite ajax scroll
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Left sidebar
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Right Sidebar
                                    <span className="cat-label-new">New</span>
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Product Flex Grid
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Product List Item Type
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Daily Deal
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="level1">
                            <a href="" className="title-level1">
                              Variations 2
                            </a>
                            <div className="menu-wrapper">
                              <ul className="menu-wrapper-ul">
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Quantity Field
                                    <span className="cat-label-new">New</span>
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Image, Color Swatch
                                    <span className="cat-label-new">New</span>
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    3 Column Products
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    4 Column Products
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    5 Column Products
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    6 Column Products
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Full Width Mode
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Product List Item Type
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="dropdown-menu-image">
                      <div className="image-holder collection-background"></div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="navbar-item">
              <a href="" className="navbar-title">
                <span className="has-after">Products</span>
                <i className="fa-solid fa-angle-down"></i>
              </a>
              <div className="dropdown-menu p-2.5">
                <div className="container">
                  <div className="mega-columns width-580">
                    <div className="dropdown-menu-titles">
                      <div className="titles-ul-holder">
                        <ul className="titles-ul-itself">
                          <li className="level1">
                            <a href="" className="title-level1">
                              Variations
                            </a>
                            <div className="menu-wrapper">
                              <ul className="menu-wrapper-ul">
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Simple Product
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Variant Product
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Image Swatch
                                    <span className="cat-label-new">New</span>
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Variant with rectangle
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Moved Tabs
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Add Cart Sticky
                                    <span className="cat-label-new">New</span>
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Right side zoom
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Dynamic Checkout
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="level1">
                            <a href="" className="title-level1">
                              Page Layout
                            </a>
                            <div className="menu-wrapper">
                              <ul className="menu-wrapper-ul">
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Default Layout
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Extended Layout
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Full Width Layout
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Grid Images Layout
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Sticky both side info
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Sticky right side info
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Wide grid layout
                                  </a>
                                </li>
                                <li className="level2">
                                  <a href="" className="site-nav-link">
                                    Life Sidebar
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="dropdown-menu-image">
                      <div className="image-holder products-background"></div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="navbar-item">
              <a href="" className="navbar-title">
                <span className="has-after">Pages</span>
                <i className="fa-solid fa-angle-down"></i>
              </a>
              <div className="dropdown-menu">
                <div className="container">
                  <div className="non-mega-columns">
                    <ul className="non-mega-columns-ul">
                      <li className="non-mega-columns-li">
                        <a href="" className="non-mega-columns-a">
                          About us
                        </a>
                      </li>
                      <li className="non-mega-columns-li">
                        <a href="" className="non-mega-columns-a">
                          Faqs
                        </a>
                      </li>
                      <li className="non-mega-columns-li">
                        <a href="" className="non-mega-columns-a">
                          Contact us
                        </a>
                      </li>
                      <li className="non-mega-columns-li">
                        <a href="" className="non-mega-columns-a">
                          Blog Post
                        </a>
                      </li>
                      <li className="non-mega-columns-li">
                        <a href="" className="non-mega-columns-a">
                          Shopping Post
                        </a>
                      </li>
                      <li className="non-mega-columns-li">
                        <a href="" className="non-mega-columns-a">
                          Checkout
                        </a>
                      </li>
                      <li className="non-mega-columns-li">
                        <a href="" className="non-mega-columns-a">
                          My Account
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="navbar-item">
              <a href="" className="navbar-title">
                <span className="has-after">Features</span>
                <i className="fa-solid fa-angle-down"></i>
              </a>
              <div className="dropdown-menu">
                <div className="container">
                  <div className="non-mega-columns">
                    <ul className="non-mega-columns-ul">
                      <li className="non-mega-columns-li">
                        <a href="" className="non-mega-columns-a">
                          Header Typse
                        </a>
                      </li>
                      <li className="non-mega-columns-li">
                        <a href="" className="non-mega-columns-a">
                          Footer Typse
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="navbar-item">
              <a href="" className="navbar-title">
                Buy Porto!
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
