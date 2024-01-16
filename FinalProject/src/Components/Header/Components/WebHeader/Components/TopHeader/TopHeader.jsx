import React from "react";
import LanguageWrapper from "./Components/LanguageWrapper";
import TopLinksArea from "./Components/TopLinksArea";
import { useSelector } from "react-redux";

export default function TopHeader() {
  const scrollValue = useSelector((state) => state.stickyHeader.ScrollValue);
  return (
    <>
      <div
        className={`topbar-custom items-center ${
          scrollValue > 0 ? "topbar-none" : ""
        }`}
      >
        <div className="container">
          <div className="top-links-inner flex items-center flex-wrap">
            <LanguageWrapper />
            <TopLinksArea />
          </div>
        </div>
      </div>
    </>
  );
}
