import React, { useEffect, useRef, useState } from "react";
import MiniProductCart from "./MiniProductCart";
import { GetSiteProducts } from "../../../../../../../services/siteProduct";
import { Link } from "react-router-dom";

export default function NavSearch() {
  const [menuActive, setMenuActuive] = useState(false);
  const [productData, setProductData] = useState([]);
  const [oldData, setOldData] = useState([]);
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const page = 1;
        let totalCount;
        const r = await GetSiteProducts({ page, perPage: totalCount });
        totalCount = r?.data?.totalCount;
        const data = r?.data?.product;
        setOldData(data);
      } catch (error) {
        console.log("Error when fetching products", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    setProductData(
      oldData.filter((item) => {
        if (item.title.toLowerCase().includes(search.toLowerCase())) {
          return item;
        }
      })
    );
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(inputRef.current.value);
  };

  const handleMenuToggle = () => {
    setMenuActuive((prevVisible) => !prevVisible);
    setProductData([]);
  };

  return (
    <>
      <div className="search-area">
        <div className="search-icon" onClick={handleMenuToggle}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div
          className={`search-extended ${
            menuActive ? "search-extended-active" : ""
          }`}
        >
          <form
            action=""
            role="search"
            className="search-form"
            onChange={handleSearch}
          >
            <input
              className="search-input"
              type="text"
              name=""
              id=""
              ref={inputRef}
              placeholder="Search..."
            />
            <div className="search-brands">
              <a href="" className="selected-brands">
                <span className="selected-brand">
                  All Brands
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </a>
            </div>
            <button className="form-search-button">
              <div className="i-holder-div">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </button>
          </form>
          <div className="search-result-wrapper search-result-active">
            <div className="results-holder">
              {!productData || productData.length === 0 ? (
                <div className="not-products-found">No products found</div>
              ) : (
                <div className="found-products">
                  <div className="found-products-holder">
                    {productData.map((product) => {
                      return (
                        <MiniProductCart key={product?._id} product={product} />
                      );
                    })}
                  </div>
                  <div className="view-all-products">
                    <Link to={"/shop"}>View All Resulst</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
