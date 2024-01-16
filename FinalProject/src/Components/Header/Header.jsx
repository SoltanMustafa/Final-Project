import React from "react";
import WebHeader from "./Components/WebHeader/WebHeader";
import PhoneHeader from "./Components/PhoneHeader/PhoneHeader";
import MobileNav from "./Components/PhoneHeader/Components/MobileNav/MobileNav";
import { useSelector } from "react-redux";

export default function Header() {
  const sideMenuActive = useSelector((state) => state.sideMenu.sideMenuActive);
  return (
    <>
      <header className="main-header">
        <WebHeader />
        <PhoneHeader />
        <MobileNav />
        <div
          className={`mobile-nav-overlay ${
            sideMenuActive ? "mobile-nav-overlay-active" : ""
          }`}
        ></div>
      </header>
    </>
  );
}
