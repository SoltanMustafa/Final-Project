import React, { useEffect, useState } from "react";
import Header from "../../../../Components/Header/Header";
import Footer from "../../../../Components/Footer/Footer";
import ProductDetailedView from "./Components/ProductDetailedView/ProductDetailedView";
import AlsoPurchased from "./Components/AlsoPurchased/AlsoPurchased";
import { useParams } from "react-router-dom";
import {
  GetSingleProduct,
  GetSiteBrands,
} from "../../../../services/siteProduct";
import Loading from "../../../../Components/Loading/Loading";
import QuickMenu from "../../../../Components/QuickMenu/QuickMenu";

export default function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [brandData, setBrandData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
    fetchBrand();
  }, [id]);

  const fetchData = async () => {
    try {
      const r = await GetSingleProduct(id);
      const data = r?.data;
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const fetchBrand = async () => {
    try {
      const r = await GetSiteBrands();
      const data = r?.data;
      console.log("brand", data);
      setBrandData(data);
    } catch (error) {
      console.log("Error fetching brand", error);
    }
  };

  return (
    <>
      {product ? (
        <>
          <Header />
          <div className="product-detail-main">
            <div className="link-title">
              <div className="main-text-holder">
                <div className="container">
                  <div className="link-way">
                    <ul>
                      <li className="home">
                        <a href="">Home</a>
                      </li>
                      <li>
                        <span className="split">
                          <i className="fa-solid fa-angle-right"></i>
                        </span>
                        <span>{product?.title}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-part">
              <ProductDetailedView product={product} brandData={brandData} />
              <AlsoPurchased />
            </div>
          </div>
          <QuickMenu />
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
