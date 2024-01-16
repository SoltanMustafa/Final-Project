import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CloseSideMenu } from "../../../../../../RTK/features/counter/BurgerMenu";
import MobileNavToggle from "./Components/MobileNavToggle";
import MobileSerach from "./Components/MobileSerach";

export default function MobileNav() {
  const dispatch = useDispatch();
  const sideMenuActive = useSelector((state) => state.sideMenu.sideMenuActive);

  const handleCloseSideMenu = () => {
    dispatch(CloseSideMenu());
  };

  return (
    <>
      <div
        className={`mobile-nav ${sideMenuActive ? "mobile-nav-showen" : ""}`}
      >
        <span className="close-slide-bar" onClick={handleCloseSideMenu}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <div className="mobile-nav-second-section">
          <MobileNavToggle />
          <div className="mobile-search">
            <MobileSerach />
          </div>
        </div>
        <div className="custom-block">
          <div className="social-icon">
            <a href="">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
