import React from "react";
import SiteLogo from "../../../WebHeader/Components/BottomHeader/Components/SiteLogo";
import PhoneHeaderCartArea from "./Components/PhoneHeaderCartArea";
import { useDispatch } from "react-redux";
import { OpenSideMenu } from "../../../../../../RTK/features/counter/BurgerMenu";

export default function PhoneHeaderButtom() {
  const dispatch = useDispatch();

  const handleSideMenu = () => {
    dispatch(OpenSideMenu());
  };

  return (
    <>
      <div className="phone-bottom-header container flex justify-between flex-nowrap relative items-center">
        <div className="phone-header-left">
          <div className="burger-menu-icon">
            <span className="icon-holder" onClick={handleSideMenu}>
              <i className="fa-solid fa-bars"></i>
            </span>
          </div>
          <SiteLogo />
        </div>
        <div className="phone-header-right">
          <PhoneHeaderCartArea />
        </div>
      </div>
    </>
  );
}
