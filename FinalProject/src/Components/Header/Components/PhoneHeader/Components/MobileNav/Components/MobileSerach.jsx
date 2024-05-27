import React, { useEffect, useRef, useState } from "react";
import MiniProductCart from "./MiniProductCart";
import { GetSiteProducts } from "../../../../../../../services/siteProduct";
import { Link } from "react-router-dom";

export default function MobileSerach() {
  const [productData, setProductData] = useState([]);
  const [oldData, setOldData] = useState([]);
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const page = 1;
        let totalCount;
        const r = await GetSiteProducts({ page, perPage: totalCount });
        totalCount = r?.data?.totalCount;
        const data = r?.data?.product;
        setOldData(data);
      } catch (error) {
        console.log("Error occured when fetching data", error);
      }
    };
    fetchProductData();
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
    setSearch(inputRef?.current?.value);
  };

  return (
    <>
      <div className="mobile-search-extended">
        <form action="" className="mobile-search-form" onChange={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            ref={inputRef}
            className="mobile-search-input"
          />
          <button type="submit" className="mob-search-button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <div className="search-result-wrapper search-result-active">
          <div className="results-holder">
            <div className="not-products-found">No products found</div>
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
          </div>
        </div>
      </div>
    </>
  );
}
