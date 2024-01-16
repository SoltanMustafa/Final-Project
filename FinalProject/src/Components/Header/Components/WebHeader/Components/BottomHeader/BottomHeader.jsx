import React from "react";
import SiteLogo from "./Components/SiteLogo";
import MainNav from "./Components/MainNav";
import NavSearch from "./Components/NavSearch";
import HeaderCartArea from "./Components/HeaderCartArea";
import { useSelector } from "react-redux";

export default function BottomHeader() {
  const scrollValue = useSelector((state) => state.stickyHeader.ScrollValue);
  return (
    <>
      <div
        className={`bottom-header flex relative items-center container flex-nowrap ${
          scrollValue > 0 ? "container-60px" : ""
        }`}
      >
        <div className="header-left flex-nowrap">
          <SiteLogo />
          <MainNav />
          <div className="seperator-bottom"></div>
          <NavSearch />
        </div>
        <div className="header-right">
          <HeaderCartArea />
        </div>
      </div>
    </>
  );
}
