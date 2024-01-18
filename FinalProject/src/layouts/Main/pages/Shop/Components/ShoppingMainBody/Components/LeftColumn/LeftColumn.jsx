import React from "react";
import BrandFilter from "./Components/BrandFilter/BrandFilter";
import PriceFilter from "./Components/PriceFilter/PriceFilter";
import AvailabilityFilter from "./Components/AvailabiltyFilter/AvailabilityFilter";
import Featured from "./Components/FeaturedFilter/Featured";
import { useDispatch, useSelector } from "react-redux";
import { CloseFilterMenu } from "../../../../../../../../RTK/features/counter/ShopFilter";

export default function LeftColumn() {
  const dispatch = useDispatch();
  const filterMenu = useSelector((state) => state.filterMenu.filterMenuActive);

  const handleFilterMenu = () => {
    dispatch(CloseFilterMenu());
  };

  return (
    <>
      <div className="col-lg-3 left-column">
        <div
          className={`left-column-overlay ${filterMenu ? "overlay-show" : ""}`}
          onClick={handleFilterMenu}
        ></div>
        <div
          className={`left-content-wrapper ${filterMenu ? "left-show" : ""}`}
        >
          <div className="changable-part">
            <BrandFilter />
            <PriceFilter />
            <AvailabilityFilter />
            <Featured />
          </div>
          <div className="static-part">
            <h2>Custom HTML Block</h2>
            <h5>This is a custom sub-title.</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
              placerat mi. Etiam non tellus
            </p>
          </div>
          <div className="close-filter-menu" onClick={handleFilterMenu}>
            <span>Close Filter</span>
          </div>
        </div>
      </div>
    </>
  );
}
