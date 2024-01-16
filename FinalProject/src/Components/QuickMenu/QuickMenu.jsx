import React from "react";
import ProductShop from "./Components/ProductShop/ProductShop";
import { useDispatch, useSelector } from "react-redux";
import { CloseQuickView } from "../../RTK/features/counter/QuickMenu";
import ProductImageMenu from "./Components/ProductImage/ProductImageList";

export default function QuickMenu() {
  const dispatch = useDispatch();
  const quickViewActive = useSelector(
    (state) => state.quickView.quickViewActive
  );

  const handleCloseQuickView = () => {
    dispatch(CloseQuickView());
    document.body.style.overflow = "";
  };

  return (
    <>
      <div
        className={`background-quick ${quickViewActive ? "active" : ""}`}
      ></div>
      <div className={`fixed-position ${quickViewActive ? "active" : ""}`}>
        <div className="quick-absolute">
          <div className="main-quick-holder">
            <div className="quick-menu">
              <div className="product-detailed-view">
                <div className="product-essential">
                  <div className="row">
                    <ProductImageMenu />
                    <ProductShop />
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="quick-close"
                onClick={handleCloseQuickView}
              >
                <i className="fa-solid fa-x"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
